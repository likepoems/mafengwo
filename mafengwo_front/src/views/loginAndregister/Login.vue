<template>
  <div>
    
          <div class="middle">
            <div class="jump">
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
            </div>
          </div>

          
        </div>

   

</template>

<script>
export default {
  created() {
    this.$parent.$parent.header(false);
    this.$parent.$parent.footer(false);
    console.log(this.$route);
  },

  data() {
    return {
      index: 0
    };
  },
  methods: {
    addBorder(e) {
      this.index = e.target.parentNode.dataset.index;
      console.log(e.target);
    }
  }
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