var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    jade        = require('gulp-jade'),
    //minifyCss   = require('gulp-minify-css'),
    browserSync = require('browser-sync').create();
    //jshint      = require('gulp-jshint');
    //changed     = require('gulp-changed');
    ghPages     = require('gulp-gh-pages');


gulp.task('jade', function() {
  gulp.src('./src/**/*.jade')
   .pipe(jade({locals: {
     pageTitle: "Timeline"
   }}))
   .pipe(gulp.dest('./dist/'))
})

gulp.task('sass', function() {
  gulp.src('./src/styles/**/*.sass')
    .pipe(sass()
      .on('error', sass.logError))
    //.pipe(minifyCss())
    .pipe(gulp.dest('./dist/styles'))
    .pipe(browserSync.stream());
});


  //gulp.task('jshint', function() {
    //gulp.src('./src/scripts/*.js')
      //.pipe(jshint())
      //.pipe(jshint.reporter('default'));
  //});



gulp.task('serve', ['sass', 'jade'], function() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch('./src/styles/**/*.sass', ['sass']);
  gulp.watch('./src/scripts/**/*.js', ['js']);
  gulp.watch('./src/**/*.jade', ['jade']);
  gulp.watch('./dist/**/*.html').on('change', browserSync.reload);
  gulp.watch('./dist/**/*.js').on('change', sync.reload);
});

gulp.task('default', ['serve']);

gulp.task('deploy', function() {
return gulp.src('./dist/**')
  .pipe(ghPages());
});

gulp.task('js', function() {
  return gulp.src('./src/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('./dist/scripts'));
});
