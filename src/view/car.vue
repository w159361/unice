<template>
	<div class="car">
		car
		<hr/>
		<button @click="$store.commit('ADDVUEVOTE',2)">add</button>
		
		{{this.$store.getters.sumCount}}
		<hr/>
		<button @click="$store.state.vueVoteCount++">add1</button>
		{{this.$store.state.vueVoteCount}}
		
		<v-header></v-header>
		<div class="navmenu">
			<v-navmenu></v-navmenu><!--侧边栏导航-->
		</div>
	</div>
</template>

<script>
	import Header from "@/components/header.vue"

	import Navmenu from '@/components/navmenu.vue'

	export default {
		data() {
			return {

			}
		},
		components: {
			'v-header': Header,
			"v-navmenu": Navmenu
		},
		mounted() {
			
		},
		methods: {
			add:function(){
			
			}
		}

	}
</script>

<style>
	.car {
		margin-top: 1rem;
	}
	
	.navmenu {
		position: fixed;
		top: 0;
		left: 0;
	}
</style>