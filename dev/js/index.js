'use strict';
require("babel-polyfill");
var co =  require('co');
var thunkify = require('thunkify');

{
	let a = 5;
}
var errHandle = function(err){
	console.log(err.stack);
};

var delay = function(name,time,callback){
	console.log(name,time)
	setTimeout(function(){
		callback(null,"hello"+name);
	},time);
};
co(function*(){
	var ddd  = yield thunkify(delay)("cxh",4000);
	console.log(ddd)
	console.log(4444);
}).catch(errHandle)