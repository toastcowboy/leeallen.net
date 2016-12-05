import autoprefixer from 'autoprefixer';
import browserSync from 'browser-sync';
import cssnano from 'cssnano';
import del from 'del';
import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import postcss from 'gulp-postcss';
import runSequence from 'run-sequence';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

const browserSyncInstance = browserSync.create();
const paths = {
  build: 'build',
  source: 'source',
};

gulp.task('build', () => {
  runSequence(
    'build:clean',
    'build:copy',
    ['build:html', 'build:images', 'build:styles', 'build:scripts'],
  );
});

gulp.task('build:clean', () => {
  return del(`${paths.build}/**/*`, {dot: true});
});

gulp.task('build:copy', () => {
  return gulp.src([
    `${paths.source}/.*`,
    `${paths.source}/*.*`,
    `${paths.source}/**/*`,
    `!${paths.source}/*.html`,
    `!${paths.source}/images`,
    `!${paths.source}/styles`,
    `!${paths.source}/scripts`,
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
  return gulp.src(`${paths.source}/images/**/*`)
    .pipe(gulp.dest(`${paths.build}/images`));
});

gulp.task('build:scripts', () => {
  return gulp.src(`${paths.source}/scripts/**/*`)
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