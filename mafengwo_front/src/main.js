import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './plugins/axios.js'
import md5 from 'js-md5';
Vue.use(ElementUI)
// axios.defaults.withCredentials = true; // Cookie跨域
Vue.config.productionTip = false
Vue.prototype.$axios = axios//重命名为axios，使用$axios.get即可调用
Vue.prototype.$md5 = md5;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
