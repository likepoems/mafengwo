<template>
  <div class="ScenicDetail">
    <div class="scedetail_header">
      <div class="container">
        <div class="herder_crumb">
          <div class="crumb_item">
            <a href="javascript:;">目的地</a>
            <em>&gt;</em>
          </div>
          <div class="crumb_item">
            <a href="javascript:;">成都</a>
            <em>&gt;</em>
          </div>
          <div class="crumb_item">
            <a href="javascript:;">成都景点</a>
          </div>
        </div>
        <div class="header_title">
          <h1>{{ scenicitem.name }}</h1>
          <p class="en">
            {{ scenicitem.en_name }}
          </p>
        </div>
      </div>
      <div class="header_suspend">
        <div class="container">
          <ul>
            <li class="suspend_detitile active">
              <a href="javascript:;" @click="changeDetail()">概括</a>
            </li>
            <li class="suspend_commenttitle">
              <a href="javascript:;" @click="changeComment()"
                >蜂蜂点评
                <span>(5924条)</span>
              </a>
            </li>
            <li class="suspend_right">
              <a href="javascript:;" @click="outerVisible = true">我要点评</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="part_line"></div> -->
    <el-dialog title="" :visible.sync="outerVisible">
      <!-- <el-dialog
        width="30%"
        title="内层 Dialog"
        :visible.sync="innerVisible"
        append-to-body>
      </el-dialog> -->
      <div class="dialog_head">
        <h2>
          <strong>{{ scenicitem.name }}</strong>
          <em>*</em>
          为必填选项
        </h2>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="110px"
          class="demo-ruleForm"
        >
          <el-form-item label="总体评价" prop="value">
            <el-rate
              v-model="ruleForm.value"
              :texts="texts"
              text-color="#999999"
              show-text
            >
            </el-rate>
          </el-form-item>
          <el-form-item label="内容" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <span class="form_note">内容不超过1000字</span>
          <el-form-item label="上传图片">
            <el-upload
              action="http://localhost:5000/comment"
              list-type="picture-card"
              ref="upload"
              :data="ruleForm"
              :auto-upload="false"
              :on-success="success"
              class="upload"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="submit" @click="onSubmit('ruleForm')">提交</el-button>
      </div>
    </el-dialog>
    <div class="scedetail_detail">
      <div class="detail_img">
        <div class="container">
          <img
            v-for="item in scenicitem.photo"
            :src="base_url + item"
            :key="item"
          />
        </div>
      </div>
      <div class="detail_info container">
        <div class="info_summary" v-html="scenicitem.introduce"></div>
        <ul class="info_base">
          <li>
            <div class="base_label">电话</div>
            <div class="base_content">{{ scenicitem.phone }}</div>
          </li>
          <li class="base_site">
            <div class="base_label">网址</div>
            <div class="base_content">
              <a href="javascript:;"> {{ scenicitem.website }}</a>
            </div>
          </li>
          <li>
            <div class="base_label">用时参考</div>
            <div class="base_content">3小时以上</div>
          </li>
        </ul>
        <div class="info_item">
          <p>交通</p>
          <span v-html="scenicitem.traffic"> </span>
        </div>
        <div class="info_item">
          <p>门票</p>
          <span v-html="scenicitem.tickets"> </span>
        </div>
        <div class="info_item">
          <p>开放时间</p>
          <span v-html="scenicitem.open_time"> </span>
        </div>
      </div>
      <div class="detail_location">
        <div class="container">
          <div class="location_title">
            <h3>景点位置</h3>
            <p>{{ scenicitem.location }}</p>
          </div>
          <div class="location_show">
            <img src="../../assets/scenic//scenicdetail/location.png" alt="" />
            <div class="show_locanearby">
              <div class="nearby_title">附近景点</div>
              <ul>
                <li>
                  <a href="javascript:;"
                    >成都大熊猫繁育研究基地大熊猫太阳产房</a
                  >
                  <span>100米</span>
                </li>
                <li>
                  <a href="javascript:;">成年大熊猫别墅</a>
                  <span>200米</span>
                </li>
                <li>
                  <a href="javascript:;">小熊猫2号活动场</a>
                  <span>300米</span>
                </li>
                <li>
                  <a href="javascript:;">天鹅湖</a>
                  <span>300米</span>
                </li>
                <li>
                  <a href="javascript:;">熊猫科学探秘馆</a>
                  <span>300米</span>
                </li>
                <li>
                  <a href="javascript:;">成都大熊猫生态园旅游博物馆</a>
                  <span>400米</span>
                </li>
                <li>
                  <a href="javascript:;"
                    >成都大熊猫繁育研究基地大熊猫月亮产房</a
                  >
                  <span>500米</span>
                </li>
                <li>
                  <a href="javascript:;">漫花庄园</a>
                  <span>2.7公里</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="detail_tickets">
        <div class="container">
          <div class="tickets_title">
            <h3>热门优惠</h3>
          </div>
          <div class="tickets_table">
            <table>
              <thead>
                <tr>
                  <th class="type">类型</th>
                  <th class="pro"></th>
                  <th class="price">价格</th>
                  <th class="action"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="type">景区/场馆</td>
                  <td class="pro">
                    <a href="javascript:;"
                      >熊猫基地半价门票优惠票可定
                      搭配成都琴台路蜀风雅韵川剧演出...</a
                    >
                  </td>
                  <td class="price">￥52起</td>
                  <td class="action">
                    <a href="javascript:;">预定</a>
                  </td>
                </tr>
                <tr>
                  <td class="type">自由行定制</td>
                  <td class="pro">
                    <a href="javascript:;"
                      >暑期预售·立减800元
                      成都+三星堆+九寨沟定制全景4-5日游（九...</a
                    >
                  </td>
                  <td class="price">￥999起</td>
                  <td class="action">
                    <a href="javascript:;">预定</a>
                  </td>
                </tr>
                <tr>
                  <td class="type">一日游</td>
                  <td class="pro">
                    <a href="javascript:;"
                      >成都【全程陪同讲解】大熊猫基地＋都江堰2-6人团纯玩一日游（...</a
                    >
                  </td>
                  <td class="price">￥378起</td>
                  <td class="action">
                    <a href="javascript:;">预定</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="detail_inscenic">
        <div class="container">
          <div class="inscenic_title">
            <h3>内部优惠</h3>
          </div>
          <div class="inscenic_items">
            <ul>
              <li
                v-for="(item, index) in scenicitem.inner_scenic"
                :key="item[0]"
                class="inscenic_item"
              >
                <span class="num_top">{{ index + 1 }}</span>
                <img :src="base_url + item[0]" alt="" :title="item[1]" />
                <div class="item_info">
                  <h3>
                    {{
                      item[1].length > 6
                        ? item[1].substring(0, 7) + "..."
                        : item[1]
                    }}
                  </h3>
                  <span>
                    <em>{{ Math.round(Math.random() * 1000) }}</em>
                    人去过
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <!-- <div class="inscenic_more">
            <a href="javascript:;">查看更多</a>
          </div> -->
        </div>
      </div>
    </div>
    <div class="scedetail_comments">
      <div class="container">
        <div class="comments_title">
          <h3>蜂蜂点评（共有5924条真实评价）</h3>
        </div>
        <!-- <div class="comments_nav">
          <ul>
            <li class="nav_active">
              <a href="javascript:;">
                <span>全部</span>
              </a>
            </li>
            <li class="nav_item">
              <span class="divide"></span>
              <a href="javascript:;">
                <span>有图</span>
                <span class="num">(24150条)</span>
              </a>
            </li>
            <li class="nav_item">
              <span class="divide"></span>
              <a href="javascript:;">
                <span>好评</span>
                <span class="num">(5451条)</span>
              </a>
            </li>
            <li class="nav_item">
              <span class="divide"></span>
              <a href="javascript:;">
                <span>中评</span>
                <span class="num">(5451条)</span>
              </a>
            </li>
            <li class="nav_item">
              <span class="divide"></span>
              <a href="javascript:;">
                <span>差评</span>
                <span class="num">(360条)</span>
              </a>
            </li>
            <li class="nav_item">
              <span class="divide"></span>
              <a href="javascript:;">
                <span>人很多</span>
                <span class="num">(360人提及)</span>
              </a>
            </li>
            <li class="nav_item">
              <span class="divide"></span>
              <a href="javascript:;">
                <span>值得去</span>
                <span class="num">(315人提及)</span>
              </a>
            </li>
            <li class="nav_item">
              <span class="divide"></span>
              <a href="javascript:;">
                <span>交通方便</span>
                <span class="num">(202人提及)</span>
              </a>
            </li>
            <li class="nav_item">
              <span class="divide"></span>
              <a href="javascript:;">
                <span>逛一天</span>
                <span class="num">(174人提及)</span>
              </a>
            </li>
            <li class="nav_item">
              <span class="divide"></span>
              <a href="javascript:;">
                <span>离市区远</span>
                <span class="num">(126人提及)</span>
              </a>
            </li>
            <li class="nav_item">
              <span class="divide"></span>
              <a href="javascript:;">
                <span>金牌点评</span>
                <span class="num">(103条)</span>
              </a>
            </li>
          </ul>
        </div> -->
        <ul>
          <li
            v-for="item of commentpagelist"
            :key="item.id"
            class="comments_item"
          >
            <div class="user">
              <a href="javascript:;">
                <img :src="base_url + item.profile" alt="" />
              </a>
              <span class="level">LV.13</span>
            </div>
            <div class="item_detail">
              <a href="javascript:;" class="name">{{ item.name }}</a>
              <span :class="['s-star', 's-star' + item.evaluate + '']"></span>
              <a href="javascript:;">
                <span class="icon_goldComment"></span>
              </a>
              <p class="item_text" v-html="item.content">
                <!-- 这里常年养着100余只大熊猫、小熊猫、黑颈鹤、白鹤等珍稀动物。<br />
                看熊猫的最佳时间是09:30之前，因为9：00-11:00之间有个喂食时间，吃完后熊猫会呼呼大睡，还有一个就是熊猫普遍怕热，所以一定要早到，最好8:00左右到，既避开人流又可以看到大熊猫的千姿百态。<br />
                在春熙路IFS那里有景区直通车，是政府合开的，直达熊猫基地，但是不建议，第一班车8:30，车程还有将近50分钟。<br />
                还可以在春熙路坐地铁三号线到熊猫大道站A口下转198或者198a路直达熊猫基地站。<br /> -->
              </p>
              <div class="item_img">
                <img :src="base_url + item.img" alt="" />
                <!-- <img
                  src="../../assets/scenic/scenicdetail/commentimg1-2.jpeg"
                  alt=""
                />
                <img
                  src="../../assets/scenic/scenicdetail/commentimg1-3.jpeg"
                  alt=""
                />
                <img
                  src="../../assets/scenic/scenicdetail/commentimg1-4.jpeg"
                  alt=""
                /> -->
              </div>
              <div class="item_time">
                <span class="time">2019-09-01 11:54:46</span>
              </div>
            </div>
          </li>
          <!-- <li class="comments_item">
            <div class="user">
              <a href="javascript:;">
                <img
                  src="../../assets/scenic/scenicdetail/userimg2.jpeg"
                  alt=""
                />
              </a>
              <span class="level">LV.19</span>
            </div>
            <div class="item_detail">
              <a href="javascript:;" class="name">Vanyic-Neo</a>
              <span class="s_star"></span>
              <a href="javascript:;">
                <span class="icon_goldComment"></span>
              </a>
              <p class="item_text">
                如何到达🚌：<br />
                方法一：在成都景区直通车的微信公众号上购买车票+门票的套餐，大概是80块左右，门票的全票是58块，20块是车费。大巴直通车会在春熙路ifs始发，绕锦里片区去接游客，再前往熊猫基地，全长大约50分钟。由于公众号上的套餐没有半价套餐，所以学生、老人等可以享受半价门票的游客不建议选择这一个套餐哦。<br />
                方法二：为了避免绕路、无法享受半价门票，我们决定自己前往。实际上交通已经非常方便了。在春熙路乘坐地铁，前往熊猫大道地铁站。出站就有公交车前往熊猫基地门口，两块钱，注意是公交车不是大巴车，是政府开出的，车身贴有红红的熊猫形象。下车以后跟着人流步行3分钟就能到熊猫基地门口。全程大概30分钟，8块钱。<br />
                <br />
                门票🎫：<br />
                门票的话可以在方法一提到的公众号中购买29块的门票，或者凭学生证现场购买半价票。<br />
                <br />
                游玩时间：<br />
                游玩时间：7：30-18：00，早上的9：00-11：00有喂食环节，这也是熊猫活动最频繁的时间段，它们会出来爬爬树，互相玩一玩滚一滚。所以这个时候也是旅游团最多的时候。<br />
                11点往后熊猫就会想睡觉了，活动力减少，就难以看到它们憨厚的可爱模样了哦。我建议可以早一点点，大约8点30左右到熊猫基地，趁着人比较少的时候先去看熊猫产房里面的小熊猫，之后再出来看熊猫在户外打滚。下雨的话熊猫的户外活动也会减少，所以要看好天气出门哦。<br />
                <br />
                游玩内容：<br />
                里面有熊猫跟小熊猫这两个种类之分，熊猫按年龄段来分区饲养，它们在别墅（玻璃房）、普通住房（水泥房）或者户外（小山头）活动，景区的指引非常清晰，按着指引走就可以了。<br />
                <br />
                纪念品：<br />
                有一个巴掌大小的小熊猫公仔，可以夹在头上的，10块钱一个，可以买一个纪念一下。当然熊猫基地里面有熊猫邮局，可以盖上熊猫基地特有的印章跟邮戳，可以寄一张明信片给自己哦。<br />
              </p>
              <div class="item_img">
                <img
                  src="../../assets/scenic/scenicdetail/commentimg2-1.jpeg"
                  alt=""
                />
                <img
                  src="../../assets/scenic/scenicdetail/commentimg2-2.jpeg"
                  alt=""
                />
                <img
                  src="../../assets/scenic/scenicdetail/commentimg2-3.jpeg"
                  alt=""
                />
                <img
                  src="../../assets/scenic/scenicdetail/commentimg2-4.jpeg"
                  alt=""
                />
              </div>
              <div class="item_time">
                <span class="time">2018-07-29 00:04:51</span>
              </div>
            </div>
          </li> -->
        </ul>
        <!-- <div class="footer_dividepage">
          <span class="count">共20页 / 17762条</span>
          <span class="page_current">1</span>
          <a href="javascript:;" data-page="2" class="pi">2</a>
          <a href="javascript:;" data-page="3" class="pi">3</a>
          <a href="javascript:;" data-page="4" class="pi">4</a>
          <a href="javascript:;" data-page="5" class="pi">5</a>
          <a href="javascript:;" data-page="6" class="pi">6</a>
          <a href="javascript:;" data-page="2" class="page_next">后一页</a>
          <a href="javascript:;" data-page="2" class="page_last">末页</a>
        </div> -->
        <div class="footer_dividepage">
          <span class="count"
            >共{{ this.numpage }}页 / {{ this.numlist }}条</span
          >
          <!-- <span class="page_current">{{this.nowpage}}</span> -->
          <a
            href="javascript:;"
            @click="index == nowpage ? '' : findCommentBySid(index)"
            v-for="index of this.numpage"
            :key="index"
            :class="index == nowpage ? 'page_current' : 'pi'"
            >{{ index }}</a
          >
          <a
            href="javascript:;"
            @click="nowpage < numpage ? findCommentBySid(nowpage + 1) : ''"
            class="page_next"
            >后一页</a
          >
          <a
            href="javascript:;"
            @click="nowpage != numpage ? findCommentBySid(numpage) : ''"
            class="page_last"
            >末页</a
          >
        </div>
        <!-- <div class="comments_more">
          <a href="javascript:;">查看相关游记</a>
        </div> -->
      </div>
    </div>
    <div class="scedetail_nearfood">
      <div class="container">
        <div class="nearfood_title">
          <h3>附近热门美食</h3>
        </div>
        <ul>
          <li class="nearfood_item">
            <a href="javascript:;">
              <div class="item_img">
                <img
                  src="../../assets/scenic/scenicdetail/nearbyfood1-1.jpeg"
                  alt=""
                />
              </div>
              <div class="info">
                <h4 class="info_title">竹韵餐厅</h4>
                <span class="rev_num">
                  <b>17</b>
                  条点评
                </span>
                <span class="star">
                  <span class="s-star s-star4"></span>
                  4分
                </span>
                <div class="site">距此337米</div>
              </div>
            </a>
          </li>
          <li class="nearfood_item">
            <a href="javascript:;">
              <div class="item_img">
                <img
                  src="../../assets/scenic/scenicdetail/nearbyfood1-2.jpeg"
                  alt=""
                />
              </div>
              <div class="info">
                <h4 class="info_title">银鸽湾绿色餐饮生态休闲庄(烤全羊)</h4>
                <span class="rev_num">
                  <b>0</b>
                  条点评
                </span>
                <span class="star">
                  <span class="s-star s-star0"></span>
                  0分
                </span>
                <div class="site">距此2224米</div>
              </div>
            </a>
          </li>
          <li class="nearfood_item">
            <a href="javascript:;">
              <div class="item_img">
                <img
                  src="../../assets/scenic/scenicdetail/nearbyfood1-3.jpeg"
                  alt=""
                />
              </div>
              <div class="info">
                <h4 class="info_title">正宗羊马查渣面</h4>
                <span class="rev_num">
                  <b>0</b>
                  条点评
                </span>
                <span class="star">
                  <span class="s-star s-star0"></span>
                  0分
                </span>
                <div class="site">距此2160米</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="scedetail_nearhotel container">
      <div class="nearhotel_title">
        <h3>附近热门酒店</h3>
      </div>
      <ul>
        <li class="nearhotel_big">
          <a href="javascript:;">
            <img
              src="../../assets/scenic/scenicdetail/nearbyhotel1-1.jpeg"
              alt=""
              class="bannerbig"
            />
            <span class="price">￥115</span>
            <div class="info">
              <h3>Chengdu Xia Ling Ju Business ...</h3>
              <p></p>
            </div>
          </a>
        </li>
        <li class="nearhotel_small">
          <a href="javascript:;">
            <img
              src="../../assets/scenic/scenicdetail/nearbyhotel1-2.jpeg"
              alt=""
              class="bannersmall"
            />
            <span class="price">￥115</span>
            <div class="info">
              <h3>Panda dwellings</h3>
              <p></p>
            </div>
          </a>
        </li>
        <li class="nearhotel_small">
          <a href="javascript:;">
            <img
              src="../../assets/scenic/scenicdetail/nearbyhotel1-3.jpeg"
              alt=""
              class="bannersmall"
            />
            <span class="price">￥115</span>
            <div class="info">
              <h3>Panda dwellings</h3>
              <p></p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScenicDetail",
  data() {
    return {
      base_url: "http://localhost:5000/",
      //评论分页数组
      commentpagelist: [],
      commentpagelistcopy: [],
      //评论总条数
      numlist: 0,
      //评论分页总页数
      numpage: 0,
      //当前页数
      nowpage: 1,
      //展示开始限制
      start: 0,
      //每页显示几个
      pageitemsize: 3,

      //景点信息对象
      scenicitem: {},
      //用户数组
      idarr: [],
      //景点id
      s_id: 0,
      //页面滑轮高度
      scroll_top: 0,

      //跳转标识参数
      changecommentnum: 0,
      commentoffsettop: 0,

      texts: ["不建议", "有待改善", "还可以", "值得一去", "强烈推荐"],
      ruleForm: {
        value: null,
        desc: "",
        imageUrl: "",
        u_id: this.$store.state.userinfo.userid,
        username: this.$store.state.userinfo.username,
        sc_id: this.$route.params.s_id,
      },
      rules: {
        // 验证规则必须与上面的ruleForm相匹配
        value: [{ required: true, message: "评价必须选择", trigger: "change" }],
        desc: [{ required: true, message: "评论不能为空", trigger: "blur" }],
      },
      // value: null,
      outerVisible: false,
      innerVisible: false,
      u_id: 0,
    };
  },
  created() {
    //获取对应的景点id
    this.s_id = this.$route.params.s_id;
    console.log(this.s_id);

    //调用获取景点数量总数方法
    this.findCommentNum();

    //根据对应景点id查找相应的景点
    this.findScenicById(this.s_id);

    //根据对应景点id查找当页评论
    this.findCommentBySid(this.nowpage);

    //绑定滑轮监听方法
    window.onscroll = function () {
      this.scroll_top = document.documentElement.scrollTop;
      // this.commentoffsettop =document.getElementsByClassName("comments_title")[0].offsetTop;
      // console.log(this.commentoffsettop);
      if (parseInt(this.scroll_top) > 212) {
        document.querySelector(".header_suspend").classList.add("fixed");
      } else if (parseInt(this.scroll_top) < 270) {
        document.querySelector(".header_suspend").classList.remove("fixed");
      }
      if (parseInt(this.scroll_top) < this.commentoffsettop) {
        document.querySelector(".suspend_detitile").classList.add("active");
        document
          .querySelector(".suspend_commenttitle")
          .classList.remove("active");
      } else if (parseInt(this.scroll_top) > this.commentoffsettop) {
        document.querySelector(".suspend_commenttitle").classList.add("active");
        document.querySelector(".suspend_detitile").classList.remove("active");
      }
    };
    this.ruleForm.u_id = this.$store.state.userinfo.userid;
  },
  updated() {
    //获取评论区与页面的顶部的距离
    this.commentoffsettop =
      document.getElementsByClassName("comments_title")[0].offsetTop - 140;
  },
  methods: {
    //点击概括按钮直接将滑块滑到详情位置
    changeDetail() {
      document.documentElement.scrollTop = 211;
      document.querySelector(".suspend_detitile").classList.add("active");
      document
        .querySelector(".suspend_commenttitle")
        .classList.remove("active");
    },
    //点击评论按钮直接将滑块滑到评论展示位置
    changeComment() {
      let x = this.commentoffsettop;
      // console.log(this.commentoffsettop);
      let t = setInterval(function () {
        if (document.documentElement.scrollTop > x) {
          document.documentElement.scrollTop -= 15;
          if (document.documentElement.scrollTop < x) {
            clearInterval(t);
          }
        } else {
          document.documentElement.scrollTop += 15;
          if (document.documentElement.scrollTop > x) {
            clearInterval(t);
          }
        }
      }, 1);
      // document.documentElement.scrollTop = this.commentoffsettop;
      document.querySelector(".suspend_commenttitle").classList.add("active");
      document.querySelector(".suspend_detitile").classList.remove("active");
    },

    //根据id动态获取景点信息
    findScenicById(s_id) {
      this.$axios
        .get("/scenic", { params: { s_id: s_id } })
        .then((response) => {
          if (response.status == 200) {
            this.scenicitem = response.data[0];
            this.scenicitem.photo = this.scenicitem.photo.split(",");
            this.scenicitem.inner_scenic = eval(this.scenicitem.inner_scenic);
          }
        })
        .catch((error) => {
          if (error) {
            this.$message.error("跳转出错！请重试！");
          }
        });
    },

    //根据景点id进行评论分页查找(index为当前页)
    findCommentBySid(index) {
      //计算出LImit起始数值
      this.start = (index - 1) * this.pageitemsize;
      // this.pageitemsize = index * 5-1;
      this.nowpage = index;
      this.$axios
        .post("/sceniccommentpage", {
          s_id: this.s_id,
          start: this.start,
          pageitemsize: this.pageitemsize,
        })
        .then((response) => {
          if (response.status == 200) {
            // this.commentpagelist = response.data;
            // this.commentpagelist=[];
            // this.commentpagelistcopy=[];
            this.idarr = [];
            this.commentpagelistcopy = response.data;

            for (let i of this.commentpagelistcopy) {
              this.idarr.push(i.u_id);
            }
            // console.log(this.idarr);
            // console.log(this.commentpagelistcopy);
            //对评论用户进行动态获取
            console.log(this.idarr);
            if (this.idarr.length != 0) {
              this.$axios
                .get("/manyusers", { params: { idarr: this.idarr } })
                .then((response) => {
                  if (response.status == 200) {
                    this.idarr = response.data;
                    console.log(this.idarr);
                    for (let i in this.commentpagelistcopy) {
                      for (let j = 0; j < this.idarr.length; j++) {
                        if (
                          this.commentpagelistcopy[i].u_id == this.idarr[j].id
                        ) {
                          this.commentpagelistcopy[i]["name"] =
                            this.idarr[j].name;
                          this.commentpagelistcopy[i]["profile"] =
                            this.idarr[j].profile;
                        }
                      }
                    }
                    this.commentpagelist = this.commentpagelistcopy;
                    // console.log(this.commentpagelist);
                    // for(let i of this.commentpagelist){
                    //   console.log(i.name);
                    //   console.log(i.profile);
                    // }
                  }
                })
                .catch((error) => {
                  if (error) {
                    this.$message.error("跳转出错！请重试！");
                  }
                });
            }

            // console.log(this.start, this.pageitemsize);
            console.log(this.commentpagelist);
            //滑动页面到评论区
            if (this.changecommentnum != 0) {
              this.changeComment();
            } else {
              this.changecommentnum++;
            }
          }
        })
        .catch((error) => {
          if (error) {
            this.$message.error("跳转出错！请重试！");
          }
        });
    },

    //查询景点评论个数
    findCommentNum() {
      this.$axios
        .get("/commentnum/" + this.s_id)
        .then((response) => {
          if (response.status == 200) {
            this.numlist = response.data[0]["count(*)"];
            this.numpage =
              this.numlist % this.pageitemsize == 0
                ? this.numlist / this.pageitemsize
                : parseInt(this.numlist / this.pageitemsize) + 1;
            // console.log(this.numlist, this.numpage);
          }
        })
        .catch((error) => {
          if (error) {
            this.$message.error("跳转出错！请重试！");
          }
        });
    },

    success() {
      this.outerVisible = false;
      setTimeout(() => {
        this.$refs.upload.clearFiles(); // 异步操作清空文件
      }, 100);
      this.$message({
        message: "发表评论成功",
        type: "success",
      });
    },
    onSubmit(formName) {
      // this.$refs.upload.submit();
      console.log("用户id", this.$store.state.userinfo.userid);
      if (this.$store.state.userinfo.userid == "") {
        this.$message.error("请先登录！");
      } else {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$refs.upload.submit(); // 手动提交表单数据
            window.history.go(0);
          } else {
            return false;
          }
        });
        // 清空当前表单内容
        this.ruleForm.value = null;
        this.ruleForm.desc = "";
        this.ruleForm.imageUrl = "";
      }
      // this.$refs.upload.submit();
      // this.ruleForm.value = null;
      // this.ruleForm.desc = "";
      // this.ruleForm.imageUrl = "";
      // console.log(this.ruleForm.value);
      // console.log(this.ruleForm.desc);
      // let self = this;

      // console.log(this.ruleForm.imageUrl);
      // let upload = document.querySelector("#upload");
      // console.log(this.value);
      // const fileData = new FormData();
      // const files = this.$refs.upload.files[0];
      // console.log(this.$refs.upload.files[0]);
      // fileData.append("fileName", files);
      // console.log(this.$refs.upload.files[0]);
      // console.log(typeof fileData);
      // console.log(111,fileData.get("fileName"));
      // const formData = {
      //   comm: this.ruleForm.value,
      //   desc: this.ruleForm.desc,
      // };
      // this.$axios
      //   .post("/upload", formData)
      //   .then((res) => {
      //     this.$message.success("评论成功!");
      //     console.log(res);
      //   })
      //   .catch((error) => {
      //     if (error) {
      //       this.$message.error("系统出错!");
      //     }
      //   });

      // this.$axios({
      //   method: "post",
      //   url: "/comment",
      //   // data: formData,
      //   // headers: { "content-type": "multipart/form-data" }
      // }).then((res) => {
      //   console.log(res);
      //   this.$message.success("评论成功!");
      // }).catch((error) => {
      //   if(error){
      //     this.$message.error("系统出错!");
      //   }
      // })
    },
  },
};
</script>
<style scoped>
.Scenicdetail {
  font-size: 12px;
  color: #666;
}
.container {
  width: 1000px;
  margin: 0 auto;
}

