<template>
  <div class="loginloginContainer">
    <div class="main">
      <div class="core">
        <!-- 左边 -->
        <div class="left">
          <div class="middle">
            <!-- <div class="jump">
              <p
                @click="addBorder"
                :class="{ active: index == 0 }"
                data-index="0"
              >
                <router-link to="codeLogin">扫码登录</router-link>
              </p>
              <p
                @click="addBorder"
                :class="{ active: index == 1 }"
                data-index="1"
              >
                <router-link to="countPwdLogin">密码登录</router-link>
              </p>
            </div>

            <div class="content">
              <router-view></router-view>
            </div> -->
            <router-view :key="$route.fullpath"></router-view>
          </div>

          <div class="connect">
            <div class="middle">
              <p class="text">用合作网站账户直接登录</p>
              <p class="otherLogin">
                <a href="#"><img src="../../../src/assets/images/login/ic_weibo.png" alt="" /></a>
                <a href="#"><img src="../../../src/assets/images/login/ic_qq.png" alt="" /></a>
                <a href="#"><img src="../../../src/assets/images/login/ic_weixin.png" alt="" /></a>
              </p>
            </div>
          </div>
        </div>

        <!-- 右边 -->
        <div class="right"></div>
      </div>

      <!-- 底部 -->
      <div class="bottom_link">
        <p>
          <span v-text="this.$route.fullPath.includes('/login/')?'还没有账号？':'已有账号？'"></span>
          <router-link :to="url" v-text="this.$route.fullPath.includes('/login/')?'马上注册':'马上登录'"></router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$parent.header(false);
    this.$parent.footer(false);
    if(this.$route.fullPath.includes('loginAndRegiser/login/')){
      this.url = '/loginAndRegiser/register'
    }else{
      this.url = '/loginAndRegiser/login'
    }
    
  },
beforeUpdate() {
  // 在当前路由改变，路由参数发生变化，组件被复用时调用
// 里面写获取刷新数据的方法
  if(this.$route.fullPath.includes('loginAndRegiser/login/')){
      this.url = '/loginAndRegiser/register'
    }else{
      this.url = '/loginAndRegiser/login'
    }
},
// beforeRouteLeave(){

// if(this.$route.fullPath.includes('loginAndRegiser/login/')){
//       this.url = '/loginAndRegiser/register'
//     }else{
//       this.url = '/loginAndRegiser/login'
//     }
// }, 
  data() {
    return {
      index: 0,
      url:''
    };
  },
  methods: {
    addBorder(e) {
      this.index = e.target.parentNode.dataset.index;
      console.log(e.target);
    },
    
  },

};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.active {
  border-bottom: 3px solid #ff8a00;
  padding-bottom: 3px;
}
a {
  text-decoration: none;
}
.loginloginContainer {
  width: 100%;
  height: 936px;
  background: url("../../assets/images/login/bg.jpg") no-repeat;
  background-size: cover;
}
.main {
  width: 730px;
  height: 468px;
  position: absolute;
  top: 50%;
  margin-top: -234px;
  left: 50%;
  margin-left: -365px;
}
.main .core {
  width: 100%;
  height: 434px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}
.main .left {
  width: 440px;
  height: 100%;
  /* background-color: yellow; */
  float: left;
}
.left .middle {
  width: 320px;
  height: 321px;
  margin: 0 auto;
  /* background-color: wheat; */
}
.left .middle .jump {
  width: 100%;
  height: 78px;
  border-bottom: 1px solid #f6f7f9;
  padding: 44px 40px 0;
  display: flex;
  justify-content: space-between;
}
.left .middle .jump p {
  width: 50%;
  height: 100%;
}
.left .middle .jump a {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(113, 115, 118, 1);
  line-height: 25px;
}
/* .left .middle .jump a::after{
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -25px;
    width: 50px;
    height: 4px;
    background: rgba(255,149,0,1);
    border-radius: 3px;
} */
.left .middle .content {
  width: 100%;
  height: 254px;
  /* background-color: rgba(0, 128, 128, 0.294); */
  padding: 32px 0;
}
.left .connect {
  width: 100%;
  height: 97px;
  background-color: #fafbfc;
}
.left .connect .middle {
  width: 358px;
  height: 66px;
  margin: 0 auto;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.left .connect .text {
  width: 100%;
  height: 44px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  color: rgba(148, 150, 154, 1);
  line-height: 20px;
  padding: 12px 0;
}
.left .connect .otherLogin {
  width: 168px;
  height: 34px;
  display: flex;
  justify-content: space-between;
}
.left .connect .otherLogin img {
  width: 34px;
}
.main .right {
  width: 290px;
  height: 100%;
  float: left;
  background: url("../../assets/images/login/img_download.png");
}
.main .bottom_link {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom_link p {
  width: 140px;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  font-size: 12px;
  color: #fff;
  padding: 4px 0;
  text-shadow: 1px 1px 1px rgb(0 0 0 / 40%);
  border-radius: 15px;
}
.bottom_link p a {
  color: #cb8504;
}
.bottom_link p a:hover {
  text-decoration: underline;
}
</style>