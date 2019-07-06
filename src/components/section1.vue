<template>
	<section class="section">
		<ul class="section-list" style="overflow: hidden;">
			<li v-for="(k,index) in data" @click="get(k,$event,index)">
				<router-link :to="{name:'product'}">
					<img src="../../build/logo.png" alt="" class="product">
					<h5>UNice Hair Icenu Series Peruvian Body Wave Lace Closure With 3pcs Human Hair Weave</h5>
				</router-link>
				<div class="wrap">
					<p class="Price" style="text-align: center;">
						<span>$10</span>
						<i class="el-icon-shopping-cart-full"></i>
						<i class="el-icon-star-off"></i>
					</p>
					<img v-for="index in k" src="../assets/star.jpg" />
					<span>100</span> <span>review</span>
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
			get: function(k, event, index) {
				//				console.log(k, event.currentTarget, index)
				//				this.data[index]=8;
				//				this.data.push({});
				//				this.data.pop();
				//				console.log(this.data);

			}
		},
		props: {
			data: {
				type: Array,
				required: true
			}
		}

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
	
	h5 {
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.wrap img {
		width: 0.3rem;
	}
	
	.sectionTop {
		width: 100%;
	}
</style>