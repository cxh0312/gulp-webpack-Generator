<template>
	<button class="pure-button" @click="Toast('show toast')">show toast</button>
	<button class="pure-button" @click="toggleDisplay('confirm')">show confirm</button>
	<group title="我是一个标题"></group>
	<toast :text="toast.text"></toast>
	<modal v-show="modal.show">
		<confirm v-show="confirm.show" :btn-text="confirm.btnText" :content="confirm.content"></confirm>
	</modal>
	<tab :is="currentView" keep-alive >
		<div slot="tabTitle" class="pure-g">
			<div class="pure-u-1-4 tc" @click="Change('currentView','tab1Component')">tab1</div>
			<div class="pure-u-1-4 tc" @click="Change('currentView','tab2Component')">tab2</div>
			<div class="pure-u-1-4 tc" @click="Change('currentView','tab3Component')">tab3</div>
			<div class="pure-u-1-4 tc" @click="Change('currentView','tab4Component')">tab4</div>
		</div>
		<div slot="tabContent" :is="currentView" transition="opacity" transition-mode="out-in">
			<tab1-component></tab1-component>
			<tab2-component></tab2-component>
			<tab3-component></tab3-component>
			<tab4-component></tab4-component>
		</div>
	</tab>
	<div class="flex">
		<div></div>
		<div></div>
	<div></div>
		<div></div>
	</div>
</template>


<script>
	var toast = require('./component/toast.vue');
	var group = require('./component/group.vue');
	var modal = require('./component/modal.vue');
	var tab = require('./component/tab.vue');
	var confirm = require('./component/confirm.vue');
	var tab1Component = require('./component/tab1Component.vue');
	var tab2Component = require('./component/tab2Component.vue');
	var tab3Component = require('./component/tab3Component.vue');
	var tab4Component = require('./component/tab4Component.vue');
	module.exports = {
		name:"app",
		data:function(){
			return {
				modal:{
					show:0
				},
				toast:{
					text:'',
					show:false
				},
				confirm:{
					content:"这是一个demo",
					btnText:"确定",
					show:0
				},
				currentView:"tab1Component"
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
			},
			Change:function(type,value){
				this[type] = value;
			},
			toastshut:function(){
				var self = this;
				this.confirm.show = 0;
				this.delay(function(){
					self.modal.show = 0;
				},100)
			},
			toggleDisplay:function(type){
				var self = this;
				this.modal.show = !!!this.modal.show;
				this.delay(function(){
					self[type].show =  !!!this[type].show;	
				},500)
			},
			delay:function(fn,delayTime){
				setTimeout(fn,delayTime||300)
			}
		},
		components:{
			toast,group,confirm,modal,tab,tab1Component,tab2Component,tab3Component,tab4Component
		},
		events:{
			"child-msg":function(name,action){
				this[name+action]();
			}
		}
	}
</script>