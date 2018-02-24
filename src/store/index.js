//安装  vuex  npm install --save vuex
//导入vue
import Vue from 'vue'
//导入vuex
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex)
//导出store数据仓库

export default new Vuex.Store({
	//数据仓库
	state:{
		//购物车商品的个数
		goodsList:[]
	},
	//在main.js里面(根app里面导入)
	//编写mutations
	mutations:{
		//加入购物车
		addToCart(state,data){
			state.goodsList.unshift(data);
			console.log(data,state.goodsList);
		},
		initCart(state,data){
			//完成初始化
			state.goodsList=data;
		},
		deleteCart(state,id){
			state.goodsList.forEach((item,index,self)=>{
				if(item.goodsId==id){
					self.splice(index,1);
					return;
				}
			})
		},
		updateCart(state,data){
			//先找到位置
			let index = state.goodsList.indexOf(data.item);
			//更新
			state.goodsList[index][data.key]+=data.value;
			console.log("更新",state.goodsList[index][data.key]);
			
		}
	},
	getters:{
		goodsCount:function(state){
			let num = 0;
			state.goodsList.forEach((item)=>{
				if(item.is_available){
					num+=parseInt(item.num);
				}
			})
			return num;
		},
		totalPrice:function(state){
			let t = 0;
			state.goodsList.forEach((item)=>{
				if(item.is_available){
					t+=parseInt(item.price);
				}
			})
			return t;
		}
	}
})
