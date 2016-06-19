<template>
	<div class="confirm">
		<div class="top">
			<div class="content" v-html="content"></div>
		</div>
		<div class="bottom" @click="onclick('child-msg')">
			{{btnText}}
		</div>
	</div>
</template>

<script>
	module.exports = {
		name:"confirm",
		props:["content","btnText"],
		methods:{
			onclick:function(eventType){
				this.$dispatch(eventType,"toast","shut");
			}
		}
	}
</script>

<style>
	.confirm{
		position:fixed;
		width:80%;
		max-width:320px;
		top:50%;
		left:50%;
		transform:translate(-50%, -50%);
		background-color:#fff;
		border-radius: 4px;
	}
	.confirm .top{
		padding:20px 15px;
		border-radius: 4px 4px 0 0;
	}
	.confirm .bottom{
		padding:15px;
		border-top:1px solid #eee;
		border-radius: 0 0 4px 4px;
		text-align:center;
	}
</style>