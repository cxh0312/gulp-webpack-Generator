'use strict';
var gulp = require("gulp");

/*** [borwserSync 同步刷新]*/
var browserSync = require('browser-sync').create();
// var reload = browserSync.reload;
var reload = require('easy-reload');


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
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');

/*[minifyCSS css压缩]*/
var minifyCSS = require("gulp-minify-css");
var htmlmin = require("gulp-htmlmin");

/*图片压缩*/
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var pngquant = require('imagemin-pngquant');
var base64 = require("gulp-base64");

/*[autoprefixer css补全前缀]*/
var autoprefixer = require("gulp-autoprefixer");
/*[sass 编译sass]*/
var sass = require("gulp-sass");
var csslint = require('gulp-csslint');
var sassLint = require('gulp-sass-lint');

/** [append 添加md5作为版本号  ?rev=@@hash] */
var append = require('gulp-rev-append');

var named = require('vinyl-named');
var htmlhint = require("gulp-htmlhint");

var comeIn = {
    js: ["dev/js/index.js"],
    image: "dev/image/*.{png,jpg,gif,ico}",
    sass: "dev/sass/*.scss",
    html: 'dev/*.html',
    vue:"dev/vue/component/*.vue"
};
var output = {
    js: "./product/js/",
    image: "product/image",
    css: "./product/css",
    html: 'product/'
};
/**
 * [env 当前环境是正式还是测试环境]
 * 默认为测试环境
 * @type {[type]}
 */
var env = argv.env || argv.ENV;
/**
 * 目标：对JS模块化
 */
gulp.task("js", function() {
    gulp.src(comeIn.js)
        .pipe(babel())
        // .pipe(eslint({
        //     ecmaFeatures:{defaultParams:true,blockBindings:true,generators:true}
        // }))
        // .pipe(eslint.format())
        // .pipe(eslint.failAfterError())
        .pipe(named())
        .pipe(webpack({
            module: {
                loaders: [
                    {test: /\.vue$/,loader: 'vue'},
                    {test: /\.js$/,loader: 'babel',exclude: /node_modules/}
                ]
            },
            babel: {
                presets: ['es2015'],
                plugins: ['transform-runtime']
            }
        }))
        .pipe(env == "pro" ? uglify() : stream())
        .pipe(gulp.dest(output.js))
        .pipe(reload.stream())
        //.pipe(reload({ stream: true }));
});
/**
 * [sass编译]
 */
gulp.task("sass", function() {
    gulp.src(comeIn.sass).pipe(sass())
        // .pipe(sassLint())
        // .pipe(sassLint.format())
        // .pipe(sassLint.failOnError())
        // .pipe(csslint())
        // .pipe(csslint.reporter())
        .pipe(autoprefixer({
            browsers: ["> 5%"]
        }))
        .pipe(base64({
            maxImageSize: 16 * 1024,
            debug: true
        }))
        .pipe(env == "pro" ? minifyCSS() : stream())
        .pipe(gulp.dest(output.css))
        .pipe(reload.stream());
        //.pipe(reload({ stream: true }));
});
/**
 * [html压缩]
 */
gulp.task('html', function() {
    gulp.src(comeIn.html)
        // .pipe(htmlhint())
        // .pipe(htmlhint.reporter())
        .pipe(append())
        .pipe(env == "pro" ? htmlmin({ collapseWhitespace: true }) : stream())
        .pipe(gulp.dest(output.html))
        //.pipe(reload({ stream: true }))
        .pipe(reload.stream());
});
/**
 * [默认任务，进行html,js,sass,watch等任务]
 */
gulp.task('default', ["html", "js", "sass", "image", "watch"], function() {
    browserSync.init({
        server: {
            baseDir: "./product"
        }
    });
    reload.init();
});
/**
 * [监听文件的变化]
 */
gulp.task('watch', function() {
    gulp.watch(comeIn.sass, ['sass']);
    gulp.watch(comeIn.js, ['js']);
    gulp.watch(comeIn.vue, ['js']);
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
        //.pipe(reload({ stream: true }))
        .pipe(reload.stream());
});
