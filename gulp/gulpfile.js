'use strict';
const gulp = require('gulp'),
htmlmin = require('gulp-htmlmin'), //html压缩
concat = require("gulp-concat"),
rename = require("gulp-rename"),
uglify = require('gulp-uglify'), // js压缩
notify = require('gulp-notify'); //提示信息

const BASE = __dirname + "/app/bower_components/";
const DIST_BASE = __dirname + "/dist/lib/"
gulp.task("default",function(){
   return gulp.src(['angular/angular.js',
        'angular-route/angular-route.js',
    ].map((p)=>{return BASE+p;}))
        .pipe(concat("angular.js"))
        .pipe(gulp.dest(DIST_BASE+"angular/"));
});

//合并js并压缩
gulp.task('js', function () {
    return gulp.src(['app/*.js','app/*/*.js','!app/bower_components/*','!app/resource/*'])
        .pipe(concat('./app.js'))
        .pipe(gulp.dest('./dest/'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dest/'))
        .pipe(notify({
            message: 'js合并压缩完成'
        }));
});
//压缩HTML
gulp.task('html',function(){
    return gulp.src(['app/*.html','app/*/*.html','!app/bower_components/*','!app/resource/*'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            collapseInlineTagWhitespace:true,
            minifyJS:true,
            minifyCSS:true,
        }))
        .pipe(gulp.dest('./dest/'))
})
//合并css并压缩
gulp.task('css', function () {
    return gulp.src(['assets/css/*.css'])
        .pipe(concat('app/style.css'))
        .pipe(gulp.dest('./assets/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('./assets/css'));
});