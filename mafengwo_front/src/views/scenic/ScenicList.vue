<template>
  <div class="ScenicList">
    <div class="scenic_header container">
      <div class="herder_crumb container">
        <div class="crumb_item">
          <a href="javascript:;">目的地</a>
          <em>&gt;</em>
        </div>
        <div class="crumb_item">
          <a href="javascript:;">中国</a>
          <em>&gt;</em>
        </div>
        <div class="crumb_item">
          <a href="javascript:;">四川 </a>
          <em>&gt;</em>
        </div>
        <div class="crumb_item">
          <a href="javascript:;">四川景点</a>
        </div>
      </div>
      <div class="herder_nav">
        <div class="container">
          <ul>
            <li class="nav_overview">
              <a href="javascipt:;">
                <i class="nav_icon"></i>
                <span>首页</span>
              </a>
            </li>
            <li class="nav_line">
              <a href="javascipt:;">
                <i class="nav_icon"></i>
                <span>行程线路</span>
              </a>
            </li>
            <li class="nav_mdd">
              <a href="javascipt:;">
                <i class="nav_icon"></i>
                <span>景点</span>
              </a>
            </li>
            <li class="nav_hotel">
              <a href="javascipt:;">
                <i class="nav_icon"></i>
                <span>酒店</span>
              </a>
            </li>
            <li class="nav_plane">
              <a href="javascipt:;">
                <i class="nav_icon"></i>
                <span>机票</span>
              </a>
            </li>
            <li class="nav_localplay">
              <a href="javascipt:;">
                <i class="nav_icon"></i>
                <span>当地玩乐</span>
              </a>
            </li>
            <li class="nav_sales">
              <a href="javascipt:;">
                <i class="nav_icon"></i>
                <span>旅游度假</span>
              </a>
            </li>
            <li class="nav_community">
              <a href="javascipt:;">
                <i class="nav_icon"></i>
                <span>社区</span>
              </a>
            </li>
            <li class="nav_map">
              <a href="javascipt:;">
                <i class="nav_icon"></i>
                <span>地图</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="part_line"></div>
    <div class="scenic_body container">
      <div class="wrapper">
        <h2 class="title">必游景点TOP5</h2>
        <div
          v-for="(item, index) in sceniclist"
          :key="item.s_id"
          class="body_item"
        >
          <div class="item_info">
            <div class="middle">
              <h3>
                <span class="info_num">{{ index + 1 }}</span>
                <a :href="'scenicdetail/' + item.s_id" class="info_title">{{
                  item.name
                }}</a>
                <a href="scenicdetail" class="info_commentsnum"
                  >{{ item.comment_num }} 条点评</a
                >
              </h3>
              <p class="info">
                {{ item.introduce }}
              </p>
              <div class="info_link">
                这里还包含景点：
                <a
                  v-for="i in item.inner_scenic"
                  :key="i[0]"
                  :href="'scenicdetail/' + item.s_id"
                  >{{ i[1] }}</a
                >
              </div>
            </div>
          </div>
          <div class="item_pic">
            <a :href="'scenicdetail/' + item.s_id" class="pic_a">
              <img v-for="i in item.photo" :key="i" :src="base_url + i" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="scenic_hotscenic">
      <div class="container">
        <div class="hotscenic_title">热门景点</div>
        <div class="hotscenic_toppic">
          <a href="javascipt:;" class="banner_a">
            <img
              src="../../assets/scenic/hotscenic1-1.jpeg"
              alt=""
              class="toppic_banner"
            />
            <h3 class="banner_title">喇荣五明佛学院</h3>
            <div class="banner_mask">
              <h3>喇荣五明佛学院</h3>
              <p>在这成片的红色房子间，感受那份震撼，感受僧人的那份虔诚</p>
            </div>
          </a>
          <div class="toppic_right">
            <a href="javascipt:;" class="topright1_a">
              <img src="../../assets/scenic/hotscenic1-3.jpeg" alt="" />
              <h3 class="topright1_title">九寨沟风景区</h3>
              <div class="top_rightmask1">
                <h3>九寨沟风景区</h3>
                <p>九寨归来不看水</p>
              </div>
            </a>
            <a href="javascipt:;" class="topright2_a">
              <img src="../../assets/scenic/hotscenic1-2.jpeg" alt="" />
              <h3 class="topright2_title">文殊院</h3>
              <div class="top_rightmask2">
                <h3>文殊院</h3>
                <p>
                  川西著名的佛教寺院，可品尝四川特有的盖碗茶，欣赏民间艺人的弹唱，感受虔诚佛教文化的好地方
                </p>
              </div>
            </a>
            <a href="javascipt:;" class="topright3_a">
              <img src="../../assets/scenic/hotscenic1-4.jpeg" alt="" />
              <h3 class="topright3_title">乐山大佛</h3>
              <div class="top_rightmask3">
                <h3>乐山大佛</h3>
                <p>依江而建的弥勒佛坐像，烧香祈福圣地</p>
              </div>
            </a>
            <a href="javascipt:;" class="topright4_a">
              <img src="../../assets/scenic/hotscenic1-5.jpeg" alt="" />
              <h3 class="topright4_title">峨眉山</h3>
              <div class="top_rightmask4">
                <h3>峨眉山</h3>
                <p>四大佛教名山，震撼的大自然的鬼斧神工，感受佛教文化的传承</p>
              </div>
            </a>
          </div>
        </div>
        <div class="hotscenic_downpic">
          <div class="downpic_left">
            <a href="javascipt:;" class="down_a1">
              <img src="../../assets/scenic/hotscenic2-1.jpeg" alt="" />
              <h3 class="down1_title">青城山</h3>
              <div class="down_mask1">
                <h3>青城山</h3>
                <p>四大佛教名山，震撼的大自然的鬼斧神工，感受佛教文化的传承</p>
              </div>
            </a>
            <a href="javascipt:;" class="down_a2">
              <img src="../../assets/scenic/hotscenic2-2.jpeg" alt="" />
              <h3 class="down2_title">成都人民公园</h3>
              <div class="down_mask2">
                <h3>成都人民公园</h3>
                <p>四大佛教名山，震撼的大自然的鬼斧神工，感受佛教文化的传承</p>
              </div>
            </a>
          </div>
          <a href="javascipt:;" class="banner_a">
            <img
              src="../../assets/scenic/hotscenic2-3.jpeg"
              alt=""
              class="downpic_banner"
            />
            <h3 class="banner_title">毕棚沟风景区</h3>
            <div class="banner_mask">
              <h3>毕棚沟风景区</h3>
              <p>徒步爱好者的净土，国内非常知名的红叶观赏圣地。</p>
            </div>
          </a>
          <div class="downpic_right">
            <a href="javascipt:;" class="down_a3">
              <img src="../../assets/scenic/hotscenic2-4.jpeg" alt="" />
              <h3 class="down3_title">海螺沟国家森林公园</h3>
              <div class="down_mask3">
                <h3>海螺沟国家森林公园</h3>
                <p>四大佛教名山，震撼的大自然的鬼斧神工，感受佛教文化的传承</p>
              </div>
            </a>
            <a href="javascipt:;" class="down_a4">
              <img src="../../assets/scenic/hotscenic2-5.jpeg" alt="" />
              <h3 class="down4_title">西岭雪山</h3>
              <div class="down_mask4">
                <h3>西岭雪山</h3>
                <p>四大佛教名山，震撼的大自然的鬼斧神工，感受佛教文化的传承</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="scenic_footer container">
      <h2 class="footer_title">四川全部景点</h2>
      <ul class="footer_nav">
        <li><a href="javascipt:;">全部景点</a></li>
        <!-- <li><a href="javascipt:;">最美古镇</a></li>
        <li><a href="javascipt:;">五大名雪山</a></li>
        <li><a href="javascipt:;">看熊猫</a></li> -->
      </ul>
      <div class="footer_items">
        <ul>
          <li v-for="item in scennicpagelist" :key="item.s_id" class="footer_item">
            <a :href="'scenicdetail/' + item.s_id">
              <div class="item_content">
                <img :src="base_url + item.photo[0]" alt="" srcset="" />
                <h3>{{ item.name }}</h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer_dividepage">
        <span class="count">共{{ this.numpage }}页 / {{ this.numlist }}条</span>
        <!-- <span class="page_current">{{this.nowpage}}</span> -->
        <a
          href="javascript:;"
          @click="index == nowpage ? '' : findScenicPage(index)"
          v-for="index of this.numpage"
          :key="index"
          :class="index == nowpage ? 'page_current' : 'pi'"
          >{{ index }}</a
        >
        <a href="javascript:;" @click="nowpage<numpage?findScenicPage(nowpage+1):''" class="page_next">后一页</a>
        <a href="javascript:;" @click="nowpage!=numpage?findScenicPage(numpage):''" class="page_last">末页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScenicList",
  data() {
    return {
      base_url: "http://localhost:5000/",
      scroll_top: 0,
      sceniclist: [],
      scennicpagelist: [],
      //景点总条数
      numlist: 0,
      //景点分页总页数
      numpage: 0,
      //当前页数
      nowpage: 1,
      //展示开始限制
      start: 0,
      //每页显示几个
      pageitemsize: 5,
    };
  },
  created() {
    //调用获取景点top5方法
    this.findScenicTop();
    //调用获取景点数量总数方法
    this.findScenicNum();
    //查找第一页所显示的分页景点
    this.findScenicPage(this.nowpage);
    

    //小herder的悬浮
    window.onscroll = function () {
      this.scroll_top = document.documentElement.scrollTop;
      if (parseInt(this.scroll_top) > 120) {
        document.querySelector(".herder_nav").classList.add("fixed");
      } else if (parseInt(this.scroll_top) < 190) {
        document.querySelector(".herder_nav").classList.remove("fixed");
      }
    };
  },
  methods: {
    //动态获取景点top5信息
    findScenicTop() {
      this.$axios
        .get("/scenictop")
        .then((response) => {
          if (response.status == 200) {
            this.sceniclist = response.data;
            for (let i of this.sceniclist) {
              i.photo = i.photo.split(",");
              i.inner_scenic = eval(i.inner_scenic);
              i.introduce = i.introduce.match(/·(\S*)<br>/)[1];
            }
          }
        })
        .catch((error) => {
          if (error) {
            this.$message.error("跳转出错！请重试！");
          }
        });
    },

        //所有景点个数
    findScenicNum() {
      this.$axios
        .get("/scenicnum")
        .then((response) => {
          if (response.status == 200) {
            this.numlist = response.data[0]["count(*)"];
            //总页数的计算
            this.numpage = this.numlist %5==0?this.numlist/5:parseInt(this.numlist/5)+1;
          }
        })
        .catch((error) => {
          if (error) {
            this.$message.error("跳转出错！请重试！");
          }
        });
    },

    //景点展示分页
    findScenicPage(index) {
      this.start = (index - 1) * this.pageitemsize;
      // this.pageitemsize = index * 5-1;
      this.nowpage = index;
      this.$axios
        .post("/scenicpage", {
          start: this.start,
          pageitemsize: this.pageitemsize,
        })
        .then((response) => {
          if (response.status == 200) {
            this.scennicpagelist = response.data;
            for (let i of this.scennicpagelist) {
              //图片数组处理成数组
              i.photo = i.photo.split(",");
              //内部景点处理
              i.inner_scenic = eval(i.inner_scenic);
            }
            // console.log(this.start,this.pageitemsize);
            console.log(this.scennicpagelist);
          }
        })
        .catch((error) => {
          if (error) {
            this.$message.error("跳转出错！请重试！");
          }
        });
    },


  },
};
</script>
<style scoped>
.container {
  width: 1000px;
  margin: 0 auto;
}

