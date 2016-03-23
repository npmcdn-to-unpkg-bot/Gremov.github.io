'use strict'

var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    compass = require('gulp-compass'),
    spritesmith = require('gulp.spritesmith'),
    uglify = require('gulp-uglify'),
	  minifyCSS = require('gulp-minify-css');
	  
	  
gulp.task('compass', function() {
  gulp.src('scss/*.scss')
      .pipe(compass( {
      config_file: './config.rb',
      css: 'css',
      sass: 'sass',
      sourcemap: true
    }))
    .pipe(gulp.dest('css'));
});
 
gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(sass())
    .pipe(concatCSS('bundle.css'))
    .pipe(minifyCSS())
    .pipe(rename('bundle.min.css'))
    .pipe(notify('Done!'))
  	.pipe(autoprefixer())
    .pipe(gulp.dest('css'))
});

gulp.task('scss', function () {
  return gulp.src('scss/style.scss')
    .pipe(sass())
    .pipe(concatCSS('bundle2.css'))
    .pipe(minifyCSS())
    .pipe(rename('bundle2.min.css'))
    .pipe(notify('Done!'))
  	.pipe(autoprefixer())
    .pipe(gulp.dest('css'))
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('img/icons/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss',
    padding: 15
  }));
  return spriteData.pipe(gulp.dest('sprites/'));
});

gulp.task('gulp-uglify', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});

// gulp.task('minify', function(){
//     gulp.src('/js/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('./dist'))
//         .pipe(rename('all.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('build/js'));
// });
