<template>
  <div class="myCommentContainer">
    <div class="left">
      <div class="myinfo">
        <img
          :src="'http://localhost:5000/' + userprofile"
          alt=""
          class="myphoto"
        />
        <p class="name">{{ username }}</p>
        <div class="its_tags">
          <a href="#"><i class="medal medal1"></i></a>
          <a href="#"><i class="medal medal2"></i></a>
          <a href="#"><i class="medal medal3"></i></a>
        </div>
        <div class="rate">
          等级：<span>Lv.1</span>|
          <i class="el-icon-setting"></i>
        </div>
        <ul class="follow">
          <li><span>8</span><span>关注</span></li>
          <li><span>0</span><span>粉丝</span></li>
          <li><span>0</span><span>蜂蜜</span></li>
        </ul>
        <div class="partcenter">
          <p class="myGloryText">我的问答荣誉</p>
          <ul class="myGlory">
            <li><i class="icon icon1"></i><span>马蜂窝指路人</span></li>
            <li><i class="icon icon2"></i><span>目的地指路人</span></li>
            <li><i class="icon icon3"></i><span>金牌大师</span></li>
          </ul>
        </div>
        <div class="liuyan">
          <div class="partone">
            <span>留言板</span>
            <el-switch
              id="switch"
              v-model="value"
              active-color="#96C79B"
              inactive-color="#CCCCCC"
            >
            </el-switch>
          </div>
          <div class="parttwo">
            <textarea
              name=""
              id=""
              placeholder="说点什么..."
              cols="30"
              rows="10"
            ></textarea>
            <a href="#">留言</a>
          </div>
        </div>
      </div>
    </div>

    <div class="right">
      <div class="top">
        <ul>
          <li>
            <span>{{ resultlen }}</span
            ><span>内容数</span>
          </li>
          <li><span>0</span><span>金牌回答</span></li>
          <li><span>0</span><span>采纳率</span></li>
        </ul>
        <a class="question" href="#">我要提问</a>
      </div>
      <div class="center">
        <div class="reviews-list">
          <div
            id="_j_poilist"
            v-for="(item, index) in commentList"
            :key="index"
          >
            <!-- 是否是普通点评 -->
            <div
              class="poi-item have _j_poiitem _j_poiitem_51405472 _j_commentitem_1711570282127116"
              data-lng="-122.47958"
              data-lat="37.83232"
              data-typeid="3"
              data-itemid="1711570282127116"
            >
              <span class="cover">
                <a href="/poi/51405472.html" target="_blank"
                  ><img
                    :src="'http://localhost:5000/' + item.img"
                    style="width: 120px; height: 120px"
                /></a>
              </span>
              <div class="poi-detail">
                <span class="s-ding"> </span>
                <h3 class="title">
                  <a href="/poi/51405472.html" target="_blank">观景点</a>
                </h3>
                <div class="rating" data-star="4" data-originstar="4">
                  <div class="review-score">
                    <span class="star4"></span>
                  </div>
                  <div class="info">
                    <el-rate
                      disabled="true"
                      text-color="999999"
                      :texts="starTexts"
                      show-text="true"
                      v-model="item.evaluate"
                    >
                    </el-rate>
                  </div>
                </div>
                <div class="poi-rev _j_comment" v-text="item.content"></div>
              </div>
              <div class="poi-btns">
                <div class="option">
                  <a
                    class="btn-modfiy"
                    data-japp="weng_dialog"
                    data-jappconf="common"
                    role="button"
                    data-poiid="51405472"
                    data-wengid="1711570282127116"
                    title="编辑"
                  ></a>
                </div>
              </div>
              <div class="poi-btns">
                <span class="time" v-text="item.time"></span>
              </div>
              <div class="reply hide">
                <ul></ul>
                <div class="more _j_morereply hide"><a>还有-2条回复</a></div>
                <div class="add _j_editreply hide">
                  <textarea></textarea>
                  <div>
                    <a class="btn btn-cancel _j_cancel">取消</a>
                    <a
                      class="btn btn-submit _j_sunmitreply"
                      data-commentid="1711570282127116"
                      >回复</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
      <!-- <div class="loading">
        <img v-show="loading" src="../../assets/loading.png" alt="" />
        <span>{{ loading ? "正在加载中..." : "已经到底啦~" }}</span>
      </div> -->
    </div>
  </div>
