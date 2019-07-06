<template>
	<div class="footnav">
	
		<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
			<el-submenu index="1">
				<template slot="title">
					<span>导航一</span>
				</template>
				
					<el-menu-item index="1-1">选项1</el-menu-item>
					<el-menu-item index="1-2">选项2</el-menu-item>
					<el-menu-item index="1-3">选项3</el-menu-item>
			
			</el-submenu>
			<el-menu-item index="2">
				<template slot="title">
					<span>导航二</span>
				</template>
			</el-menu-item>
			<el-menu-item index="3">
				<span slot="title">导航三</span>
			</el-menu-item>
			<el-menu-item index="4">
				<span slot="title">导航四</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
      
    }
  }
</script>

<style>

</style>