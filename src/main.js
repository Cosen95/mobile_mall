/*这个js文件是主页面配置的主入口。主要是利用es6的模块化引入模块*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'						//引入vue文件
import App from './App'					//引入同目录下的App.vue模块
import router from './router'		//引入vue的路由
import "./server/mock.js"				//  导入非export 模块
import vueResource from 'vue-resource'	//导入ajax请求模块

Vue.config.productionTip = false


Vue.use(vueResource);
//vuex导入store
import store from "@/store/index.js"

/* eslint-disable no-new */
new Vue({
  el: '#app',										//定义作用范围就是index.html里的id为app的范围内
  router,												//引入路由
  store,												//在根app里面使用vuex
  template: '<App/>',						//给Vue实例初始一个App组件作为template 相当于默认组件
  components: { App }						//注册引入的组件App.vue
})