/* 景点头部导航 */
.scedetail_header {
  border: 1px solid #e4e4e4;
}
.scedetail_header .herder_crumb {
  width: 100%;
  height: 50px;
  color: #666666;
  font-size: 12px;
  overflow: hidden;
  line-height: 50px;
}
.scedetail_header .herder_crumb .crumb_item {
  margin-right: 5px;
  float: left;
}
.scedetail_header .herder_crumb .crumb_item a {
  padding: 1px 3px;
}
.scedetail_header .herder_crumb .crumb_item em {
  margin: 0 5px;
}
.scedetail_header .herder_crumb .crumb_item:not(:last-child) a:hover {
  background-color: #ff7000;
  color: white;
}
.scedetail_header .herder_crumb .crumb_item:last-child a {
  color: #ff7000;
  font-weight: bold;
}
.scedetail_header .header_title {
  margin-bottom: 20px;
}
.scedetail_header .header_title h1 {
  display: inline;
  font-size: 30px;
  margin-right: 10px;
}
.scedetail_header .header_title .en {
  font-size: 16px;
  color: #999999;
}
.scedetail_header .header_suspend {
  z-index: 1000;
  line-height: 59px;
  font-size: 16px;
  color: #333;
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
  line-height: 74px;
  height: 60px;
  border-bottom: 1px solid #f2f2f2;
}
.scedetail_header .header_suspend ul {
  border-top: 1px solid #ededed;
  overflow: hidden;
}
.scedetail_header .header_suspend ul li:not(:last-child) {
  float: left;
}
.scedetail_header .header_suspend ul li:last-child {
  float: right;
}
.scedetail_header .header_suspend ul .active a {
  color: #ff9d00;
  border-bottom: 2px solid #ff9d00;
}
.scedetail_header .header_suspend ul .suspend_detitile a {
  display: inline-block;
  width: 32px;
  height: 58px;
  line-height: 58px;
  padding: 0 20px;
}
.scedetail_header .header_suspend ul .suspend_commenttitle a {
  display: inline-block;
  width: 127px;
  height: 58px;
  line-height: 58px;
  padding: 0 20px;
}
.scedetail_header .header_suspend ul .suspend_commenttitle a span {
  font-size: 12px;
  color: #999;
}
.scedetail_header .header_suspend ul .suspend_right a {
  display: inline-block;
  line-height: 35px;
  background-color: #ff9d00;
  padding: 0 30px;
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
}