/* 景点头部导航 */
.scenic_header .herder_crumb {
  height: 50px;
  color: #666666;
  font-size: 12px;
  overflow: hidden;
  line-height: 50px;
}
.scenic_header .herder_crumb .crumb_item {
  margin-right: 5px;
  float: left;
}
.scenic_header .herder_crumb .crumb_item a {
  padding: 1px 3px;
}
.scenic_header .herder_crumb .crumb_item em {
  margin: 0 5px;
}
.scenic_header .herder_crumb .crumb_item:not(:last-child) a:hover {
  background-color: #ff7000;
  color: white;
}
.scenic_header .herder_crumb .crumb_item:last-child a {
  color: #ff7000;
  font-weight: bold;
}
.scenic_header .herder_nav {
  z-index: 1000;
  overflow: hidden;
}
.fixed {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
  line-height: 32px;
  height: 78px;
  border-bottom: 1px solid #f2f2f2;
}
.scenic_header .herder_nav ul li {
  float: left;
  margin-right: 25px;
}
.scenic_header .herder_nav ul li a {
  padding: 20px 0px 23px 0px;
  float: left;
  height: 32px;
}
.herder_nav .nav_icon {
  float: left;
  width: 32px;
  height: 32px;
  margin-right: 6px;
  background: url("~@/assets/scenic/icon-place.png") no-repeat;
  overflow: hidden;
}
.herder_nav ul li a span {
  line-height: 32px;
}
.herder_nav ul li {
  border-bottom: white solid 3px;
}
.nav_overview .nav_icon {
  background-position: 0 0;
}
.nav_overview:hover {
  border-bottom: #aea181 solid 3px;
}
.nav_line .nav_icon {
  background-position: 0 -40px;
}
.nav_line:hover {
  border-bottom: #74b9f3 solid 3px;
}
.nav_mdd .nav_icon {
  background-position: 0 -80px;
}
.nav_mdd:hover {
  border-bottom: #85c65e solid 3px;
}
.nav_hotel .nav_icon {
  background-position: 0 -120px;
}
.nav_hotel:hover {
  border-bottom: #0a89e4 solid 3px;
}
.nav_plane .nav_icon {
  background-position: 0 -160px;
}
.nav_plane:hover {
  border-bottom: #0a89e4 solid 3px;
}
.nav_localplay .nav_icon {
  background-position: 0 -200px;
}
.nav_localplay:hover {
  border-bottom: #bada25 solid 3px;
}
.nav_sales .nav_icon {
  background-position: 0 -240px;
}
.nav_sales:hover {
  border-bottom: #e7788e solid 3px;
}
.nav_community .nav_icon {
  background-position: 0 -280px;
}
.nav_community:hover {
  border-bottom: #ff9d00 solid 3px;
}
.nav_map .nav_icon {
  background-position: 0 -320px;
}
.nav_map:hover {
  border-bottom: #63c799 solid 3px;
}
.ScenicList .part_line {
  border-bottom: #e4e4e4 solid 1px;
}

