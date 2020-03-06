var gulp         = require('gulp');

var browserSync  = require('browser-sync').create();

var sass         = require('gulp-sass');

var autoprefixer = require('gulp-autoprefixer');

var concatCss    = require('gulp-concat-css');

var cleanCSS     = require('gulp-clean-css');

var rename       = require("gulp-rename");

var uglify       = require('gulp-uglify');

gulp.task('serve', ['sass'], function() {

browserSync.init({

server: "src/"

});

watch("./sass/*.sass", ['sass']);

watch("./*.html").on('change', browserSync.reload);

});

function sass() {

return src("src/sass/*.sass")

.pipe(sass().on('error', sass.logError))

.pipe(autoprefixer({

browsers: ['last 2 versions'],

cascade: false

}))

.pipe(concatCss("style.css"))

.pipe(dest("./css"))

.pipe(browserSync.stream());

};

function mincss() {

return src("./css/*.css")

.pipe(rename({suffix: ".min"}))

.pipe(cleanCSS())

.pipe(dest("./css"));
};

task('min',['mincss]']);
