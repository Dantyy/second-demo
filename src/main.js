import Vue from 'vue'
import less from 'less'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'

// 暂时无法请求api
import axios from 'axios'
// // 配置请求的路径
axios.defaults.baseURL = ' http://127.0.0.1:8888/api/private/v1/ '
Vue.prototype.$http = axios
// 通过axios请求拦截器添加token，保证拥有获取数据的权限
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须return config
  return config
})

Vue.config.productionTip = false

Vue.use(less)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
