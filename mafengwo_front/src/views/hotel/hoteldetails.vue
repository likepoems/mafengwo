<template>
  <div class="all">
    <div class="mask" v-show="loading">
      <div class="img-container">
        <img src="@/assets/zzy/loading-m.gif" alt="" />
      </div>
    </div>
    <div class="container">
      <div class="top-info clearfix">
        <div class="crumb">
          <span class="tit">您在这里：</span>
          <div class="item">酒店<em>></em></div>
          <div class="item">中国<em>></em></div>
          <div class="item">{{ hotelInfo.hotel_area }}<em>></em></div>
          <div class="item cur">
            <strong>{{ hotelInfo.hotel_name }}预订</strong>
          </div>
        </div>
        <div class="weather-warpper">
          <img src="../../assets/zzy/icon8.png" alt="" width="25" height="25" />
          <span>多云 20℃~29℃</span>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="hotel-intro">
        <div class="intro-hd">
          <div class="main-title">
            <h1>{{ hotelInfo.hotel_name }}</h1>
            <i class="icon-bg icon-bird _j_icon_bird"></i>
          </div>
          <div class="entitle">
            <span>{{ hotelInfo.hotel_smallTitle }}</span>
          </div>
          <div class="location">
            <span>地址：{{ hotelInfo.hotel_address }}</span>
            <a href="javascript:;" class="a-maps">
              <i class="icon-bg"></i>
              查看地图
            </a>
          </div>
        </div>
        <!-- 轮播 -->
        <div class="intro-hd clearfix">
          <div class="img-big _j_album_trigger clickstat">
            <div class="circleimg">
              <img :src="defaultimg" alt="" />
              <!-- <img src="../../assets/zzy/small1.jpeg" alt="" /> -->
            </div>
            <span class="num">
              <em>163</em>
              张图片
            </span>
          </div>
          <ul class="img-small">
            <li v-for="(item, index) in imgs" :key="item.id">
              <img :src="imgs[index].src" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
    <div class="hotel-navbar" style="transform: translateY(0px)">
      <div class="navbar-content">
        <ul class="nav">
          <li class="_j_nav_item on"><a href="#hotel-booking">预定</a></li>
          <li class="_j_nav_item"><a href="#maps">位置</a></li>
          <li class="_j_nav_item"><a href="#hotel-info">攻略</a></li>
          <li class="_j_nav_item"><a href="#hotel-comment">点评</a></li>
          <li class="_j_nav_item"><a href="#hotel-recommend">周边酒店</a></li>
        </ul>
        <div class="navbar-r">
          <div class="r-a">
            <a href="javascript:;"><i class="icon-bg icon-mod"></i>点评</a>
            <a href="javascript:;"><i class="icon-bg icon-fav"></i>收藏</a>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="container">
      <div class="hotel-booking" id="hotel-booking">
        <div class="hotel-searchbar clearfix">
          <div class="hs-item hs-item-date">
            <span>入住日期</span>
            <input type="text" placeholder="入住日期" readonly />
            <i class="icon-bg icon-date"></i>
          </div>
          <div class="hs-item hs-item-date">
            <span>离店日期</span>
            <input type="text" placeholder="离店日期" readonly />
            <i class="icon-bg icon-date"></i>
          </div>
          <div class="hs-item hs-item-people">
            <span>人数未定</span>
            <i class="icon-bg icon-person icon-p1"></i>
          </div>
          <div class="hs-item hs-item-action">
            <a href="javascript:;" class="hs-btn">查看价格</a>
          </div>
        </div>
        <div class="book-list">
          <div class="caption">
            <div class="title">价格来源</div>
            <div class="low-room" style="margin-left: 150px; width: 400px">
              最低价房型
            </div>
            <div class="price">最低价格/每晚</div>
          </div>
          <a href="" class="item _j_booking_item">
            <div class="title">
              <img
                src="../../assets/zzy/mafengwo.png"
                width="100"
                height="20"
              />
              <i class="icon-bg icon-alipay"></i>
              <i class="icon-bg icon-wxpay"></i>
            </div>
            <div
              class="low-room _j_booking_room"
              style="
                margin-left: 150px;
                width: 400px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              混住六人间（床位）-6成人-不含餐-入住前3天免费取消
            </div>
            <div class="price _j_booking_price_wrapper" style="width: 120px">
              <span class="total" style="width: 115px">
                <strong class="_j_booking_price">￥25</strong>
                <strong
                  class="_j_booking_price"
                  style="
                    font-size: 12px;
                    color: #666;
                    padding-left: 2px;
                    vertical-align: 1px;
                  "
                  >起</strong
                >
              </span>
              <i class="icon-bg icon-arrow"></i>
            </div>
          </a>
          <a href="" class="item _j_booking_item">
            <div class="title">
              <img src="../../assets/zzy/booking.png" width="100" height="20" />
            </div>
            <div
              class="low-room _j_booking_room"
              style="
                margin-left: 150px;
                width: 400px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              混住六人间（床位）-不退款
            </div>
            <div class="price _j_booking_price_wrapper" style="width: 120px">
              <span class="total" style="width: 115px">
                <strong class="_j_booking_price">￥330</strong>
                <strong
                  class="_j_booking_price"
                  style="
                    font-size: 12px;
                    color: #666;
                    padding-left: 2px;
                    vertical-align: 1px;
                  "
                  >起</strong
                >
              </span>
              <i class="icon-bg icon-arrow"></i>
            </div>
          </a>
          <a href="" class="item _j_booking_item">
            <div class="title">agoda</div>
            <div
              class="low-room _j_booking_room"
              style="
                margin-left: 150px;
                width: 400px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              榻榻米房(大床)
            </div>
            <div class="price _j_booking_price_wrapper" style="width: 120px">
              <span class="total" style="width: 115px">
                <strong class="_j_booking_price">￥288</strong>
                <strong
                  class="_j_booking_price"
                  style="
                    font-size: 12px;
                    color: #666;
                    padding-left: 2px;
                    vertical-align: 1px;
                  "
                  >起</strong
                >
              </span>
              <i class="icon-bg icon-arrow"></i>
            </div>
          </a>
          <a href="" class="item _j_booking_item">
            <div class="title">携程</div>
            <div
              class="low-room _j_booking_room"
              style="
                margin-left: 150px;
                width: 400px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              榻榻米标准间
            </div>
            <div class="price _j_booking_price_wrapper" style="width: 120px">
              <span class="total" style="width: 115px">
                <strong class="_j_booking_price">￥135</strong>
                <strong
                  class="_j_booking_price"
                  style="
                    font-size: 12px;
                    color: #666;
                    padding-left: 2px;
                    vertical-align: 1px;
                  "
                  >起</strong
                >
              </span>
              <i class="icon-bg icon-arrow"></i>
            </div>
          </a>
          <a href="" class="item _j_booking_item">
            <div class="title">艺龙</div>
            <div
              class="low-room _j_booking_room"
              style="
                margin-left: 150px;
                width: 400px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              红颜六人房(床位)(公共卫浴) (仅女生入住)
            </div>
            <div class="price _j_booking_price_wrapper" style="width: 120px">
              <span class="total" style="width: 115px">
                <strong class="_j_booking_price">￥30</strong>
                <strong
                  class="_j_booking_price"
                  style="
                    font-size: 12px;
                    color: #666;
                    padding-left: 2px;
                    vertical-align: 1px;
                  "
                  >起</strong
                >
              </span>
              <i class="icon-bg icon-arrow"></i>
            </div>
          </a>
        </div>
      </div>
      <div class="hotel-maps" id="maps">
        <div class="map-img">
          <img
            src="../../assets/zzy/map2.png"
            style="height: 380px; width: 680px"
          />
        </div>
        <div class="viewandtraffic">
          <ul class="hd">
            <li style="width: 49.98%" class="on">
              <a href="javascript:;">景点</a>
            </li>
            <li style="width: 49.98%">
              <a href="javascript:;">交通</a>
            </li>
          </ul>
          <div class="bd">
            <ul class="scenic">
              <li class="clickstat">
                <h3>
                  <a href="">锦里</a>
                </h3>
                <span class="scale-bar">
                  <i></i>
                </span>
                <span class="distance">0.9公里</span>
                <div class="clearfix"></div>
              </li>
              <li class="clickstat">
                <h3>
                  <a href="">宽窄巷子</a>
                </h3>
                <span class="scale-bar">
                  <i></i>
                  <i></i>
                </span>
                <span class="distance">1.5公里</span>
                <div class="clearfix"></div>
              </li>
              <li class="clickstat">
                <h3>
                  <a href="">成都大熊猫繁育研究基地</a>
                </h3>
                <span class="scale-bar">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span class="distance">13.4公里</span>
                <div class="clearfix"></div>
              </li>
              <li class="clickstat">
                <h3>
                  <a href="">都江堰景区</a>
                </h3>
                <span class="scale-bar">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span class="distance">57.1公里</span>
                <div class="clearfix"></div>
              </li>
              <li class="clickstat">
                <h3>
                  <a href="">都江堰景区</a>
                </h3>
                <span class="scale-bar">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span class="distance">57.1公里</span>
                <div class="clearfix"></div>
              </li>
              <li class="clickstat">
                <h3>
                  <a href="">都江堰景区</a>
                </h3>
                <span class="scale-bar">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span class="distance">57.1公里</span>
                <div class="clearfix"></div>
              </li>
            </ul>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="hotel-info" id="hotel-info">
        <!-- 基本信息 -->
        <div class="info-section">
          <dl>
            <dt>基本信息</dt>
            <dd>
              <div class="cell" style="width: 200px">
                <span class="label">入住时间: </span>
                <span class="content" style="width: 200px">
                  <strong>{{ hotelInfo.hotel_checkIn }}</strong>
                </span>
              </div>
              <div class="cell">
                <span class="label">离店时间: </span>
                <span class="content"><strong>12:00</strong>之前</span>
              </div>
              <div class="cell">
                <span class="label">建成于: </span>
                <span class="content"
                  ><strong>{{ hotelInfo.hotel_buildTime }}</strong
                  >年</span
                >
              </div>
              <div class="cell">
                <span class="label">翻修于: </span>
                <span class="content"
                  ><strong>{{ hotelInfo.hotel_rebuildtime }}</strong
                  >年</span
                >
              </div>
              <div class="cell">
                <span class="label">酒店规模: </span>
                <span class="content"
                  ><strong>{{ hotelInfo.hotel_scale }}</strong
                  >间客房</span
                >
              </div>
              <div class="clearfix"></div>
            </dd>
            <div class="clearfix"></div>
          </dl>
        </div>
        <!-- 主要设施 -->
        <div class="info-section">
          <div :class="[isexpand ? 'noexpand' : '']">
            <dl class="clearfix">
              <dt>主要设施</dt>
              <dd>
                <ul class="facility-item">
                  <li><i class="icon-bg icon-wifi"></i>wifi服务</li>
                  <li class="off">
                    <i class="icon-bg icon-park"></i>免费停车场
                  </li>
                  <li class="off"><i class="icon-bg icon-elevator"></i>电梯</li>
                  <li><i class="icon-bg icon-restaurant"></i>餐厅</li>
                  <li><i class="icon-bg icon-consign"></i>行李寄存</li>
                  <li><i class="icon-bg icon-24hours"></i>24小时服务</li>
                  <li class="off">
                    <i class="icon-bg icon-thermos"></i>热水壶
                  </li>
                  <li><i class="icon-bg icon-blower"></i>吹风机</li>
                </ul>
                <div class="clearfix"></div>
              </dd>
              <div class="clearfix"></div>
            </dl>
            <dl class="clearfix">
              <dt>主要设施</dt>
              <dd>
                <ul class="facility-item">
                  <li><i class="icon-bg icon-ok"></i>接机服务</li>
                  <li><i class="icon-bg icon-ok"></i>邮政服务</li>
                  <li><i class="icon-bg icon-ok"></i>旅游服务</li>
                  <li><i class="icon-bg icon-ok"></i>客房服务</li>
                  <li><i class="icon-bg icon-ok"></i>快速入住服务</li>
                  <li><i class="icon-bg icon-ok"></i>叫车服务</li>
                  <li><i class="icon-bg icon-ok"></i>旅游交通图</li>
                  <li><i class="icon-bg icon-ok"></i>一次性账单结算</li>
                  <li><i class="icon-bg icon-ok"></i>部分时段大堂经理服务</li>
                </ul>
                <div class="clearfix"></div>
              </dd>
              <div class="clearfix"></div>
            </dl>
            <dl class="clearfix">
              <dt>酒店设施</dt>
              <dd>
                <ul class="facility-item">
                  <li><i class="icon-bg icon-ok"></i>吸烟区</li>
                  <li><i class="icon-bg icon-ok"></i>充电车位</li>
                  <li><i class="icon-bg icon-ok"></i>传真/复印</li>
                  <li><i class="icon-bg icon-ok"></i>无电梯</li>
                  <li><i class="icon-bg icon-ok"></i>公共区域监控</li>
                  <li><i class="icon-bg icon-ok"></i>收费停车场</li>
                </ul>
                <div class="clearfix"></div>
              </dd>
              <div class="clearfix"></div>
            </dl>
            <dl class="clearfix">
              <dt>房间设施</dt>
              <dd>
                <ul class="facility-item">
                  <li><i class="icon-bg icon-ok"></i>叫醒服务</li>
                  <li><i class="icon-bg icon-ok"></i>24小时热水</li>
                  <li><i class="icon-bg icon-ok"></i>保险箱</li>
                  <li><i class="icon-bg icon-ok"></i>小冰箱/迷你吧</li>
                  <li><i class="icon-bg icon-ok"></i>宽带上网</li>
                  <li><i class="icon-bg icon-ok"></i>空调</li>
                  <li><i class="icon-bg icon-ok"></i>电视</li>
                  <li><i class="icon-bg icon-ok"></i>暖气</li>
                  <li><i class="icon-bg icon-ok"></i>独立卫浴间</li>
                  <li><i class="icon-bg icon-ok"></i>洗衣机</li>
                  <li><i class="icon-bg icon-ok"></i>沙发</li>
                  <li><i class="icon-bg icon-ok"></i>拖鞋</li>
                  <li><i class="icon-bg icon-ok"></i>毯子或被子</li>
                  <li><i class="icon-bg icon-ok"></i>智能门锁</li>
                  <li><i class="icon-bg icon-ok"></i>书桌</li>
                  <li><i class="icon-bg icon-ok"></i>手动窗帘</li>
                  <li><i class="icon-bg icon-ok"></i>电热水器</li>
                </ul>
                <div class="clearfix"></div>
              </dd>
              <div class="clearfix"></div>
            </dl>
          </div>
          <a href="javascript:;" class="expand-more">
            <i class="icon-bg icon-more"></i>
            <span @click="isexpand = !isexpand">展开全部</span>
          </a>
        </div>
        <!-- 酒店合作 -->
        <div class="info-section">
          <a
            href=""
            style="
              color: #666;
              font-weight: bold;
              text-decoration: none;
              cursor: default;
            "
            >马蜂窝酒店平台合作伙伴</a
          >
        </div>
        <!-- 酒店攻略 -->
        <div class="info-section">
          <div class="expand-wrap" style="height: auto">
            <dl>
              <dt>酒店攻略</dt>
              <dd>
                {{ hotelInfo.hotel_strategy }}
              </dd>
              <div class="clearfix"></div>
            </dl>
          </div>
        </div>
      </div>
      <div class="hotel-comment" id="hotel-comment">
        <h3 class="title">{{ hotelInfo.hotel_comment }}条真实用户评论</h3>
        <div class="comm-bar">
          <ul class="comm-tab">
            <li class="on">
              <a href="javascript:;">全部点评200条</a>
            </li>
            <li>
              <a href="javascript:;">相关游记24篇</a>
            </li>
          </ul>
          <a href="" class="btn-add"><i class="icon-bg icon-plus"></i>写点评</a>
        </div>
        <div class="comm-list sign-font-family">
          <div
            class="comm-item _j_comment_item"
            v-for="(item, index) in commentList"
            :key="`key_${index}`"
          >
            <div class="user">
              <a href="javascript:;" class="avatar"
                ><img src="../../assets/zzy/头像.png" alt=""
              /></a>
              <a href="" class="name">马蜂窝用户</a>
              <br />
              <span class="lv">LV.15</span>
              <!-- <div class="clearfix"></div> -->
            </div>
            <div class="txt">
              {{item.content}}
            </div>
            <div class="img">
              <a href="javascript:;"
                ><img :src="baseurl+item.img" alt=""
              /></a>
              <div class="clearfix"></div>
            </div>
            <div class="comm-meta">
              <span class="icon-bg comm-star comm-star5"></span>
              <span class="time">{{item.time}}</span>
              <span class="from-notes">
                <i class="icon-bg icon-notes"></i>
                此条点评来自游记
                <a href="javascript:;">《没有什么慢时光 但是总有慢心情》</a>
              </span>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="m-pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="pageSize"
            :page-sizes="[4, 8, 10]"
            background
            layout="total, prev, pager, next,sizes"
            :total="totalPage"
          >
          </el-pagination>
        </div>
      </div>
      <div class="hotel-recommend" id="hotel-recommend">
        <h3>周边酒店推荐</h3>
        <ul>
          <li>
            <a href="">
              <div class="pic">
                <img src="../../assets/zzy/recpic1.jpeg" alt="" />
              </div>
              <div class="bag-opa"></div>
              <div class="fraction">8.1分</div>
              <div class="info">
                <div class="prize">
                  <span>¥<b>300</b></span>
                </div>
                <p>成都京川宾馆</p>
                <p class="eng">Jing Chuan Hotel</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="pic">
                <img src="../../assets/zzy/recpic1.jpeg" alt="" />
              </div>
              <div class="bag-opa"></div>
              <div class="fraction">8.1分</div>
              <div class="info">
                <div class="prize">
                  <span>¥<b>300</b></span>
                </div>
                <p>成都京川宾馆</p>
                <p class="eng">Jing Chuan Hotel</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="pic">
                <img src="../../assets/zzy/recpic1.jpeg" alt="" />
              </div>
              <div class="bag-opa"></div>
              <div class="fraction">8.1分</div>
              <div class="info">
                <div class="prize">
                  <span>¥<b>300</b></span>
                </div>
                <p>成都京川宾馆</p>
                <p class="eng">Jing Chuan Hotel</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="pic">
                <img src="../../assets/zzy/recpic1.jpeg" alt="" />
              </div>
              <div class="bag-opa"></div>
              <div class="fraction">8.1分</div>
              <div class="info">
                <div class="prize">
                  <span>¥<b>300</b></span>
                </div>
                <p>成都京川宾馆</p>
                <p class="eng">Jing Chuan Hotel</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Hoteldetails",
  data() {
    return {
      currentPage1: 1,
      loading: false,
      totalPage: 0,
      defaultimg: require("@/assets/zzy/small1.jpeg"),
      imgs: [
        { id: 0, src: require("@/assets/zzy/small1.jpeg") },
        { id: 1, src: require("@/assets/zzy/small2.jpeg") },
        { id: 2, src: require("@/assets/zzy/small3.jpeg") },
        { id: 3, src: require("@/assets/zzy/small4.jpeg") },
        { id: 4, src: require("@/assets/zzy/small5.jpeg") },
        { id: 5, src: require("@/assets/zzy/small6.jpeg") },
      ],
      imgindex: 0,
      isexpand: true,
      hotelInfo: {},
      pageSize: 4,
      commentList: [],
      baseurl:'http://127.0.0.1:5000/'
    };
  },
  created() {
    setInterval(() => {
      this.goimg();
    }, 2000);
    this.getInfo();
    this.getCommentList();
  },
  computed: {
  },
  methods: {
    handleCurrentChange(val) {
      console.log(val);
      this.pageNum = val;
      this.getCommentList()
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getCommentList()
    },
    goindex(index) {
      this.defaultimg = this.imgs[index].src;
    },
    goimg() {
      if (this.imgindex < 5) {
        this.imgindex++;
      } else {
        this.imgindex = 0;
      }
      this.goindex(this.imgindex);
    },
    getInfo() {
      this.loading = true;
      this.$axios
        .get("hotelListBy", {
          params: {
            id: this.$route.params.id,
          },
        })
        .then((i) => {
          console.log(i);
          if (i.status === 200) {
            for (let j in i.data[0]) {
              this.$set(this.hotelInfo, j, i.data[0][j]);
            }
            this.loading = false;
          }
        });
    },
    getCommentList() {
      this.loading = true;
      this.$axios
        .post("/comments", {
          pageNum: this.currentPage1,
          pageSize: this.pageSize,
          ht_id: this.$route.params.id,
        })
        .then((res) => {
          if (!!res && res.status === 200) {
            console.log(res);
          this.totalPage = res.data.total;
          this.commentList = res.data.result1.map(item=>{
            return {
              ...item,
              content: item.content.replace(/<br>/g,"")
            }
          })
          this.loading = false;
          }
          
        });
    },
  },
  components: {},
};
</script>
<style scoped>
.all {
  height: 100%;
  width: 100%;
  position: relative;
}
/* 遮罩层 */
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 2001;
}
.img-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.clearfix {
  clear: both;
}
.container {
  width: 1000px;
  margin: 0 auto;
}
.top-info {
  margin: 10px 0 20px;
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
b,
strong {
  font-weight: bold;
}
.weather-warpper {
  float: right;
  padding: 0;
  width: auto;
  font-size: 12px;
  color: #999;
  line-height: 25px;
}
.intro-hd {
  position: relative;
  margin: 15px 0 10px;
}
.main-title {
  font-size: 24px;
  color: #333;
  line-height: 30px;
}
.en-title {
  font-size: 14px;
  line-height: 24px;
}
.hotel-intro .location {
  line-height: 24px;
  font-size: 12px;
  color: #999;
}
.main-title h1 {
  display: inline;
  font-weight: normal;
}

.icon-bg {
  display: inline-block;
  background: url("../../assets/zzy/hotel-detail.png") no-repeat;
  vertical-align: middle;
  overflow: hidden;
}
.icon-bird,
.icon-birdRed {
  margin: 2px 0 0 5px;
  width: 24px;
  height: 24px;
  background-position: -280px 0;
  overflow: hidden;
  vertical-align: top;
}
.en-title {
  font-size: 14px;
  line-height: 24px;
}
.hotel-intro .a-maps {
  display: inline-block;
}
a {
  background-color: transparent;
  text-decoration: none;
  /* color: #ff9d00; */
  cursor: pointer;
}
.a-maps i {
  margin: 0 2px 0 10px;
  width: 13px;
  height: 15px;
  background-position: -130px 0;
}
.img-big {
  float: left;
  width: 680px;
  height: 380px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  color: #fff;
}
.img-big img {
  width: 680px;
  height: 380px;
}
.img-big .num {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 0 15px;
  line-height: 40px;
  background-color: rgba(0, 0, 0, 0.65);
  border-radius: 3px;
  font-size: 16px;
}
.img-small {
  float: right;
  width: 320px;
  height: 380px;
  overflow: hidden;
}
.img-small li {
  float: left;
  display: inline;
  margin: 0 0 10px 10px;
  border-radius: 4px;
  width: 150px;
  height: 120px;
  overflow: hidden;
  cursor: pointer;
}
.hotel-navbar {
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #dedede;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  line-height: 50px;
  position: relative;
  z-index: 10;
}
.navbar-content {
  width: 1000px;
  margin: 0 auto;
}
.hotel-navbar .nav {
  float: left;
  font-size: 16px;
}
.hotel-navbar .nav li {
  float: left;
  width: auto;
}
.hotel-navbar .nav a {
  display: inline-block;
  padding: 0 30px;
}
.hotel-navbar a {
  color: #333;
}
.navbar-r {
  float: right;
  padding-right: 15px;
  font-size: 14px;
}
.hotel-navbar .r-a {
  font-size: 14px;
}
.hotel-navbar .r-a,
.hotel-navbar .r-b {
  float: left;
  display: inline;
}
.hotel-navbar .r-a a {
  display: inline-block;
  margin-left: 45px;
}
.hotel-navbar .r-a .icon-mod {
  background-position: -70px -245px;
  width: 23px;
  height: 24px;
}
.hotel-navbar .r-a i {
  float: left;
  margin: 12px 5px 0 0;
  width: 19px;
  height: 25px;
  background: url("../../assets/zzy/hotel-detail.png") no-repeat -70px 0;
}
.hotel-navbar .r-a .icon-fav {
  width: 27px;
  background-position: -100px 0;
}
a:hover {
  outline: 0;
  text-decoration: underline;
}
.hotel-navbar .nav .on a {
  border-bottom: 3px solid #ffb200;
  height: 47px;
}
.hotel-navbar .nav a:hover {
  text-decoration: none;
}
.hotel-booking {
  padding: 40px 0;
}
.hotel-searchbar {
  margin-bottom: 20px;
}
.hotel-searchbar .hs-item-date,
.hotel-searchbar .hs-item-people {
  cursor: pointer;
}
.hotel-searchbar .hs-item > span {
  font-size: 14px;
  color: #666;
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
.hotel-searchbar .hs-item-date input {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  visibility: hidden;
  border: 0;
  padding: 0;
  width: 100%;
}
.hotel-searchbar .hs-item > input {
  font-size: 16px;
  color: #333;
}
.hotel-searchbar .icon-date {
  width: 16px;
  height: 16px;
  overflow: hidden;
  background-position: -190px 0;
}
.hotel-searchbar .hs-item {
  float: left;
  width: 132px;
  margin-right: 3px;
  position: relative;
}
.hotel-searchbar .icon-date,
.hotel-searchbar .icon-person {
  position: absolute;
  right: 10px;
  top: 10px;
}
.icon-person {
  width: 15px;
  height: 16px;
  background-position: -70px -140px !important;
}
.hotel-searchbar .hs-item-action {
  margin-left: 20px;
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
}
.book-list {
  border: 1px solid #e5e5e5;
}
.book-list .caption {
  height: 46px;
  padding: 0 15px;
  border-bottom: 1px solid #ccc;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  background-color: #f4f4f4;
  font-size: 14px;
  color: #333;
  line-height: 46px;
}
.book-list .item > div,
.book-list .caption > div {
  float: left;
  height: 30px;
}
.book-list .title {
  float: left;
  width: 235px;
  color: #333;
}
.book-list .caption .price {
  padding-right: 20px;
}
.book-list .item {
  display: block;
  height: 30px;
  padding: 15px;
  border-bottom: 1px dashed #cecece;
  line-height: 30px;
  font-size: 14px;
  color: #666;
}
.icon-alipay {
  width: 14px;
  height: 14px;
  background-position: -250px 0;
}
.book-list .icon-alipay,
.book-list .icon-wxpay {
  margin: 0 0 0 5px;
}
.icon-wxpay {
  width: 14px;
  height: 14px;
  background-position: -250px -15px;
}
.book-list .total {
  display: inline-block;
  padding-left: 3px;
  width: 95px;
  text-align: left;
}
.book-list .price strong {
  color: #ff8a00;
  font-size: 20px;
  font-family: "Microsoft Yahei";
}
.book-list .price {
  position: relative;
  float: right !important;
  margin-right: 20px;
  padding-right: 20px;
  position: relative;
  width: 90px;
}
.book-list .icon-arrow {
  position: absolute;
  right: 0;
  top: 10px;
  width: 10px;
  height: 13px;
  background-position: -190px -30px;
}
.hotel-info {
  padding: 40px 0;
}
.info-section {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  line-height: 24px;
}
.info-section dl {
  margin-left: 155px;
}
.hotel-info .cell {
  float: left;
  width: 165px;
}
.info-section dt {
  float: left;
  display: inline;
  margin-left: -155px;
  width: 155px;
  font-size: 16px;
}
.hotel-info .cell .content strong {
  font-size: 18px;
  font-weight: normal;
  vertical-align: bottom;
}
.hotel-info .cell .content {
  color: rgb(51, 51, 51);
  letter-spacing: 0.5px;
  vertical-align: bottom;
}
.hotel-info .expand-wrap {
  overflow: hidden;
}
.facility-item li {
  float: left;
  width: 165px;
  display: inline;
  margin-bottom: 12px;
}
.facility-item i {
  margin-right: 5px;
  width: 20px;
  height: 20px;
  background-position: -110px -70px;
}
.facility-item .icon-park,
.facility-item .icon-parking {
  background-position: -130px -70px;
}
.facility-item .icon-ok {
  margin: 0 10px 0 4px;
  width: 11px;
  height: 9px;
  background-position: -205px -30px;
}
.facility-item .off i {
  opacity: 0.3;
}
.facility-item .off {
  color: rgb(204, 204, 204);
  text-decoration: line-through;
}
.facility-item .icon-elevator {
  background-position: -170px -70px;
}
.facility-item .icon-restaurant {
  background-position: -190px -70px;
}
.facility-item .icon-consign {
  background-position: -210px -70px;
}
.facility-item .icon-24hours {
  background-position: -310px -70px;
}
.facility-item .icon-thermos {
  background-position: -290px -70px;
}
.facility-item .icon-blower {
  background-position: -270px -70px;
}
.expand-more i {
  margin-right: 5px;
  width: 16px;
  height: 13px;
  background-position: -220px 0px;
}
.expand-more {
  position: relative;
  display: inline-block;
  color: rgb(255, 138, 0);
  margin: 10px 0px 0px 155px;
}
.hotel-comment {
  padding: 40px 0px;
}
.hotel-comment h3.title {
  margin-bottom: 40px;
  text-align: center;
  font-size: 24px;
  font-weight: normal;
  color: rgb(51, 51, 51);
  letter-spacing: 1px;
}
.comm-bar {
  height: 38px;
  font-size: 14px;
  border-bottom: 1px solid rgb(228, 228, 228);
}
.comm-tab a {
  display: inline-block;
  height: 37px;
  color: rgb(51, 51, 51);
  padding: 0px 15px;
}
.comm-tab li {
  float: left;
  display: inline;
  margin-right: 20px;
}
.comm-tab {
  float: left;
  line-height: 30px;
}
.comm-tab .on a {
  margin-bottom: -2px;
  border-bottom: 3px solid #ff9d00;
  font-weight: bold;
}
.comm-tab a:hover {
  text-decoration: none;
  font-weight: bold;
}
.comm-bar .btn-add {
  float: right;
  margin-right: 15px;
  padding: 0 10px 0 8px;
  line-height: 30px;
  background-color: #ffb200;
  border-radius: 3px;
  color: #fff;
}
.comm-bar .btn-add i {
  margin-right: 3px;
  width: 16px;
  height: 17px;
  background-position: -150px -140px;
  vertical-align: middle;
}
.comm-bar .btn-add:hover {
  text-decoration: none;
  background-color: #ff9d00;
}
.sign-font-family {
  font-family: "MFWAntiSpiderV4";
  font-style: normal;
}
.comm-item {
  border-bottom: 1px dashed #dfdfdf;
  padding: 30px 15px 10px 155px;
}
.comm-item .user {
  float: left;
  width: 150px;
  display: inline;
  margin-left: -155px;
  line-height: 24px;
}
.comm-item .avatar {
  float: left;
  margin-right: 10px;
  display: inline-block;
  width: 48px;
  height: 48px;
  position: relative;
}
.comm-item .avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}
.comm-item .name {
  font-size: 14px;
  color: #ffa800;
}
.comm-item .lv {
  color: #f35035;
  font-weight: bold;
}
.comm-item .txt {
  margin: 0 60px 5px 0;
  font-size: 14px;
  line-height: 24px;
}
.comm-item .img {
  margin-top: 15px;
}
.comm-item .img img {
  width: 250px;
  height: 150px;
  border-radius: 4px;
}
.comm-item .img a {
  float: left;
  width: 250px;
  height: 150px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.comm-meta {
  margin-top: 7px;
  font-size: 12px;
  line-height: 20px;
  color: #666;
}
.comm-meta .comm-star {
  margin-right: 16px;
}
.comm-meta .time {
  display: inline-block;
  margin-right: 16px;
  font-size: 14px;
}
.time {
  vertical-align: middle;
}
.comm-meta .from-notes {
  display: inline-block;
}
.comm-meta .icon-notes {
  float: left;
  margin: 2px 5px 0 0;
}
.icon-notes {
  width: 16px;
  height: 17px;
  background-position: -220px -140px;
}
.comm-meta a {
  color: #ff7000;
}

.comm-star {
  display: inline-block;
  width: 102px;
  height: 18px;
  background-position: -175px -110px;
}
.comm-star5 {
  background-position: -70px -110px;
}
.m-pagination {
  text-align: center;
  padding: 20px 5px;
  line-height: 24px;
  font-size: 12px;
  color: #999;
}
.hotel-recommend {
  padding: 40px 0 80px;
  overflow: hidden;
}
.hotel-recommend h3 {
  margin-bottom: 40px;
  font-size: 24px;
  text-align: center;
  font-weight: normal;
  color: #333;
  letter-spacing: 1px;
}
.hotel-recommend ul {
  width: 1012px;
}
.hotel-recommend li {
  width: 240px;
  height: 240px;
  overflow: hidden;
  float: left;
  margin: 0 13px 13px 0;
  border-radius: 4px;
  position: relative;
}
.hotel-recommend a {
  display: block;
}
.hotel-recommend img {
  width: 240px;
  height: 240px;
  border-radius: 4px;
}
.hotel-recommend .bag-opa {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #000;
  opacity: 0.2;
  z-index: 2;
}
.hotel-recommend .fraction {
  width: 55px;
  height: 25px;
  font-size: 18px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 13px;
  top: 13px;
  text-align: center;
  line-height: 25px;
  border-radius: 4px;
  z-index: 5;
}
.hotel-recommend .info {
  position: absolute;
  z-index: 3;
  left: 13px;
  bottom: 13px;
  width: 220px;
  margin-top: -30px;
  color: #fff;
}
.hotel-recommend .prize,
.hotel-recommend p {
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
}
.hotel-recommend .info .prize span {
  color: #ff8a00;
  font-size: 16px;
}
.hotel-recommend .prize span b {
  font-weight: normal;
  font-size: 22px;
}
.hotel-recommend .info p {
  font-size: 14px;
}
.hotel-recommend .info p.eng {
  font-size: 12px;
}
.hotel-maps {
  padding: 40px 0;
}
.hotel-maps .map-img {
  float: left;
  position: relative;
  width: 680px;
  height: 380px;
}
.hotel-maps .viewandtraffic {
  float: right;
  width: 310px;
}
.viewandtraffic .hd {
  height: 33px;
  border-bottom: 1px solid #e4e4e4;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
}
.viewandtraffic .hd li {
  float: left;
}
.viewandtraffic .hd li a {
  display: block;
  height: 32px;
  margin-bottom: -2px;
  font-size: 16px;
  cursor: pointer;
  color: #000;
  text-decoration: none;
}
.viewandtraffic .hd li a:hover {
  color: #ff8a00;
}
.viewandtraffic .hd .on a {
  border-bottom: 3px solid #ff9d00;
  color: #ff8a00;
}
.viewandtraffic .bd {
  height: 345px;
  line-height: 18px;
  overflow: auto;
}
.bd .scenic li {
  padding: 10px 15px;
  border-bottom: 1px dashed #cecece;
  cursor: pointer;
}
.bd .scenic .scale-bar {
  float: left;
  width: 140px;
  height: 7px;
  display: block;
}
.bd .scenic h3 {
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
}
.bd .scenic .scale-bar i {
  width: 12px;
  height: 6px;
  float: left;
  border: 1px solid #999;
  border-top: none;
  margin: 5px 0 0 1px;
  margin-left: -1px;
}
.bd .scenic .distance {
  float: right;
  font-size: 14px;
}
.noexpand {
  height: 72px;
  overflow: hidden;
}
</style>