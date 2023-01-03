'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var Paths = {
    HOME: './front_end',
    SCSS: 'front_end/assets/scss/**/*.scss',
    CSS: 'front_end/assets/css/',
    HTML: 'front_end/**/*.html'
}

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(Paths.SCSS)
        .pipe(sourcemaps.init())
        .pipe(sass.sync({
            outputStyle: 'expanded' //nested, compact, expanded or compressed
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(Paths.CSS))
});

// Static Server
gulp.task('serve', function(done) {
    browserSync.init({
        server: Paths.HOME
    });
    done();
});

// watching scss/html files
gulp.task('watch', function(done) {
    gulp.watch(Paths.SCSS, gulp.series('sass'));
    gulp.watch(Paths.SCSS).on('change', browserSync.reload);
    gulp.watch(Paths.HTML).on('change', browserSync.reload);
    done();
});


gulp.task('default', gulp.series('sass', 'serve', 'watch'));