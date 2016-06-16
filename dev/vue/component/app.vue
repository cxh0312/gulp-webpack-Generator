<template>
	<button @click="Toast">show toast</button>
</template>


<script>
	var toast = require('./toast.vue');
	module.exports = {
		name:"app",
		data:function(){
			return {
				lists:[1,2,3,4,5,6],
				name:"UnbrellaFish"
			}
		},
		methods:{
			Toast:function(text){
				text = "zidingyi";
				toast.props.text=text;
				console.log(this)
			}
		},
		components:{
			toast
		}
	}
</script>