import autoprefixer from 'autoprefixer';
import browserSync from 'browser-sync';
import cssnano from 'cssnano';
import gulp from 'gulp';
import postcss from 'gulp-postcss';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

const browserSyncInstance = browserSync.create();

gulp.task('build', () => {

});

gulp.task('css', () => {
  const processors = [
    autoprefixer(),
    cssnano(),
  ];

  return gulp.src('source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('source/styles'));
});

gulp.task('serve', ['css'], () => {
  browserSyncInstance.init({
    ghostMode: false,
    notify: false,
    open: false,
    server: {
      baseDir: ['.tmp', 'source'],
      routes: {},
    }
  });

  gulp.watch(['source/**/*'], browserSyncInstance.reload);
  gulp.watch(['source/styles/**/*.scss'], ['css']);
});
