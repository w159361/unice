<template>
	<div class="other">
		<ul class="main">
			<li>Description <i class="el-icon-arrow-right" @click="do1"></i></li>
			<li>Length <i class="el-icon-arrow-right"></i></li>
			<li>Reviews <i :class="!isOpen?'el-icon-plus':'el-icon-minus'" @click="do2" ></i></li>
		</ul>
		
		<div class="Description">
			<i class="el-icon-arrow-left" @click="dont1"></i>
		</div>
		<!--评论展示-->
		<div class="Reviews">
			
		</div>
		
		<p href="#" @click="isShow=true">allView</p>
		<!--所有评论-->
		<div class="allView" v-show="this.isShow">
			<h3><i class="el-icon-arrow-left" @click="isShow=false"></i>view </h3>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				isOpen:false,
				isShow:false
			}
		},
		methods:{
			do1:function(){
//				通过添加或删除class来实现窗口的打开或关闭
				$(".Description").removeClass("close").addClass("open");
				
			},
			dont1:function(){
				$(".Description").removeClass("open").addClass("close");
				
			},
			do2:function(){
				if(!this.isOpen){
					$(".Reviews").removeClass("close").addClass("open");	
				}else{
					$(".Reviews").removeClass("open").addClass("close");	
				}
				this.isOpen=!this.isOpen;
			},
		}

	}
</script>

<style>
	.main li {
		width: 100%;
		height: 1rem;
		border-bottom: 1px gainsboro solid;
		line-height: 1rem;
	}
	
	.main li i {
		float: right;
		margin: 0.25rem 0.5rem 0 0;
	}
	
	.Description {
		position: fixed;
		width: 100%;
		height: 12rem;
		top: 1rem;
		background: red;
		z-index: 9999;
		margin-left:10rem ;
	}
	/*打开或关闭使用css3的转换完成*/
	.Description.open {
		margin-left: 0;
		transition: margin 0.5s;
		-webkit-transition: margin 0.5s;
	}
	
	.Description.close {
		margin-left: 10rem;
		transition: margin 0.5s;
		-webkit-transition: margin 0.5s;
	}
	.Reviews{
		width:100%;
		height: 0rem;
		background: #42B983;
	}
	.Reviews.open{
		height: 5rem;
		transition: height 0.5s;
		-webkit-transition: height 0.5s;
	}
	.Reviews.close{
		height: 0;
		transition: height 0.5s;
		-webkit-transition: height 0.5s;
	}
	.allView{
		background: #8492A6;
		width:100%;
		height:19rem;
		position: fixed;
		top: 1rem;
		left: 0;
		z-index: 999;	
	}
</style>