/* 景点top5 */
.scenic_body {
  padding: 40px 0px;
}
.scenic_body .wrapper .title {
  font-size: 20px;
}
.scenic_body .wrapper .body_item {
  font-size: 20px;
  overflow: hidden;
}
.scenic_body .wrapper .body_item:not(:nth-child(2)) {
  border-top: 1px solid #eee;
  padding-top: 30px;
  margin-top: 30px;
}
.scenic_body .wrapper .body_item .item_info {
  width: 385px;
  height: 269px;
  display: flex;
  align-items: center;
  line-height: 24px;
  float: left;
}
.scenic_body .wrapper .body_item .middle h3 {
  overflow: hidden;
  line-height: 20px;
  margin-bottom: 25px;
}
.scenic_body .wrapper .body_item .middle h3 span {
  display: inline-block;
  width: 20px;
  height: 20px;
  color: white;
  text-align: center;
  border-radius: 2px;
  background-color: #ff9d00;
  margin-right: 18px;
}
.scenic_body .wrapper .body_item .middle h3 .info_title {
  color: #ff9d00;
  font-size: 18px;
}
.scenic_body .wrapper .body_item .middle h3 .info_title:hover {
  color: #ff9d00;
  font-size: 18px;
  text-decoration: underline;
}
.scenic_body .wrapper .body_item .middle h3 .info_commentsnum {
  float: right;
  color: #ff9d00;
  font-size: 12px;
}
.scenic_body .wrapper .body_item .middle .info {
  font-size: 16px;
  color: #666666;
  margin-bottom: 12px;
}
.scenic_body .wrapper .body_item .middle .info_link {
  font-size: 14px;
  color: #999999;
}
.scenic_body .wrapper .body_item .middle .info_link a {
  font-size: 14px;
  color: #ff9d00;
  margin-right: 5px;
}
.scenic_body .wrapper .body_item .middle .info_link a:hover {
  text-decoration: underline;
}
.scenic_body .wrapper .body_item .item_pic {
  width: 575px;
  height: 270px;
  float: right;
}
.scenic_body .wrapper .body_item .item_pic a {
  width: 575px;
  height: 270px;
  overflow: hidden;
}
.scenic_body .wrapper .body_item .item_pic .pic_a img:first-child {
  width: 380px;
  height: 270px;
  float: left;
}
.scenic_body .wrapper .body_item .item_pic .pic_a img:not(:first-child) {
  width: 185px;
  height: 130px;
  float: right;
  margin-bottom: 10px;
}

