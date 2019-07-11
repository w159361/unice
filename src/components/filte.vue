<template>
	<div class="filte">
		<el-row class="block-col-2">
			<el-col :span="6">
				<el-dropdown trigger="click" @command="get">
					<span class="el-dropdown-link">
        				下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      				</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item v-for="(l,i) in list" :command="{l,i}">{{l}}<i :class="{'el-icon-check':n==i}"></i></el-dropdown-item>
		
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-row>

	</div>
</template>

<script>
	export default {
		
		data(){
			return{
				list:["黄金糕","狮子头","螺蛳粉","双皮奶","蚵仔煎"],
				n:-1
			}
		},
		methods:{
			//让被选中的选项 对号显示
			get(command,c) {
				this.n=command.i;
//				$($(c.$el).parent().find("i")).removeClass();
//				$($(c.$el).find("i")),$($(c.$el).find("i")).addClass("el-icon-check");
				
				this.$emit("send",command);
			},
		}

	}
</script>

<style>
	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}
	
	.el-icon-arrow-down {
		font-size: 12px;
	}
	
	.demonstration {
		display: block;
		color: #8492a6;
		font-size: 14px;
		margin-bottom: 20px;
	}
	.choosed{
		background: red;
	}
	.filte i.el-icon-check{
		/*display: none;*/
	}
</style>