var gulp = require("gulp");

/*** [borwserSync 同步刷新]*/
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

/** [webpack js模块化工具]*/
var webpack = require("gulp-webpack");

/** [argv 获取参数]*/
var argv = require("optimist").argv;
/*[stream ]*/
var stream = require("gulp-stream");
/* [del 删除]*/
var del = require("del");
/* [rename 重命名]*/
var rename = require("gulp-rename");

/*[uglify 压缩js]*/
var uglify = require("gulp-uglify");
/*[minifyCSS css压缩]*/
var minifyCSS = require("gulp-minify-css");
var htmlmin = require("gulp-htmlmin");
/*图片压缩*/
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var pngquant = require('imagemin-pngquant');

/*[autoprefixer css补全前缀]*/
var autoprefixer = require("gulp-autoprefixer");
/*[sass 编译sass]*/
var sass = require("gulp-sass");
/** [append 添加md5作为版本号  ?rev=@@hash] */
var append = require('gulp-rev-append');


var comeIn = {
    js: "dev/js/index.js",
    image: "div/image/*.{png,jpg,gif,ico}",
    sass: "dev/sass/*.scss",
    html: 'dev/index.html'
};
var output = {
    js: "./product/js/",
    image: "product/image",
    css: "./product/css",
    html: 'product/'
};
/**
 * [env 当前环境是正式还是测试环境]
 * @type {[type]}
 */
var env = argv.env;
/**
 * 目标：对JS模块化
 */
gulp.task("js", function() {
    gulp.src(comeIn.js)
        .pipe(webpack())
        .pipe(env !== "beta" ? uglify() : stream())
        .pipe(rename("index.js"))
        .pipe(gulp.dest(output.js))
        .pipe(reload({ stream: true }));
});
/**
 * [sass编译]
 */
gulp.task("sass", function() {
    gulp.src(comeIn.sass)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ["> 5%"]
        }))
        .pipe(env !== "beta" ? minifyCSS() : stream())
        .pipe(rename("index.css"))
        .pipe(gulp.dest(output.css))
        .pipe(reload({ stream: true }));
});
/**
 * [html压缩]
 */
gulp.task('html', function() {
    gulp.src(comeIn.html)
        .pipe(append())
        .pipe(env !== "beta" ? htmlmin({ collapseWhitespace: true }) : stream())
        .pipe(gulp.dest(output.html))
        .pipe(reload({ stream: true }))
});
/**
 * [默认任务，进行html,js,sass,watch等任务]
 */
gulp.task('default', ["html", "js", "sass", "watch"], function() {
    browserSync.init({
        server: {
            baseDir: "./product"
        }
    });
});
/**
 * [监听文件的变化]
 */
gulp.task('watch', function() {
    gulp.watch(comeIn.sass, ['sass']);
    gulp.watch(comeIn.js, ['js']);
    gulp.watch(comeIn.html, ["html"]);
    gulp.watch(comeIn.image, ["image"]);
});

/**
 * [图片压缩]
 */
gulp.task('image', function() {
    gulp.src(comeIn.image)
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }], //不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        })))
        .pipe(gulp.dest(output.image))
        .pipe(reload({ stream: true }));
});
