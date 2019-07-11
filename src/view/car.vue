<template>
	<div class="car">
		<v-header></v-header>

		<ul class="carlist">
			<li v-for="(i,index) in carlist" style="overflow: hidden;">
				<img src="../assets/product.jpg" />
				<div class="information">
					<h4>{{i.name}}</h4>
					<span v-for="(value,key) in i.type">
						{{key}}:{{value}},
					</span>
				</div>
				
				
				<button>
					Edit
				</button>
				<button>
					<i class="el-icon-delete" @click="del(index)"></i>
				</button>
				<el-input-number v-model="i.number" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
			</li>
		</ul>
		<div class="navmenu">
			<v-navmenu></v-navmenu>
			<!--侧边栏导航-->
		</div>
	</div>
</template>

<script>
	import Header from "@/components/header.vue"

	import Navmenu from '@/components/navmenu.vue'

	export default {
		data() {
			return {
				carlist: [{
						name: "UNice Hair Icenu Series 3 Bundles Body Wave Hair With Lace Frontal Hair Closure",
						type: {
							FrontalClosure: "Free Part",
							FrontalClosureLength: "10"
						},
						number: 1
					}, {
						name: "UNice Hair Icenu Series 3 Bundles Body Wave Hair With Lace Frontal Hair Closure",
						type: {
							frontalClosure: "Free Part",
							frontalClosureLength: "10"
						},
						number: 3
					},
					{
						name: "UNice Hair Icenu Series 3 Bundles Body Wave Hair With Lace Frontal Hair Closure",
						type: {
							frontalClosure: "Free Part",
							frontalClosureLength: "10"
						},
						number: 5
					}
				]

			}
		},
		components: {
			'v-header': Header,
			"v-navmenu": Navmenu
		},
		mounted() {

		},
		methods: {
			add: function() {

			},
			handleChange: function() {

			},
			del: function(index) {
				this.carlist.splice(index, 1)
			},
			remove: function() {

			}
		}

	}
</script>

<style>
	.car {
		margin-top: 2rem;
	}
	
	.navmenu {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}
	
	.carlist li {
		list-style: none;
		border-bottom: 1px solid #0F0F43;
		padding: 0.5rem;
	}
	
	.carlist img {
		width: 2rem;
		height: 2rem;
	}
	
	.carlist .information {
		width: 7rem;
	}
	
	.carlist .information,
	.carlist img {
		float: left;
	}
	
	
	
</style>