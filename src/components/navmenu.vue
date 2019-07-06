<template>
	<div class="navmenu">
		<header>
			<i class="el-icon-menu" @click="collapse"></i>
		</header>
		<nav class="close">

			<el-menu :default-active="$route.path" class="el-menu-vertical-demo"  unique-opened router>
				<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
					<el-menu-item :index="item.path"><i :class="item.iconCls"></i>{{item.name}}</el-menu-item>
				</template>
			</el-menu>
		</nav>
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
				if(this.collapsed) {
					document.getElementsByTagName("nav")[0].className = "open";
					document.getElementsByTagName("header")[0].className = "open";
				} else {
					document.getElementsByTagName("nav")[0].className = "close";
					document.getElementsByTagName("header")[0].className = "close";
				}

				this.collapsed = !this.collapsed;
			}
		},
		mounted() {
//			console.log(1,sessionStorage.getItem("user"),this.$store.state.isLogin,this.isLogin)
		},
	}
</script>

<style lang="less" scoped>
	i {
		font-size: 0.5rem;
		float: left;
	}
	
	header {
		position: absolute;
		top: 0;
		z-index: 1000;
		height:1rem;
		background: #409EFF;
		width:10rem;
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
	
	nav {
		position: absolute;
		top: 0;
		width: 5rem;
		height: 30rem;
		background: red;
		z-index: 1000;
		overflow: hidden;
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
	}
</style>