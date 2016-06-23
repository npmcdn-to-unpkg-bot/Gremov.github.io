'use strict'

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(minifyCSS())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('dist/css'));
});

// gulp.task('gulp-uglify', function() {
//   return gulp.src('js/*.js')
//     .pipe(uglify())
//     .pipe(rename('main.min.js'))
//     .pipe(gulp.dest('dist/js'))
// });

gulp.task('bundle-scripts', function(){
    return gulp.src(['js/new.js', 'js/size.js', 'js/transform.js'])
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', [
  'bundle-scripts'
  ], function(){});
