<template>
  <div id="header">
    <div class="header_wrap clearfix">
      <div class="head-logo">
        <a title="千里寻自由行" href="javascript:;">
          <img  class="mfw-logo" src="../assets/header/logo.png" alt="">
        </a>
      </div>
      <ul class="head-nav">
        <li>
          <a
            href="
            /"
           :class="{ active:'/main'===$route.path}"
            @click="goTo('/main')"
            >首页</a
          >
        </li>
        <li>
          <a
            href="/destination"
            :class="{ active:'/destination'===$route.path||'/province'===$route.path}"
            @click="goTo('/destination')"
            >目的地</a
          >
        </li>
        <li>
          <a href="javascript:;">旅游攻略</a>
        </li>
        <li>
          <a
            href="/sceniclist"
            replace
            :class="{ active:'/sceniclist'===$route.path||'/scenicdetail'===$route.path}"
            @click="goTo('/sceniclist')"
            >去旅行</a
          >
        </li>
        <li>
          <a
            href="javascript:;"
            >机票火车票</a
          >
        </li>
        <li>
          <a
            href="/hotel"
            :class="{ active:'/orderhotel'===$route.path ||'/hoteldetails'===$route.path || '/hotel'===$route.path}"
            @click="goTo('/hotel')"
            >订酒店</a
          >
        </li>
        <li>
          <a
            href="/traveldetail"
            :class="{ active:'/traveldetail'===$route.path}"
            @click="goTo('/traveldetail')"
            >社区</a
          >
        </li>
        <li>
          <a href="javascript:;"><div class="mfwzx-logo"></div></a>
        </li>
      </ul>
      <div class="head-search">
        <div class="head-search-wrapper">
          <div class="head-searchform">
            <input type="text" />
            <a href="javascript:;" class="icon-search"></a>
          </div>
        </div>
      </div>
      <div v-if="!isLogin" class="login-out">
        <a class="weibo-login" href="javascript:;" title="微博登录"></a>
        <a class="qq-login" href="javascript:;" title="QQ登录"></a>
        <a class="weixin-login" href="javascript:;" title="微信登录"></a>
        <a id="_j_showlogin" title="登录马蜂窝" href="/loginAndRegiser/login">登录</a>
        <!-- <a href="javascript:;">登录</a> -->
        <span class="split">|</span>
        <a href="loginAndRegiser/register" title="注册帐号">注册</a>
      </div>
      <div v-else @mouseleave="hideExit"  class="login-info">

        <div @mouseenter="showExit" class="head-user" id="_j_head_user">
          <a class="drop-trigger" href="/myhome" :title="(this.$store.state.userinfo.username)+'的窝'" rel="nofollow">
            <div class="user-image"><img src="../assets/header/touxiang.png" height="32" width="32" :alt="(this.$store.state.userinfo.username)+'的窝'"></div>
            <i class="icon-caret-down"></i>
          </a>
        </div>
        <div class="head-msg" id="_j_head_msg">
          <a class="drop-trigger" href="javascript:" rel="nofollow">
            <i class="icon-msg"></i>
            消息
            <i class="icon-caret-down"></i>
            <span class="head-msg-new hide" style="display: none;"></span>
          </a>
        </div>
        <div class="head-daka ">
          <a class="btn head-btn-daka" href="javascript:" rel="nofollow" id="head-btn-daka" title="打卡" data-japp="daka">打卡</a>
          <!-- <a class="btn-active head-btn-daka" href="javascript:" rel="nofollow" id="head-btn-daka-active" title="打卡推荐" data-japp="daka">打卡推荐</a> -->
          <!-- <a class="btn-active head-btn-daka" href="javascript:" rel="nofollow" id="head-btn-daka-active" title="已打卡" data-japp="daka">已打卡</a> -->
        </div>
        
      </div>
      <p v-show="isShow" @mouseenter="showExit" @mouseleave="hideExit" @click="clearStore"  ref="exit" class="exit"><a href="/">退出</a></p>
    </div>
    
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      isLogin:this.$store.state.userinfo.username,
      isShow:false
    };
  },
  methods: {
    goTo(path) {
      this.$router.replace(path);
    },
    showExit(){
      this.isShow = true
    },
    hideExit(){
      this.isShow = false
    },
    // changeIsLogin(){
    //   this.isLogin = this.$store.state.userinfo.username
    // },
  clearStore(){
    this.$store.state.userinfo.username = null
    this.$store.state.userinfo.userid = null
    this.$store.state.userinfo.userprofile = null

    localStorage.setItem("token",null) 
    localStorage.setItem("vuex",null)
    this.$data.isLogin = false
  }
  },
  created() {
    // console.log(this.curnav);
    // changeIsLogin()
    this.isLogin = this.$store.state.userinfo.username
  },
  
};
</script>