/* 热门景点 */
.scenic_hotscenic {
  background-color: #fafafa;
  border-top: #e4e4e4 solid 1px;
  border-bottom: #e4e4e4 solid 1px;
  padding: 40px 0px;
}
.scenic_hotscenic .hotscenic_title {
  height: 22px;
  font-size: 20px;
  color: #333333;
  margin-bottom: 25px;
}
.scenic_hotscenic .hotscenic_toppic {
  overflow: hidden;
}
.scenic_hotscenic .hotscenic_toppic a {
  float: left;
  position: relative;
  overflow: hidden;
}
.scenic_hotscenic .hotscenic_toppic .banner_a:hover .banner_mask {
  top: 0px;
}
.scenic_hotscenic .hotscenic_toppic .banner_a:hover .banner_title {
  display: none;
}
.scenic_hotscenic .hotscenic_toppic .toppic_banner {
  width: 485px;
  height: 320px;
}
.scenic_hotscenic .hotscenic_toppic a .banner_title {
  position: absolute;
  font-size: 20px;
  color: white;
  bottom: 8px;
  left: 15px;
}
.scenic_hotscenic .hotscenic_toppic a .banner_mask {
  position: absolute;
  display: flex;
  width: 455px;
  height: 300px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.6);
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  color: white;
  top: 100%;
  left: 0px;
  transition: top 0.5s ease 0s;
}
.scenic_hotscenic .hotscenic_toppic a .banner_mask h3 {
  font-size: 20px;
  padding-bottom: 10px;
}
.scenic_hotscenic .hotscenic_toppic a .banner_mask p {
  font-size: 14px;
}
.scenic_hotscenic .hotscenic_toppic .toppic_right {
  overflow: hidden;
}
.scenic_hotscenic .hotscenic_toppic .toppic_right a {
  float: right;
  margin-left: 15px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
}
.scenic_hotscenic
  .hotscenic_toppic
  .toppic_right
  .topright1_a:hover
  .top_rightmask1 {
  top: 0px;
}
.scenic_hotscenic
  .hotscenic_toppic
  .toppic_right
  .topright1_a:hover
  .topright1_title {
  display: none;
}
.scenic_hotscenic
  .hotscenic_toppic
  .toppic_right
  .topright2_a:hover
  .top_rightmask2 {
  top: 0px;
}
.scenic_hotscenic
  .hotscenic_toppic
  .toppic_right
  .topright2_a:hover
  .topright2_title {
  display: none;
}
.scenic_hotscenic
  .hotscenic_toppic
  .toppic_right
  .topright3_a:hover
  .top_rightmask3 {
  top: 0px;
}
.scenic_hotscenic
  .hotscenic_toppic
  .toppic_right
  .topright3_a:hover
  .topright3_title {
  display: none;
}
.scenic_hotscenic
  .hotscenic_toppic
  .toppic_right
  .topright4_a:hover
  .top_rightmask4 {
  top: 0px;
}
.scenic_hotscenic
  .hotscenic_toppic
  .toppic_right
  .topright4_a:hover
  .topright4_title {
  display: none;
}
.scenic_hotscenic .hotscenic_toppic .toppic_right a .topright1_title,
.topright2_title,
.topright3_title,
.topright4_title {
  position: absolute;
  font-size: 16px;
  color: white;
  bottom: 8px;
  left: 15px;
}
.scenic_hotscenic .hotscenic_toppic .toppic_right img {
  width: 242px;
  height: 155px;
}
.scenic_hotscenic .hotscenic_toppic .toppic_right a .top_rightmask1,
.top_rightmask2,
.top_rightmask3,
.top_rightmask4 {
  position: absolute;
  display: flex;
  width: 212px;
  height: 125px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.6);
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  color: white;
  top: 100%;
  left: 0px;
  transition: top 0.5s ease 0s;
}
.scenic_hotscenic .hotscenic_toppic .toppic_right .top_rightmask1 h3 {
  padding-bottom: 10px;
}
.scenic_hotscenic .hotscenic_toppic .toppic_right .top_rightmask1 p {
  font-size: 14px;
}
.scenic_hotscenic .hotscenic_toppic .toppic_right .top_rightmask2 h3 {
  padding-bottom: 10px;
}
.scenic_hotscenic .hotscenic_toppic .toppic_right .top_rightmask2 p {
  font-size: 14px;
}
.scenic_hotscenic .hotscenic_toppic .toppic_right .top_rightmask3 h3 {
  padding-bottom: 10px;
}
.scenic_hotscenic .hotscenic_toppic .toppic_right .top_rightmask3 p {
  font-size: 14px;
}
.scenic_hotscenic .hotscenic_toppic .toppic_right .top_rightmask4 h3 {
  padding-bottom: 10px;
}
.scenic_hotscenic .hotscenic_toppic .toppic_right .top_rightmask4 p {
  font-size: 14px;
}
.scenic_hotscenic .hotscenic_downpic {
  overflow: hidden;
  height: 330px;
  margin-top: 10px;
}
.scenic_hotscenic .hotscenic_downpic a {
  position: relative;
  float: left;
  overflow: hidden;
}
.scenic_hotscenic .hotscenic_downpic a .down1_title,
.down2_title,
.down3_title,
.down4_title {
  position: absolute;
  font-size: 16px;
  color: white;
  bottom: 15px;
  left: 15px;
}
.scenic_hotscenic .hotscenic_downpic .banner_a:hover .banner_mask {
  top: 0px;
}
.scenic_hotscenic .hotscenic_downpic .banner_a:hover .banner_title {
  display: none;
}
.scenic_hotscenic .hotscenic_downpic .banner_a .banner_mask {
  position: absolute;
  display: flex;
  width: 455px;
  height: 300px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.6);
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  color: white;
  top: 100%;
  left: 15px;
  transition: top 0.5s ease 0s;
}
.scenic_hotscenic .hotscenic_downpic .banner_a .banner_mask h3 {
  font-size: 20px;
  padding-bottom: 10px;
}
.scenic_hotscenic .hotscenic_downpic .banner_a .banner_mask p {
  font-size: 14px;
}
.scenic_hotscenic .hotscenic_downpic a .banner_title {
  position: absolute;
  font-size: 20px;
  color: white;
  bottom: 15px;
  left: 30px;
}
.scenic_hotscenic .hotscenic_downpic .downpic_banner {
  width: 485px;
  height: 320px;
  margin: 0px 15px;
}
.scenic_hotscenic .hotscenic_downpic .down_a1:hover .down_mask1 {
  top: 0px;
}
.scenic_hotscenic .hotscenic_downpic .down_a1:hover .down1_title {
  display: none;
}
.scenic_hotscenic .hotscenic_downpic .down_a2:hover .down_mask2 {
  top: 0px;
}
.scenic_hotscenic .hotscenic_downpic .down_a2:hover .down2_title {
  display: none;
}
.scenic_hotscenic .hotscenic_downpic .down_a3:hover .down_mask3 {
  top: 0px;
}
.scenic_hotscenic .hotscenic_downpic .down_a3:hover .down3_title {
  display: none;
}
.scenic_hotscenic .hotscenic_downpic .down_a4:hover .down_mask4 {
  top: 0px;
}
.scenic_hotscenic .hotscenic_downpic .down_a4:hover .down4_title {
  display: none;
}
.scenic_hotscenic .hotscenic_downpic a .down_mask1,
.down_mask2,
.down_mask3,
.down_mask4 {
  position: absolute;
  display: flex;
  width: 212px;
  height: 125px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.6);
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  color: white;
  top: 100%;
  left: 0px;
  transition: top 0.5s ease 0s;
}
.scenic_hotscenic .hotscenic_downpic .down_mask1 h3 {
  padding-bottom: 10px;
}
.scenic_hotscenic .hotscenic_downpic .down_mask1 p {
  font-size: 14px;
}
.scenic_hotscenic .hotscenic_downpic .down_mask2 h3 {
  padding-bottom: 10px;
}
.scenic_hotscenic .hotscenic_downpic .down_mask2 p {
  font-size: 14px;
}
.scenic_hotscenic .hotscenic_downpic .down_mask3 h3 {
  padding-bottom: 10px;
}
.scenic_hotscenic .hotscenic_downpic .down_mask3 p {
  font-size: 14px;
}
.scenic_hotscenic .hotscenic_downpic .down_mask4 h3 {
  padding-bottom: 10px;
}
.scenic_hotscenic .hotscenic_downpic .down_mask4 p {
  font-size: 14px;
}
.scenic_hotscenic .hotscenic_downpic .downpic_left {
  width: 242px;
  height: 320px;
  float: left;
}
.scenic_hotscenic .hotscenic_downpic .downpic_left a {
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
}
.scenic_hotscenic .hotscenic_downpic .downpic_right a {
  position: relative;
  margin-bottom: 10px;
  overflow: hidden;
}
.scenic_hotscenic .hotscenic_downpic .downpic_left a img {
  width: 242px;
  height: 155px;
}
.scenic_hotscenic .hotscenic_downpic .downpic_right img {
  width: 242px;
  height: 155px;
  float: right;
}

