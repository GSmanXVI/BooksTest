var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');
var sass = require('gulp-sass');

gulp.task('watch', ['sass'], function () {

    browserSync.init({
        proxy: 'localhost:3001',
        middleware: [historyApiFallback()]
    });

    gulp.watch("./public/app/**/*.sass", ['sass']);
    gulp.watch("./public/app/**/*.css").on('change', browserSync.reload);
    gulp.watch("./public/app/**/*.js").on('change', browserSync.reload);
    gulp.watch("./public/app/**/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src("./public/app/**/*.sass")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./public/app/"));
});

gulp.task('libs', function () {
    gulp.src([
        'core-js/client/shim.min.js',
        'core-js/client/shim.min.js.map',
        'zone.js/dist/zone.js',
        'reflect-metadata/Reflect.js',
        'reflect-metadata/Reflect.js.map',
        'systemjs/dist/system.src.js',
        'rxjs/bundles/Rx.min.js',
        'rxjs/bundles/Rx.min.js.map',
        '@angular/**/*.js',
        '@angular/**/*.js.map',
        '@angular/**/index.js',
        '@angular/**/index.js.map'
    ], { cwd: "node_modules/**" })
        .pipe(gulp.dest("./public/app/libs"));
});

gulp.task('default', ['libs', 'sass']);
