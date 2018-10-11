'use strict';

const del = require('del');
const gulp = require('gulp');
const GulpSSH = require('gulp-ssh');
const gzip = require('gulp-gzip');
const runSequence = require('run-sequence');
const shell = require('gulp-shell');
const sshConfig = require('./ssh-config');
const tar = require('gulp-tar');

const gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: sshConfig.sshConfig
});
const paths = {
  build: 'public',
  publicHtml: sshConfig.paths.publicHtml,
  source: 'src',
  upload: sshConfig.paths.upload
};

// This task will create a new distribution folder and deploy it to the server.
gulp.task('deploy', function deploy(done) {
  return runSequence(
    'deploy:test',
    'deploy:build',
    'deploy:clean',
    'deploy:copy',
    'deploy:compress',
    'deploy:upload',
    'deploy:clean-remote',
    'deploy:move',
    'deploy:extract',
    'deploy:clean',
    done
  );
});

// This deployment helper task creates a production build using Gatsby.
gulp.task('deploy:build', shell.task('gatsby build'));

// This deployment helper task deletes the current distribution tarball, if one exists.
gulp.task('deploy:clean', function deployClean() { return del('public.tar.gz') });

// This deployment helper task deletes all existing files in the public HTML directory.
gulp.task('deploy:clean-remote', function deployCleanRemote() {
  return gulpSSH.shell([
    ['cd ', paths.publicHtml].join(''),
    'rm -rf ./*',
    'rm -rf ./.htaccess'
  ], { filePath: 'clean-remote-commands.log' })
    .pipe(gulp.dest('ssh-logs'));
});

// This deployment helper task creates a tarball from the distribution folder.
gulp.task('deploy:compress', function deployCompress() {
  return gulp.src([
    [paths.build, '/**/*'].join(''),
    [paths.build, '/.htaccess'].join('')
  ])
    .pipe(tar('public.tar'))
    .pipe(gzip())
    .pipe(gulp.dest('.'));
});

// This task copies files from the source directory that Gatsby doesn’t include in its build.
gulp.task('deploy:copy', function deployCopy() {
  return gulp.src([
    [paths.source, '/.htaccess'].join(''),
    [paths.source, '/favicon.ico'].join('')
  ])
    .pipe(gulp.dest(paths.build));
});

// This deployment helper task extracts the distribution tarball to the public HTML directory and
// then deletes the tarball.
gulp.task('deploy:extract', function deployExtract() {
  return gulpSSH.shell([
    ['cd ', paths.publicHtml].join(''),
    'gunzip ./public.tar.gz',
    'tar -xvf ./public.tar --overwrite',
    'rm ./public.tar'
  ], { filePath: 'extract-commands.log' })
    .pipe(gulp.dest('ssh-logs'));
});

// This deployment helper task moves the deployment package to the public HTML directory.
gulp.task('deploy:move', function deployMove() {
  return gulpSSH.shell([
    ['cd ', paths.upload].join(''),
    'mv ./public.tar.gz ./html'
  ], { filePath: 'move-commands.log' })
    .pipe(gulp.dest('ssh-logs'));
});

// This deployment helper task runs all automated tests.
gulp.task('deploy:test', shell.task('jest'));

// This deployment helper task uploads the distribution tarball to the non-public directory.
gulp.task('deploy:upload', shell.task([
  'rsync -avz ./public.tar.gz ',
  sshConfig.sshConfig.username,
  '@',
  sshConfig.sshConfig.host,
  ':',
  paths.upload
].join('')));
