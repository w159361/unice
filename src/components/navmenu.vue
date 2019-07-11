<template>
	<div class="navmenu">
		<!--头部导航栏-->
		<header :class="collapsed?'close':'open'">
			<i class="el-icon-menu" @click="collapse"></i>
			<i class="el-icon-user"></i>
			<i class="el-icon-phone-outline"></i>
			<img src="../assets/logo.png" />
			<i class="el-icon-mobile-phone"></i>
			<el-badge :value="12" class="item" style="float: left;">
				<router-link :to="{name:'car'}">
					<i class="el-icon-shopping-cart-2"></i>
				</router-link>	
			</el-badge>	
			<i class="el-icon-search"></i>
		</header>
		<!--侧边导航栏-->
		<nav :class="collapsed?'close':'open'">
			<h2>new account</h2>

			<el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router>
				<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden" >
					<el-menu-item :index="item.path" style="border-bottom: 1px solid #f6f6f6;"><i :class="item.iconCls"></i>{{item.name}}</el-menu-item>
				</template>
			</el-menu>
			
			<p class="back" @click="collapse"><i class="el-icon-close"></i></p>
		</nav>
		<!--遮罩层-->
		<div class="Mask" v-show="!collapsed"></div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				collapsed: true,
			}
		},
		methods: {
			collapse: function() {
				this.collapsed = !this.collapsed;
			}
		},
		mounted() {
		
		},
	}
</script>

<style lang="less" scoped>
	
	header {
		position: absolute;
		top: 0;
		z-index: 1000;
		height: 2rem;
		background: #409EFF;
		width: 10rem;
	}
	
	header i {
		font-size: 0.8rem;
		padding: 0.2rem;
	}
	
	header img {
		height: 1rem;
		width: 2.5rem;
		
	}
	
	header.open {
		margin-left: 5rem;
		transition: margin 0.5s;
		-webkit-transition: margin 0.5s;
	}
	
	header.close {
		margin-left: 0px;
		transition: margin 0.5s;
		-webkit-transition: margin 0.5s;
	}
	header>*{
		margin:0.35rem 0 0 0;
		float: left;
	}
	nav {
		position: absolute;
		top: 0;
		width: 5rem;
		height: 30rem;
		background: #fff;
		z-index: 1000;
		overflow: hidden;
	}
	nav h2{
		background: red;
		margin: 0;
		padding: 0.5rem;
		width: 5rem;
	}
	.Mask {
		width: 1000px;
		height: 1000px;
		position: absolute;
		top: 0;
		z-index: 999;
		background: rgba(0, 0, 0, 0.5);
	}
	
	nav.open {
		width: 5rem;
		transition: width 0.5s;
		-webkit-transition: width 0.5s;
	}
	
	nav.close {
		width: 0rem;
		transition: width 0.5s;
		-webkit-transition: width 0.5s;
		position: relative;
	}
	nav .back{
		font-size:1rem ;
		position: absolute;
		top:0.5rem;
		right:0rem;
		
	}
</style>