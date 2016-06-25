<template>
	<div class="container" v-show="show">
		<div class="toast"  transition="opacity">{{text}}</div>	
	</div>
</template>

<script>
module.exports =  {
  	name: 'toast',
  	data:function(){
  		return{
  			show:false
  		}
  	},
  	props:{
  		text:{
  			type:String,
  			required:true
  		}
  	}
};
</script>
<style lang="sass" scoped>
	.toast{
		position: fixed;
	    display: table;
	    background-color: rgba(0, 0, 0, 0.7);
	    border-radius: 5px;
	    padding: 10px 15px;
	    text-align: center;
	    left: 50%;
	    transform: translateX(-50%);
	    z-index: 10;
	    bottom: 20%;
	    color: #fff;
	    font-size: 12px;
	}
	.opacity-transition{
		opacity: 1;
		left:50%;
		transition:.5s all;
	}
	.opacity-enter{
		opacity: 0;
		left:-100%;
	}
	.opacity-leave{
		opacity: 0;
		left:100%;
	}
</style>