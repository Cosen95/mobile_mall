<template>
	<div id="produce">
		<swiper 
			:list="galleryList"
			:show-desc-mask="false"
			:dots-position="'center'"
			:dots-class="'primary'"
			:height="'400px'"
			>
			
		</swiper>
		<div class="pannel text-left">
			<h3 class="h3">{{titleView.name}}</h3>
			<div v-html="titleView.product_desc"></div>
		</div>
		<h1 @click="goHome">返回首页</h1>
		<h1 @click="back">返回</h1>
		我是一个产品页面
		{{produce}}
		<div class="row bt mt10">
			<router-link class="col" :to="{name:'index'}" tag="li">首页</router-link>
			<router-link class="col" :to="{path:'/produce/detail'}">详情</router-link>
			<router-link class="col" to="/produce/coment">评论</router-link>
			<router-link class="col" to="/produce/arg">参数</router-link>
		</div>
		<router-view></router-view>
		<div class="p-footer footer text-center row row-center bg-white">
			<div class="col-25" @click="$router.push({name:'index'})">首页</div>
			<div class="col-25" @click="$router.push({name:'cart'})">购物车<badge :text="goodsCount"></badge></div>
			<div class="col-50 bg-primay" @click="addToCart2">加入购物车</div>
		</div>
	</div>
</template>

<script>
	import {Swiper,Badge} from 'vux'
	import {mapState,mapGetters,mapMutations} from 'vuex'
	export default{
		data(){
			return{
				produce:{},
				galleryView:[],
				titleView:{},
				pro:{}
			}
		},
		methods:{
			goHome(){
				//编程式导航
				this.$router.push({path:'/index'})
			},
			back(){
				this.$router.go(-1);
			},
//			addCart(){
//				//vuex 12. 通过commit 去执行 vuex mutations 里面的 addToCart
//				this.$store.commit("addToCart");
//				// 双引号里面的addToCart 必须和 store/index.js mutations addToCart 一致;
//			}
			addToCart2(){
				let goods={
					"addTime":new Date().getTime(),
					"buy_limit":this.pro.buy_limit,
					"goodsId":this.pro.goods_id,
					"image_url":this.pro.img_url,
					"price":this.pro.price,
					"product_name":this.pro.name,
					"is_available":true,
					"can_delete":true,
					"num":1
					
				}
				let gods = this.findGoodsById(this.pro.goods_id);
				if(gods){
					if(parseInt(gods.num)>=parseInt(gods.buy_limit)){
						console.log("gods.buy_limit",gods.buy_limit,gods.num);
						alert(`最多能购买${gods.buy_limit}件商品`);
					}else{
						this.$store.commit("updateCart",{key:"num",value:1,item:gods})
					}	
				} else{
						this.addToCart(goods);
				  }
				},
				//通过id来查找购物车的内容
				findGoodsById(id){
					let old = undefined;
					this.goodsList.forEach((item,index,self)=>{
						console.log(item.goodsId,id);
						if(item.goodsId==id){
							old=item;
							console.log(old,item);
						}
					})
					return old;
				},
				...mapMutations(["addToCart",])
			},
			created(){
				this.$http.get("http://design.applinzi.com/produce.php?id="+this.$route.params.id)
				.then(function(res){
					this.produce = JSON.parse(res.data).data;
					console.log(this.produce);
					this.galleryView = this.produce.view_content.galleryView.galleryView;
					this.titleView = this.produce.view_content.titleView.titleView;
					this.pro = this.produce.goods_info[0];
				})
			},
			components:{
				Swiper,Badge
			},
			computed:{
				galleryList(){
					var newArr = this.galleryView.map(function(item){
						return {url:'',img:item,title:''}
					});
					console.log(newArr);
					return newArr;
				},
				...mapGetters(["goodsCount"]),
				...mapState(["goodsList"])
			}
		}
</script>

<style>
	.primary .active{
		color:#f30;
		background-color: #f30;
	}
	.pannel{
		padding:15px;
	}
	#product+.footer{
		display: none;
	}
	.p-footer{
		align-items: stretch;
		line-height: 49px;
	}
</style>