/*详情信息展示部分 */
.scedetail_detail .detail_img {
  overflow: hidden;
  padding: 30px 0;
  background-color: #fafafa;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
}
.scedetail_detail .detail_img img:first-child {
  width: 690px;
  height: 370px;
  float: left;
}
.scedetail_detail .detail_img img:not(:first-child) {
  width: 305px;
  height: 183px;
  float: right;
  margin-bottom: 5px;
}
.scedetail_detail .detail_info {
  padding: 30px 0;
}
.scedetail_detail .detail_info .info_summary {
  padding-bottom: 25px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 25px;
  font-size: 16px;
  color: #333;
  line-height: 24px;
}
.scedetail_detail .detail_info .info_base {
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 25px;
}
.scedetail_detail .detail_info .info_base li {
  float: left;
  padding: 3px 30px 3px 0;
  font-size: 14px;
  line-height: 24px;
}
.scedetail_detail .detail_info .info_base li:not(:first-child) {
  padding: 3px 30px;
  border-left: 1px solid #eee;
}
.scedetail_detail .detail_info .info_base .base_site .base_content a {
  background-color: transparent;
  text-decoration: none;
  color: #ff9d00;
}
.scedetail_detail .detail_info .info_base .base_site .base_content a:hover {
  text-decoration: underline;
}
.scedetail_detail .detail_info .info_base li div {
  width: 280px;
  height: 24px;
}
.scedetail_detail .detail_info .info_item {
  font-size: 14px;
  margin: 20px 0px;
}
.scedetail_detail .detail_info .info_item p {
  margin-bottom: 5px;
}
.scedetail_detail .detail_location {
  padding: 30px 0;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}