<style scoped>
.clearfix {
  clear: both;
}
.clearfix:after,
.clearfix:before {
  content: "";
  height: 0;
  display: table;
  overflow: hidden;
}
#header {
  height: 68px;
  background-color: #fff;
  position: relative;
  z-index: 90;
}
.header_wrap {
  width: 1200px;
  height: 68px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
.head-logo {
  position: relative;
  float: left;
  padding: 16px 0 13px;
  width: 136px;
  height: 39px;
}
.head-logo .mfw-logo {
  display: block;
  height: 45px;
  position: relative;
  /* background: url("~@/assets/header/header-sprites.png") no-repeat; */
  background-size: 200px;
  width: 136px;
}
.head-nav {
  position: relative;
  z-index: 5;
}
.head-nav li {
  float: left;
  position: relative;
  text-decoration: none;
}
.head-nav {
  float: left;
  display: inline;
  padding: 0 10px 0 25px;
  line-height: 68px;
  font-size: 16px;
  color: #333;
}
.head-nav li a {
  display: inline-block;
  padding: 0 16px;
  color: #333;
  vertical-align: top;
  overflow: hidden;
}
.head-nav li a:hover {
  color: #ff9d00 !important;
  border-bottom: 2px solid #ff9d00;
}
.head-nav .active {
  background-color: #ff9d00;
  border-bottom: 2px solid #ff9d00;
  color: #fff !important;
}
.head-nav .active:hover {
  color: #fff !important;
}
.head-nav .mfwzx-logo {
  width: 75px;
  height: 68px;
  background: url("~@/assets/header/mfwzx.png") no-repeat center;
  background-size: 75px 30px;
}
.head-search {
  float: left;
  width: 130px;
  height: 68px;
  position: relative;
}
.head-search-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  width: 130px;
  padding: 16px 0 15px;
  height: 36px;
  background-color: #fff;
}
.head-searchform {
  height: 36px;
  position: relative;
}
.head-searchform input {
  border: 1px solid #efefef;
  background-color: #efefef;
  width: 108px;
  height: 34px;
  padding: 0 10px;
  line-height: 34px;
  font-size: 14px;
  color: #666;
  border-radius: 4px;
}
.login-out {
  width: auto;
  float: right;
  padding: 21px 0;
  height: 26px;
  line-height: 26px;
  color: #c9c9c9;
  text-align: right;
}
.login-out .weibo-login,
.login-out .qq-login,
.login-out .weixin-login,
.head-search .icon-search {
  background: url("~@/assets/header/header-sprites.png") no-repeat;
  background-size: 200px;
  display: inline-block;
  margin-right: 6px;
  width: 26px;
  height: 26px;
  background-position: 0 -50px !important;
  overflow: hidden;
  vertical-align: -7px;
}
.login-out a {
  font-size: 14px;
  color: #ff9d00;
  cursor: pointer;
}
.login-out .qq-login {
  background-position: -30px -50px !important;
}
.login-out .weixin-login {
  background-position: 0 -165px !important;
}
.login-out .split {
  display: inline-block;
  margin: 0 10px;
  width: 1px;
  height: 14px;
  background-color: #c9c9c9;
  overflow: hidden;
  vertical-align: -2px;
}
.head-search .icon-search {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  background-image: url("~@/assets/header/header-sprites.png");
  background-position: -30px -110px !important;
  overflow: hidden;
}
.line {
  position: absolute;
  left: 0;
  bottom: -4px;
  right: 0;
  width: 100%;
  height: 2px;
  border-top: 1px solid #d6d6d6;
  background-color: rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

/* login-info */
.login-info {
    float: right;
    width: auto;
}
.login-info a {
    color: #666;
    font-size: 14px;
}
.drop-trigger {
    display: inline-block;
    height: 68px;
    padding-right: 13px;
    position: relative;
    cursor: pointer;
    vertical-align: top;
}
.head-user {
    float: right;
}
.head-user .user-image {
    float: left;
    margin-top: 15px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #fff;
}
img {
    border: 0;
    vertical-align: middle;
}
.head-msg {
    float: right;
    display: inline;
    margin-right: 15px;
    line-height: 68px;
    margin-right: 18px;
    
}
.head-daka {
    float: right;
    margin-right: 15px;
    padding-top: 23px;
    width: 55px;
    position: relative;
    width: 60px;
    margin-right: 20px;
}
.head-daka a {
    display: block;
    height: 20px;
    background-color: #1493e3;
    text-align: center;
    line-height: 20px;
    color: #fff;
    border-radius: 4px;
    overflow: hidden;
    font-size: 12px;
}
.exit{
  /* float: right;
  clear: both;
  margin-top: -20px; */
  /* float: right; */
  position: absolute;
  right: 50%;
  margin-right: -560px;
  width: 100px;
  top: 68px;
  background-color: #fff;
  /* background: #000; */
  text-align: center;
}
.exit:hover{
  background-color: #eeeeee;

}
.exit a{
  color: #666;
}
</style>