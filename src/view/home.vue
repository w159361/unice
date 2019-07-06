<template>
	<div class="home">
		<v-header></v-header>
		<v-swiper :data="this.pictureList"/><!--轮播图-->
		<div class="con">
			<v-section :list="this.list"></v-section><!--商品-->
			<!--<v-section></v-section>
			<v-section></v-section>
			<v-section></v-section>-->
			<v-footnav></v-footnav>		<!--底部导航-->
			<v-footer></v-footer>
		</div>
		<div class="navmenu">
			<v-navmenu></v-navmenu>	<!--侧边栏导航-->
		</div>
		

	</div>
	
	

</template>

<script>
	import Header from "@/components/header.vue"
	import Swiper from '@/components/swiper.vue'
	import Section from '@/components/section.vue'
	import Navmenu from '@/components/navmenu.vue'
	import Footnav from '@/components/footnav.vue'
	import Footer from '@/components/footer.vue'

	export default {

		data() {
			return {
				list: [1, 2, 3, 4, 5, 6],
				pictureList:[1,2,3,4,5]
			}
		},
		components: {
			'v-header': Header,
			'v-swiper': Swiper,
			"v-section": Section,
			"v-navmenu":Navmenu,
			"v-footnav":Footnav,
			"v-footer":Footer
		},
		mounted(){
			
		},
		methods:{
			
		}

	}
</script scoped>

<style>
	.home{
		margin-top:1rem;
	}
	.navmenu{
		position:fixed;
		top:0;
		left:0;
	}
</style>