'use strict';

var autoprefixer;
var browserSync;
var cssnano;
var gulp;
var postcss;
var sass;
var sourcemaps;

// Require dependencies
autoprefixer = require('autoprefixer');
browserSync = require('browser-sync').create();
cssnano = require('cssnano');
gulp = require('gulp');
postcss = require('gulp-postcss');
sass = require('gulp-sass');
sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function css() {
  var processors;

  processors = [
    autoprefixer(),
    cssnano()
  ];

  return gulp.src('source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('source/styles'));
});

gulp.task('serve', ['css'], function serve() {
  browserSync.init({
    ghostMode: false,
    notify: false,
    open: false,
    server: {
      baseDir: ['.tmp', 'source'],
      routes: {}
    }
  });

  gulp.watch(['source/**/*'], browserSync.reload);
  gulp.watch(['source/styles/**/*.scss'], ['css']);
});