/* 景点结尾部分 */
.scenic_footer {
  padding: 40px 0px;
  border-bottom: 1px solid #e4e4e4;
}
.scenic_footer .footer_title {
  font-size: 20px;
  color: #333333;
  margin-bottom: 25px;
}
.scenic_footer .footer_nav {
  margin-bottom: 5px;
  overflow: hidden;
}
.scenic_footer .footer_nav li {
  float: left;
}
.scenic_footer .footer_nav li a {
  height: 30px;
  padding: 0 20px;
  display: inline-block;
  line-height: 30px;
}
.scenic_footer .footer_nav li a:hover {
  text-decoration: underline;
}
.scenic_footer .footer_nav li:first-child a {
  color: white;
  background-color: #ff9d00;
}
.scenic_footer .footer_items ul {
  display: flex;
  flex-wrap: wrap;
}
.scenic_footer .footer_items ul li {
  margin-top: 15px;
  margin-right: 8px;
}
.scenic_footer .footer_items ul li a {
  display: inline-block;
}
.scenic_footer .footer_items ul a .item_content img {
  width: 192px;
  height: 130px;
}
.scenic_footer .footer_items ul a .item_content h3 {
  width: 170px;
  height: 43px;
  font-size: 14px;
  color: #333333;
  padding: 0 10px;
  border: 1px solid #eee;
  line-height: 43px;
  text-align: center;
}
.scenic_footer .footer_items ul a:hover h3 {
  color: #ff9d00;
}

/* 分页 */
.footer_dividepage {
  padding: 20px 5px;
  padding-right: 0;
  line-height: 24px;
  text-align: right;
  font-size: 12px;
  color: #999;
}
.footer_dividepage .count {
  padding-right: 12px;
}
.footer_dividepage .page_current {
  margin-right: 5px;
  padding: 7px;
  background-color: #ff9d00;
  border-radius: 4px;
  color: #fff;
}
.footer_dividepage .pi {
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
.footer_dividepage .pi:hover {
  background: #f1f4f5;
}
.footer_dividepage .page_next {
  margin: 0;
  padding: 7px;
  background-color: #ff9d00;
  border-radius: 4px;
  color: #fff;
}
.footer_dividepage .page_next {
  margin: 0;
  padding: 7px;
  background-color: #ff9d00;
  border-radius: 4px;
  color: #fff;
  margin-right: 10px;
}
.footer_dividepage .page_last {
  margin: 0;
  padding: 7px;
  background-color: #ff9d00;
  border-radius: 4px;
  color: #fff;
}
</style>