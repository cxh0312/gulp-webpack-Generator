<template>
	<div class="modal" transition="outin">
		<slot></slot>
	</div>
</template>

<script>
	module.exports = {
		name:'modal'
	}
</script>

<style lang="sass" scoped>
	.modal{
		position:fixed;
		top: 0;
		left:0;
		bottom:0;
		right:0;
		background-color:rgba(0, 0, 0, 0.7);
	}
	.outin-transition{
		width:100%;
		height: 100%;
		opacity: 1;
		transition:.3s all;
	}
	.outin-enter{
		opacity: 0;
		width:0;
		height: 0;
		top: 50%;
		left:50%;
	}
	.outin-leave{
		opacity: 0;
		width:0;
		height: 0;
		top: 50%;
		left:50%;
	}
</style>