</template>

<script>
let obj = {};
let objkey = 0;
export default {
  data() {
    return {
      value: true,

      starTexts: ["不建议", "有待改善", "还可以", "值得一去", "强烈推荐"],
      commentList: null,
      result: [],
      path: "",
      loading: true,
      resultlen: 0,
      token: "",
      userprofile: "",
      username: "",
    };
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    },
    scrollFn() {
      let winheight = window.innerHeight;
      let scrollheight = window.pageYOffset;
      let docheight = document.documentElement.scrollHeight;
      if (objkey >= Object.keys(obj).length - 1) {
        this.loading = false;
        return;
      }
      if (winheight + scrollheight >= docheight) {
        // this.loading = true
        objkey++;
        this.result = this.result.concat(obj[objkey]);
      }
    },
    toNotesdetail(id) {
      this.$router.push({
        path: "/localhost:8080/traveldetail",
        query: { t_id: id },
      });
    },
    deleteNote(tid) {
      this.$axios.delete("/travelnote", { params: { tid } }).then((res) => {
        if (res.status == 200) {
          this.$message({
            message: "删除成功！",
            type: "success",
          });
        }
      });
    },
  },
  created() {
    this.loading = true;
    objkey = 0;
    obj = {};
    this.token = localStorage.getItem("token");
    let userid = this.$store.state.userinfo.userid;
    this.username = this.$store.state.userinfo.username;
    this.userprofile = this.$store.state.userinfo.userprofile;
    this.$axios
      .get("/comments", {
        params: { userid },
      })
      .then((res) => {
        if (res.data == "") {
          this.$message.error("获取错误！");
          setTimeout(() => {
            this.$router.push("/loginAndRegiser/login/countPwdLogin");
          }, 2500);
        } else {
          console.log(res.data);
          this.commentList = res.data;
          this.resultlen = res.data.length;
          if (res.data.length > 4) {
            for (let i = 0; i < Math.ceil(res.data.length / 4); i++) {
              obj[i] = res.data.slice(i * 4, 4 * (i + 1));
              this.result = obj[objkey];
              console.log(this.result);
              console.log(obj);
            }
          } else {
            this.result = res.data;
            this.loading = false;
          }
        }
      })
      .catch((error) => {
        if (error) {
          console.log("??");
          this.$message.error("请先登录！");
        }
      });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.myAnswer {
  border-bottom: 3px solid #ff9d00;
}
.myAnswer a {
  color: #ff9d00;
}
.myCommentContainer {
  width: 100%;
  height: 780px;
}
.myCommentContainer .left {
  width: 280px;
  height: 748px;
  background-color: #fff;
  float: left;
}
.left .myinfo {
  width: 100%;
  height: 260px;
}
.myinfo .myphoto {
  width: 120px;
  height: 120px;
  display: block;
  border-radius: 50%;
  margin: 0 auto;
  background-color: wheat;
  margin-top: -50px;
}
.myinfo .name {
  width: 100%;
  height: 24px;
  margin-top: 16px;
  font-size: 22px;
  color: #666666;
  line-height: 24px;
  text-align: center;
}
.myinfo .its_tags {
  width: 100%;
  height: 23px;
  margin: 10px 0;
  /* background-color: cadetblue; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.medal {
  background: url("../../assets/images/personal/home_sprite_v15.png") no-repeat;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-right: 8px;
  margin-top: 5px;
}
.medal1 {
  background-position: 0 -460px;
}
.medal2 {
  background-position: -41px -460px;
  width: 30px;
}
.medal3 {
  background-position: -72px -460px;
  width: 38px;
  margin-right: 0;
}
.myinfo .rate {
  display: flex;
  justify-content: space-between;
  width: 110px;
  height: 18px;
  margin: 0 auto;
  line-height: 18px;
}
.myinfo .rate span {
  color: #ea3c1a;
  font-weight: bold;
  font-family: Arial;
  font-size: 16px;
}
.myinfo .rate i {
  font-size: 17px;
}
.follow {
  width: 100%;
  height: 64px;
  display: flex;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  margin-top: 20px;
}
.follow li {
  flex: 1;
  background: #fff;
  border-right: 1px solid #e2e2e2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.follow li:nth-of-type(3) {
  border: none;
}
.follow li span:nth-of-type(1) {
  font-size: 20px;
  color: #444444;
  font-weight: bold;
}
.follow li span:nth-of-type(2) {
  font-size: 14px;
  color: #666666;
}
.partcenter {
  width: 214px;
  height: 136px;
  margin: 0 auto;
  /* background-color: #fff; */
  margin: 26px auto;
}
.myGloryText {
  font-size: 16px;
  color: #999999;
  margin-bottom: 10px;
}
.myGlory {
  width: 100%;
  height: 98px;
  font-size: 14px;
  color: #666666;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.myGlory li {
  height: 26px;
  line-height: 26px;
  display: flex;
}
.myGlory li:hover span {
  color: #ff9d00;
}
.myGlory li i {
  display: inline-block;
  width: 40px;
  height: 100%;
  margin-right: 12px;
}
.icon {
  background-image: url("../../assets/images/personal/ask_v2_sprite3.png");
}
.icon1 {
  background-position: 0 0;
}
.icon2 {
  background-position: 0 -60px;
}
.liuyan {
  width: 100%;
  height: 248px;
  border-top: 1px solid #e2e2e2;
  background-color: #fff;
  padding: 45px 15px 0;
}
.el-switch {
  width: 28px;
  height: 14px;
}
.el-switch__core {
  height: 14px;
}
.el-switch__core:after {
  width: 14px;
  height: 14px;
}
.el-switch.is-checked .el-switch__core::after {
  margin-left: -13px;
}
.liuyan span {
  display: inline-block;
  margin-left: 100px;
}
.liuyan #switch {
  display: block;
  float: right;
}
.liuyan .parttwo {
  width: 100%;
  height: 150px;
  margin-top: 16px;
}
.liuyan .parttwo textarea {
  padding: 15px;
  background-color: #efefef;
  width: 100%;
  height: 110px;
  border: #efefef 1px solid;
  font-size: 14px;
  color: #999999;
  resize: none;
}
.liuyan .parttwo textarea:focus {
  border: 2px solid #000;
  border-radius: 4px;
}
.liuyan .parttwo a {
  display: block;
  width: 100%;
  height: 30px;
  color: #fff;
  margin-top: 10px;
  text-align: center;
  line-height: 30px;
  background-color: #cccccc;
  border-radius: 3px;
}
.liuyan .parttwo a:hover {
  background-color: #ff8a00;
}

