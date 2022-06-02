import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    // isLogin:false,
    userinfo:{
      username:"",
      userid:"",
      userprofile:""
    },
  },
  mutations: {
    getUser:(state,userinfo)=>{
      state.userinfo = userinfo
    },
    
  },
  plugins: [createPersistedState()],
  modules: {
  },
})

export default store
