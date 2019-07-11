<template>

	<section class="section">
		<router-link :to="{name:'human-hair'}">
			<img src="../assets/top.jpg" class="sectionTop" />
		</router-link>

		<ul class="section-list" style="overflow: hidden;">
			<li v-for="k in list">
				<router-link :to="{name:'home'}">
					<img src="../../build/logo.png" alt="" class="product">
					<h3>UNice Hair Icenu Series Peruvian Body Wave Lace Closure With 3pcs Human Hair Weave</h3>
				</router-link>

				<div class="wrap">
					<p>
						<span class="Price">$10.00</span>
						<i class="el-icon-shopping-cart-2"></i>
						<i class="el-icon-star-off"></i>
					</p>
					<img v-for="index in k" src="../assets/star.jpg" />
					<span>review</span>
				</div>

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
		mounted() {

		},
		props: ["list"]

	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	img.product {
		width: 100%;
	}
	
	li {
		width: 4.7rem;
		margin: 0.1rem;
		border: 1px solid;
		float: left;
		list-style-type: none;
	}
	
	h3 {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.wrap img {
		width: 0.3rem;
	}
	.wrap p{
		padding: 0.2rem;
	}
	.wrap p .Price{
		color: red;
		font-weight: 900;
		font-size: 0.6rem;
		padding: 0.1rem;
		display: inline-block;
		
		
	}
	.wrap p i{
		border: 1px solid #0000FF;
		font-size:0.4rem;
		padding: 0.08rem;
	}
	.sectionTop {
		width: 100%;
	}
</style>