.myCommentContainer .right {
  width: 682px;
  height: 661px;
  float: left;
  margin-left: 18px;
  margin-top: 18px;
}
.right .top {
  width: 100%;
  height: 132px;
  padding: 40px 30px;
  border: 1px solid #d9d9d9;
  margin-bottom: 10px;
  background-color: #fff;
}
.right .top ul {
  width: 452px;
  height: 52px;
  background-color: #fff;
  display: flex;
}
.right .top ul li {
  padding-top: -4px;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.right .top ul li span:nth-of-type(1) {
  height: 30px;
  font-size: 30px;
  color: #333333;
  font-weight: bold;
  line-height: 24px;
}
.right .top ul li span:nth-of-type(2) {
  font-size: 14px;
  color: #999999;
  line-height: 15px;
}
.question {
  float: right;
  margin-top: -46px;
  width: 140px;
  height: 40px;
  background-color: #ff9d00;
  border-radius: 4px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 16px;
}
.right .center {
  width: 100%;
  height: 556px;
  /* padding: 40px 30px; */
  border: 1px solid #d9d9d9;
  background-color: #fff;
  overflow: auto;
  overflow-x: hidden;
}
.right .tag {
  width: 620px;
  height: 73px;
  margin: 0 auto;
  /* background-color: powderblue; */
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  color: #666666;
  font-size: 16px;
}
.tag li {
  width: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tag li:nth-of-type(6) {
  width: 72px;
}
.total {
  width: 620px;
  height: 40px;
  margin: 0 auto;
  margin-top: 15px;

  line-height: 24px;
  font-size: 14px;
  color: #999;
  border-bottom: 1px solid #e5e5e5;
}
.el-dropdown {
  float: right;
  margin-top: -38px;
  margin-right: 38px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  width: 112px;
  height: 28px;
  padding: 0 10px;
  line-height: 26px;
  cursor: pointer;
  color: #666;
}
.img {
  margin-left: 278px;
  margin-top: 80px;
}
.reviews-list {
  width: 680px;
  border: 1px solid #e2e2e2;
  background-color: #fff;
}
.reviews-list .poi-item {
  border-top: 1px solid #e2e2e2;
  background-color: #fff;
}
.poi-item .cover {
  margin-left: 32px;
  margin-top: 24px;
  float: left;
  width: 120px;
  height: 120px;
  overflow: hidden;
  position: relative;
}
img {
  border: 0;
  vertical-align: middle;
}
a {
  cursor: pointer;
}
.poi-item .poi-detail {
  min-height: 90px;
  margin-right: 55px;
  margin-left: 152px;
}
.poi-item .s-ding {
  position: absolute;
  top: 18px;
  right: 30px;
  width: 32px;
  text-align: center;
  font-size: 14px;
  color: #666;
  font-family: Verdana;
  line-height: 18px;
  font-weight: bold;
  white-space: nowrap;
  display: inline-block;
  letter-spacing: -1px;
}
.poi-item .title {
  margin: 24px 74px 8px 32px;
  font-size: 16px;
  color: #ff8a00;
  font-weight: normal;
  line-height: 20px;
}
.poi-item .title a {
  color: #ff8a00;
}
.poi-item .rating {
  height: 20px;
  line-height: 20px;
}
.review-score {
  width: 102px;
  height: 18px;
  background-position: -300px -60px;
}
.review-star,
.review-score {
  position: relative;
  float: left;
  display: inline-block;
  width: 127px;
  height: 23px;
  overflow: hidden;
  background: url(/images/path/v2/path-sprite27.png) no-repeat -300px 0;
  vertical-align: middle;
}
.review-score span.star4 {
  width: 81px;
}
.review-score span {
  height: 18px;
  background-position: -300px -85px;
}
.review-star span,
.review-score span {
  display: inline-block;
  height: 23px;
  background: url(/images/path/v2/path-sprite27.png) no-repeat -300px -30px;
  vertical-align: top;
}
.poi-item .rating .info {
  float: left;
  width: 426px;
  margin-left: 32px;
  margin-top: -24px;
  font-size: 14px;
  color: #999;
}
.poi-item .rating .info span {
  font-size: 12px;
  margin-left: 3px;
}
.poi-item .rating .tip {
  margin-left: 10px;
  font-size: 14px;
  color: #999;
}
.poi-item .poi-rev {
  margin-top: 10px;
  margin-left: 32px;

  line-height: 24px;
  font-size: 14px;
}
.poi-item .poi-photo {
  *zoom: 1;
  margin-top: 10px;
  margin-bottom: -5px;
}
.poi-item .poi-photo a {
  float: left;
  margin-right: 8px;
}
.poi-item .poi-btns {
  margin-top: 10px;
  *zoom: 1;
  text-align: right;
  margin-right: 32px;
  margin-bottom: 24px;
}
.poi-item .option {
  position: absolute;
  right: 65px;
  top: 22px;
  filter: alpha(opacity=0);
  opacity: 0;
  -webkit-transition: opacity 0.3s linear 0s;
  -moz-transition: opacity 0.3s linear 0s;
  -o-transition: opacity 0.3s linear 0s;
  -ms-transition: opacity 0.3s linear 0s;
  transition: opacity 0.3s linear 0s;
}
.poi-item .option a.btn-modfiy {
  width: 18px;
  background-position: -300px -170px;
}
.poi-item .option a {
  display: inline-block;
  margin-right: 10px;
  height: 18px;
  background: url(/images/path/v2/path-sprite27.png) no-repeat;
  overflow: hidden;
  vertical-align: middle;
}
.poi-item .poi-btns {
  margin-top: 10px;
  *zoom: 1;
  text-align: right;
}
.poi-item .reply {
  margin: 10px 0 0;
}
.hide {
  display: none;
}
.poi-item .reply .more {
  margin: 8px 0 5px;
}
.poi-item .reply a {
  text-decoration: underline;
  color: #ff8a00;
}
.loading {
  width: 130px;
  height: 50px;
  margin: 0 auto;
  margin-top: 10px;
}
.loading img {
  width: 20px;
  height: 20px;
  animation: loading 1.5s linear infinite;
  margin-right: 10px;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.deleteNotes {
  /* display: inline-block;
    width: 50px;
    height: 20px; */
  z-index: 900;
  color: #ff9d00;
  text-decoration: underline;
  margin-left: 92px;
  cursor: pointer;
}
</style>