.scedetail_detail .detail_location .location_title {
  margin-bottom: 30px;
}
.scedetail_detail .detail_location .location_title h3 {
  font-size: 20px;
}
.scedetail_detail .detail_location .location_title p {
  font-size: 14px;
}
.scedetail_detail .detail_location .location_show {
  overflow: hidden;
}
.scedetail_detail .detail_location .location_show img {
  width: 500px;
  height: 270px;
  float: left;
}
.scedetail_detail .detail_location .location_show .show_locanearby {
  float: left;
  margin-left: 20px;
  width: 228px;
  height: 268px;
  border: 1px solid #eee;
}
.scedetail_detail
  .detail_location
  .location_show
  .show_locanearby
  .nearby_title {
  text-align: center;
  line-height: 48px;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  color: #333;
  background-color: #f8f8f8;
}
.scedetail_detail .detail_location .location_show .show_locanearby ul {
  padding: 0 20px;
  height: 219px;
  overflow: auto;
}
.scedetail_detail .detail_location .location_show .show_locanearby ul li {
  padding: 15px 0;
  line-height: 24px;
  font-size: 14px;
  border-bottom: 1px dashed #eee;
  overflow: hidden;
}
.scedetail_detail .detail_location .location_show .show_locanearby ul li a {
  display: inline-block;
  width: 126px;
}
.scedetail_detail
  .detail_location
  .location_show
  .show_locanearby
  ul
  li
  a:hover {
  text-decoration: underline;
  float: left;
}
.scedetail_detail .detail_location .location_show .show_locanearby ul li span {
  font-size: 12px;
  float: right;
}
.scedetail_detail .detail_tickets {
  padding: 30px 0;
  border-bottom: 1px solid #e5e5e5;
}
.scedetail_detail .detail_tickets .tickets_title {
  margin-bottom: 30px;
}
.scedetail_detail .detail_tickets .tickets_title h3 {
  font-size: 20px;
}
.scedetail_detail .detail_tickets .tickets_table table {
  border: 1px solid #eee;
  font-size: 14px;
  color: #333;
  text-align: left;
  line-height: 20px;
}
.scedetail_detail .detail_tickets .tickets_table table th {
  background-color: #fafafa;
  padding: 10px;
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: -internal-center;
}
.scedetail_detail .detail_tickets .tickets_table table thead tr .type {
  width: 75px;
  padding-left: 50px;
}
.scedetail_detail .detail_tickets .tickets_table table thead tr .pro {
  width: 530px;
}
.scedetail_detail .detail_tickets .tickets_table table thead tr .price {
  width: 150px;
}
.scedetail_detail .detail_tickets .tickets_table table thead tr .action {
  width: 125px;
}
.scedetail_detail .detail_tickets .tickets_table table td {
  padding: 17px 10px;
  border-bottom: 1px dashed #f1f1f1;
  font-size: 14px;
  color: #333;
}
.scedetail_detail .detail_tickets .tickets_table table tbody tr .type {
  width: 75px;
  padding-left: 50px;
}
.scedetail_detail .detail_tickets .tickets_table table tbody tr .pro {
  width: 530px;
}
.scedetail_detail .detail_tickets .tickets_table table tbody tr .pro a {
  color: #ff9d00;
}
.scedetail_detail .detail_tickets .tickets_table table tbody tr .pro a:hover {
  text-decoration: underline;
}
.scedetail_detail .detail_tickets .tickets_table table tbody tr .price {
  width: 150px;
  color: #ff9d00;
}
.scedetail_detail .detail_tickets .tickets_table table tbody tr .action {
  width: 125px;
}
.scedetail_detail .detail_tickets .tickets_table table tbody tr .action a {
  display: inline-block;
  line-height: 25px;
  background-color: #ff9d00;
  padding: 0 20px;
  border-radius: 4px;
  color: #fff;
}
.scedetail_detail .detail_inscenic {
  padding: 30px 0;
  border-bottom: 1px solid #e5e5e5;
}
.scedetail_detail .detail_inscenic .inscenic_title {
  margin-bottom: 30px;
}
.scedetail_detail .detail_inscenic .inscenic_title h3 {
  font-size: 20px;
}
.scedetail_detail .detail_inscenic .inscenic_items ul {
  display: flex;
  flex-wrap: wrap;
}
.scedetail_detail .detail_inscenic .inscenic_items ul .inscenic_item {
  position: relative;
  margin-bottom: 20px;
  margin-right: 20px;
}
.scedetail_detail
  .detail_inscenic
  .inscenic_items
  ul
  .inscenic_item:nth-child(4) {
  margin-right: 0px;
}
.scedetail_detail
  .detail_inscenic
  .inscenic_items
  ul
  .inscenic_item:nth-child(8) {
  margin-right: 0px;
}
.scedetail_detail .detail_inscenic .inscenic_items ul .inscenic_item .num_top {
  display: inline-block;
  position: absolute;
  width: 40px;
  height: 30px;
  background-color: #ff9d00;
  color: white;
  line-height: 30px;
  font-size: 20px;
  text-align: center;
}
.scedetail_detail .detail_inscenic .inscenic_items ul .inscenic_item img {
  width: 235px;
  height: 150px;
}
.scedetail_detail
  .detail_inscenic
  .inscenic_items
  ul
  .inscenic_item
  .item_info {
  height: 24px;
  background-color: #fff;
  border: 1px solid #efefef;
  border-top: 0 none;
  padding: 12px 10px;
  line-height: 24px;
  color: #666;
  font-size: 12px;
  overflow: hidden;
}
.scedetail_detail
  .detail_inscenic
  .inscenic_items
  ul
  .inscenic_item
  .item_info
  h3 {
  float: left;
  font-size: 16px;
  color: #333;
  font-weight: bold;
}
.scedetail_detail
  .detail_inscenic
  .inscenic_items
  ul
  .inscenic_item
  .item_info
  h3:hover {
  color: #ff9d00;
}
.scedetail_detail
  .detail_inscenic
  .inscenic_items
  ul
  .inscenic_item
  .item_info
  span {
  float: right;
  color: #666666;
}
.scedetail_detail
  .detail_inscenic
  .inscenic_items
  ul
  .inscenic_item
  .item_info
  span
  em {
  color: #ff9d00;
}
/* .scedetail_detail .detail_inscenic .inscenic_more {
  margin-top: 20px;
  text-align: center;
}
.scedetail_detail .detail_inscenic .inscenic_more a {
  display: inline-block;
  width: 160px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #fc9c27;
  line-height: 50px;
  color: #ff9d00;
  font-size: 14px;
  border-radius: 4px;
  text-align: center;
} */

