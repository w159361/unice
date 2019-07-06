<template>

	<section class="section">
		<router-link :to="{name:'human-hair'}">
          	<img src="../assets/top.jpg" class="sectionTop"/>
        </router-link>
		
		<ul class="section-list" style="overflow: hidden;">
			<li v-for="k in list">
				<router-link :to="{name:'home'}">
					<img src="../../build/logo.png" alt="" class="product">
					<h5>UNice Hair Icenu Series Peruvian Body Wave Lace Closure With 3pcs Human Hair Weave</h5>
				</router-link>

				<div class="wrap">
					<img v-for="index in k" src="../assets/star.jpg"/>
					<span>review</span>
				</div>
				<p class="Price">$10</p>
			</li>
		</ul>
	</section>

</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		mounted(){
	
		},
		props:["list"]
			
	}
</script>

<style scoped>
	*{
		margin:0;
		padding: 0;
	}
	
	img.product {
		width: 100%;
	}
	
	li {
		width: 4.7rem;
		margin:0.1rem;
		border: 1px solid;
		float: left;
		list-style-type: none;
	}
	
	h5 {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.wrap img{
		width:0.3rem;
	}
	.sectionTop{
		width:100%;
	}
	
</style>