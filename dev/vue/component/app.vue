<template>
  <div class="app">
  	<p>I love you vue</p>
	<p>hello {{name}}</p>
  </div>
  <ul>
    <li v-for="item in lists">{{item}}</li>
  </ul>
  <h2 @click="add(1,3)">计算</h2>
  <components-a></components-a>
  <components-b v-bind:name="name"></components-b>
</template>


<script>
	var componentsA = require('./a.vue');
	var componentsB = require('./b.vue');
	module.exports = {
		name:"app",
		data:function(){
			return {
				lists:[1,2,3,4,5,6],
				name:"UnbrellaFish"
			}
		},
		methods:{
			add:function(a,b){
				return this.el.innerText = a+b;  
			}
		},
		components:{
			componentsA,componentsB
		}
	}
</script>