<template>
  <div id="HeaderLoggedIn">
    <div class="header_wrap clearfix">
      <div class="head-logo">
        <a class="mfw-logo" title="马蜂窝自由行" href="javascript:;"></a>
      </div>
      <ul class="head-nav">
        <li>
           <a href="main">首页</a>
        </li>
        <li>
          <a href="destination">目的地</a>
        </li>
        <li>
          <a href="javascript:;">旅游攻略</a>
        </li>
        <li>
          <a href="home/sceniclist">去旅行</a>
        </li>
        <li>
          <a href="javascript:;">机票火车票</a>
        </li>
        <li>
          <a href="orderhotel">订酒店</a>
        </li>
        <li>
          <a href="./traveldetail">社区</a>
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
      <div class="login-info">
        <div class="head-user" @mouseenter="changeUser">
          <a class="head-drop" href="/myHome">
            <div class="user-image">
              <img src="@/assets/header/head.png" />
            </div>
            <i class="icon-down"></i>
          </a>
        </div>
        <div class="head-msg" @mouseenter="changeMeg">
          <a class="head-drop" href="javascript:;">
            <span class="icon-msg"></span>消息
            <i class="icon-down"></i>
          </a>
        </div>
        <div class="head-daka">
          <a href="javascript:;">打卡</a>
        </div>
      </div>
      <div class="dropdown_list">
        <div class="megmenu" v-show="megmenu" @mouseleave="removeActive">
          <ul>
            <li>
              <a href="#">私信</a>
            </li>
            <li>
              <a href="#">小组消息</a>
            </li>
            <li>
              <a href="#">系统通知</a>
            </li>
            <li>
              <a href="#">问答消息</a>
            </li>
            <li>
              <a href="#">回复消息</a>
            </li>
            <li>
              <a href="#">喜欢与收藏</a>
            </li>
            <li>
              <a href="#">好友动态</a>
            </li>
          </ul>
        </div>
        <div class="usermenu" v-show="usermenu" @mouseleave="removeActive">
          <div class="user-info">
            <a href="#">蜂蜜 0</a> /
            <a href="#">金币 0</a>
          </div>
          <ul>
            <li>
              <a href="#">
                <i class="icon"></i>
                我的马蜂窝
                <span class="level">LV.1</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon"></i>
                写游记
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon"></i>
                预约游记
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon"></i>
                我的足迹
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon"></i>
                我的问答
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon"></i>
                我的好友
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon"></i>
                我的收藏
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon"></i>
                我的路线
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon"></i>
                我的订单
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon"></i>
                我的优惠券
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon"></i>
                创作者开放平台
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon"></i>
                设置
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon"></i>
                退出
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "HeaderLoggedIn",
  data() {
    return {
      megmenu: false,
      usermenu: false,
    };
  },
  methods: {
    changeMeg() {
      this.megmenu = true;
      this.usermenu = false;
    },
    changeUser() {
      this.usermenu = true;
      this.megmenu = false;
    },
    removeActive() {
      this.megmenu = false;
      this.usermenu = false;
    },
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
#HeaderLoggedIn {
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
  height: 39px;
  position: relative;
  background: url("~@/assets/header/header-sprites.png") no-repeat;
  background-size: 200px;
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
.head-search .icon-search {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  background: url("~@/assets/header/header-sprites.png") no-repeat;
  background-position: -30px -110px !important;
  background-size: 200px;
  overflow: hidden;
}

.login-info {
  float: right;
}
.login-info a {
  color: #666;
  font-size: 14px;
}
.head-user {
  float: right;
}
.head-drop {
  display: inline-block;
  height: 68px;
  padding-right: 13px;
  position: relative;
  cursor: pointer;
  vertical-align: top;
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
.head-user .user-image:hover {
  border: 2px solid #ff9d00;
}
.head-drop .icon-down {
  position: absolute;
  right: 0;
  top: 32px;
}
.icon-down {
  display: inline-block;
  height: 0;
  width: 0;
  border-top: 4px solid #666;
  border-left: 4px dashed transparent;
  border-right: 4px dashed transparent;
  overflow: hidden;
}
.head-msg {
  float: right;
  display: inline;
  margin-right: 15px;
  line-height: 68px;
}
.head-msg a:hover {
  color: #ff9d00;
}
.head-daka {
  float: right;
  margin-right: 15px;
  padding-top: 23px;
  width: 55px;
  position: relative;
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
.dropdown_list {
  width: 100%;
  position: relative;
  height: 0;
  margin: 0 auto;
  clear: both;
}
.megmenu {
  /* display: none; */
  right: 50%;
  margin-right: -500px;
  position: absolute;
  top: 0;
  width: 208px;
  border: 1px solid #d6d6d6;
  background-color: #fff;
}
.megmenu ul,
.usermenu ul {
  margin-bottom: 10px;
}
.megmenu li,
.usermenu li {
  height: 36px;
  font-size: 14px;
  line-height: 36px;
  color: #666;
  position: relative;
  vertical-align: top;
}
.megmenu li a,
.usermenu li a {
  display: block;
  height: 36px;
  padding: 0 10px 0 20px;
  color: #666;
  cursor: pointer;
}
.megmenu li a:hover,
.usermenu li a:hover {
  background-color: #eee;
  color: #666;
  text-decoration: none;
}
.usermenu {
  /* display: none; */
  right: 50%;
  margin-right: -500px;
  position: absolute;
  top: 0;
  width: 208px;
  border: 1px solid #d6d6d6;
  background-color: #fff;
}
.usermenu .user-info {
  background-color: #ff9d00;
  padding: 0 0 0 20px;
  height: 50px;
  color: #fff;
  font-size: 14px;
  line-height: 50px;
  margin: -1px -1px 10px;
}
.usermenu li a {
  padding-left: 53px;
}
.usermenu .user-info a {
  color: #fff;
}
.usermenu [class|="icon"] {
  position: absolute;
  left: 23px;
  top: 10px;
  width: 16px;
}
.usermenu ul li i {
  background: url("~@/assets/header/header-sprites.png") no-repeat;
  background-size: 200px;
  height: 17px;
}
.usermenu li:nth-child(1) i {
  background-position: -90px -50px !important;
}
.usermenu li:nth-child(2) i {
  background-position: -120px -50px !important;
}
.usermenu li:nth-child(3) i {
  background-position: -150px -110px !important;
}
.usermenu li:nth-child(4) i {
  background-position: -150px -50px !important;
}
.usermenu li:nth-child(5) i {
  background-position: -180px -50px !important;
}
.usermenu li:nth-child(6) i {
  background-position: -90px -80px !important;
}
.usermenu li:nth-child(7) i {
  background-position: -120px -80px !important;
}
.usermenu li:nth-child(8) i {
  background-position: -180px -110px !important;
}
.usermenu li:nth-child(9) i {
  background-position: -150px -80px !important;
}
.usermenu li:nth-child(10) i {
  background-position: -180px -80px !important;
}
.usermenu li:nth-child(11) i {
  background-position: -120px -140px !important;
}
.usermenu li:nth-child(12) i {
  background-position: -90px -110px !important;
}
.usermenu li:nth-child(13) i {
  background-position: -120px -110px !important;
}
.usermenu li .level {
  margin-left: 10px;
  font-size: 14px;
  color: #ef523d;
  font-weight: bold;
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
</style>