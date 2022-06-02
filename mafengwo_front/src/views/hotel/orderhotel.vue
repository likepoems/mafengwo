<template>
  <div>
    <div class="warpper">
      <div class="top-info">
        <div class="crumb">
          <span class="tit">您在这里：</span>
          <div class="item">酒店<em>></em></div>
          <div class="item">中国酒店<em>></em></div>
          <div class="item cur"><a href="##">成都酒店预定</a></div>
        </div>
        <div class="weather-warpper">
          <img src="../../assets/zzy/icon8.png" alt="" width="25" height="25" />
          <span>多云 20℃~29℃</span>
        </div>
      </div>
      <div class="hotel-searchbar">
        <div class="hs-item hs-item-search">
          <input type="text" value="成都" autocomple="off" />
          <a href="javascript:;" class="hs-icon hs-icon-search"></a>
        </div>
        <div class="hs-item hs-item-date-wrapper">
          <div class="hs-item hs-item-date">
            <span>入住日</span>
            <input type="text" placeholder="入住日期" readonly />
            <i class="hs-icon hs-icon-date"></i>
          </div>
          <div class="hs-item hs-item-date">
            <span>离店日</span>
            <input type="text" placeholder="离店日期" readonly />
            <i class="hs-icon hs-icon-date"></i>
          </div>
        </div>
        <div class="hs-item hs-item-people number-guests-picker">
          <span>人数未定</span>
          <i class="icon-person"></i>
        </div>
        <div class="hs-item hs-item-action">
          <a class="hs-btn">查看价格</a>
        </div>
      </div>
      <div class="area-main">
        <div class="area-wrapper">
          <dl class="item-area">
            <dt>区域：</dt>
            <dd>
              <ul class="area-nav restrictheight" :style="{ height: height }">
                <li><a href="##" class="on">全部</a></li>
                <li><a href="##" class="_j_area_name">春熙路</a></li>
                <li><a href="##" class="_j_area_name">文殊院</a></li>
                <li><a href="##" class="_j_area_name">天府广场</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">双流机场及周边</a></li>
                <li><a href="##" class="_j_area_name">锦里、武侯祠</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
                <li><a href="##" class="_j_area_name">金沙、一品天下</a></li>
              </ul>
              <a class="toggle" @click="expand">
                <i></i>
                {{ fold }}共37个区域
              </a>
            </dd>
            <dt>周边：</dt>
            <dd>
              <ul class="area-nav">
                <li><a href="##" class="_j_area_name">海螺沟</a></li>
                <li><a href="##" class="_j_area_name">西岭雪山</a></li>
              </ul>
            </dd>
          </dl>
          <dl
            class="item-info clearfix _j_area_desc_list"
            style="height: 105px"
          >
            <dt>攻略</dt>
            <dd>
              <div>
                <p>成都是美女的摇篮，大熊猫的故乡，也是吃货的天堂。</p>
                <p>在成都就是要享受闲适的慢生活，要慢慢看、慢慢逛、慢慢吃。</p>
                <p>在这里不要错过正宗的川剧变脸，还有美味的火锅和串串。</p>
              </div>
            </dd>
          </dl>
          <dl class="item-price clearfix _j_area_price_list">
            <dt>
              均价
              <sup class="warn-mark"> <span class="warn-mark-icon"></span> </sup
              >:
            </dt>
            <dd>
              <ul class="clearfix">
                <li>
                  <span class="hotel-rate rate3"></span>
                  ￥242
                </li>
                <li>
                  <span class="hotel-rate rate4"></span>
                  ￥357
                </li>
                <li>
                  <span class="hotel-rate rate5"></span>
                  ￥658
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <img src="../../assets/zzy/map.png" width="340" height="220" />
      </div>
      <div class="container">
        <div class="h-tab">
          <ul class="ul-tab">
            <li>
              <a
                href="javascript:;"
                @click="
                  tabindex = 0;
                  show(0);
                "
                :class="{ on: tabindex == 0 }"
                >全部</a
              >
            </li>
            <li>
              <a
                href="javascript:;"
                @click="
                  tabindex = 1;
                  show(1);
                "
                :class="{ on: tabindex == 1 }"
                >住文艺旅社</a
              >
            </li>
            <li>
              <a
                href="javascript:;"
                @click="
                  tabindex = 2;
                  show(2);
                "
                :class="{ on: tabindex == 2 }"
                >网红宿舍榜</a
              >
            </li>
            <li>
              <a
                href="javascript:;"
                @click="
                  tabindex = 3;
                  show(3);
                "
                :class="{ on: tabindex == 3 }"
                >蓉城周边好去处</a
              >
            </li>
            <li>
              <a
                href="javascript:;"
                @click="
                  tabindex = 4;
                  show(4);
                "
                :class="{ on: tabindex == 4 }"
                >蓉城奢华酒店榜</a
              >
            </li>
            <li>
              <a
                href="javascript:;"
                @click="
                  tabindex = 5;
                  show(5);
                "
                :class="{ on: tabindex == 5 }"
                >吃货根据地</a
              >
            </li>
            <li>
              <a
                href="javascript:;"
                @click="
                  tabindex = 6;
                  show(6);
                "
                :class="{ on: tabindex == 6 }"
                >住在文殊院</a
              >
            </li>
            <li>
              <a
                href="javascript:;"
                @click="
                  tabindex = 7;
                  show(7);
                "
                :class="{ on: tabindex == 7 }"
                >老成都院落</a
              >
            </li>
          </ul>
        </div>
        <div class="hotel-toolbar">
          <div class="htb-item htb-item-price">
            <div class="htb-title" style="margin-bottom: 5px">
              <span>¥{{ maxvalue[0] }} - {{ maxvalue[1] }}</span>
              价格
            </div>
            <div class="price-range">
              <div class="block">
                <el-slider
                  v-model="maxvalue"
                  :max="4000"
                  :range="true"
                  @change="numchange"
                  :show-tooltip="false"
                ></el-slider>
              </div>
            </div>
          </div>
          <div class="htb-item htb-item-dropdown">
            <div class="htb-title">住宿等级</div>
            <div class="htb-select">
              <div class="sel-trigger">
                <i class="i-sel-arrow"></i>
                <span>不限</span>
              </div>
            </div>
          </div>
          <div class="htb-item htb-item-dropdown">
            <div class="htb-title">住宿类型</div>
            <div class="htb-select">
              <div class="sel-trigger">
                <i class="i-sel-arrow"></i>
                <span>不限</span>
              </div>
            </div>
          </div>
          <div class="htb-item htb-item-dropdown">
            <div class="htb-title">设施</div>
            <div class="htb-select">
              <div class="sel-trigger">
                <i class="i-sel-arrow"></i>
                <span>不限</span>
              </div>
            </div>
          </div>
          <div class="htb-item htb-item-dropdown">
            <div class="htb-title">品牌</div>
            <div class="htb-select">
              <div class="sel-trigger">
                <i class="i-sel-arrow"></i>
                <span>不限</span>
              </div>
            </div>
          </div>
          <div class="htb-item htb-item-dist">
            <div class="htb-title">与指定地点距离</div>
            <div class="htb-select">
              <div class="sel-trigger">
                <i class="i-sel-arrow"></i>
                <span class="dist-num">10公里</span>
                <span>选择地点</span>
              </div>
            </div>
          </div>
        </div>
        <div class="hotel-sortbar">
          <div class="sortbar-info">
            <div class="total"><span>13730</span>家酒店</div>
            <div class="checkbox-list">
              <el-radio v-model="radio" label="临地铁">临地铁</el-radio>
              <el-radio v-model="radio" label="收藏">收藏</el-radio>
            </div>
            <div class="htb-search">
              <div class="htb-searchbar">
                <input type="text" placeholder="搜索关键词" />
                <a href="javascript:;" class="htb-icon-search"></a>
              </div>
            </div>
          </div>
          <div class="sortbar-nav">
            <a href="javascript:;" class="on">综合排序</a>
            <a href="javascript:;">销量</a>
            <a href="javascript:;" class="price-sort"> <i></i>价格 </a>
          </div>
        </div>
        <div class="n-content">
          <div class="loading" v-show="isloading">
            <i class="loading-m"></i>
          </div>
          <div class="hotel-list">
            <div class="not_found" v-show="notfound">
              <p>没有符合以下条件的酒店</p>
              <div class="tags">
                <div class="tag">
                  <span style="color: #ff9d00">特色类型: 网红民宿榜</span>
                  <i>×</i>
                </div>
              </div>
            </div>
            <!-- 酒店列表 -->
            <div
              class="hotel-item clearfix"
              v-for="item in hotellists"
              :key="item.hotel_id"
            >
              <div class="hotel-pic">
                <a href="javascript:;">
                  <img :src="baseurl+item.hotel_img" width="330px" />
                </a>
              </div>
              <div class="hotel-title">
                <div class="title">
                  <h3>
                    <router-link
                      tag="a"
                      :to="'/hoteldetails/' + item.hotel_id"
                      href=""
                      >{{ item.hotel_name }}</router-link
                    >
                  </h3>
                  <br />
                  <span>{{ item.hotel_smallTitle }}</span>
                </div>
              </div>
              <div class="hotel-info">
                <ul class="nums clearfix">
                  <template v-if="item.hotel_score !== 0">
                    <li class="rating rating2">
                      <em>{{ item.hotel_score }}</em
                      >分
                      <br />
                      <strong>非常好</strong>
                    </li>
                  </template>
                  <li>
                    <a href="javascript:;">
                      <em>{{ item.hotel_comment }}条</em><br />
                      蜂蜂评价
                    </a>
                  </li>
                  <li class="split"></li>
                  <li>
                    <a href="javascript:;">
                      <em>{{ item.hotel_mention }}篇</em><br />
                      游记提及
                    </a>
                  </li>
                </ul>
                <p class="summary"></p>
                <div class="location">
                  <span>
                    <i class="icon-location"></i>
                    地址: {{ item.hotel_address }}
                  </span>
                </div>
              </div>
              <div class="hotel-btns">
                <a
                  href="javascript:"
                  class="btn-booking _j_booking_btn clearfix"
                >
                  <div class="ota">
                    <div class="name">
                      <strong
                        ><img
                          src="../../assets/zzy/mafengwo.png"
                          width="100"
                          height="20"
                      /></strong>
                    </div>
                  </div>
                  <div class="price _j_booking_price">
                    <strong>￥</strong>
                    <strong>25</strong>
                    <strong
                      style="
                        font-size: 12px;
                        color: #666;
                        padding-left: 2px;
                        vertical-align: 1px;
                      "
                      >起</strong
                    >
                    <i class="arrow"></i>
                  </div>
                </a>
                <a
                  href="javascript:"
                  class="btn-booking _j_booking_btn clearfix"
                >
                  <div class="ota">
                    <div class="name">
                      <strong
                        ><img
                          src="../../assets/zzy/booking.png"
                          width="100"
                          height="20"
                      /></strong>
                    </div>
                  </div>
                  <div class="price _j_booking_price">
                    <strong>￥</strong>
                    <strong>330</strong>
                    <strong
                      style="
                        font-size: 12px;
                        color: #666;
                        padding-left: 2px;
                        vertical-align: 1px;
                      "
                      >起</strong
                    >
                    <i class="arrow"></i>
                  </div>
                </a>
                <a
                  href="javascript:"
                  class="btn-booking _j_booking_btn clearfix"
                >
                  <div class="ota">
                    <div class="name">
                      <strong>agoda</strong>
                    </div>
                  </div>
                  <div class="price _j_booking_price">
                    <strong>￥</strong>
                    <strong>288</strong>
                    <strong
                      style="
                        font-size: 12px;
                        color: #666;
                        padding-left: 2px;
                        vertical-align: 1px;
                      "
                      >起</strong
                    >
                    <i class="arrow"></i>
                  </div>
                </a>
                <a
                  href="javascript:"
                  class="btn-booking _j_booking_btn clearfix"
                >
                  <div class="ota">
                    <div class="name">
                      <strong>携程</strong>
                    </div>
                  </div>
                  <div class="price _j_booking_price">
                    <strong>￥</strong>
                    <strong>135</strong>
                    <strong
                      style="
                        font-size: 12px;
                        color: #666;
                        padding-left: 2px;
                        vertical-align: 1px;
                      "
                      >起</strong
                    >
                    <i class="arrow"></i>
                  </div>
                </a>
                <a
                  href="javascript:"
                  class="btn-booking _j_booking_btn clearfix"
                >
                  <div class="ota">
                    <div class="name">
                      <strong>艺龙</strong>
                    </div>
                  </div>
                  <div class="price _j_booking_price">
                    <strong>￥</strong>
                    <strong>30</strong>
                    <strong
                      style="
                        font-size: 12px;
                        color: #666;
                        padding-left: 2px;
                        vertical-align: 1px;
                      "
                      >起</strong
                    >
                    <i class="arrow"></i>
                  </div>
                </a>
              </div>
              <div class="hotel-other">
                <div class="collect">
                  <a href="" class="btn-addCollect _j_add_fav">
                    <i></i>
                    收藏</a
                  >
                  <a
                    href=""
                    class="btn-cancelCollect _j_del_fav"
                    style="display: none"
                  >
                    <i></i>
                    取消收藏
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="page-hotel">
            <div style="float: right">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                current-page.sync="currentPage1"
                :page-sizes = [4,8,10]
                :page-size="pageSize"
                background
                layout="sizes,total, prev, pager, next"
                :total="totalPage"
              >
              </el-pagination>
            </div>
            <div class="clearfix"></div>
          </div>
          <div style="margin-bottom: 24px; padding-left: 12px">
            <a
              href=""
              style="
                color: #666;
                font-weight: bold;
                text-decoration: none;
                cursor: default;
                font-size: 12px;
              "
              >马蜂窝酒店平台合作伙伴</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      maxvalue: [0, 4000],
      currentPage1: 1,
      totalPage: 0,
      pageSize: 4,
      isfold: true,
      fold: "展开",
      height: "28px",
      radio: "",
      tabindex: 0,
      isloading: false,
      notfound: false,
      hotellists: [],
      hotelType: "",
      baseurl:'http://127.0.0.1:5000/'
    };
  },
  mounted() {
    this.getAllMsg();
  },
  methods: {
    getAllMsg() {
      this.hotellists = []
      this.isloading = true;
      this.$axios
        .post("/hotelList", {
          pageNum: this.currentPage1,
          pageSize: this.pageSize,
          hotelType: this.hotelType,
        })
        .then((res) => {
          console.log(res);
          if (!!res && res.status === 200) {
            console.log(res.data);
            this.totalPage = res.data.total
            this.hotellists = res.data.result1.map((i) => {
              return { ...i };
            });
            this.isloading = false;
          }
        });
    },
    numchange(val) {
      console.log(val[1]);
    },
    handleCurrentChange(val) {
      console.log(val);
      this.currentPage1 = val
      this.getAllMsg()
    },
    handleSizeChange(val) {
      console.log(val)
      this.pageSize = val
      this.getAllMsg()
    },
    expand() {
      this.isfold = !this.isfold;
      if (this.isfold) {
        this.height = "28px";
        this.fold = "展开";
      } else {
        this.height = "193px";
        this.fold = "收起";
      }
    },
    show(index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.hotelType = "";
          break;
        case 1:
          this.hotelType = "文艺旅社";
          break;
        case 2 :
          this.hotelType = "网红宿舍";
          break;
        
        case 3:
          this.hotelType = "蓉城周边";
          break;
        
        case 4:
          this.hotelType = "奢华酒店";
          break;
        
        case 5:
          this.hotelType = "吃货根据地";
          break;
        case 6:
          this.hotelType = "文殊院";
          break;
        case 7:
          this.hotelType = "老成都院落";
          break;
      }
      this.getAllMsg()
    },
  },
  components: {},
};
</script>
<style scoped>
.warpper {
  width: 1000px;
  margin: 0 auto;
}
.top-info {
  margin-top: 10px;
  height: 30px;
}
.top-info .crumb {
  float: left;
  padding-top: 5px;
  color: #666;
  font-size: 12px;
  line-height: 20px;
}
.crumb .tit {
  float: left;
  color: #333;
}
.crumb .item {
  float: left;
}
.crumb .item em {
  margin: 0 6px;
  color: #999;
  font-family: "Hiragino Sans GB", "Hiragino Sans GB W3", "宋体";
  font-style: normal;
}
.crumb .item.cur {
  color: #ff7000;
  font-weight: bold;
}
.crumb .cur a {
  color: #ff8a00;
}
.weather-warpper {
  float: right;
  padding: 0;
  width: auto;
  font-size: 12px;
  color: #999;
  line-height: 25px;
}
.weather-warpper a {
  text-decoration: none;
  color: #999;
  line-height: 25px;
}
.hotel-searchbar {
  margin-top: 15px;
  margin-bottom: 30px;
  overflow: hidden;
}
.hotel-searchbar .hs-item {
  float: left;
  width: 132px;
  margin-right: 3px;
  position: relative;
}
.hotel-searchbar .hs-item-search {
  width: 140px;
  margin-right: 12px;
}
.hotel-searchbar .hs-item > input {
  font-size: 16px;
  color: #333;
}
.hotel-searchbar .hs-item-search > input:focus {
  border-color: #ff9d00;
  box-shadow: 0 0 3px rgba(255, 157, 0, 0.5);
}
.hotel-searchbar .hs-item > input,
.hotel-searchbar .hs-item > span {
  display: block;
  height: 34px;
  line-height: 34px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.hotel-searchbar .hs-item-search > input {
  outline: none;
  width: 114px;
  border-radius: 4px;
}
.hotel-searchbar .hs-icon {
  position: absolute;
  right: 10px;
  top: 10px;
  background: url("../../assets/zzy/hotel-detail.png") no-repeat -70px -200px;
}
.hotel-searchbar .hs-icon-search {
  top: 9px;
  right: 9px;
  width: 20px;
  height: 18px;
  background-position: -70px -200px;
  overflow: hidden;
}
.hotel-searchbar .hs-icon-date {
  width: 16px;
  height: 16px;
  background-position: -190px 0;
  overflow: hidden;
}
.hotel-searchbar .hs-icon-date {
  width: 16px;
  height: 16px;
  background-position: -190px 0;
  overflow: hidden;
}
.hotel-searchbar .hs-item-date-wrapper input {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  visibility: hidden;
  border: 0;
  padding: 0;
  width: 100%;
}
.hotel-searchbar .hs-item > span {
  font-size: 14px;
  color: #666;
}
.hotel-searchbar .hs-item-date-wrapper {
  width: 270px;
  margin-right: 0;
}
.hotel-searchbar .hs-item-people {
  position: relative;
  margin-right: 0;
}
.hotel-searchbar .hs-item-date,
.hotel-searchbar .hs-item-people {
  position: relative;
  margin-right: 0;
}
.loading-m {
  display: inline-block;
  width: 126px;
  height: 109px;
  background: url(../../assets/zzy/loading-m.gif) no-repeat 0 0;
}
.loading {
  text-align: center;
  padding: 20px 0;
}
.not_found {
  margin: 50px 200px;
  text-align: center;
}
.not_found p {
  margin-bottom: 15px;
  font-size: 24px;
  color: #666;
}
.not_found .tags {
  display: inline-block;
  text-align: left;
}
.not_found .tag {
  display: inline-block;
  padding: 0 10px;
  margin: 10px 5px 0;
  border: 1px solid #ff9d00;
  border-radius: 4px;
  line-height: 38px;
  font-size: 14px;
}
.not_found .tag span {
  float: left;
  margin-right: 10px;
  width: 136px;
  height: 38px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.not_found .tag i {
  font-style: normal;
  font-family: "宋体";
}
.sortbar-nav a:hover {
  text-decoration: none;
  color: #ff8a00;
}
.hotel-searchbar .hs-item-people .icon-person {
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 16px;
  background: url("../../assets/zzy/hotel-detail.png") no-repeat;
  background-position: -70px -140px !important;
  vertical-align: middle;
  overflow: hidden;
}
.hotel-searchbar .hs-btn {
  display: block;
  margin-top: 1px;
  width: 110px;
  height: 34px;
  background-color: #ffb200;
  border-radius: 3px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  line-height: 34px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.hotel-searchbar .hs-item-action {
  margin-left: 12px;
}

.area-main {
  margin: 20px 0;
  overflow: hidden;
}
.area-wrapper {
  float: left;
  width: 640px;
  display: inline;
}
.area-wrapper dl {
  margin-bottom: 20px;
  padding-left: 60px;
  font-size: 14px;
  color: #666;
  line-height: 26px;
  position: relative;
}
.area-wrapper dt {
  float: left;
  display: inline;
  margin-left: -60px;
  width: 60px;
}
/* .area-wrapper .restrictheight {
  height: 24px !important;
} */
.area-wrapper .area-nav li {
  float: left;
  display: inline;
  margin: 0 8px 4px 0;
}
.area-wrapper .area-nav {
  overflow: hidden;
  transition: 0.5s;
}
.area-wrapper .area-nav a {
  display: block;
  padding: 1px 5px;
  color: #666;
}
.area-wrapper .toggle {
  display: inline-block;
  margin-right: 10px;
  padding-left: 22px;
  color: #666;
  font-size: 14px;
}
.area-wrapper .toggle i {
  float: left;
  margin: 7px 0 0 -20px;
  width: 16px;
  height: 13px;
  background: url(../../assets/zzy/hotel-detail.png) no-repeat -220px 0;
  overflow: hidden;
}
.area-wrapper .area-nav .on {
  background-color: #ffb200;
  border-radius: 3px;
  color: #fff;
}
.area-wrapper .area-nav ._j_area_name:hover {
  border-radius: 3px;
  color: #ffb200;
}
.warn-mark-icon {
  display: inline-block;
  width: 13px;
  height: 13px;
  background: url(../../assets/zzy/hotel-detail.png) no-repeat -135px -220px;
  overflow: hidden;
}
.area-wrapper .item-price dd {
  width: 580px;
  height: 26px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 60px;
}
.area-wrapper .item-price ul {
  margin-right: -20px;
}
.area-wrapper .hotel-rate {
  margin: 0 5px 0 0;
}
.hotel-rate.rate3 {
  width: 42px;
}
.hotel-rate {
  margin-left: 10px;
  display: inline-block;
  height: 13px;
  width: 70px;
  background: url(../../assets/zzy/hotel-detail.png) no-repeat -150px -230px;
  overflow: hidden;
  vertical-align: -2px;
}
.area-wrapper .item-price li {
  float: left;
  display: inline;
  margin-right: 40px;
  margin-top: 4px;
}
.clearfix {
  clear: both;
}
.hotel-toolbar {
  margin-bottom: 20px;
  padding: 7px 0;
  border: 1px solid #d7d7d7;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
}
.hotel-searchbar .hs-btn:hover {
  text-decoration: none;
  background-color: #ff9d00;
}
.h-tab {
  height: 40px;
  bottom: -2px;
  position: relative;
}
.h-tab .ul-tab {
  float: left;
}
.h-tab .ul-tab li {
  float: left;
  display: inline;
  margin-right: 5px;
}
.h-tab .ul-tab a.on {
  background-color: #ffb200;
  border-color: #ffb200;
  color: #fff;
}
.h-tab .ul-tab a {
  display: inline-block;
  float: left;
  height: 38px;
  padding: 0 12px;
  background-color: #f4f4f4;
  border-radius: 3px 3px 0 0;
  line-height: 38px;
  font-size: 14px;
  color: #333;
  transition: background-color 0.2s;
}
.h-tab .ul-tab a:hover {
  text-decoration: none;
  background-color: #fff6eb;
  border-color: #ffdcb2;
}
.htb-item {
  float: left;
  padding: 10px 18px;
  height: 46px;
}
.htb-item-price {
  width: 232px;
}
.htb-item + .htb-item {
  border-left: 1px solid #d7d7d7;
}
.htb-item-dropdown {
  width: 90px;
}
.htb-title {
  margin-bottom: 10px;
  font-size: 14px;
}
.htb-item-price .htb-title span {
  float: right;
}
.price-range,
.dist-range-box {
  margin: 0 10px 0;
}
.htb-item-dist {
  width: 179px;
}
.htb-item-dist .dist-num {
  float: right;
  padding-right: 5px;
}
.hotel-sortbar {
  height: 34px;
  line-height: 34px;
  border-bottom: 1px solid #eaeaea;
  font-size: 14px;
  color: #666;
  overflow: hidden;
}
.sortbar-info .checkbox-list {
  float: left;
}
.sortbar-info {
  float: left;
}
.sortbar-info .mui-checkbox {
  float: left;
  display: inline-block;
  margin-right: 15px;
  padding-left: 30px;
  color: #666;
}
.sortbar-info .mui-checkbox i {
  margin-top: 7px;
}
.hotel-toolbar .icon-checkbox,
.hotel-sortbar .icon-checkbox {
  float: left;
  margin-left: -25px;
  width: 20px;
  height: 20px;
  background: url("../../assets/zzy/hotel-detail.png") no-repeat -70px -220px;
  overflow: hidden;
}
.sortbar-info .total span {
  color: #ff8a00;
  font-size: 16px;
}
.sortbar-info .total {
  padding-right: 15px;
}
.sortbar-info .total,
checkbox-list {
  float: left;
}
.htb-search {
  float: left;
  padding-left: 30px;
}
.htb-searchbar {
  position: relative;
  width: 112px;
  margin-top: 4px;
  border-bottom: 2px solid #dce0e0;
  line-height: 24px;
}
.htb-searchbar input {
  padding: 0;
  width: 100px;
  height: 20px;
  border: 0;
  line-height: 20px;
  font-size: 12px;
  color: #666;
}
.htb-searchbar .htb-icon-search {
  position: absolute;
  left: -22px;
  top: 5px;
  width: 20px;
  height: 18px;
  background: url("../../assets/zzy/hotel-detail.png") no-repeat -70px -200px;
  overflow: hidden;
}
.sortbar-nav a {
  display: inline-block;
  margin-left: 20px;
  color: #666;
}
.sortbar-nav .price-sort i {
  float: right;
  margin: 11px 0 0 5px;
  width: 7px;
  height: 12px;
  background: url("../../assets/zzy/hotel-detail.png") no-repeat -110px -200px;
  overflow: hidden;
}
.sortbar-nav {
  float: right;
}
.sortbar-nav .on {
  color: #ff8a00;
}
/* 正文 */
.hotel-pic {
  float: left;
  display: inline;
  margin-right: 20px;
  width: 330px;
  height: 240px;
  position: relative;
}
.hotel-pic img {
  border-radius: 5px;
}
.hotel-title {
  margin-bottom: 5px;
  overflow: hidden;
}
.hotel-title .title {
  float: left;
}
.hotel-title h3 {
  margin-right: 5px;
  line-height: 30px;
  font-size: 18px;
  font-weight: normal;
  display: inline;
}
.hotel-title h3 a {
  color: #666;
}
.hotel-title span {
  font-size: 14px;
  color: #999;
  vertical-align: middle;
}
.hotel-item {
  padding: 25px 0;
  border-bottom: 1px solid #ececec;
  position: relative;
  transition: all 400ms;
}
.hotel-info {
  float: left;
  width: 315px;
  margin-right: 20px;
}
.hotel-info .nums {
  margin: 15px 0 5px;
  color: #999;
  line-height: 15px;
  font-family: "Microsoft Yahei";
}
.hotel-info .nums .split {
  margin: 1px 18px 0;
  width: 0;
  height: 30px;
  border-left: 1px solid #eaeaea;
  overflow: hidden;
}
.hotel-info .nums li {
  float: left;
}
.hotel-info .nums a {
  color: #999;
}
.hotel-info .nums em {
  font-style: normal;
  font-size: 14px;
  color: #ff8a00;
}
.hotel-info .summary {
  margin: 5px 0 15px;
  font-style: normal;
  font-size: 14px;
  color: #ff8a00;
}
.hotel-info .location {
  color: #999;
  line-height: 20px;
}
.hotel-info .icon-location {
  float: left;
  margin: 2px 5px 0 0;
  width: 13px;
  height: 15px;
  background: url("../../assets/zzy/hotel-detail.png") no-repeat -130px 0;
  overflow: hidden;
}
.hotel-btns {
  position: relative;
}
.btn-booking .ota {
  float: left;
  width: 180px;
  display: inline;
}
.btn-booking .name {
  line-height: 24px;
}
.btn-booking .name strong {
  font-size: 14px;
  color: #333;
  font-weight: normal;
}
.btn-booking .icon-alipay,
.btn-booking .icon-wxpay {
  margin: 5px 0 0 4px;
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url("../../assets/zzy/hotel-detail.png") no-repeat -250px 0;
  overflow: hidden;
  vertical-align: top;
}
.btn-booking .icon-wxpay {
  margin-left: 4px;
  background-position: -250px -15px;
}
.btn-booking .price {
  float: left;
  padding-right: 10px;
  width: 95px;
  border-left: 1px solid #eee;
  line-height: 24px;
  text-align: center;
  font-size: 16px;
  font-family: "Microsoft Yahei";
  position: relative;
}
b,
strong {
  font-weight: bold;
}
.btn-booking .price .arrow {
  position: absolute;
  right: 0;
  margin: 5px 0 0 0;
  width: 8px;
  height: 13px;
  background: url("../../assets/zzy/hotel-detail.png") no-repeat -190px -30px;
  overflow: hidden;
}
.btn-booking {
  display: block;
  padding: 6px;
  border-bottom: 1px solid #eee;
  color: #ff8a00;
}
.btn-booking:hover {
  text-decoration: none;
  background-color: #f4f4f4;
}
.hotel-btns {
  float: right;
  width: 300px;
}
.hotel-other {
  position: absolute;
  right: 0;
  top: 25px;
  text-align: right;
}
.hotel-other .collect a {
  display: inline-block;
}
.hotel-other .btn-addCollect {
  color: #ff8a00;
}
.hotel-other .collect i {
  display: inline-block;
  float: left;
  margin: 2px 5px 0 0;
  width: 12px;
  height: 12px;
  background: url("../../assets/zzy/hotel-detail.png") no-repeat;
}
.hotel-other .btn-cancelCollect i {
  background-position: -145px -50px;
}
.hotel-other .btn-addCollect i {
  background-position: -130px -50px;
}
.hotel-info .rating {
  margin: -15px 20px 0 0;
  width: 65px;
  height: 51px;
  padding-top: 15px;
  background: url("../../assets/zzy/hotel-detail.png") no-repeat 0 0;
  text-align: center;
  color: #999;
  font-size: 12px;
  line-height: 16px;
}
.hotel-info .rating2 {
  background-position: 0 -70px;
}
.htb-select .i-sel-arrow {
  float: right;
  margin: 8px 3px 0 0;
  border-top: 4px solid #999;
  border-left: 4px dashed transparent;
  border-right: 4px dashed transparent;
  line-height: 0;
  overflow: hidden;
}
.page-hotel {
  padding: 20px 5px;
  line-height: 24px;
  text-align: right;
  font-size: 12px;
  color: #999;
}
</style>