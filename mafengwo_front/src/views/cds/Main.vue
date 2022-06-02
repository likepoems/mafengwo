<template>
  <div>
    <div class="mfw-focus">
      <div class="show-slider">
        <ul class="show-image">
          <li
            v-for="(item, index) in sliderdata"
            :key="index"
            :class="{ actli: index == currentIndex }"
          >
            <a href="javascript:;" class="show-pic">
              <img :src="item.src" />
            </a>
            <a href="javascript:;" class="show-title dark">
              <div class="date">
                <span class="day">{{ now_day }}</span
                >/{{ now_month }}.{{ now_year }}
              </div>
              <h3>{{ item.h3con }}</h3>
            </a>
            <p class="show-info">
              图片来自于
              <font color="#FF9900">
                <a href="javascript:;">{{ item.place }}</a> </font
              >，此目的地共收藏了
              <font color="#FF9900">
                <a href="javascript:;">{{ item.place_picnums }}</a> </font
              >张 <a href="javascript:;">{{ item.place }}</a
              >图片。本片由
              <font color="#FF9900">
                <a href="javascript:;">{{ item.netuser }}</a> </font
              >荣誉出品！
            </p>
          </li>
        </ul>
        <ul class="show-nav">
          <li
            v-for="(item, index) in sliderdata"
            :key="index"
            :class="{ actnav: index == currentIndex }"
            @click="goto(index)"
          >
            <a href="javascript:;"><img :src="item.src2" /></a>
            <span></span>
          </li>
        </ul>
        <a class="show-more" href="javascript:;">历历在目</a>
      </div>
      <div class="search-container">
        <div class="search-group">
          <div class="searchtab">
            <ul class="clearfix">
              <li
                dataindex="0"
                :class="{ tabselected: tabnav == 0 }"
                @click="tabnav = 0"
              >
                <i></i>全部
              </li>
              <li
                dataindex="1"
                :class="{ tabselected: tabnav == 1 }"
                @click="tabnav = 1"
              >
                <i></i>目的地
              </li>
              <li
                dataindex="2"
                :class="{ tabselected: tabnav == 2 }"
                @click="tabnav = 2"
              >
                <i></i>酒店
              </li>
            </ul>
          </div>
          <div class="searchbar">
            <div class="search-wrapper">
              <div class="search-input">
                <input type="text" value="成都" />
              </div>
            </div>
            <div class="search-button" @click="searchtab">
              <a role="button" href="javascript:">
                <i class="icon-search"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mfw-container clearfix">
      <div class="sales-nav clearfix">
        <a class="sales-navItem bgsales" href="javascript:;">
          <div class="sales-navtitle">自由行</div>
          <div class="sales-navsubtitle">旅行就要更自在</div>
        </a>
        <a class="sales-navItem bggroup" href="javascript:;">
          <div class="sales-navtitle">跟团游</div>
          <div class="sales-navsubtitle">行程透明省心游</div>
        </a>
        <a class="sales-navItem bglocaldeals" href="javascript:;">
          <div class="sales-navtitle">当地游</div>
          <div class="sales-navsubtitle">最地道的玩法体验</div>
        </a>
        <a class="sales-navItem bgflight" href="javascript:;">
          <div class="sales-navtitle">机票</div>
          <div class="sales-navsubtitle">特惠一折起</div>
        </a>
        <a class="sales-navItem bghotel" href="javascript:;">
          <div class="sales-navtitle">订酒店</div>
          <div class="sales-navsubtitle">一键全网比价</div>
        </a>
        <a class="sales-navItem bgvisa" href="javascript:;">
          <div class="sales-navtitle">签证</div>
          <div class="sales-navsubtitle">出签率高服务佳</div>
        </a>
        <a class="sales-navItem bgship" href="javascript:;">
          <div class="sales-navtitle">邮轮</div>
          <div class="sales-navsubtitle">移动的海上城堡</div>
        </a>
      </div>
      <div class="mfw-wrapper">
        <div class="mfw-travelnotes">
          <div class="navbar clearfix">
            <ul class="tn-nav">
              <li
                class="tn-nav-hot"
                :class="{ active: curnav == 0 }"
                @click="curnav = 0"
              >
                <a href="javascript:;">热门游记</a>
              </li>
              <li
                class="tn-nav-new"
                :class="{ active: curnav == 1 }"
                @click="curnav = 1"
              >
                <a href="javascript:;">最新发表</a>
              </li>
            </ul>
            <div class="tn-write">
              <a class="btn-add" @click="travelwriting"><i></i>写游记</a>
            </div>
          </div>
          <div class="tn-content" :class="{ active: curnav == 0 }">
            <div class="tn-list">
              <div
                class="tn-item clearfix"
                v-for="(item, index) in travelnotes"
                :key="index"
                @click="godetail(item.t_id)"
              >
                <div class="tn-image">
                  <a href="javascript:;">
                    <img :src="baseUrl + item.sight_img" />
                  </a>
                </div>
                <div class="tn-wrapper">
                  <dl>
                    <dt>
                      <a href="javascript:;">{{ item.notes_title }} </a>
                    </dt>
                    <dd>
                      <a href="javascript:;">
                        {{ item.notes_content.slice(0, 100) + "..." }}
                      </a>
                    </dd>
                  </dl>
                  <div class="tn-extra">
                    <span class="tn-ding">
                      <a class="btn-ding" href="javascript:;"></a>
                      <em>{{ item.likenum }}</em>
                    </span>
                    <span class="tn-place">
                      <i></i>
                      <a href="javascript:void(0);">{{ item.place }}</a
                      >，by
                    </span>
                    <span class="tn-user">
                      <a href="javascript:;">
                        <img :src="baseUrl + item.head_img" alt="touxiang" />
                        {{ item.tourist }}
                      </a>
                    </span>
                    <span class="tn-nums"
                      ><i></i>{{ item.visible }}/{{ item.visibleagin }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="pageselect" align="right">
              <div class="pagination-list">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-size="pageSize"
                  :current-page="currentPage"
                  :total="total"
                  :page-sizes="[4, 8]"
                  layout="total, sizes, prev, pager, next"
                  background
                >
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mfw-aside">
        <div class="asidebox tips">
          <a href="javascript:;">
            <img src="@/assets/main/index-link-v2.png" alt="pic" />
          </a>
        </div>
        <div class="asidebox travel">
          <div class="asidebox-hd">
            <h2 class="hd-title"><a href="javascript:;">旅行家专栏</a></h2>
            <a class="hd-right" href="javascript:;">专栏首页</a>
          </div>
          <div class="asidebox-bd">
            <ul class="slide-ul" ref="travel_list">
              <li v-for="(item, index) in traveldata" :key="index">
                <div class="image">
                  <a href="javascript:;">
                    <img :src="item.src" />
                  </a>
                </div>
                <h3>
                  <a href="javascript:;"> {{ item.n_title }}</a>
                </h3>
                <p>
                  {{ item.n_content }}
                </p>
              </li>
            </ul>
            <ol class="slide-ol">
              <li
                v-for="(item, index) in traveldata"
                :key="index"
                :class="{ active: index == loopIndex - 1 }"
              ></li>
            </ol>
          </div>
        </div>
        <div class="asidebox gonglve">
          <div class="asidebox-hd">
            <h2 class="hd-title">旅游攻略推荐</h2>
            <a class="hd-right" href="javascript:;">更多</a>
          </div>
          <div class="asidebox-bd">
            <div class="gonglve-item">
              <div class="img">
                <a href="javascript:;">
                  <img src="@/assets/main/gonglue.jpeg" />
                  <span class="mark">自由行攻略</span>
                </a>
              </div>
              <h3>
                <a href="javascript:;">拉市海一日攻略，带你走进鸟的天堂。</a>
              </h3>
            </div>
          </div>
        </div>
        <div class="asidebox activity">
          <div class="asidebox-hd">
            <h2 class="hd-title">最新活动</h2>
            <a class="hd-right" href="javascript:;">查看全部></a>
          </div>
          <div class="asidebox-bd">
            <div class="gonglve-item">
              <div class="img">
                <a href="javascript:;">
                  <img src="@/assets/main/activity.jpeg" />
                </a>
              </div>
              <h3>
                <a href="javascript:;">马蜂窝拍卖行</a>
              </h3>
              <p>每周二：拍精美实物奖品！</p>
            </div>
          </div>
        </div>
        <div class="asidebox future">
          <div class="asidebox-hd">
            <h2 class="hd-title">未知旅行实验室</h2>
            <a class="hd-right" href="javascript:;">查看更多></a>
          </div>
          <div class="asidebox-bd">
            <div class="img">
              <a href="javascript:;">
                <img src="@/assets/main/future.jpeg" />
              </a>
            </div>
          </div>
        </div>
        <div class="asidebox addus">
          <div class="asidebox-hd">
            <h2 class="hd-title">加入马蜂窝</h2>
            <a class="hd-right" href="javascript:;">查看更多></a>
          </div>
          <div class="asidebox-bd">
            <div class="img">
              <a href="javascript:;">
                <img src="@/assets/main/addus.jpeg" />
              </a>
            </div>
          </div>
        </div>
        <div class="asidebox news">
          <div class="hd-title">马蜂窝旅游网最新资讯</div>
          <ul class="asidebox-bd">
            <li>
              04月07日<a href="javascript:;">马蜂窝“云旅游”直播的攻与守</a>
            </li>
            <li>04月01日<a href="javascript:;">马蜂窝的“云上战疫”</a></li>
            <li>
              02月19日<a href="javascript:;"
                >科技“战疫” ：马蜂窝大数据赋能旅游业</a
              >
            </li>
            <li>
              02月13日<a href="javascript:;"
                >陈罡：疫情下旅游业的“守恒与求变”</a
              >
            </li>
            <li>
              02月06日<a href="javascript:;">马蜂窝将退订完成率定为最高KPI</a>
            </li>
            <li>
              09月28日<a href="javascript:;"
                >马蜂窝国庆白领出游偏好调查：超7成在旅途中工作</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
import BackTop from "@/views/cds/BackTop";
export default {
  name: "Main",
  components: {
    BackTop,
  },
  data() {
    return {
      currentIndex: 0, //默认显示
      loopIndex: 1,
      curnav: 0,
      tabnav: 0,
      timer1: null, //定时器
      timer2: null, //定时器
      now_day: 26,
      now_month: "May",
      now_year: 2021,
      sliderdata: [
        {
          id: 1,
          src: require("@/assets/main/banner01.jpeg"),
          src2: require("@/assets/main/banner01.png"),
          h3con: "五一劳动节不劳动，走~到扬州吃茶搓澡去！",
          place: "扬州",
          place_picnums: 275669,
          netuser: "饭团karenchow",
        },
        {
          id: 2,
          src: require("@/assets/main/banner02.jpeg"),
          src2: require("@/assets/main/banner02.png"),
          h3con:
            "飞入心中的梦幻岛：圣托里尼！（圣岛小镇全记录+完美日落+写真大片）",
          place: "圣托里尼",
          place_picnums: 105842,
          netuser: "Fiorelady",
        },
        {
          id: 3,
          src: require("@/assets/main/banner03.jpeg"),
          src2: require("@/assets/main/banner03.png"),
          h3con: "72小时珠穆朗玛峰历险记（2021珠峰大本营最详细攻略）",
          place: "定日",
          place_picnums: 43677,
          netuser: "Kris陈瑞瑞",
        },
        {
          id: 4,
          src: require("@/assets/main/banner04.jpeg"),
          src2: require("@/assets/main/banner04.png"),
          h3con: "开着房车去新疆，独库公路+南疆20天自驾）",
          place: "新疆",
          place_picnums: 3054481,
          netuser: "sarah一直在路上",
        },
        {
          id: 5,
          src: require("@/assets/main/banner05.jpeg"),
          src2: require("@/assets/main/banner05.png"),
          h3con: "独行云南西北，听大自然写的诗（是摄影集啊！）",
          place: "云南",
          place_picnums: 6402098,
          netuser: "iceback",
        },
      ], // 轮播图
      traveldata: [
        {
          id: 1,
          src: require("@/assets/main/travel/1.jpeg"),
          n_title: "夏木尼，小王子的玫瑰城市",
          n_content:
            "夏木尼（Chamounix）是法国勃朗峰脚下最著名的小城，《小王子》里的玫瑰城市，世界登山运动的发源地。",
        },
        {
          id: 2,
          src: require("@/assets/main/travel/2.jpeg"),
          n_title: "暹粒油淋鱼",
          n_content:
            "默默等待，鱼上桌，迅速夹一口塞在嘴里——我就像个戒烟多日的老烟枪终于抽上了烟，心里的空洞瞬间被填满了。",
        },
        {
          id: 3,
          src: require("@/assets/main/travel/3.jpeg"),
          n_title: "西安：旧长安的画皮",
          n_content:
            "西安这座曾经的13朝古都，在今天更像旧长安的画皮，城墙完整绵延，一切就像一张唐画的影印本。",
        },
        {
          id: 4,
          src: require("@/assets/main/travel/4.jpeg"),
          n_title: "漫山岛",
          n_content:
            "漫山岛在第二条路上，满眼都是天赋，却偏爱挥霍青山绿水，用自己的方式过小日子，即便强行拖它起来，也得不到结果。",
        },
        {
          id: 5,
          src: require("@/assets/main/travel/5.jpeg"),
          n_title: "胡日尔镇的美术馆",
          n_content:
            "我最终从胡日尔的美术馆里带走了一幅画，画的是冬日的萨满岩，是日落时分。",
        },
      ],
      travelnotes: [],
      pageSize: 4, // 每页条数
      currentPage: 1, // 当前页
      total: 0, // 数据总条数
      t_id: 0,
      baseUrl: "http://127.0.0.1:5000/",
    };
  },
  methods: {
    autoplay() {
      // 主页背景图轮播
      this.timer1 = setInterval(() => {
        this.currentIndex++;
        if (this.currentIndex == this.sliderdata.length) {
          this.currentIndex = 0;
        }
      }, 2000);
    },
    goto(index) {
      // 主页背景图轮播
      this.currentIndex = index;
    },
    setdate() {
      // 主页左上角的日期
      let nowDate = new Date();
      this.now_day = nowDate.getDate();
      this.now_year = nowDate.getFullYear();
      this.now_month = nowDate.toDateString().split(" ")[1];
    },
    autoLoop() {
      // 旅行家专栏的轮播
      if (this.$refs.travel_list.style) {
        this.timer2 = setInterval(() => {
          this.$refs.travel_list.style.left = -260 * this.loopIndex + "px";
          this.$refs.travel_list.style.transition = "all 0.5s";
          this.loopIndex++;
          if (parseInt(this.$refs.travel_list.style.left) <= -1300) {
            this.$refs.travel_list.style.left = 0;
            this.loopIndex = 1;
          }
        }, 1500);
      }
    },
    // 分页获取数据
    getdata() {
      // 收集当前页码 和 每页显示条数
      let pageSize = this.pageSize;
      let currentPage = this.currentPage;
      let curnav = this.curnav;
      // 热门游记数据
      this.$axios
        .get("/travelnoteslist", {
          params: {
            pageSize,
            currentPage,
            curnav,
          },
        })
        .then((response) => {
          let { total, data } = response.data;
          this.total = total;
          this.travelnotes = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 每页显示条数改变 就会触发这个函数
    handleSizeChange(val) {
      // 保存每页显示的条数
      this.pageSize = val;
      // 调用分页函数
      this.getdata();
    },
    // 当前页码改变 就会触发这个函数
    handleCurrentChange(val) {
      // 保存当前页码
      this.currentPage = val;
      // 调用分页函数
      this.getdata();
    },
    godetail(id) {
      // this.$router.push(`/traveldetail/${id}`)
      this.$router.push({
        path: "/traveldetail",
        query: { t_id: id },
      });
    },
    travelwriting() {
      let username = this.$store.state.userinfo.username;
      // username ? username : (username = "likepoems"); // 设置默认的username
      if (!username) {
        this.$message({
          type: "warning",
          message: "要登录才能够发表游记哦！",
        });
        this.$router.push("/loginAndRegiser/login/codeLogin");
      } else {
        this.$router.push("/travelwriting");
      }
    },
    searchtab() {
      let val = this.tabnav;
      if (val == 1) {
        window.location.href = "/province";
        val == 0;
      }
      if (val == 2) {
        window.location.href = "/orderhotel";
        val == 0;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    next();
    if (this.timer1 && this.timer2) {
      clearInterval(this.timer1);
      clearInterval(this.timer2);
      this.timer1 = null;
      this.timer2 = null;
    }
  },
  created() {
    this.$nextTick(() => {
      this.autoplay();
      this.setdate();
      this.autoLoop();
      this.getdata();
      this.searchtab();
    });
  },
  watch: {
    curnav(val) {
      this.curnav = val;
      this.getdata();
    },
    tabnav(val) {
      this.tabnav = val;
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
.showcon {
  display: block !important;
}
.mfw-focus {
  position: relative;
  z-index: 20;
  margin-bottom: 20px;
  clear: both;
}
.show-slider {
  position: relative;
  overflow: hidden;
  background-color: #f1f4f5;
  height: 493px;
}
.show-slider .show-image {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 2;
}
.show-slider .show-pic {
  display: block;
  height: 100%;
}
.show-slider .show-image .actli {
  display: block;
}
.show-slider .show-image li {
  display: none;
}
.show-slider .show-image li img {
  width: 100%;
  margin: 0 !important;
}
.show-slider .show-title.dark {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
}
.show-slider .show-title {
  position: absolute;
  top: 25px;
  left: 50%;
  margin-left: -500px;
  color: #fff;
  font-size: 26px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  text-align: left;
  min-width: 1000px;
}
.show-slider .show-title .date {
  position: relative;
  width: 180px;
  font-size: 24px;
  overflow: hidden;
}
.show-slider .show-title .day {
  font-size: 38px;
}
.show-slider .show-title h3 {
  font-size: 26px;
  font-weight: normal;
}
.show-slider .show-image .show-info {
  position: absolute;
  left: 50%;
  bottom: 20px;
  margin-left: -320px;
  min-width: 630px;
  font-size: 14px;
  color: #fff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
  text-align: left;
  white-space: nowrap;
}
.show-slider .show-image .show-info a {
  color: rgb(255, 153, 0);
}
.show-slider .show-nav {
  position: absolute;
  right: 40px;
  top: 45%;
  margin-top: -166px;
  width: 110px;
  z-index: 2;
}
.show-slider .show-nav a > img {
  width: 110px;
  height: 62px;
}
.show-slider .show-nav .actnav span {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border: 2px solid #ff9d00;
  width: 106px;
  height: 58px;
  overflow: hidden;
  cursor: pointer;
}
.show-slider .show-nav li:first-child,
.show-slider .show-nav li:first-child span {
  border-radius: 0 5px 0 0;
}
.show-slider .show-nav li {
  height: 62px;
  margin-bottom: 6px;
  position: relative;
  overflow: hidden;
}
.show-slider .show-more {
  background-image: url("~@/assets/main/index-sprites.png");
  background-size: 200px;
  position: absolute;
  z-index: 2;
  right: 40px;
  top: 50%;
  margin-top: 160px;
  width: 110px;
  height: 35px;
  background-position: -60px -50px !important;
  line-height: 200px;
  overflow: hidden;
}
.search-container {
  position: absolute;
  bottom: 45px;
  left: 50%;
  margin-left: -320px;
  width: 632px;
  z-index: 5;
}
.search-group {
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
}
.searchtab {
  margin-bottom: 7px;
  color: #fff;
  line-height: 26px;
  font-size: 14px;
}
/* .searchtab ul{
  display: none;
} */
.searchtab li {
  float: left;
  display: inline;
  margin-right: 30px;
  cursor: pointer;
}
.searchtab .tabselected i {
  background-position: -60px -140px !important;
}
.searchtab i,
.search-group .icon-search {
  background: url("~@/assets/header/header-sprites.png") no-repeat;
  background-size: 200px;
}
.searchtab i {
  float: left;
  margin: 5px 5px 0 0;
  width: 16px;
  height: 16px;
  background-position: -60px -110px !important;
}
.searchbar {
  height: 46px;
  overflow: hidden;
}
.search-wrapper {
  float: left;
  width: 546px;
}
.search-group .search-input {
  height: 46px;
  overflow: hidden;
}
.search-group .search-input input {
  width: 504px;
  height: 46px;
  border: 0 none;
  padding: 0 21px;
  margin: 0;
  line-height: 46px;
  font-size: 16px;
  color: #666;
  border-radius: 4px;
}
.search-group .search-button {
  float: left;
  margin-left: 6px;
  width: 50px;
  height: 46px;
}
.search-group .search-button a {
  display: block;
  height: 46px;
  background-color: #ff9d00;
  border-radius: 4px;
  text-align: center;
}
.search-group .icon-search {
  display: inline-block;
  margin-top: 11px;
  width: 24px;
  height: 24px;
  background-position: 0 -110px !important;
  overflow: hidden;
  vertical-align: top;
}
.mfw-container {
  width: 1000px;
  margin: 0 auto;
}
.sales-nav {
  width: 100%;
  margin-bottom: 19px;
  font-size: 0;
  white-space: nowrap;
}
.sales-nav > a {
  text-align: left;
}
.sales-nav .sales-navItem {
  width: 127px;
  border: 1px solid #e5e5e5;
  background: url("~@/assets/main/main01.png") no-repeat;
  background-size: 104px auto;
  background-position-x: 59px;
}
.sales-nav .sales-navItem:hover {
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
}
.sales-navItem:first-child {
  margin-left: 0;
}
.sales-navItem {
  width: 154px;
  height: 47px;
  margin-left: 8px;
  padding-top: 8px;
  padding-left: 7px;
  display: inline-block;
  border-radius: 3px;
  cursor: pointer;
}
.sales-navItem .sales-navtitle {
  display: inline-block;
  height: 22px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: #333;
}
.sales-nav .sales-navsubtitle {
  color: #9d9d9d;
}
.sales-navItem .sales-navsubtitle {
  height: 16px;
  padding-top: 1px;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  color: #9d9d9d;
}
.sales-nav .bgsales {
  background-position-y: -651px;
}
.sales-nav .bgsales {
  background-position-y: -651px;
}
.sales-nav .bggroup {
  background-position-y: -24px;
}
.sales-nav .bglocaldeals {
  background-position-y: -129px;
}
.sales-nav .bgflight {
  background-position-y: -441px;
}
.sales-nav .bghotel {
  background-position-y: -546px;
}
.sales-nav .bgvisa {
  background-position-y: -335px;
}
.sales-nav .bgship {
  background-position-y: -233px;
}
/**/
.mfw-wrapper {
  float: right;
  width: 700px;
}
.mfw-travelnotes .navbar {
  margin-bottom: 20px;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e4e4e4;
}
.tn-nav {
  float: left;
}
.tn-nav li {
  float: left;
  width: 150px;
  display: inline;
  text-align: center;
}
.tn-nav li a {
  color: #333;
  font-size: 18px;
}
.tn-nav .active {
  padding-bottom: 6px;
  border-bottom: 3px solid #ff9d00;
  position: relative;
  z-index: 11;
}
.tn-nav .active a {
  color: #ff9d00;
}
.tn-nav .tn-nav-hot {
  /* width: 170px; */
}
.tn-menu {
  display: inline-block;
  margin-left: 7px;
  line-height: 20px;
  border: 1px solid #e5e5e5;
  color: #666;
  font-size: 12px;
  padding: 0 10px 0 8px;
  cursor: pointer;
  vertical-align: 2px;
}
.tn-menu-icon {
  float: left;
  margin: 6px 5px 0 0;
  width: 11px;
  height: 8px;
  background: no-repeat 0 -130px;
}
.tn-nav .tn-nav-new {
  /* width: 120px; */
}
.tn-write {
  float: right;
  width: 140px;
}
.tn-write .btn-add {
  display: block;
  height: 36px;
  background-color: #ff9d00;
  color: #fff;
  text-align: center;
  border-radius: 4px;
}
.tn-menu-icon,
.tn-write .btn-add i,
.tn-extra .btn-ding,
.tn-extra .tn-nums i,
.tn-extra .tn-place i {
  background-image: url("~@/assets/main/index-sprites.png");
  background-size: 200px;
}
.tn-write .btn-add i {
  display: inline-block;
  margin-right: 5px;
  width: 18px;
  height: 17px;
  background-position: 0 0;
  overflow: hidden;
  vertical-align: -3px;
}
/*  */
/* .tn-content {
  display: none;
} */
.tn-item {
  padding: 15px 0;
  height: 150px;
  text-align: left;
}
.tn-item:hover {
  background-color: #f8f8f8;
  padding: 15px;
  margin: 0 -15px;
}
.tn-item dl {
  height: 117px;
}
.tn-item dt {
  height: 26px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 26px;
}
.tn-item dt a {
  width: 420px;
  height: 26px;
  display: block;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tn-item dd {
  line-height: 20px;
  font-size: 14px;
  overflow: hidden;
}
.tn-item dd a {
  color: #666;
}
.tn-image {
  float: left;
  width: 220px;
  height: 150px;
  position: relative;
}
.tn-image img {
  width: 220px;
  height: 150px;
}
.tn-wrapper {
  float: right;
  width: 455px;
  height: 150px;
}
.tn-extra {
  height: 33px;
  overflow: hidden;
  line-height: 33px;
}
.tn-extra .tn-ding {
  float: right;
  color: #ff9d00;
  font-size: 14px;
  text-align: right;
}
.tn-extra span {
  display: inline-block;
}
.tn-extra .btn-ding {
  /* display: inline-block; */
  float: right;
  margin-left: 8px;
  width: 38px;
  height: 33px;
  background-position: -60px 0 !important;
  overflow: hidden;
}
.tn-extra .tn-place {
  margin-right: 5px;
}
.tn-write .btn-add i,
.tn-extra .btn-ding,
.tn-extra .tn-place i,
.tn-extra .tn-nums i {
  background-image: url("~@/assets/main/index-sprites.png") no-repeat;
}

.tn-extra .tn-place i {
  float: left;
  margin: 8px 5px 0 0;
  width: 14px;
  height: 16px;
  background-position: 0 -50px !important;
  overflow: hidden;
}
.tn-extra .tn-place a {
  color: #666;
}
.tn-extra .tn-user {
  margin-right: 10px;
}
.tn-extra .tn-user > a {
  color: #ff9d00;
  cursor: pointer;
}
.tn-extra .tn-user > a:hover {
  text-decoration: underline;
}
.tn-extra .tn-user img {
  margin-right: 5px;
  width: 16px;
  height: 16px;
  overflow: hidden;
  border-radius: 50%;
  vertical-align: -3px;
}
.tn-extra .tn-nums {
  font-size: 14px;
  color: #999;
}
.tn-extra .tn-nums i {
  float: left;
  margin: 10px 5px 0 0;
  width: 18px;
  height: 14px;
  background-position: -30px -50px !important;
}
.tn-extra .tn-ding em {
  font-style: normal;
}
/*  */
.pageselect {
  padding: 20px 5px;
  padding-right: 0;
  line-height: 24px;
  font-size: 12px;
  color: #999;
}
.pageselect .count {
  padding-right: 12px;
  display: inline-block;
  font-size: 16px;
}
.pageselect .pg-current {
  margin-right: 5px;
  padding: 7px;
  background-color: #ff9d00;
  border-radius: 4px;
  color: #fff;
}
.pageselect .pi {
  display: inline-block;
  margin-right: 1px;
  margin-left: 1px;
  padding: 0 7px;
  border: 0 none;
  background: 0;
  border-radius: 4px;
  color: #666;
  vertical-align: middle;
}
.pageselect .pi:hover {
  background: #f1f4f5;
}
.pageselect .pg-next {
  margin: 0;
  padding: 7px;
  background-color: #ff9d00;
  border-radius: 4px;
  color: #fff;
}
.el-pagination {
  display: inline-block;
}
/*  */

.mfw-aside {
  float: left;
  width: 260px;
}
.asidebox {
  margin-bottom: 30px;
}
.tips img {
  width: 218px;
  height: 31px;
}
.asidebox-hd {
  height: 35px;
  line-height: 35px;
  margin-bottom: 12px;
}
.asidebox-hd .hd-title {
  float: left;
  font-size: 18px;
  color: #333;
  font-weight: normal;
}
.asidebox-hd .hd-right {
  float: right;
  color: #999;
}
.asidebox-hd .hd-right:hover {
  text-decoration: underline;
}
.travel {
  text-align: left;
}
.travel .asidebox-bd {
  width: 260px;
  height: 246px;
  overflow: hidden;
  position: relative;
}
.travel .slide-ul {
  position: absolute;
  left: 0;
  top: 0;
  width: 500%;
  height: 100%;
}
.travel .slide-ul li {
  float: left;
  width: 20%;
}
.travel .image {
  height: 140px;
  overflow: hidden;
}
.travel .image img {
  width: 260px;
  height: 140px;
  border: 0;
  vertical-align: middle;
}
.travel h3 {
  margin: 10px 0 5px;
  width: 260px;
  height: 26px;
  font-size: 16px;
  color: #333;
  font-weight: normal;
  line-height: 26px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.travel h3 a {
  color: #333;
}
.travel h3 a:hover {
  color: #ff9d00;
  text-decoration: underline;
}
.travel .asidebox-bd p {
  height: 60px;
  line-height: 20px;
  font-size: 14px;
  overflow: hidden;
}
.travel .slide-ol {
  position: absolute;
  right: 14px;
  top: 120px;
}
.travel .slide-ol li {
  float: left;
  display: inline;
  margin-left: 3px;
  width: 15px;
  height: 8px;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
}
.travel .slide-ol .active {
  background-color: #ff9d00;
}
.gonglve {
  text-align: left;
}
.gonglve .gonglve-item {
  margin-bottom: 10px;
}
.gonglve .gonglve-item .img {
  position: relative;
  height: 140px;
  margin-bottom: 10px;
}
.gonglve .gonglve-item .mark {
  position: absolute;
  left: 0;
  top: 7px;
  padding: 0 6px;
  color: #fff;
  line-height: 24px;
  background-color: #ff6262;
  font-size: 12px;
}
.gonglve .gonglve-item .mark:after {
  content: "";
  position: absolute;
  top: 0;
  right: -5px;
  border-top: 12px solid #ff6262;
  border-bottom: 12px solid #ff6262;
  border-right: 5px dashed transparent;
}
.gonglve h3 a:hover {
  color: #ff9d00;
  text-decoration: underline;
}
.activity {
  position: relative;
}
.activity h3 {
  margin: 10px 0 5px;
  width: 260px;
  height: 26px;
  font-size: 16px;
  color: #333;
  line-height: 26px;
}
.activity h3 a {
  color: #ff9d00;
}
.activity h3 a:hover {
  text-decoration: underline;
}
.activity .asidebox-bd p {
  margin-top: 5px;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  overflow: hidden;
}
.future img {
  width: 260px;
}
.addus img {
  width: 260px;
}
.news .hd-title {
  float: left;
  font-size: 18px;
  color: #333;
  font-weight: normal;
  height: 35px;
  line-height: 35px;
  margin-bottom: 12px;
}
.news li {
  height: 30px;
  width: 260px;
  line-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
}
.news li a {
  margin-left: 5px;
  color: #666;
}
.news li a:hover {
  text-decoration: underline;
}
</style>