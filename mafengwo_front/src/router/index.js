import Vue from 'vue'
import VueRouter from 'vue-router'
import ScenicList from '../views/scenic/ScenicList.vue'
import ScenicDetail from '../views/scenic/ScenicDetail.vue'
// import Home from '../views/Home.vue'
import Main from '@/views/cds/Main.vue'
import Login from '../views/loginAndregister/Login'
import CodeLogin from '../components/CodeLogin'
import CountPwdLogin from '../components/CountPwdLogin'
import MyHome from '../views/personal/MyHome'
import MySpoor from '../views/personal/MySpoor'
import MyTravel from '../views/personal/MyTravel'
import MyComment from '../views/personal/MyComment'
import MyProfile from '../views/personal/MyProfile'
import Destination from '../views/destination&province/destination.vue'
import Province from '../views/destination&province/province.vue'
import Hotel from '../views/hotel/Hotel'

import TravelWriting from '../views/cds/TravelWriting.vue'
import NewTravel from '../views/cds/NewTravel.vue'
import TravelDetail from '../views/cds/TravelDetail.vue'
import register from '../views/loginAndregister/register.vue'
import LoginAndRegiser from '../views/loginAndregister/LoginAndRegiser.vue'
import RegisterDetail from '../views/loginAndregister/RegisterDetail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main'

  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/travelwriting',
    name: TravelWriting,
    component: TravelWriting,
  },
  {
    path: '/newtravel',
    name: 'NewTravel',
    component: NewTravel,
  },
  {
    path: '/traveldetail',
    name: 'TravelDetail',
    component: TravelDetail,
  },
  {
    path: '/sceniclist',
    name: 'ScenicList',
    component: ScenicList,
  },
  {
    path: '/scenicdetail/:s_id',
    name: 'ScenicDetail',
    component: ScenicDetail,
  },
  {
    path: '/loginAndRegiser',
    name: 'LoginAndRegiser',
    component: LoginAndRegiser,
    children: [
      {path: 'login',
      name: 'Login',
      component: Login,
      redirect:'login/codeLogin',
      children: [{
        path: 'codeLogin',
        name: 'CodeLogin',
        component: CodeLogin
      },
      {
        path: 'countPwdLogin',
        name: 'CountPwdLogin',
        component: CountPwdLogin
      }]},
      {
        path:'register',
        name:'Register',
        component:register
      }
    ]
  },
  {
    path: '/registerdetail',
    name: 'RegisterDetail',
    component:RegisterDetail
  },

  {
    path: '/orderhotel',
    name: 'Orderhotel',
    component: () => import("../views/hotel/orderhotel.vue"),
  },
  {
    path: '/hoteldetails/:id',
    name: 'Hoteldetails',
    component: () => import("../views/hotel/hoteldetails.vue")
  },
  {
    path: '/myhome',
    name: 'MyHome',
    component: MyHome,
    redirect: '/myhome/myProfile',
    children: [
      {
        path: 'myProfile',
        name: 'MyProfile',
        component: MyProfile
      },
      {
        path: 'myTraveling',
        name: 'MyTravel',
        component: MyTravel
      },
      {
        path: 'myComment',
        name: 'MyComment',
        component: MyComment
      },
      {
        path: 'mySpoor',
        name: 'MySpoor',
        component: MySpoor
      }
    ]
  },
  {
    path: '/destination',
    name: 'Destination',
    component: Destination,
  },
  {
    path: '/province',
    name: 'Province',
    component: Province,
  },
  {
    path: '/hotel',
    name: 'Hotel',
    component: Hotel
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ x: 0, y: 0 })
})

export default router