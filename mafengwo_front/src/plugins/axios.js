// "use strict";

// import Vue from 'vue';
// import axios from "axios";

// // Full config:  https://github.com/axios/axios#request-config
// // axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// let config = {
//   // baseURL: process.env.baseURL || process.env.apiUrl || ""
//   // timeout: 60 * 1000, // Timeout
//   // withCredentials: true, // Check cross-site Access-Control
// };

// const _axios = axios.create(config);

// _axios.interceptors.request.use(
//   function(config) {
//     // Do something before request is sent
//     return config;
//   },
//   function(error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// _axios.interceptors.response.use(
//   function(response) {
//     // Do something with response data
//     return response;
//   },
//   function(error) {
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );
// // Plugin.install = function(Vue, options) {
// Plugin.install = function(Vue) {
//   Vue.axios = _axios;
//   window.axios = _axios;
//   Object.defineProperties(Vue.prototype, {
//     axios: {
//       get() {
//         return _axios;
//       }
//     },
//     $axios: {
//       get() {
//         return _axios;
//       }
//     },
//   });
// };

// Vue.use(Plugin)

// export default Plugin;

import axios from 'axios'
import Qs from 'qs'

axios.defaults.timeout = 900000;   // 超时时间
axios.defaults.baseURL = "http://localhost:5000" //默认地址
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//整理数据
axios.defaults.transformRequest = function (data) {
    data = Qs.stringify(data);
    // data = JSON.stringify(data);
    return data;
};

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
    response => {
      if (response.data.resultCode=="404") {
          console.log("response.data.resultCode是404")
          // 返回 错误代码-1 清除ticket信息并跳转到登录页面
  //      cookie.del("ticket")
  //      window.location.href='http://login.com'
          return
      }else{
          return response;
      }
    },
    error => {
      return Promise.reject(error.response)   // 返回接口返回的错误信息
    });
  export default axios;
