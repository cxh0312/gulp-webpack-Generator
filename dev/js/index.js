'use strict';

var Vue = require('vue');
var App = require('../vue/app.vue');
Vue.config.debug = true;
Vue.config.devtools = true;
var vm = new Vue({
    el: "body",
    components: {
        app: App
    }
})
