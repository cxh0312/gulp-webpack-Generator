var comeIn = {
    js: "dev/js/**/*.js",
    image: "dev/image/**/*.{png,jpg,gif,ico}",
    sass: "dev/sass/**/*.scss",
    html: 'dev/**/*.html',
    vue: "dev/vue/**/*.vue"
};
var output = {
    js: "./product/js/",
    image: "product/image",
    css: "./product/css",
    html: 'product/'
};

var comeInPro = {
    js: "dev/js/*.js",
    image: "dev/image/**/*.{png,jpg,gif,ico}",
    sass: "dev/sass/*.scss",
    html: 'dev/*.html',
    vue: "dev/vue/**/*.vue"
};
var outputPro = {
    js: "./product/js/",
    image: "product/image",
    css: "./product/css",
    html: 'product/'
};

module.exports = { 
    in : comeIn,
    out: output,
    inPor:comeInPro,
    outPro:outputPro
}
