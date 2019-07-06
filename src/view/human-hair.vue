<template>
	<div class="humanHair">
		<v-filte @send="send"></v-filte><!--过滤-->
		<v-section1 :data="this.list"></v-section1><!--商品-->
		<div class="more" @click="load" 
			v-loading="loading"
			element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" 
			element-loading-background="rgba(0, 0, 0, 0.8)">
			<span>more</span>
		</div>
		<v-footer></v-footer>
		<div class="navmenu">
			<v-navmenu></v-navmenu><!--侧边栏导航-->
		</div>
	</div>
</template>
<script>
	import Navmenu from '@/components/navmenu.vue'
	import Filte from '@/components/filte.vue'
	import Section1 from '@/components/section1.vue'
	import Footer from '@/components/footer.vue'
	export default {
		data() {
			return {
				list: [1, 2, 3, 4, 5, 6],
				loading:false
			}
		},
		methods: {
			send: function(data) {
				console.log(data);
			},
			addin: function() {
				this.list.push(1, 2, 3, 4, 5, 6)
			},
			load:function(){
				this.loading=true;
				var _this=this;
				setTimeout(function(){
					_this.addin();
					_this.loading=false;
				},1000)
			}
		},
		components: {
			"v-navmenu": Navmenu,
			"v-filte": Filte,
			"v-section1": Section1,
			"v-footer": Footer
		}
	}
</script>

<style>
	.humanHair {
		margin-top: 1rem;
	}
	.navmenu {
		position: fixed;
		top: 0;
		left: 0;
	}
	.more {
		background: red;
		height: 2rem;
	}
	.more span{
		line-height: 2rem;
	}
</style>