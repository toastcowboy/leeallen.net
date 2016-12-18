import autoprefixer from 'autoprefixer';
import browserSync from 'browser-sync';
import cssnano from 'cssnano';
import del from 'del';
import gulp from 'gulp';
import gzip from 'gulp-gzip';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import os from 'os';
import parallel from 'concurrent-transform';
import postcss from 'gulp-postcss';
import runSequence from 'run-sequence';
import sass from 'gulp-sass';
import ssh from 'gulp-ssh';
import { sshConfig, sshPath } from './sshConfig';
import sourcemaps from 'gulp-sourcemaps';
import tar from 'gulp-tar';
import uglify from 'gulp-uglify';

const cores = os.cpus().length;
const browserSyncInstance = browserSync.create();
const paths = {
  build: 'build',
  remote: sshPath,
  source: 'source',
};
const shellConfig = {
  ignoreErrors: false,
  sshConfig: sshConfig,
};
const shellInstance = ssh(shellConfig);

gulp.task('build', (done) => {
  return runSequence(
    'build:clean',
    'build:copy',
    ['build:html', 'build:images', 'build:styles', 'build:scripts'],
    done,
  );
});

gulp.task('build:clean', () => del(`${paths.build}/**/*`, {dot: true}));

gulp.task('build:copy', () => {
  return gulp.src([
    `${paths.source}/.*`,
    `${paths.source}/*.*`,
    `${paths.source}/**/*`,
    `!${paths.source}/*.html`,
    `!${paths.source}/images`,
    `!${paths.source}/images/**/*`,
    `!${paths.source}/styles`,
    `!${paths.source}/styles/**/*`,
    `!${paths.source}/scripts`,
    `!${paths.source}/scripts/**/*`,
  ])
    .pipe(gulp.dest(paths.build));
});

gulp.task('build:html', () => {
  const config = {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
  };

  return gulp.src(`${paths.source}/*.html`)
    .pipe(htmlmin(config))
    .pipe(gulp.dest(paths.build));
});

gulp.task('build:images', () => {
  // TODO: Add more fine-grained image optimization including WebP support
  return gulp.src(`${paths.source}/images/**/*.{png,jpg,jpeg,gif,svg}`)
    .pipe(parallel(imagemin(), cores))
    .pipe(gulp.dest(`${paths.build}/images`));
});

gulp.task('build:scripts', () => {
  return gulp.src(`${paths.source}/scripts/**/*.js`)
    .pipe(uglify())
    .pipe(gulp.dest(`${paths.build}/scripts`));
});

gulp.task('build:styles', () => {
  const processors = [
    autoprefixer(),
    cssnano(),
  ];

  return gulp.src(`${paths.source}/styles/main.scss`)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(`${paths.build}/styles`));
});

// This task will create a new distribution folder and deploy it to the server.
gulp.task('deploy', ['build'], (done) => {
  return runSequence(
    'deploy:clean',
    'deploy:compress',
    'deploy:clean-remote',
    'deploy:upload',
    'deploy:extract',
    done,
  );
});

// This deployment helper task deletes the current distribution tarball, if one exists.
gulp.task('deploy:clean', () => del('build.tar.gz'));

// This deployment helper task creates a tarball from the distribution folder.
gulp.task('deploy:compress', () => {
  return gulp.src([
    `${paths.build}/**/*`,
    `${paths.build}/.htaccess`,
  ])
    .pipe(tar('build.tar'))
    .pipe(gzip())
    .pipe(gulp.dest('.'));
});

// This deployment helper task deletes all existing files in the server directory.
gulp.task('deploy:clean-remote', () => {
  return shellInstance.shell([
    `cd ${paths.remote}`,
    'rm -rf ./*',
    'rm -rf ./.htaccess',
  ], {filePath: 'clean-remote-commands.log'})
    .pipe(gulp.dest('sshLogs'));
});

// This deployment helper task uploads the distribution tarball to the server directory.
gulp.task('deploy:upload', () => gulp.src('build.tar.gz').pipe(shellInstance.sftp('write', `${paths.remote}build.tar.gz`)));

// This deployment helper task extracts the distribution tarball to the server directory and then deletes the tarball.
gulp.task('deploy:extract', () => {
  return shellInstance.shell([
    `cd ${paths.remote}`,
    'gunzip ./build.tar.gz',
    'tar -xvf ./build.tar --overwrite',
    'rm ./build.tar'
  ], {filePath: 'extract-commands.log'})
    .pipe(gulp.dest('sshLogs'));
});

gulp.task('css', () => {
  const processors = [
    autoprefixer(),
    cssnano(),
  ];

  return gulp.src(`${paths.source}/styles/main.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${paths.source}/styles`));
});

gulp.task('serve', ['css'], () => {
  browserSyncInstance.init({
    ghostMode: false,
    notify: false,
    open: false,
    server: {
      baseDir: ['.tmp', paths.source],
      routes: {},
    }
  });

  gulp.watch([`${paths.source}/**/*`], browserSyncInstance.reload);
  gulp.watch([`${paths.source}/styles/**/*.scss`], ['css']);
});

gulp.task('serve:build', ['build'], () => {
  browserSyncInstance.init({
    ghostMode: false,
    notify: false,
    open: false,
    server: {
      baseDir: paths.build,
      routes: {},
    }
  });
});
