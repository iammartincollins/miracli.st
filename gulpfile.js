var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
//autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
//header  = require('gulp-header'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css');
//package = require('./package.json');

var config = {
    js: {
        dist: './public/js'
    },
    css: {
        dist: './public/css'
    }
};

//var banner = [
//    '/*!\n' +
//    ' * <%= package.name %>\n' +
//    ' * <%= package.title %>\n' +
//    ' * <%= package.url %>\n' +
//    ' * @author <%= package.author %>\n' +
//    ' * @version <%= package.version %>\n' +
//    ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
//    ' */',
//    '\n'
//].join('');



//===== CSS

var base_css = function () {
    return gulp.src('./resources/assets/less/app.less')
        .pipe(less({errLogToConsole: true}))
        .pipe(gulp.dest(config.css.dist))
};

gulp.task('css', function () {
    base_css()
});

gulp.task('css-prod', function () {
    base_css()
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.css.dist));
});



//===== JAVASCRIPT

var base_js = function () {
    return gulp.src([
        './vendor/bower_components/**/*.min.js',
        './resources/assets/js/**/*.js',
        '!./resources/assets/js/**/*.spec.js'
    ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('app.js'))
        .pipe(gulp.dest(config.js.dist));
};

gulp.task('js', function () {
    base_js();
});

gulp.task('js-prod', function () {
    base_js()
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.js.dist));
});




//===== TASKS

gulp.task('default', ['css', 'js']);

gulp.task('watch', ['css', 'js'], function () {
    gulp.watch("resources/assets/less/**/*.less", ['css']);
    gulp.watch("resources/assets/js/**/*.js", ['js']);
});

gulp.task('deploy', ['css-prod', 'js-prod']);