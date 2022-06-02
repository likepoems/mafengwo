<template>
  <div>
    <HeaderLoggedIn></HeaderLoggedIn>
    <div class="traveldetail">
      <div class="topbannerwrap clearfix">
        <div
          class="topbanner setbg"
          :style="{
            'background-image': `url(${baseurl + traveldetail.readimg01})`,
          }"
        ></div>
        <div class="titlebg"></div>
        <div class="view_info">
          <div class="ticon">
            <h1>
              {{ traveldetail.notes_title }}
            </h1>
          </div>
        </div>
      </div>
      <div class="view_title clearfix" ref="topBars">
        <div class="vt_center">
          <div class="ding" @click.once="dianzan">
            <a href="javascript:void(0);">赞</a>
            <div class="num">{{ traveldetail.likenum }}</div>
          </div>
          <div class="person">
            <a href="javascript:void(0);" class="per_pic">
              <img :src="baseurl + traveldetail.headimage" />
            </a>
            <a href="javascript:void(0);" class="i-fengshou"></a>
            <strong
              ><a href="javascript:void(0);" class="per_name"
                >{{ traveldetail.tourist }}({{ traveldetail.place }})</a
              ></strong
            >
            <a href="javascript:void(0);" class="per_grade" title="LV.36"
              >LV.36</a
            >
            <a href="javascript:void(0);" class="guanzhu">
              <img src="~@/assets/detail/btn_sfollow.gif" title="关注TA" />
            </a>
            <div class="vc_time">
              <span class="time">{{ traveldetail.writetime }}</span>
              <span
                ><i class="ico_view"></i>{{ traveldetail.visible }}/{{
                  traveldetail.visibleagin
                }}</span
              >
            </div>
          </div>
          <div class="bar_share">
            <div class="bs_share">
              <a href="javascript:void(0);" title="分享" class="bs_btn">
                <i></i>
                <span>360</span>
                <strong>分享</strong>
              </a>
            </div>
            <div class="bs_collect">
              <a href="javascript:void(0);" title="收藏" class="bs_btn">
                <i></i>
                <span>6028</span>
                <strong>收藏</strong>
              </a>
            </div>
          </div>
          <div class="music_botton" @click="changePic">
            <a href="javascript:void(0);">
              <audio
                preload="auto"
                loop
                id="audio"
                :src="require('@/assets/detail/双笙 (陈元汐) - 故梦.mp3')"
              ></audio>
              <img
                src="~@/assets/detail/music.gif"
                v-show="!isPlay"
                title="暂停播放"
              />
              <img
                src="~@/assets/detail/stop.png"
                class="stop"
                v-show="isPlay"
                title="开始播放"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="view clearfix">
        <div class="view_con">
          <div class="travel_directory">
            <div class="tarvel_dir_list clearfix">
              <ul>
                <li class="time">
                  出发时间<span>/</span>{{ traveldetail.start }}<i></i>
                </li>
                <li class="day">
                  出行天数<span>/</span>{{ traveldetail.days }} 天
                </li>
                <li class="people">
                  人物<span>/</span>{{ traveldetail.method }}
                </li>
                <li class="cost">
                  人均费用<span>/</span>{{ traveldetail.price }}RMB
                </li>
              </ul>
            </div>
          </div>
          <div class="vc_article clearfix">
            <div class="va_con">
              <div class="box">
                <div class="add_pic" id="skip01">
                  <a href="javascript:void(0);" class="img">
                    <img :src="baseurl + traveldetail.readimg01" />
                  </a>
                </div>
                <span class="pic_tag">
                  <a href="javascript:void(0);">
                    <i class="house"></i>{{ traveldetail.place }}
                  </a>
                </span>
                <p class="show_word">{{ traveldetail.readme01 }}</p>
                <div class="add_pic" id="skip02">
                  <a href="javascript:void(0);" class="img">
                    <img :src="baseurl + traveldetail.readimg02" />
                  </a>
                </div>
                <span class="pic_tag">
                  <a href="javascript:void(0);">
                    <i class="house"></i>{{ traveldetail.place }}
                  </a>
                </span>
                <p class="show_word">{{ traveldetail.readme02 }}</p>
                <div class="add_pic" id="skip03">
                  <a href="javascript:void(0);" class="img">
                    <img :src="baseurl + traveldetail.readimg03" />
                  </a>
                </div>
                <span class="pic_tag">
                  <a href="javascript:void(0);">
                    <i class="house"></i>{{ traveldetail.place }}
                  </a>
                </span>
                <p class="show_word">{{ traveldetail.readme03 }}</p>
              </div>
            </div>
            <div class="vc_total">
              本篇游记共含<span>200</span>个文字，<span>3</span>张图片。帮助了<b
                style="font-weight: inherit"
                >2</b
              >名<b style="font-weight: inherit">{{ traveldetail.place }}</b
              >游客。
              <a class="r-report">举报</a>
            </div>
          </div>
          <div class="note_reply">
            <div class="mfw-cmt">
              <div class="mcmt-info">
                <div class="mcmt-photo">
                  <img src="~@/assets/detail/user01.png" />
                </div>
                <div class="mcmt-user">
                  <a href="javascript:void(0);" class="name">ciugiyahala</a>
                  <a href="javascript:void(0);" class="level">LV.3</a>
                  <a href="javascript:void(0);" class="guanzhu">
                    <img src="~@/assets/detail/btn_sfollow.gif" />
                  </a>
                </div>
              </div>
              <div class="mcmt-con-wrap clearfix">
                <div class="mcmt-con">
                  <div class="mcmt-word">
                    <p>作者是不是太有知识了~</p>
                  </div>
                </div>
              </div>
              <div class="mcmt-bot">
                <div class="time">2019-03-18 19:04</div>
                <div class="form">
                  此评论来自<i></i
                  ><a href="javascript:void(0);">马蜂窝自由行APP</a>
                </div>
                <div class="option">
                  <a>举报</a>
                </div>
              </div>
            </div>
          </div>
          <div class="mcmt-reply-wrap">
            <div class="mcmt-tab">
              <li>评论<i></i></li>
            </div>
            <div class="mcmt-tab-con">
              <div class="photo-con">
                <a href="javascript:void(0);">
                  <img src="~@/assets/detail/user.png" />
                </a>
              </div>
              <el-form :model="form">
                <div class="reply-con">
                  <el-input
                    type="textarea"
                    :rows="12"
                    placeholder="请输入内容"
                    v-model="form.text"
                  >
                  </el-input>
                </div>
                <div class="reply-submit">
                  <el-button type="submit" class="btn_submit" @click="onSubmit"
                    >发表评论</el-button
                  >
                </div>
              </el-form>
            </div>
          </div>
        </div>
        <div class="view_side" ref="sideBox">
          <div class="destination">
            <div class="title">相关目的地：</div>
            <div class="destination_box">
              <div class="imgcon">
                <img src="~@/assets/detail/as1.jpeg" />
                <strong>{{ traveldetail.place }}</strong>
              </div>
              <div class="nums clearfix">有<strong>200</strong>张照片</div>
            </div>
            <div class="destination_box">
              <div class="boxwrap">
                <div class="imgcon">
                  <img src="~@/assets/detail/as2.jpeg" />
                  <i class="icons"></i>
                </div>
                <div class="date">{{ traveldetail.start }} 蜂首纪念</div>
              </div>
            </div>
            <div class="destination_box">
              <div class="boxwrap">
                <div class="imgcon">
                  <img src="~@/assets/detail/as3.jpeg" />
                  <i class="icons"></i>
                </div>
                <div class="date">{{ traveldetail.place }} 宝藏纪念</div>
              </div>
            </div>
          </div>
          <div class="gonglve">
            <div class="title">相关攻略</div>
            <el-carousel
              trigger="click"
              height="160px"
              indicator-position="outside"
            >
              <el-carousel-item
                v-for="(item, index) in gonglve_list"
                :key="index"
              >
                <a href="javascript:void(0);">
                  <img :src="item.img" />
                  <span class="num"><i></i>{{ item.nums }}</span>
                  <h3>{{ item.cons }}</h3>
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div
            class="aboutNotes"
            :class="sideBoxFixed == true ? 'isFixed' : ''"
          >
            <div class="notes">
              <div class="title">相关游记</div>
              <el-carousel
                trigger="click"
                height="160px"
                indicator-position="outside"
              >
                <el-carousel-item
                  v-for="(item, index) in notes_list"
                  :key="index"
                >
                  <a href="javascript:void(0);">
                    <img :src="item.img" />
                    <span class="num"><i></i>{{ item.nums }}</span>
                    <h3>{{ item.cons }}</h3>
                  </a>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="notes_catalog_wrap" ref="notes_tips">
              <div class="notes_catalog">
                <el-scrollbar style="height: 100%">
                  <ul class="catalog_content">
                    <li>
                      <span class="catalog_num">01/</span>
                      <a href="#skip01">{{ traveldetail.readme01 }}</a>
                    </li>
                    <li>
                      <span class="catalog_num">02/</span>
                      <a href="#skip02">{{ traveldetail.readme02 }}</a>
                    </li>
                    <li>
                      <span class="catalog_num">03/</span>
                      <a href="#skip03">{{ traveldetail.readme03 }}</a>
                    </li>
                  </ul>
                </el-scrollbar>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="float-bar" v-show="topBarsFixed">
        <div class="content">
          <div class="bar-main">
            <div class="bread-nav">
              <a href="javascript:void(0);" class="circle_bar">
                <i></i>
              </a>
              <div class="bread-con">
                <a href="javascript:void(0);"
                  >{{ traveldetail.place }}旅游攻略</a
                >&nbsp;/&nbsp;
                <a href="javascript:void(0);"
                  >十二天 | 十座古村落 | SAEVOM徽州独行...</a
                >
              </div>
            </div>
          </div>
          <div class="bar_share">
            <div class="bs_share">
              <a href="javascript:void(0);" class="bs_btn">
                <i></i>
                <span>360</span>
              </a>
            </div>
            <div class="bs_collect">
              <a href="javascript:void(0);" class="bs_btn">
                <i></i>
                <span>6028</span>
              </a>
            </div>
            <div class="quick_reply">
              <a href="javascript:void(0);" class="bs_btn">
                <i></i>
                <span>2</span>
              </a>
            </div>
            <div class="music_botton" @click="changePic">
              <a href="JavaScript:;">
                <audio
                  preload="auto"
                  loop
                  id="audio"
                  :src="require('@/assets/detail/双笙 (陈元汐) - 故梦.mp3')"
                ></audio>
                <img src="~@/assets/detail/music.gif" v-show="!isPlay" />
                <img
                  src="~@/assets/detail/stop.png"
                  class="stop"
                  v-show="isPlay"
                />
              </a>
            </div>
            <div class="ding" @click.once="dianzan">
              <a href="javascript:void(0);">赞</a>
              <div class="num">{{ traveldetail.likenum }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
import HeaderLoggedIn from "@/components/HeaderLoggedIn";
import BackTop from "@/views/cds/BackTop";
export default {
  name: "TravelDetail",
  components: {
    HeaderLoggedIn,
    BackTop,
  },
  data() {
    return {
      baseurl: "http://backqianlixun.likepoems.com/",
      form: {
        text: "",
      },
      sideBoxFixed: false, // 侧边栏
      topBarsFixed: false, // 头部导航
      isPlay: false,
      gonglve_list: [
        {
          nums: 164,
          img: require("@/assets/detail/b1.jpg"),
          cons: "有种情怀叫“水墨宏村”，时隔16年再见，白墙黑瓦依旧",
        },
        {
          nums: 677,
          img: require("@/assets/detail/b2.jpg"),
          cons: "《 夢：走遍中国 》NO 76 ：安徽  《 再见皖东南，邂逅波光潋滟，偶遇山水惊艳！》",
        },
        {
          nums: 6185,
          img: require("@/assets/detail/b3.jpg"),
          cons: "暑期之旅回放：安徽三大名山，山东泉城邹鲁",
        },
      ],
      notes_list: [
        {
          nums: 1821,
          img: require("@/assets/detail/n1.jpg"),
          cons: "安徽石台县仙寓山富硒村",
        },
        {
          nums: 92,
          img: require("@/assets/detail/n2.jpg"),
          cons: "安徽九华山与宏村之旅",
        },
        {
          nums: 2647,
          img: require("@/assets/detail/n3.jpg"),
          cons: "一溪水墨徽州地，千岛太平三清山",
        },
      ],
      traveldetail: {
        t_id: "",
        datetimes: "",
        days: "",
        head_img: "travelnotes/user01.jpg",
        headimage: "travelnotes/travelnoteshead01.jpg",
        likenum: "",
        timestr: "",
        method: "",
        notes_content: "",
        notes_title: "",
        place: "",
        price: "",
        readimg01: "travelnotes/travelnotesdetail01.jpg",
        readimg02: "travelnotes/travelnotesdetail02.jpg",
        readimg03: "travelnotes/travelnotesdetail03.jpg",
        readme01: "",
        readme02: "",
        readme03: "",
        sight_img: "travelnotes/travelnotes01.jpg",
        start: "",
        tourist: "",
        visible: "",
        visibleagin: "",
        writetime: "",
      },
    };
  },
  mounted() {
    this.$parent.header(false);
    document.addEventListener("scroll", this.ScrollHandler);
    this.playMusic();
    this.getdata();
  },
  destroyed() {
    document.removeEventListener("scroll", this.ScrollHandler);
  },
  methods: {
    ScrollHandler() {
      let top1 = this.$refs.sideBox.getBoundingClientRect().top;
      let top2 = this.$refs.topBars.getBoundingClientRect().top;
      if (top1 <= -880 && top1 >= -2200) {
        this.sideBoxFixed = true;
      } else {
        this.sideBoxFixed = false;
      }
      if (top2 <= -142) {
        this.topBarsFixed = true;
      } else {
        this.topBarsFixed = false;
      }
    },
    audioAutoPlay() {
      this.isPlay = !this.isPlay;
      document.removeEventListener("touchstart", this.audioAutoPlay);
    },
    playMusic() {
      // 自动播放音乐
      let oAudio = document.querySelector("#audio");
      oAudio.onended = function () {
        oAudio.load();
        oAudio.play();
      };
      this.audioAutoPlay();
    },
    changePic() {
      let oAudio = document.querySelector("#audio");
      if (this.isPlay) {
        oAudio.play(); //开始播放
      } else {
        oAudio.pause(); //暂停播放
      }
      this.isPlay = !this.isPlay;
    },
    getdata() {
      let t_id = this.$route.query.t_id;
      this.$axios
        .get("/travelnotesdetail", { params: { t_id } })
        .then((response) => {
          let data = response.data[0];
          this.traveldetail = data;
          // console.log(this.traveldetail);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onSubmit() {
      let formdata = {
        conent: this.form.text,
      };
      console.log(formdata);
    },
    dianzan() {
      let username = this.$store.state.userinfo.username;
      // username ? username : (username = "likepoems"); // 设置默认的username
      if (!username) {
        this.$message({
          type: "warning",
          message: "要登录才能够点赞哦！",
        });
        this.$router.push("/loginAndRegiser/login/codeLogin");
      } else {
        let t_id = this.traveldetail.t_id;
        let likenum = this.traveldetail.likenum;
        let timestr = this.traveldetail.timestr; // 数据库中存放的点赞时间
        let nowtime = Date.now(); // 目前的点赞时间
        let nexttime = Date.now() + 86400; // 下次的点赞时间
        if (timestr <= nowtime) {
          likenum += 1;
          timestr = nexttime;
        }
        let fromdata = {
          t_id: t_id,
          timestr: nexttime,
          likenum: likenum,
        };
        console.log(fromdata);
        this.$axios.post("/todianzan", fromdata).then((res) => {
          if (res) {
            this.$message({
              type: "info",
              message: "一篇游记每天只能赞一次",
            });
          }
        });
      }
    },
  },
};
</script>

<style scoped>
div >>> .head-nav li:nth-child(7) a {
  background-color: #ff9d00;
  border-bottom: 2px solid #ff9d00;
  color: #fff !important;
}
div >>> .head-nav li:nth-child(7) a:hover {
  color: #fff !important;
}
.isFixed {
  position: fixed;
  right: 240px;
  top: 0px;
  /* z-index: 1; */
}
.topbannerwrap {
  height: 490px;
  background: url("~@/assets/detail/page_bg.jpg") center 0 no-repeat;
  background-size: cover;
  position: relative;
}
.topbanner {
  z-index: 1;
  background-image: url("~@/assets/detail/01bg.jpeg");
  background-size: cover;
  opacity: 1;
}
.setbg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-position: center 0;
  background-repeat: no-repeat;
  overflow: hidden;
}
.titlebg {
  height: 119px;
  background: url("~@/assets/detail/title_bg.png") 0 bottom repeat-x;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.5;
}
.view_info {
  width: 100%;
  height: 90px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 15;
}
.ticon {
  width: 830px;
  padding: 0 0 10px 150px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.ticon h1 {
  width: 710px;
  height: 80px;
  font-size: 26px;
  line-height: 80px;
  overflow: hidden;
  white-space: nowrap;
  overflow-wrap: normal;
}
.view_title {
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 16;
}
.vt_center {
  width: 1000px;
  margin: 0 auto;
}
.view_title .ding {
  position: absolute;
  right: 50%;
  top: -77px;
  margin-right: -455px;
  color: #fff;
  z-index: 4;
}
.ding a {
  width: 37px;
  height: 33px;
  display: inline-block;
  margin-bottom: 5px;
  text-align: center;
  line-height: 32px;
  background: url("~@/assets/detail/sprite_v35.png") -293px -236px no-repeat;
  color: #fff;
  text-shadow: 1px 0 1px #fcaf54;
  font-size: 18px;
}
.view_title .ding .num {
  font-size: 14px;
  font-weight: bold;
  font-family: Verdana, Arial, Helvetica, STHeiti;
  text-align: center;
}
.person {
  width: 480px;
  padding: 20px 0 0 150px;
  float: left;
  position: relative;
}
.person a.per_pic {
  width: 120px;
  height: 120px;
  position: absolute;
  top: -80px;
  left: 0;
  z-index: 88;
}
.person a {
  display: inline-block;
  margin-right: 5px;
}
.person a.per_pic img {
  border-radius: 50%;
  height: 120px;
  width: 120px;
}
.person .i-fengshou,
.destination_box .icons {
  background-image: url("~@/assets/detail/notes-medal3@2x.png");
  background-size: 300px auto;
}
.person .i-fengshou {
  z-index: 100;
  width: 44px;
  height: 44px;
  position: absolute;
  left: 80px;
  top: 6px;
}
.person a.per_name {
  color: #ff7200;
  font-size: 14px;
  font-weight: normal;
}
.person a.per_grade {
  color: #ea3c1a;
  font-family: Verdana, Arial, Helvetica, STHeiti;
  font-size: 10px;
  font-weight: bold;
  text-decoration: none;
}
.guanzhu img {
  width: 38px;
  height: 13px;
  border: 0;
}
.vc_time {
  color: #acacac;
  display: inline;
  margin-left: 10px;
}
.vc_time .time,
.vc_time span {
  font-family: Verdana, Arial, Helvetica, STHeiti;
}
.vc_time span {
  display: inline-block;
  margin-right: 10px;
}
.vc_time span i {
  width: 18px;
  height: 14px;
  display: inline-block;
  background: url("~@/assets/detail/sprite_v35.png") -51px -327px no-repeat;
  margin-right: 4px;
  vertical-align: -2px;
}
.bs_collect,
.bs_share {
  float: right;
}
.view_title .bs_collect,
.view_title .bs_share {
  width: 120px;
  height: 65px;
  padding-top: 15px;
  text-align: center;
  border-left: 1px solid #e8e8e6;
}
.view_title .bs_share {
  border-right: 1px solid #e8e8e6;
}
.view_title a.bs_btn i {
  display: block;
  margin: 0 auto 7px;
}
.bar_share a.bs_btn {
  line-height: 24px;
  font-size: 14px;
  color: #666;
  width: 80px;
  position: relative;
  z-index: 1;
}
.bs_collect a.bs_btn,
.bar_share a.bs_btn {
  display: inline-block;
  text-align: center;
}
.bs_share a.bs_btn i,
.bs_collect a.bs_btn i {
  width: 25px;
  height: 24px;
  background: url("~@/assets/detail/notes-share-collect@2x.png") no-repeat;
  background-size: 100px auto;
}
.bs_share a.bs_btn i {
  background-position: -60px 0;
}
.music_botton {
  float: right;
  margin: 18px 30px 0 0;
}
.music_botton a {
  width: 44px;
  height: 44px;
  display: block;
  background: url("~@/assets/detail/nn_sprite_v25.png") -354px -196px no-repeat;
  position: relative;
}
.music_botton a img {
  position: absolute;
  left: 13px;
  bottom: 14px;
  overflow: hidden;
}
.music_botton a .stop {
  width: 18px;
  height: 20px;
  bottom: 12px;
}
/*  */
.view {
  position: relative;
  width: 1000px;
  margin: 40px auto 20px;
}
.view_con {
  width: 680px;
  float: left;
}
.travel_directory {
  border: 1px dashed #d7d7d7;
  padding-bottom: 18px;
  width: 100%;
  margin-bottom: 30px;
  border-radius: 4px;
  position: relative;
}
.tarvel_dir_list {
  margin-left: 20px;
}
.tarvel_dir_list ul {
  width: 100%;
}
.tarvel_dir_list ul li {
  width: 170px;
  margin-top: 18px;
  float: left;
  display: inline;
  font-size: 14px;
  height: 22px;
  line-height: 22px;
  color: #666;
  padding-left: 5%;
  background: url("~@/assets/detail/151204sprite1.png") no-repeat;
  cursor: pointer;
}
.tarvel_dir_list ul li span {
  color: #ff9d00;
  margin: 0 5px;
}
.tarvel_dir_list ul li.time {
  background-position: -22px 0;
}
.tarvel_dir_list ul li.day {
  background-position: -22px -22px;
}
.tarvel_dir_list ul li.people {
  background-position: -22px -44px;
}
.tarvel_dir_list ul li.cost {
  background-position: -22px -66px;
}
/*  */
.va_con,
.va_con .show_word {
  line-height: 28px;
  font-size: 15px;
  color: #444;
  margin-bottom: 20px;
}
.va_con .show_word a,
.va_con .sm_title a {
  text-decoration: underline;
}
.va_con .sm_title {
  margin-bottom: 20px;
  margin-top: -30px;
}
.add_pic,
.video_wrapper {
  position: relative;
  background-color: #fff;
  margin-bottom: 18px;
}
.add_pic .img {
  display: block;
}
.box img {
  height: 382px;
  width: 680px;
  background: rgb(252, 242, 220);
  display: block;
  border: 0;
}
.va_con .pic_tag {
  width: 600px;
  padding-left: 0;
  margin: 8px 0 18px 0;
  line-height: 24px;
  display: block;
}
.pic_tag,
.pic_tag a {
  color: #999;
  font-size: 12px;
}
.pic_tag i {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: -6px;
}
.pic_tag i.house {
  background: url("~@/assets/detail/pic-tag_2x.png") no-repeat;
  background-position: -25px 0;
  background-size: 175px;
}
.show_title {
  margin: 20px 0;
  position: relative;
}
.show_title h2 {
  height: 50px;
  overflow: hidden;
  color: #222;
  font-size: 24px;
  line-height: 50px;
  background: 0;
}
.vc_total {
  padding-top: 15px;
  border-top: 1px solid #e2e2e2;
  color: #333;
  margin-top: 40px;
}
.r-report {
  float: right;
  color: #999;
}
.note_reply {
  width: 680px;
  margin: 60px auto;
}
/*  */
.mfw-cmt {
  width: 100%;
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 24px;
}
.mcmt-info {
  width: 100%;
  height: 48px;
  line-height: 48px;
  background-color: #f6f6f6;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
}
.mcmt-photo img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  float: left;
  margin-right: 20px;
  position: relative;
}
.mcmt-user {
  float: left;
}
.mcmt-user .name {
  color: #ff8a00;
  margin-right: 6px;
}
.mcmt-user .level {
  color: #ef523d;
  margin-right: 6px;
}
.mcmt-other {
  float: right;
  padding-right: 10px;
}
.mcmt-other .floor {
  font-size: 12px;
  color: #999;
}
.mcmt-con-wrap {
  padding-left: 68px;
  margin-top: 12px;
  position: relative;
}
.mcmt-con {
  width: 486px;
  float: left;
}
.mcmt-word {
  color: #666;
  font-size: 14px;
  margin-top: 10px;
}
.mcmt-bot {
  padding-left: 68px;
  height: 24px;
  line-height: 24px;
  color: #999;
  margin-top: 16px;
}
.mcmt-bot .time {
  float: left;
  margin-right: 12px;
}
.mcmt-bot .form {
  float: left;
  position: relative;
}
.mcmt-bot .form i {
  background: url("~@/assets/detail/sprite_2x_v2.png") no-repeat;
  background-size: 120px auto;
}
.mcmt-bot .form i {
  display: inline-block;
  vertical-align: middle;
  margin-top: -2px;
  width: 16px;
  height: 16px;
  background-position: 0 -82px;
  margin-right: 3px;
  margin-left: 10px;
}
.mcmt-bot .form a {
  color: #ff9d00;
}
.mcmt-bot .option {
  float: right;
  padding-right: 5px;
}
.mcmt-bot .option a {
  margin: 0 5px;
}
.mcmt-bot .option a:nth-child(2) {
  color: #ff9d00;
}
.mcmt-reply-wrap {
  margin-top: 30px;
  margin-bottom: 50px;
}
.mcmt-tab {
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid #e4e4e4;
  margin-left: 68px;
  margin-bottom: 20px;
}
.mcmt-tab li {
  float: left;
  position: relative;
  width: 180px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  color: #ff9d00;
  border-bottom: 3px solid #ff9d00;
}
.mcmt-tab-con {
  padding-left: 68px;
  position: relative;
}
.photo-con {
  width: 48px;
  height: 48px;
  position: absolute;
  top: 0;
  left: 0;
}
.photo-con img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.reply-submit {
  float: right;
  margin-top: 20px;
}
.btn_submit {
  width: 160px;
  height: 40px;
  border: 0 none;
  background-color: #ff9e00;
  color: #fff;
}
.btn_submit:hover {
  background-color: #ff7200;
  color: #fff;
}
/*  */
.view_side {
  width: 240px;
  float: right;
}
.view_side .destination {
  position: relative;
}
.view_side .destination .title,
.view_side .gonglve .title,
.view_side .notes .title {
  margin-bottom: 12px;
  font-size: 14px;
}
.view_side .destination_box .imgcon {
  margin-bottom: 20px;
  font-size: 14px;
  width: 240px;
  position: relative;
  overflow: hidden;
}
.view_side .destination_box .imgcon img {
  width: 230px;
  cursor: pointer;
}
.view_side .destination_box .imgcon strong {
  position: absolute;
  left: 10px;
  right: 10px;
  color: #fff;
  font-size: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 1;
  bottom: 12px;
  font-weight: normal;
}
.view_side .destination_box .nums {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 26px;
}
.view_side .destination_box .nums strong {
  font-size: 22px;
  font-family: Arial;
  margin: 0 3px;
  position: relative;
  font-weight: 600;
  top: 2px;
}
.view_side .destination_box .icons {
  position: absolute;
  left: 3px;
  top: -6px;
  width: 44px;
  height: 46px;
}
.view_side .destination_box .date {
  height: 48px;
  padding-left: 5px;
  font-size: 14px;
}
.view_side .destination_box .boxwrap {
  padding: 4px 4px 0;
  border: 1px solid #d6d6d6;
  margin: 40px 0 22px;
  height: 200px;
  font-size: 14px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.08);
}
.view_side .gonglve,
.view_side .notes {
  position: relative;
  height: auto;
}
.view_side .gonglve .num,
.view_side .notes .num {
  color: #fff;
  position: absolute;
  left: 5px;
  top: 10px;
  font-size: 12px;
  font-family: "Microsoft Yahei";
}
.view_side .gonglve i,
.view_side .notes i {
  display: inline-block;
  margin-right: 5px;
  width: 21px;
  height: 16px;
  background: url("~@/assets/detail/icon-view-white.png") no-repeat 0 0;
  vertical-align: middle;
}
.view_side .gonglve h3,
.view_side .notes h3 {
  position: absolute;
  left: 7px;
  right: 7px;
  bottom: 5px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #fff;
}
.view_side >>> .el-carousel__button {
  width: 72px;
  height: 4px;
  background-color: #c0c4cc;
}
.view_side >>> .el-carousel__indicator.is-active button {
  background-color: #ff9d00;
}
.notes {
  margin-top: 30px;
}
.notes_catalog_wrap {
  width: 240px;
}
.notes_catalog {
  position: relative;
  height: 315px;
}
.notes_catalog >>> .el-scrollbar__wrap {
  overflow-x: hidden;
}
.catalog_content {
  line-height: 26px;
  font-size: 14px;
}
.catalog_content li {
  margin-bottom: 10px;
  padding-left: 30px;
  overflow: hidden;
  width: 90%;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.catalog_content .catalog_num {
  float: left;
  margin-left: -30px;
  color: #ccc;
}
.catalog_content li a {
  color: #999;
}
/*  */
.float-bar {
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  z-index: 888;
}
.float-bar .content {
  width: 1000px;
  margin: 0 auto;
  position: relative;
}
.float-bar .bar-main {
  width: 500px;
  float: left;
  padding: 3px 10px 4px 0;
}
.float-bar .bread-nav {
  width: 570px;
  height: 55px;
  float: left;
  position: relative;
}
.float-bar .bar-main .circle_bar {
  display: block;
  margin-top: 10px;
  float: left;
  position: relative;
  width: 36px;
  height: 36px;
  background: url("~@/assets/detail/nn_sprite_v25.png") no-repeat -264px -266px;
}
.float-bar .circle_bar i {
  width: 36px;
  height: 36px;
  position: absolute;
  left: 0;
  top: 0;
  background-image: url("~@/assets/detail/circle_per1.png");
}
.float-bar .bread-nav .bread-con {
  width: 525px;
  float: left;
  font-size: 14px;
  color: #666;
  padding-top: 17px;
  margin-left: 9px;
}
.float-bar .bread-nav .bread-con a {
  color: #ff9d00;
}
.float-bar .bar_share {
  margin-top: 18px;
  position: relative;
  width: 420px;
  float: right;
}
.float-bar .bs_collect,
.float-bar .bs_share {
  display: inline;
  float: right;
}
.float-bar .bar_share a.bs_btn {
  display: block;
  line-height: 24px;
  font-size: 14px;
  color: #666;
  width: 80px;
  position: relative;
  z-index: 1;
  text-align: left;
}
.float-bar .bar_share a.bs_btn i {
  vertical-align: -5px;
  margin-right: 6px;
}
/* .bar_share a.bs_btn i {
    background: url("~@/assets/detail/notes-share-collect@2x.png") no-repeat;
    background-size: 100px auto;
} */
.float-bar .bs_share a.bs_btn i {
  background-position: -60px 0;
}
.float-bar .bar_share a.bs_btn i {
  width: 25px;
  height: 24px;
  display: inline-block;
}
.float-bar .quick_reply {
  float: right;
  margin-top: 2px;
  position: relative;
}
.float-bar .bar_share .quick_reply a i {
  width: 24px;
  height: 22px;
  background: url("~@/assets/detail//nn_sprite_v25.png") no-repeat -233px -267px !important;
  float: left;
}
.float-bar .music_botton {
  float: right;
  margin: 4px 22px 0 0;
}
.float-bar .music_botton a {
  background: none;
}
.float-bar .music_botton img {
  top: 0;
  left: 20px;
}
.float-bar .ding {
  position: relative;
  padding-right: 12px;
  padding-top: 0;
  top: -4px;
  right: auto;
}
.float-bar .ding a {
  float: right;
  width: 37px;
  height: 33px;
  margin-bottom: 5px;
  text-align: center;
  line-height: 32px;
  font-size: 18px;
}
.float-bar .ding .num {
  padding: 10px 8px 0 0;
  width: 60px;
  font-size: 14px;
  float: right;
  text-align: right;
  font-weight: 800;
  color: #888;
  font-family: Verdana, Arial, Helvetica;
}
</style>