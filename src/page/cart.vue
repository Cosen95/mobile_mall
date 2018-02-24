<template>
	<div id="cart">
		<div class="content has-footer">
			<div class="c-header">
				<div class="item" @click="$router.go(-1)">返回</div>
			</div>
			<!--循环购物车里面的数据-->
			<div class="row bb mb10 p10" v-for="goods in goodsList">
				<div class="col-10">
					<!--is_available是否选择了-->
					<check-icon :value.sync="goods.is_available"></check-icon>
				</div>
				<div class="col-30">
					<img :src="goods.image_url" width="100%" alt="" />
				</div>
				<div class="col-60">
					<h3 class="h4 text-left">{{goods.product_name}}</h3>
					<p class="text-left">售价:{{goods.price}}</p>
					<div class="row">
						<div class="col-70 text-left">
							<x-number v-model="goods.num" :min="1" :max="parseInt(goods.buy_limit)"></x-number>
						</div>
						<div class="col-30 text-right" v-if="goods.can_delete" @click="deleteCart(goods.goodsId)">删除</div>
					</div>
				</div>
			</div>
		</div>
		<div class="c_footer row">
			<div class="col">
				<p>共{{goodsCount}}件 金额</p>
				<div class="h3 text-primary">{{totalPrice}}</div>
			</div>
			<div class="col v-center" @click="$router.go(-1)">继续购物</div>
			<div class="col bg-primay v-center">去结算</div>
		</div>
	</div>
</template>
<script>
	//导入组件
	import {CheckIcon,XNumber} from "vux"
	import {mapState,mapGetters} from "vuex"
	export default{
		data(){
			return{
				
			}
		},
		created(){
			//获取购物车内容
		},
		methods:{
			deleteCart(id){
				this.$store.commit("deleteCart",id)
			}
		},
		components:{
			//注册组件
			CheckIcon,XNumber
		},
		computed:{
			...mapState(["goodsList"]),
			...mapGetters(["goodsCount","totalPrice"])
		}
		
	}
</script>
<style>
	#cart+.footer{
		display: none;
	}
	input{
		box-sizing: content-box;
	}
	#cart .content{
		position: relative;
		z-index: 10;
	}
	.c-footer{
		position: fixed;
		bottom: 0;
		left: 0;
		height: 49px;
		width: 100%;
		align-items: stretch;
		z-index: 100;
	}
	.v-center{
		line-height: 49px;
	}
</style>