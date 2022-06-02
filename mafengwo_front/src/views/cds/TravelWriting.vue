<template>
  <div>
    <HeaderLoggedIn></HeaderLoggedIn>
    <div id="noterWrapper">
      <ul class="btns clearfix">
        <li class="btn1">
          <a class="btn">
            <div class="icon">
              <i></i>
            </div>
            新版游记
          </a>
          <div class="context">
            所见即所得、工具栏整合、边写边听音乐<br />全新的游记书写体验
            <a href="javascript:;">「了解详情」</a>
          </div>
          <div class="agreement">
            <el-checkbox v-model="checked"></el-checkbox>
            我已阅读并同意《<a href="javascript:;">马蜂窝游记协议</a>》
          </div>
          <div class="question">
            <a href="javascript:;">游记常见问题及解答</a>
          </div>
        </li>
        <li class="btn2">
          <a class="btn" @click="goto">
            <div class="icon">
              <i></i>
            </div>
            经典游记
          </a>
          <div class="draftbox" v-show="isShow">
            <div class="bubble">
              <i
                ><b>{{ bubblecount }}</b></i
              >
              <span class="close" @click="closedraftbox"></span>
            </div>
            <p class="mybox">
              <a role="button">
                我的草稿箱(<span>{{ bubblecount }}</span
                >)
                <i></i>
              </a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderLoggedIn from "@/components/HeaderLoggedIn";
export default {
  name: "TravelWriting",
  components: {
    HeaderLoggedIn,
  },
  created(){
    this.$parent.header(false)
  },
  data() {
    return {
      checked: true,
      bubblecount: 0,
      isShow: true,
    };
  },
  methods: {
    closedraftbox() {
      this.isShow = !this.isShow;
    },
    goto(){
      this.$router.replace({ path:'/newtravel'})
    }
  },
};
</script>

<style scoped>
#noterWrapper {
  width: 1000px;
  margin: 0 auto;
  clear: both;
  padding: 115px 0 0;
}
#noterWrapper li {
  float: left;
  position: relative;
  height: 410px;
}
#noterWrapper .btns a.btn {
  cursor: pointer;
  display: inline-block;
  border-radius: 10px;
  width: 450px;
  height: 155px;
  padding-top: 5px;
  font-size: 42px;
  text-align: left;
}
#noterWrapper .btns .icon {
  display: inline-block;
  vertical-align: middle;
  margin: 0 38px 0 56px;
  width: 120px;
  height: 155px;
  position: relative;
}
#noterWrapper li .icon i {
  display: inline-block;
  position: absolute;
  font-style: italic;
}
#noterWrapper li.btn1 {
  width: 450px;
}
#noterWrapper li.btn1 a.btn {
  position: relative;
  background-color: #c8e6e5;
  color: #507675;
  box-shadow: 0px 0px 0px #b4dddb inset, 0px 5px 0px 0px #b4dddb,
    0px 5px 0px #b4dddb;
}
#noterWrapper li.btn1 a.btn:hover {
  background-color: #b4dddb;
}
#noterWrapper li.btn1 .icon {
  background: url("~@/assets/header/btnbg.png") no-repeat;
}
#noterWrapper li.btn1 .icon i {
  width: 65px;
  height: 76px;
  background: url("~@/assets/header/btn1.gif") no-repeat;
  top: 40px;
  left: 30px;
}
#noterWrapper li.btn1 a.btn:hover i {
  background: url("~@/assets/header/btn1_2.gif") no-repeat;
}
/*  */
#noterWrapper li.btn1 .context {
  text-align: center;
  padding: 30px 0 0;
  font-size: 16px;
  color: #666;
  line-height: 2em;
}
#noterWrapper li.btn1 .context a {
  color: #ff9d00;
}
#noterWrapper .agreement {
  position: absolute;
  bottom: 42px;
  left: 0;
  font-size: 14px;
  color: #999;
}
#noterWrapper .agreement .el-checkbox:last-of-type {
  margin-right: 8px !important;
}
#noterWrapper .question {
  font-size: 14px;
  position: absolute;
  left: 26px;
  bottom: 15px;
  text-decoration: underline;
}
#noterWrapper .question a {
  color: #999;
  text-decoration: none;
}

/*  */
#noterWrapper li.btn2 {
  width: 450px;
  padding-left: 100px;
}
#noterWrapper li.btn2 a.btn {
  background-color: #fac662;
  color: #a1601b;
  box-shadow: 0px 0px 0px #f4b02e inset, 0px 5px 0px 0px #f4b02e,
    0px 5px 0px #f4b02e;
}
#noterWrapper li.btn2 a.btn:hover {
  background-color: #fcbd44;
  box-shadow: 0px 0px 0px #fcbd44 inset, 0px 5px 0px 0px #fcbd44,
    0px 5px 0px #fcbd44;
}
#noterWrapper li.btn2 .icon {
  background: url("~@/assets/header/btnbg.png") -120px 0 no-repeat;
}
#noterWrapper li.btn2 .icon i {
  width: 74px;
  height: 56px;
  background: url("~@/assets/header/btn2.gif") no-repeat;
  top: 55px;
  left: 25px;
}
#noterWrapper li.btn2 a.btn:hover i {
  background: url("~@/assets/header/btn2_2.gif") no-repeat;
}
/*  */
#noterWrapper .draftbox {
  position: relative;
  margin-top: 190px;
}
#noterWrapper .draftbox .bubble {
  width: 270px;
  height: 66px;
  background: url("~@/assets/header/bubble.png") no-repeat;
  position: absolute;
  right: 0;
  bottom: 54px;
}
#noterWrapper .draftbox .bubble .close {
  display: block;
  width: 25px;
  height: 25px;
  background: url("~@/assets/header/close.png") no-repeat;
  position: absolute;
  right: 0px;
  top: -6px;
  cursor: pointer;
}
#noterWrapper .draftbox .bubble i {
  display: block;
  width: 26px;
  font-size: 22px;
  font-style: normal;
  text-align: center;
  line-height: 64px;
  color: #fff;
  margin-left: 62px;
  letter-spacing: -3px;
}
#noterWrapper .draftbox .mybox {
  display: block;
  height: 48px;
  width: 100%;
  position: relative;
}
#noterWrapper .draftbox .mybox a {
  display: block;
  width: 184px;
  height: 44px;
  border-radius: 8px;
  border: 2px dashed #fc9c27;
  font-size: 18px;
  line-height: 44px;
  text-align: center;
  color: #666;
  float: right;
}
#noterWrapper .draftbox .mybox i {
  width: 32px;
  height: 32px;
  display: inline-block;
  background: url("~@/assets/header/i_bg.png") -46px 0 no-repeat;
  margin: 0 15px 2px 10px;
  vertical-align: middle;
}

</style>