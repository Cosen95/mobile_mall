<template>
	<div id="home">
		<div class="header bg-space row p10">
			<a href="/index" class="logo"><img width="100%" src="https://m.mi.com/component/header/img/logo_121d4a6.png" alt="" /></a>
			<div class="col pl10 pr10 search-box"><input type="text" class="pr5 pl5 search" /></div>
			<button class="button button-clear p10">登陆</button>
		</div>
		<div class="sub-header bg-space row row-center">
			<div class="col">推荐</div>
			<div class="col">手机</div>
			<div class="col">智能</div>
			<div class="col">电视</div>
			<div class="col">电脑</div>
			<div class="col">周边生活</div>
		</div>
		<div class="container has-header has-sub-header has-footer">
			<!--<slider :gallery="gallery" v-if="gallery.length"></slider>-->
			<swiper :gallery="gallery"></swiper>
		</div>
		
	</div>
</template>
<script>
	import slider from "@/components/slider.vue"
	import swiper from "@/components/swiper.vue"
	export default{
		data(){
			return{
				data:{},
				gallery:[]
			}
		},
		created(){
			this.$http.post("https://m.mi.com/v1/home/page",
				{
					client_id:180100031051,
					channel_id:0,
					webp:1,
					recommend_tag:"Lte1Ec8Z8YYzubzf78Mp"
				}).then(res=>{
					console.log(res);
					this.data = res.data.data.data;
					this.gallery = this.data.sections[0].body.items;
					console.log(this.gallery);
				})
		},
		components:{
			slider,
			swiper,
		}
	}
</script>
<style>
	.logo{
		width: 36px;
		height: 36px;
		display: inline-block;
		line-height: 36px;
	}
	.header input.search{
		height: 36px;
		line-height: 36px;
		width: 100%;
		border: none;
	}
	.search-box{
		height: 43px;
	}
</style>