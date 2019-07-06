<template>
	<div class="typeChose">
		<ul class="hairClosure">
			<li v-for="h in this.hairClosureList" :price="h.Price">{{h.type}}</li>
		</ul>
		<ul class="hairClosureLength">
			<li v-for="h in this.hairClosureLength" :price="h.Price">{{h.length}}</li>
		</ul>
		<ul class="hairWeftLength">
			<li v-for="h in this.hairWeftLengthList" :price="h.Price">{{h.length}}</li>
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
				hairClosureList: {},
				hairClosureLength: {},
				hairWeftLengthList: {},
				hairClosurePrice: 0,
				hairClosureLengthPrice: 0,
				hairWeftLengthPrice: 0,
				num: 1
			}
		},
		computed: {
			thePrice: function() {
				return this.hairClosurePrice + this.hairClosureLengthPrice + this.hairWeftLengthPrice;
			}
		},
		methods: {
			//另选中的标签样式改变，并将其属性价格进行传递并相加得到单个商品价格
			choose: function(elements) {
				let _this = this;
				elements.on("click", function() {

					elements.removeClass("choosed")
					$(this).addClass("choosed");

					if($(this).parent().attr("class") == "hairClosure") {
						_this.hairClosurePrice = Number($(this).attr("price"));

					} else if($(this).parent().attr("class") == "hairClosureLength") {
						_this.hairClosureLengthPrice = Number($(this).attr("price"));

					} else if($(this).parent().attr("class") == "hairWeftLength") {
						_this.hairWeftLengthPrice = Number($(this).attr("price"));

					}
				})
			}
		},
		created() {
			this.hairClosureList = this.data.hairclosure;
			this.hairClosureLength = this.data.hairclosurelength;
			this.hairWeftLengthList = this.data.hairweftlength;
		},
		mounted() {
			this.choose($(".hairClosure li"));
			this.choose($(".hairClosureLength li"));
			this.choose($(".hairWeftLength li"));
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