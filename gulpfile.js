var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
//autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
//header  = require('gulp-header'),
    rename = require('gulp-rename'),
    karma = require('gulp-karma'),
    minifyCSS = require('gulp-minify-css'),
    karmaConf = require('./karma.conf.js');
//package = require('./package.json');

var config = {
    js: {
        fileName: 'app.js',
        src: './resources/assets/js/**/*.js',
        dist: './public/js'
    },
    css: {
        appSrc: './resources/assets/less/app.less',
        src: './resources/assets/less/**/*.less',
        dist: './public/css'
    },
    vendor: {
        src: './vendor/bower_components/**/*.min.js'
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
    return gulp.src(config.css.appSrc)
        .pipe(less({errLogToConsole: true}))
        .pipe(gulp.dest(config.css.dist))
};

gulp.task('css', function () {
    return base_css()
});

gulp.task('css-prod', function () {
    return base_css()
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.css.dist));
});


//===== JAVASCRIPT

var base_js = function () {
    return gulp.src([
        config.vendor.src,
        config.js.src,
        '!./resources/assets/js/**/*.spec.js'
    ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat(config.js.fileName))
        .pipe(gulp.dest(config.js.dist));
};

gulp.task('js', function () {
    return base_js();
});

gulp.task('js-prod', function () {
    return base_js()
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.js.dist));
});


//===== TESTS

gulp.task('test', function () {
    return gulp.src([
        './resources/assets/tests/vendor/angular.min.js',
        './resources/assets/tests/vendor/angular-ui-router.min.js',
        './resources/assets/js/**/*.js',
        './resources/assets/tests/**/*.spec.js'
    ])
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'watch'
        }))
        .on('error', function (err) {
            throw err;
        });
});


//===== TASKS

gulp.task('default', ['css', 'js']);

gulp.task('watch', ['css', 'js'], function () {
    gulp.watch(config.css.src, ['css']);
    gulp.watch(config.js.src, ['js']);
});

gulp.task('deploy', ['css-prod', 'js-prod']);