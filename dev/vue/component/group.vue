<template>
	<section class="group">
		<h3 v-if="title">{{title}}</h3>
		<slot name="content"></slot>
	</section>	
</template>

<script>
module.exports =  {
  name: 'group',
  props:["title"]
};
</script>
