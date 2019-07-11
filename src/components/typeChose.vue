<template>
	<div class="typeChose">
		<ul class="hairClosure">
			<li v-for="(h,i) in this.hairClosureList" @click="choose(i,hairClosureList,1)" :class="{'choosed':n1==i}">{{h.type}}</li>
		</ul>
		<ul class="hairClosureLength" >
			<li v-for="(h,i) in this.hairClosureLength" @click="choose(i,hairClosureLength,2)" :class="{'choosed':n2==i}">{{h.length}}</li>
		</ul>
		<ul class="hairWeftLength">
			<li v-for="(h,i) in this.hairWeftLengthList" @click="choose(i,hairWeftLengthList,3)" :class="{'choosed':n3==i}">{{h.length}}</li>
		</ul>

		<p>{{thePrice*num}}</p>
		<div>
			<el-input-number v-model="num"  :min="1"  size="mini" label="描述文字"></el-input-number>
		</div>
		<button>add to car </button> <button>buy now </button>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				//属性列表
				hairClosureList: {},
				hairClosureLength: {},
				hairWeftLengthList: {},
				//属性价格
				hairClosurePrice: 0,
				hairClosureLengthPrice: 0,
				hairWeftLengthPrice: 0,
				num: 1,
				//属性选择
				n1:-1,
				n2:-1,
				n3:-1
			}
		},
		computed: {
			thePrice: function() {
				return this.hairClosurePrice + this.hairClosureLengthPrice + this.hairWeftLengthPrice;
			}
		},
		methods: {
			//另选中的标签样式改变，并将其属性价格进行传递
			//i表示是第几个标签被选中
			//list表示该属性的列表
			//n表示是哪个属性
			choose: function(i,list,n) {
				console.log(i,list,n)
				if(n==1){
					this.n1=i;
					this.hairClosurePrice=list[i].Price;
				}else if(n==2){
					this.n2=i;
					this.hairClosureLengthPrice=list[i].Price;
				}else if(n==3){
					this.n3=i;
					this.hairWeftLengthPrice=list[i].Price;
				}
				
			}
		},
		created() {
			//将从父组件传递过来的数据赋值给当前组件的变量
			this.hairClosureList = this.data.hairclosure;
			this.hairClosureLength = this.data.hairclosurelength;
			this.hairWeftLengthList = this.data.hairweftlength;
		},
		mounted() {

		},
		props: ["data"]
	}
</script>

<style>
	ul {
		margin-top: 1rem;
		overflow: hidden;
		padding: 0;
	}
	
	.hairClosure li,.hairClosureLength li,.hairWeftLength li {
		list-style: none;
		float: left;
		border: 1px solid #00f;
		width: 3rem;
		margin: 0.1rem;
	}
	
	li.choosed {
		border: 1px solid red;
		background: #0f0f43;
		color: white;
	}
</style>