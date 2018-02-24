/*配置路由的页面*/
import Vue from 'vue'										//引用vue文件 
import Router from 'vue-router'					//引用vue路由模块，并赋值给变量Router
import HelloWorld from '@/components/HelloWorld'		//@代表src文件夹  引用HelloWorld.vue模版，并赋值给变量HelloWorld
//配置路由需要先把路由需要的组件导入
import indexPage from '@/page/index'
import categoryPage from '@/page/category'
import cartPage from '@/page/cart'
import userPage from '@/page/user'
import producePage from '@/page/produce'
import pDetail from '@/page/produce/detail'
import pComent from '@/page/produce/coment'
import pArg from '@/page/produce/arg'
Vue.use(Router)

export default new Router({						//进行路由配置
	mode:'history',
  routes: [
    {
      path: '/hello',								//路由的路径
      name: 'HelloWorld',				//路由的名字
      component: HelloWorld			//路由对应的组件
    },
    {
      path: '/',								//默认路由
      redirect: '/index',				//默认路由的名字,默认路由对应的组件为首页indexPage
    },
    {
    	path:'/index',
    	name:'index',
    	component:indexPage,
    	alias:"/home"
    },
    {
    	path:'/category',
    	name:'category',
    	component:categoryPage
    },
    {
    	path:'/cart',
    	name:'cart',
    	component:cartPage
    },
    {
    	path:'/user',
    	name:'user',
    	component:userPage
    },
    {
    	path:"/produce/:id",
    	name:"produce",
    	component:producePage,
//  	children:[
//  		{
//  			path:"",
//  			redirect:"detail"		//重定向，默认detail详情页面
//  		},
//  		{
//  			path:"detail",
//  			component:pDetail
//  		},
//  		{
//  			path:"coment",
//  			component:pComent
//  		},
//  		{
//  			path:"arg",
//  			component:pArg
//  		}
//  	]
    }
  ]
})
