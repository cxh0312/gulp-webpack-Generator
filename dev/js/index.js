'use strict';
require("babel-polyfill");
const co =  require('co');
const thunkify = require('thunkify');


// const errHandle = function(err){
// 	console.log(err.stack);
// };

// var delay = function(name,time,callback){
// 	console.log(name,time)
// 	setTimeout(function(){
// 		callback(null,"hello"+name);
// 	},time);`
// };
// co(function*(){
// 	var ddd  = yield thunkify(delay)("cxh",4000);
// 	console.log(ddd)
// 	console.log(4444);
// }).catch(errHandle)