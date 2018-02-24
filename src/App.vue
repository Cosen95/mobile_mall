<template>
  <div id="app">
    <router-view/>		<!--  这里是用来展示路由页面内容的，如果想用跳转就用<router-link to='xxx'></router-link> -->
    <div class="footer row bt row-center">
	    <router-link to="/index" class="col">首页</router-link>
	    <router-link to="/category" class="col">分类</router-link>
	    <router-link to="/cart" class="col">购物车 <badge :text="goodsCount"></badge></router-link>
	    <router-link to="/user" class="col">用户中心</router-link>
    </div>
  </div>
</template>

<script>
	import {Badge} from 'vux'
	import {mapGetters} from 'vuex'
	export default {
	  name: 'app',
	  components:{
	  	Badge,
	  },
	  created(){
	  	this.$http.get("/v1/cart/index")
	  	.then(function(res){
	  		console.log("购物车",res.data);
	  		//触发vuex里面mutations initCart函数
	  		this.$store.commit("initCart",res.data.data.items)
	  	})
	  },
	  computed:{
	  	...mapGetters(["goodsCount"])
	  }
	  
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
