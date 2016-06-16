'use strict';

module.exports = {
    transform: function() {

    },
    remInit:function(maxWidth){
    	maxWidth = maxWidth || 540;
        var wd = window.innerWidth;
        wd = Math.min(window.innerWidth,window.screen.availWidth);
        wd = wd > maxWidth ? maxWidth : wd;
        document.querySelector("html").style.fontSize = wd / 10 + "px";
    }
}
