import gulp from 'gulp';
import gutil from 'gulp-util';
import server from './server';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';

gulp.task('default', ['build', 'watch']);
gulp.task('build', ['build:css', 'build:html', 'build:images', 'build:js']);

gulp.task('build:css', () => {
   return gulp.src(['./app/**/*.css'])
     .pipe(gulp.dest('./dist'));
});

gulp.task('build:html', () => {
  return gulp.src(['./app/**/*.html'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:images', () => {
   return gulp.src(['./app/**/*.png'])
     .pipe(gulp.dest('./dist'));
});

gulp.task('build:js', () => {
  ['chat.js'].forEach((file) => {
    const b = browserify({
      debug: process.env.NODE_ENV !== 'production',
      insertGlobals: true
    });

    return b.transform(babelify)
      .add(`app/js/${file}`)
      .bundle()
      .pipe(source(file))
      .pipe(gulp.dest('dist/js/'));
  });
});
/*
gulp.task('server', () => {
  const port = process.env.PORT || 3000;
  server.listen(port, () => console.log(`server listening at port ${port}`));
});*/

gulp.task('watch', () => {
  gulp.watch('app/**/*', ['build']);
});
