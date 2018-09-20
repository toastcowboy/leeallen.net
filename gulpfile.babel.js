import del from 'del';
import gulp from 'gulp';
import GulpSSH from 'gulp-ssh';
import gzip from 'gulp-gzip';
import runSequence from 'run-sequence';
import { sshConfig, sshPath } from './ssh-config';
import tar from 'gulp-tar';

const gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: sshConfig,
});
const paths = {
  build: `public`,
  remote: sshPath,
  source: `src`,
};

// This task will create a new distribution folder and deploy it to the server.
gulp.task(`deploy`, (done) => {
  return runSequence(
    `deploy:clean`,
    `deploy:copy`,
    `deploy:compress`,
    `deploy:clean-remote`,
    `deploy:upload`,
    `deploy:extract`,
    `deploy:clean`,
    done,
  );
});

// This deployment helper task deletes the current distribution tarball, if one exists.
gulp.task(`deploy:clean`, () => del(`public.tar.gz`));

// This deployment helper task creates a tarball from the distribution folder.
gulp.task(`deploy:compress`, () => {
  return gulp.src([
    `${paths.build}/**/*`,
    `${paths.build}/.htaccess`,
  ])
    .pipe(tar(`public.tar`))
    .pipe(gzip())
    .pipe(gulp.dest(`.`));
});

// This task copies files from the source directory that Gatsby doesn’t include in its build.
gulp.task(`deploy:copy`, () => {
  return gulp.src([
    `${paths.source}/.htaccess`,
    `${paths.source}/favicon.ico`,
  ])
    .pipe(gulp.dest(paths.build));
});

// This deployment helper task deletes all existing files in the server directory.
gulp.task(`deploy:clean-remote`, () => {
  return gulpSSH.shell([
    `cd ${paths.remote}`,
    `rm -rf ./*`,
    `rm -rf ./.htaccess`,
  ], {filePath: `clean-remote-commands.log`})
    .pipe(gulp.dest(`ssh-logs`));
});

// This deployment helper task uploads the distribution tarball to the server directory.
gulp.task(`deploy:upload`, () => gulp.src(`public.tar.gz`).pipe(gulpSSH.dest(paths.remote)));

// This deployment helper task extracts the distribution tarball to the server directory and then deletes the tarball.
gulp.task(`deploy:extract`, () => {
  return gulpSSH.shell([
    `cd ${paths.remote}`,
    `gunzip ./public.tar.gz`,
    `tar -xvf ./public.tar --overwrite`,
    `rm ./public.tar`
  ], {filePath: `extract-commands.log`})
    .pipe(gulp.dest(`ssh-logs`));
});
