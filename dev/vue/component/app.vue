<template>
	<button class="pure-button" @click="Toast('show toast')">show toast</button>
	<toast  v-show="toast.show" :text="toast.text"></toast>
</template>


<script>
	var toast = require('./toast.vue');
	var group = require('./group.vue');
	module.exports = {
		name:"app",
		data:function(){
			return {
				toast:{
					text:'',
					show:false
				}
			}
		},
		methods:{
			Toast:function(text,during){
				var self = this;
				if(typeof(text)!=="string") return console.error(text+"should be a string");
				during = during || 2500;
				this.toast.show = true;
				this.toast.text = text;
				setTimeout(function(){
					self.toast.show = 0;
				},during)
			}
		},
		components:{
			toast,group
		}
	}
</script>