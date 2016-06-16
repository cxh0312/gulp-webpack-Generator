<template>
	<section class="group">
		<h3 v-if="title">{{title}}</h3>
	</section>	
</template>

<script>
module.exports =  {
  name: 'group',
  props:["title"]
};
</script>
