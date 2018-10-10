'use strict';

var del = require('del');
var gulp = require('gulp');
var GulpSSH = require('gulp-ssh');
var gzip = require('gulp-gzip');
var runSequence = require('run-sequence');
var sshConfig = require('./ssh-config');
var tar = require('gulp-tar');

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: sshConfig.sshConfig
});
var paths = {
  build: 'public',
  publicHtml: sshConfig.paths.publicHtml,
  source: 'src',
  upload: sshConfig.paths.upload
};

// This task will create a new distribution folder and deploy it to the server.
gulp.task('deploy', function deploy(done) {
  return runSequence(
    'deploy:clean',
    'deploy:copy',
    'deploy:compress',
    'deploy:upload',
    'deploy:clean-remote',
    'deploy:extract',
    'deploy:clean',
    done
  );
});

// This deployment helper task deletes the current distribution tarball, if one exists.
gulp.task('deploy:clean', function deployClean() { return del('public.tar.gz') });

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

// This deployment helper task deletes all existing files in the server directory.
gulp.task('deploy:clean-remote', function deployCleanRemote() {
  return gulpSSH.shell([
    ['cd ', paths.publicHtml].join(''),
    'rm -rf ./*',
    'rm -rf ./.htaccess'
  ], { filePath: 'clean-remote-commands.log' })
    .pipe(gulp.dest('ssh-logs'));
});

// This deployment helper task uploads the distribution tarball to the server directory.
gulp.task('deploy:upload', function deployUpload() {
  return gulp.src('public.tar.gz').pipe(gulpSSH.dest(paths.upload))
});

// This deployment helper task extracts the distribution tarball to the server directory and then
// deletes the tarball.
gulp.task('deploy:extract', function deployExtract() {
  return gulpSSH.shell([
    ['cd ', paths.publicHtml].join(''),
    'gunzip ./public.tar.gz',
    'tar -xvf ./public.tar --overwrite',
    'rm ./public.tar'
  ], { filePath: 'extract-commands.log' })
    .pipe(gulp.dest('ssh-logs'));
});