/*评论模块*/
.scedetail_comments {
  padding: 30px 0;
  border-bottom: 1px solid #e5e5e5;
}
.scedetail_comments .comments_title {
  margin-bottom: 30px;
}
.scedetail_comments .comments_title h3 {
  font-size: 20px;
}
.scedetail_comments .comments_nav {
  height: 70px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
.scedetail_comments .comments_nav ul {
  overflow: hidden;
}
.scedetail_comments .comments_nav ul li {
  float: left;
  margin: 5px 0;
  line-height: 24px;
  font-size: 14px;
}
.scedetail_comments .comments_nav ul .nav_active a {
  color: white;
  display: inline-block;
  padding: 0 15px;
  border-radius: 2px;
  height: 24px;
  background-color: #ff9d00;
  text-align: center;
}
.scedetail_comments .comments_nav ul .nav_item a {
  display: inline-block;
  padding: 0 15px;
  border-radius: 2px;
  height: 24px;
  text-align: center;
}
.scedetail_comments .comments_nav ul .nav_item a:hover span {
  color: #ff9d00;
}
.scedetail_comments .comments_nav ul .divide {
  float: left;
  margin: 5px 5px;
  width: 1px;
  height: 15px;
  background-color: #eee;
}
.scedetail_comments .comments_nav ul .nav_item a .num {
  font-size: 12px;
  color: #999;
}
.scedetail_comments .comments_nav ul li a {
  color: #333;
}
.scedetail_comments ul .comments_item {
  width: 870px;
  padding: 25px 0 20px 70px;
  border-bottom: 1px dashed #dedede;
  overflow: hidden;
  margin: 0 auto;
}
.scedetail_comments ul li .user {
  float: left;
  margin-left: -70px;
  text-align: center;
}
.scedetail_comments ul li .user a {
  display: block;
  margin-bottom: 5px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
}
.scedetail_comments ul li .user a img {
  border: 0;
  width: 48px;
  height: 48px;
  vertical-align: middle;
}
.scedetail_comments ul li .user .level {
  color: #ea3c1a;
}
.scedetail_comments ul li .item_detail .name {
  font-size: 14px;
  color: #ff9d00;
}
.scedetail_comments ul li .item_detail .name:hover {
  text-decoration: underline;
}
.scedetail_comments ul li .item_detail .s_star {
  display: inline-block;
  margin: 0 5px;
  width: 67px;
  height: 13px;
  background: url("~@/assets/scenic/scenicdetail/shopping-icons3.png") no-repeat -60px -90px;
  overflow: hidden;
}
.scedetail_comments ul li .item_detail .icon_goldComment {
  display: inline-block;
  margin-left: 3px;
  width: 89px;
  height: 22px;
  background: url("~@/assets/scenic/scenicdetail/shopping-icons3.png") no-repeat -60px -110px;
  overflow: hidden;
  vertical-align: top;
}
.scedetail_comments ul li .item_detail .item_text {
  margin: 8px 0 10px;
  font-size: 14px;
  line-height: 22px;
}
.scedetail_comments ul li .item_detail .item_img {
  margin-bottom: 10px;
}
.scedetail_comments ul li .item_detail .item_img img {
  width: 200px;
  height: 120px;
  margin-right: 12px;
}
.scedetail_comments ul li .item_detail .item_time .time {
  color: #999;
  margin-right: 20px;
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
.scedetail_comments .comments_more {
  margin-top: 20px;
  text-align: center;
}
.scedetail_comments .comments_more a {
  display: inline-block;
  width: 160px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #fc9c27;
  line-height: 50px;
  color: #ff9d00;
  font-size: 14px;
  border-radius: 4px;
  text-align: center;
}
.scedetail_comments .comments_more a:hover {
  background-color: #ff9d00;
  color: white;
}

/*附近美食板块 */
.scedetail_nearfood {
  padding: 40px 0;
  background-color: #fafafa;
  border-bottom: 1px solid #eee;
}
.scedetail_nearfood .nearfood_title {
  margin-bottom: 30px;
}
.scedetail_nearfood .nearfood_title h3 {
  font-size: 20px;
}
.scedetail_nearfood ul {
  display: flex;
}
.scedetail_nearfood ul .nearfood_item {
  margin-right: 25px;
}
.scedetail_nearfood ul .nearfood_item a:hover .info_title {
  color: #ff9d00;
}
.scedetail_nearfood ul .nearfood_item .item_img {
  width: 320px;
  height: 170px;
}
.scedetail_nearfood ul .nearfood_item .info {
  border: 1px solid #eee;
  padding: 15px 20px;
  height: 70px;
  background-color: #fff;
  overflow: hidden;
}
.scedetail_nearfood ul .nearfood_item .info .info_title {
  margin-bottom: 5px;
  height: 24px;
  line-height: 24px;
  font-weight: normal;
  font-size: 16px;
  color: #333;
  overflow: hidden;
}
.scedetail_nearfood ul .nearfood_item .info .rev_num {
  float: right;
  color: #999;
}
.scedetail_nearfood ul .nearfood_item .info .rev_num b {
  color: #ff9d00;
}
.scedetail_nearfood ul .nearfood_item .info .star {
  display: inline-block;
  color: #ff9d00;
}
.scedetail_nearfood ul .nearfood_item .info .s-star {
  display: inline-block;
  margin: 3px 3px 0 0;
}
.scedetail_nearfood ul .nearfood_item .info .site {
  margin-top: 5px;
  color: #666;
  font-size: 14px;
}
/*星级样式 */
.s-star {
  display: block;
  display: inline-block;
  width: 67px;
  height: 13px;
  margin-left: 10px;
  background: url("~@/assets/scenic/scenicdetail/shopping-icons3.png") no-repeat -60px -90px;
  overflow: hidden;
}
.s-star0 {
  background-position: -128px -90px;
}
.s-star1 {
  background-position: -114px -90px;
}
.s-star2 {
  background-position: -101px -90px;
}
.s-star3 {
  background-position: -87px -90px;
}
.s-star4 {
  background-position: -74px -90px;
}
.s-star5 {
  background-position: -60px -90px;
}

/*附近酒店模块 */
.scedetail_nearhotel {
  padding: 30px 0;
  border-bottom: 1px solid #eee;
}
.scedetail_nearhotel .nearhotel_title {
  margin-bottom: 30px;
}
.scedetail_nearhotel .nearhotel_title h3 {
  font-size: 20px;
}
.scedetail_nearhotel ul {
  overflow: hidden;
}
.scedetail_nearhotel ul li {
  position: relative;
  overflow: hidden;
}
.scedetail_nearhotel ul li img {
  transition: all 2s ease 0s;
}
.scedetail_nearhotel ul li:hover img {
  transform: scaleX(1.1) scaley(1.1);
}
.scedetail_nearhotel ul .nearhotel_big {
  float: left;
  margin-right: 25px;
}
.scedetail_nearhotel ul .nearhotel_big .bannerbig {
  width: 620px;
  height: 420px;
}
.scedetail_nearhotel ul li .price {
  position: absolute;
  display: inline-block;
  background-color: #4eadf2;
  padding: 0 18px;
  color: white;
  font-size: 24px;
  top: 20px;
  right: 0px;
}
.scedetail_nearhotel ul li .info {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  background-color: rgba(0, 0, 0, 0.3);
  filter: alpha(opacity=85);
}
.scedetail_nearhotel ul li .info h3 {
  margin: 0 15px;
  height: 26px;
  line-height: 26px;
  overflow: hidden;
  font-size: 20px;
  font-weight: normal;
  color: white;
}
.scedetail_nearhotel ul li .info p {
  margin: 0 15px;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  overflow: hidden;
  color: #ccc;
}
.scedetail_nearhotel ul .nearhotel_small {
  float: left;
  margin-bottom: 20px;
}
.scedetail_nearhotel ul .nearhotel_small .bannersmall {
  width: 340px;
  height: 200px;
}
/* .Scenicdetail .part_line {
  border-bottom: #e4e4e4 solid 1px;
} */
.el-dialog__header {
  padding: none;
  font-size: 22px;
}
.dialog-footer {
  padding: 10px 130px 20px;
  text-align: left;
  box-sizing: border-box;
}
.dialog-footer button {
  background-color: #ffa800;
  border-color: #ffa800;
  width: 130px;
  height: 36px;
  border-radius: 2px;
  font-size: 16px;
  line-height: 6px;
}
.dialog_head h2 {
  font-size: 14px;
}
.dialog_head h2 em {
  color: #ea3c1a;
  margin-left: 10px;
}
.dialog_head h2 strong {
  font-size: 22px;
  padding-top: 10px;
}
.el-dialog__body {
  padding: 10px 30px;
}
.el-dialog__body .dialog_head {
  margin-top: 0px;
  margin-left: 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}
.el-rate {
  margin-top: 10px;
}
.el-form-item:nth-child(1) {
  margin-top: 20px;
}
.el-textarea textarea {
  width: 80%;
  height: 100px;
}
.form_note {
  font-size: 12px;
  margin-left: 110px;
}
.imgbox {
  border: 1px dashed;
  width: 150px;
  height: 150px;
  border-color: #ccc;
}
.dialog-footer button {
  border-radius: 6px;
  color: white;
}
</style>