<template lang="html">
	<mt-swipe :auto="4000">
		<mt-swipe-item v-for="l in data">{{l}}</mt-swipe-item>
	</mt-swipe>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		props: ["data"]

	}
</script>

<style lang="less" scoped>
	.mint-swipe {
		width: 100%;
		height: 50vw;
		a,
		img {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
</style>