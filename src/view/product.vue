<template>
	<div class="product">
		product
		<v-swiper :data="this.pictureList"></v-swiper><!--轮播图-->
		<v-typeChose :data="this.type"></v-typeChose><!--属性选择-->
		<v-other></v-other><!--其他-->
		<v-footer></v-footer>
		<div class="navmenu">
			<v-navmenu></v-navmenu>	<!--侧边栏导航-->
		</div>
	</div>
</template>

<script>
	import Swiper from '@/components/swiper.vue'
	import Navmenu from '@/components/navmenu.vue'
	import TypeChose from '@/components/typeChose.vue'
	import Other from '@/components/other.vue'
	import Footer from '@/components/footer.vue'
	
	export default{
		data(){
			return {
				pictureList:[1,2,3,4,5],
				type:{
					hairclosure:[{Price:10,type:"free"},{Price:20,type:"middle"},{Price:30,type:"three"}],
					hairclosurelength:[{Price:120,length:10},{Price:130,length:12},{Price:140,length:14},{Price:150,length:15}],
					hairweftlength:[{Price:20,length:"8 8 8"},{Price:30,length:"10 10 10"},{Price:40,length:"12 12 12"},{Price:50,length:"14 14 14"}]
				}
			}
		},
		components: {
			'v-swiper': Swiper,
			"v-navmenu":Navmenu,
			"v-typeChose":TypeChose,
			"v-other":Other,
			"v-footer":Footer
		}
		
	}
</script>

<style>
	.navmenu{
		position:fixed;
		top:0;
		left:0;
		z-index: 999;
	}
	.product{
		margin-top:2rem;
	}
</style>