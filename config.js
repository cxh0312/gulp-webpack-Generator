var comeIn = {
    js: ["dev/js/index.js"],
    image: "dev/image/*.{png,jpg,gif,ico}",
    sass: "dev/sass/*.scss",
    html: 'dev/*.html',
    vue: "dev/vue/component/*.vue"
};
var output = {
    js: "./product/js/",
    image: "product/image",
    css: "./product/css",
    html: 'product/'
};
module.exports = { in : comeIn,
    out: output
}
