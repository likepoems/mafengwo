<template>
  <div id="destination">
    <Myheader></Myheader>
    <div class="desContainer">
      <div class="head">
        <img
          src="../../assets/destination/banner.jpeg"
          alt="目的地头图"
          class="head-img"
        />
        <div class="search-panel">
          <h2>Don't fear the unknown</h2>
          <form action="">
            <div class="searchbar-panel">
              <input
                type="text"
                autocomplete="off"
                placeholder="我想去..."
                name="input"
                class="search-input"
              />
              <a href="#" class="search-button">
                <img
                  src="../../assets/destination/搜索.png"
                  class="icon-search"
                />
              </a>
            </div>
          </form>
          <div class="search-hot">
            <a href="#">成都</a>
            <a href="#">香港</a>
            <a href="#">天津</a>
            <a href="#">青岛</a>
            <a href="#">普吉岛</a>
          </div>
        </div>
        <div class="show-information">
          <div class="show-name">
            <a href="#">
              <h2>神仙海岛的三款热门玩法，去普吉一定不能错过</h2>
            </a>
          </div>
          <div class="show-about">
            <p>
              关于泰国普吉岛，这个多面风情的岛屿，常年位于境外旅游热搜榜前列，第一次去的人，容易被它的热带海岛风情和高性价比吸引到想再二刷；第N次去的人，更是因为每次都能发现普吉的新玩法，让人想再多宠幸一遍。
            </p>
          </div>
          <div class="show-links">
            <a href="#">阅读全文</a>
          </div>
        </div>
        <div class="show-arrowdown">
          <a href="#hotdes">
            <img src="../../assets/destination/向下.png" alt="" />
          </a>
        </div>
      </div>
      <!-- 热门目的地 -->
      <div id="hotdes">
        <div class="hot-content">
          <div class="hot-title"><h2>热门目的地</h2></div>
          <div class="hot-navbar">
            <div class="hot-item" v-for="(item,index) in location" :key="item">
              <a
                :class="{on : changeOn == index}"
                @mouseover="classChange(index)"
                :key="item"
                >{{ item }}</a
              >
              <span class="divide">|</span>
            </div>
          </div>
          <div>
            <div class="hot-list">
              <div class="list-left">
                <div
                  class="list-left-box"
                  v-for="(item, index) in destination"
                  :key="index"
                >
                  <a class="province" href="#">
                    {{ item.title }}</a>
                  <div class="wrapper">
                    <a
                      class="city"
                      :href="city.src"
                      v-for="city in item.city"
                      :key="city.index"
                      >{{ city.name }}</a
                    >
                  </div>
                </div>
              </div>
              <div class="list-right">
                <div
                  class="list-right-box"
                  v-for="(items, index) in destination2"
                  :key="index"
                >
                  <a class="province" href="#">{{ items.title }}</a>
                  <div class="wrapper">
                    <a
                      class="city"
                      href="#"
                      v-for="city in items.city"
                      :key="city"
                      >{{ city }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="hot-list"></div>
          </div>
          <div></div>
        </div>
      </div>
      <div class="rol-line"></div>
      <!-- 当季推荐 -->
      <div class="season-command">
        <div class="season-content">
          <h2 class="season-title">当季推荐</h2>
          <div class="season-navbar">
            <div class="season-item" v-for="(item,index) in month" :key="index">
              <a
                :class="{monthon : changeMonthOn == index}"
                @mouseover="classMonthOn(index)"
                :key="index"
                >{{ item }}</a
              >
              <span class="season-divide">|</span>
            </div>
          </div>
          <!-- 1月推荐 -->
          <div class="season-img" v-show="commIndex == 0 && isShow">
            <div class="item-img">
              <div class="item-box">
                <a href="#">
                  <img src="../../assets/destination/january/jun-command1.png" alt="">
                  <div class="item-title">三亚</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/january/jun-command2.jpeg" alt="">
                  <div class="item-title">香港</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/january/jun-command3.jpeg" alt="">
                  <div class="item-title">广州</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/january/jun-command4.jpeg" alt="">
                  <div class="item-title2">越南</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/january/jun-command5.jpeg" alt="">
                  <div class="item-title2">新加坡</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/january/jun-command6.jpeg" alt="">
                  <div class="item-title2">黑龙江</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/january/jun-command7.jpeg" alt="">
                  <div class="more">更多 ></div>
                </a>
              </div>
            </div>
          </div>
          <!-- 2月推荐 -->
          <div class="season-img" v-show="commIndex == 1 && isShow">
            <div class="item-img">
              <div class="item-box">
                <a href="#">
                  <img src="../../assets/destination/february/feb-command1.jpeg" alt="">
                  <div class="item-title">南京</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/february/feb-command2.jpeg" alt="">
                  <div class="item-title">普吉岛</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/february/feb-command3.jpeg" alt="">
                  <div class="item-title">昆明</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/february/feb-command4.jpeg" alt="">
                  <div class="item-title2">清迈</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/february/feb-command5.jpeg" alt="">
                  <div class="item-title2">新西兰</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/february/feb-command6.jpeg" alt="">
                  <div class="item-title2">菲律宾</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/february/feb-command7.jpeg" alt="">
                  <div class="more">更多 ></div>
                </a>
              </div>
            </div>
          </div>
          <!-- 3月推荐 -->
          <div class="season-img" v-show="commIndex == 2 && isShow">
            <div class="item-img">
              <div class="item-box">
                <a href="#">
                  <img src="../../assets/destination/march/mar-command1.jpeg" alt="">
                  <div class="item-title">日本</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/march/mar-command2.jpeg" alt="">
                  <div class="item-title">重庆</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/march/mar-command3.jpeg" alt="">
                  <div class="item-title">杭州</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/march/mar-command4.jpeg" alt="">
                  <div class="item-title2">西安</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/march/mar-command5.jpeg" alt="">
                  <div class="item-title2">贵州</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/march/mar-command6.jpeg" alt="">
                  <div class="item-title2">苏州</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/march/mar-command7.jpeg" alt="">
                  <div class="more">更多 ></div>
                </a>
              </div>
            </div>
          </div>
          <!-- 4月推荐 -->
          <div class="season-img" v-show="commIndex == 3 && isShow">
            <div class="item-img">
              <div class="item-box">
                <a href="#">
                  <img src="../../assets/destination/april/apr-command1.jpeg" alt="">
                  <div class="item-title">云南</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/april/apr-command2.jpeg" alt="">
                  <div class="item-title">新疆</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/april/apr-command3.jpeg" alt="">
                  <div class="item-title">澳门</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/april/apr-command4.jpeg" alt="">
                  <div class="item-title2">曼谷</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/april/apr-command5.jpeg" alt="">
                  <div class="item-title2">大理</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/april/apr-command6.jpeg" alt="">
                  <div class="item-title2">东京</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/april/apr-command7.jpeg" alt="">
                  <div class="more">更多 ></div>
                </a>
              </div>
            </div>
          </div>
          <!-- 5月推荐 -->
          <div class="season-img" v-show="commIndex == 4 && isShow">
            <div class="item-img">
              <div class="item-box">
                <a href="#">
                  <img src="../../assets/destination/may/may-command1.jpeg" alt="">
                  <div class="item-title">厦门</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/may/may-command2.jpeg" alt="">
                  <div class="item-title">美国</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/may/may-command3.jpeg" alt="">
                  <div class="item-title">青岛</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/may/may-command4.jpeg" alt="">
                  <div class="item-title2">拉萨</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/may/may-command5.jpeg" alt="">
                  <div class="item-title2">台北</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/may/may-command6.jpeg" alt="">
                  <div class="item-title2">沙巴</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/may/may-command7.jpeg" alt="">
                  <div class="more">更多 ></div>
                </a>
              </div>
            </div>
          </div>
          <!-- 6月推荐 -->
          <div class="season-img" v-show="commIndex == 5 && isShow">
            <div class="item-img">
              <div class="item-box">
                <a href="#">
                  <img src="../../assets/destination/june/jun-command1.jpeg" alt="">
                  <div class="item-title">台湾</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/june/jun-command2.jpeg" alt="">
                  <div class="item-title">青海</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/june/jun-command3.jpeg" alt="">
                  <div class="item-title">青海湖</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/june/jun-command4.jpeg" alt="">
                  <div class="item-title2">呼伦贝尔</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/june/jun-command5.jpeg" alt="">
                  <div class="item-title2">吉隆坡</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/june/jun-command6.jpeg" alt="">
                  <div class="item-title2">北海道</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/june/jun-command7.jpeg" alt="">
                  <div class="more">更多 ></div>
                </a>
              </div>
            </div>
          </div>
          <!-- 7月推荐 -->
          <div class="season-img" v-show="commIndex == 6 && isShow">
            <div class="item-img">
              <div class="item-box">
                <a href="#">
                  <img src="../../assets/destination/july/jul-command1.jpeg" alt="">
                  <div class="item-title">内蒙古</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/july/jul-command2.jpeg" alt="">
                  <div class="item-title">西藏</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/july/jul-command3.jpeg" alt="">
                  <div class="item-title">英国</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/july/jul-command4.jpeg" alt="">
                  <div class="item-title2">意大利</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/july/jul-command5.jpeg" alt="">
                  <div class="item-title2">俄罗斯</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/july/jul-command6.jpeg" alt="">
                  <div class="item-title2">敦煌</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/july/jul-command7.png" alt="">
                  <div class="more">更多 ></div>
                </a>
              </div>
            </div>
          </div>
          <!-- 8月推荐 -->
          <div class="season-img" v-show="commIndex == 7 && isShow">
            <div class="item-img">
              <div class="item-box">
                <a href="#">
                  <img src="../../assets/destination/august/aug-command1.jpeg" alt="">
                  <div class="item-title">黄山</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/august/aug-command2.jpeg" alt="">
                  <div class="item-title">海拉尔</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/august/aug-command3.png" alt="">
                  <div class="item-title">舟山</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/august/aug-command4.jpeg" alt="">
                  <div class="item-title2">长白山</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/august/aug-command5.jpeg" alt="">
                  <div class="item-title2">贵阳</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/august/aug-command6.jpeg" alt="">
                  <div class="item-title2">凤凰古城</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/august/aug-command7.jpeg" alt="">
                  <div class="more">更多 ></div>
                </a>
              </div>
            </div>
          </div>
          <!-- 9月推荐 -->
          <div class="season-img" v-show="commIndex == 8 && isShow">
            <div class="item-img">
              <div class="item-box">
                <a href="#">
                  <img src="../../assets/destination/september/sep-command1.jpeg" alt="">
                  <div class="item-title">上海</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/september/sep-command2.jpeg" alt="">
                  <div class="item-title">桂林</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/september/sep-command3.png" alt="">
                  <div class="item-title">长沙</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/september/sep-command4.jpeg" alt="">
                  <div class="item-title2">阳朔</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/september/sep-command5.jpeg" alt="">
                  <div class="item-title2">稻城</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/september/sep-command6.jpeg" alt="">
                  <div class="item-title2">土耳其</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/september/sep-command7.jpeg" alt="">
                  <div class="more">更多 ></div>
                </a>
              </div>
            </div>
          </div>
          <!-- 10月推荐 -->
          <div class="season-img" v-show="commIndex == 9 && isShow">
            <div class="item-img">
              <div class="item-box">
                <a href="#">
                  <img src="../../assets/destination/october/oct-command1.jpeg" alt="">
                  <div class="item-title">澳大利亚</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/october/oct-command2.jpeg" alt="">
                  <div class="item-title">珠海</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/october/oct-command3.jpeg" alt="">
                  <div class="item-title">惠州</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/october/oct-command4.jpeg" alt="">
                  <div class="item-title2">西宁</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/october/oct-command5.jpeg" alt="">
                  <div class="item-title2">西班牙</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/october/oct-command6.jpeg" alt="">
                  <div class="item-title2">香格里拉</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/october/oct-command7.jpeg" alt="">
                  <div class="more">更多 ></div>
                </a>
              </div>
            </div>
          </div>
          <!-- 11月推荐 -->
          <div class="season-img" v-show="commIndex == 10 && isShow">
            <div class="item-img">
              <div class="item-box">
                <a href="#">
                  <img src="../../assets/destination/november/nov-command1.jpeg" alt="">
                  <div class="item-title">北京</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/november/nov-command2.png" alt="">
                  <div class="item-title">乌镇</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/november/nov-command3.jpeg" alt="">
                  <div class="item-title">柬埔寨</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/november/nov-command4.jpeg" alt="">
                  <div class="item-title2">长滩岛</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/november/nov-command5.jpeg" alt="">
                  <div class="item-title2">福州</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/november/nov-command6.jpeg" alt="">
                  <div class="item-title2">甲米</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/november/nov-command7.jpeg" alt="">
                  <div class="more">更多 ></div>
                </a>
              </div>
            </div>
          </div>
          <!-- 12月推荐 -->
          <div class="season-img" v-show="commIndex == 11 && isShow">
            <div class="item-img">
              <div class="item-box">
                <a href="#">
                  <img src="../../assets/destination/december/dec-command1.jpeg" alt="">
                  <div class="item-title">哈尔滨</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/december/dec-command2.jpeg" alt="">
                  <div class="item-title">芽庄</div>
                </a>
              </div>
              <div class="item-box" >
                <a href="#">
                  <img src="../../assets/destination/december/dec-command3.jpeg" alt="">
                  <div class="item-title">苏梅岛</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/december/dec-command4.jpeg" alt="">
                  <div class="item-title2">迪拜</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/december/dec-command5.jpeg" alt="">
                  <div class="item-title2">毛里求斯</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/december/dec-command6.jpeg" alt="">
                  <div class="item-title2">漠河</div>
                </a>
              </div>
              <div class="item-box2">
                <a href="#">
                  <img src="../../assets/destination/december/dec-command7.jpeg" alt="">
                  <div class="more">更多 ></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rol-line"></div>
      <!-- 主题精选 -->
      <div class="theme-selection">
        <div class="theme-content">
          <h2 class="theme-title">主题精选</h2>
          <div class="theme-navbar">
            <div class="theme-item" v-for="(item,index) in themeHot" :key="item">
              <a
                :class="{themeon : changeThemeOn == index}"
                @mouseover="classTheme(index)"
                :key="item"
                >{{ item }}</a
              >
              <span class="divide">|</span>
            </div>
          </div>
          <div class="theme-img-one" v-show="themeIndex == 0 && isActive">
            <div class="theme-img-box" v-for="(item,index) in themeImg " :key="index">
              <a href="">
                <img :src="item.img" alt="图片走丢了">
                <div class="theme-word">{{item.message}}</div>
              </a>
            </div>
          </div>
          <div class="theme-img-two" v-show="themeIndex == 1 && isActive">
            <div class="theme-img-box" v-for="(item,index) in themeImg2 " :key="index">
              <a href="">
                <img :src="item.img" alt="图片走丢了">
                <div class="theme-word">{{item.message}}</div>
              </a>
            </div>
          </div>
          <div class="theme-img-three" v-show="themeIndex == 2 && isActive">
            <div class="theme-img-box" v-for="(item,index) in themeImg3 " :key="index">
              <a href="">
                <img :src="item.img" alt="图片走丢了">
                <div class="theme-word">{{item.message}}</div>
              </a>
            </div>
          </div>
          <div class="theme-img-four" v-show="themeIndex == 3 && isActive">
            <div class="theme-img-box" v-for="(item,index) in themeImg4 " :key="index">
              <a href="">
                <img :src="item.img" alt="图片走丢了">
                <div class="theme-word">{{item.message}}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Myheader from "@/components/Header.vue";
export default {
  name: "destination",
  components: {
    Myheader,
  },
  data() {
    return {
      changeOn : 0,
      changeMonthOn : 0,
      changeThemeOn : 0,
      commIndex: 0,
      themeIndex: 0,
      isActive: true,
      isShow: true,
      month : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      location: [
        "国内",
        "港澳台",
        "日本",
        "东南亚",
        "南亚 西亚",
        "欧洲 美洲",
        "澳洲 非洲",
      ],
      destination: [
        {
          title: "直辖市",
          city: [
            { name: "北京", src: "#" },
            { name: "重庆", src: "#" },
            { name: "上海", src: "#" },
            { name: "天津", src: "#" },
          ],
        },
        {
          title: "云南",
          city: [
            { name: "丽江", src: "#" },
            { name: "大理", src: "#" },
            { name: "昆明", src: "#" },
            { name: "香格里拉", src: "#" },
            { name: "泸沽湖", src: "#" },
            { name: "双廊", src: "#" },
            { name: "西双版纳", src: "#" },
            { name: "束河", src: "#" },
            { name: "腾冲", src: "#" },
            { name: "雨崩", src: "#" },
          ],
        },
        {
          title: "四川",
          city: [
            { name: "成都", src: "/province" },
            { name: "九寨沟", src: "#" },
            { name: "稻城", src: "#" },
            { name: "色达", src: "#" },
            { name: "若尔盖", src: "#" },
            { name: "都江堰", src: "#" },
            { name: "亚丁", src: "#" },
            { name: "阿坝", src: "#" },
            { name: "峨眉山", src: "#" },
            { name: "毕棚沟", src: "#" },
          ],
        },
        {
          title: "浙江",
          city: [
            { name: "杭州", src: "#" },
            { name: "乌镇", src: "#" },
            { name: "西塘", src: "#" },
            { name: "千岛湖", src: "#" },
            { name: "普陀山", src: "#" },
            { name: "东极岛", src: "#" },
            { name: "南浔", src: "#" },
          ],
        },
        {
          title: "海南 福建",
          city: [
            { name: "三亚", src: "#" },
            { name: "蜈支洲岛", src: "#" },
            { name: "海口", src: "#" },
            { name: "厦门", src: "#" },
            { name: "鼓浪屿", src: "#" },
            { name: "武夷山", src: "#" },
            { name: "泉州", src: "#" },
          ],
        },
        {
          title: "江苏",
          city: [
            { name: "南京", src: "#" },
            { name: "苏州", src: "#" },
            { name: "无锡", src: "#" },
            { name: "扬州", src: "#" },
            { name: "周庄", src: "#" },
            { name: "常州", src: "#" },
            { name: "连云港", src: "#" },
            { name: "阿里", src: "#" },
          ],
        },
        {
          title: "广东 广西",
          city: [
            { name: "广州", src: "#" },
            { name: "深圳", src: "#" },
            { name: "珠海", src: "#" },
            { name: "汕头", src: "#" },
            { name: "桂林", src: "#" },
            { name: "阳朔", src: "#" },
            { name: "北海", src: "#" },
            { name: "黄姚古镇", src: "#" },
            { name: "涠洲岛", src: "#" },
            { name: "龙脊梯田", src: "#" },
          ],
        },
      ],
      destination2: [
        {
          title: "西藏 贵州",
          city: [
            "拉萨",
            "林芝",
            "阿里",
            "黔东南",
            "荔波",
            "镇远",
            "西江",
            "黄果树",
          ],
        },
        {
          title: "西北",
          city: [
            "西安",
            "青海湖",
            "西宁",
            "祁连",
            "敦煌",
            "兰州",
            "甘南",
            "张掖",
            "嘉峪关",
            "新疆",
          ],
        },
        {
          title: "山东 山西",
          city: [
            "青岛",
            "泰山",
            "日照",
            "威海",
            "烟台",
            "长岛",
            "蓬莱",
            "平遥",
            "大同",
            "五台山",
            "壶口瀑布",
          ],
        },
        {
          title: "湖南 湖北",
          city: ["张家界", "凤凰", "长沙", "武汉", "恩施", "湘潭", "神农架"],
        },
        {
          title: "安徽 江西",
          city: ["黄山", "宏村", "黄鹤楼", "景德镇", "庐山", "三清山", "南昌"],
        },
        {
          title: "河北 河南",
          city: [
            "北戴河",
            "秦皇岛",
            "承德",
            "张北",
            "少林寺",
            "洛阳",
            "龙门石窟",
          ],
        },
        {
          title: "内蒙古 东北",
          city: [
            "呼伦贝尔",
            "阿尔山",
            "海拉尔",
            "哈尔滨",
            "漠河",
            "雪乡",
            "大连",
            "丹东",
            "盘锦",
          ],
        },
      ],
      themeHot: ['全年适宜','季节','出行方式','节假日'],
      // 在动态获取图片路径时，路径会被解析成一个字符串就无法显示图片，require是CommonJS的关键字，用来加载模块
      // 就可以解析路径了
      themeImg: [
        {message: '免签',img: require('../../assets/destination/theme_year/year1.jpeg')},
        {message: '人文历史',img: require('../../assets/destination/theme_year/year2.jpeg')},
        {message: '拍片圣地',img: require('../../assets/destination/theme_year/year3.jpeg')},
        {message: '自然风景',img: require('../../assets/destination/theme_year/year4.jpeg')},
        {message: '小众',img: require('../../assets/destination/theme_year/year5.jpeg')},
        {message: '登山',img: require('../../assets/destination/theme_year/year6.jpeg')},
        {message: '潜水',img: require('../../assets/destination/theme_year/year7.jpeg')},
        {message: '古镇',img: require('../../assets/destination/theme_year/year8.jpeg')},
        {message: '动物',img: require('../../assets/destination/theme_year/year9.jpeg')},
        {message: '逃离雾霾',img: require('../../assets/destination/theme_year/year10.jpeg')},
        {message: '购物',img: require('../../assets/destination/theme_year/year11.jpeg')},
        {message: '美食',img: require('../../assets/destination/theme_year/year12.jpeg')},
      ],
      themeImg2: [
        {message: '草原',img: require('../../assets/destination/theme_season/season1.jpeg')},
        {message: '星空',img: require('../../assets/destination/theme_season/season2.jpeg')},
        {message: '赏花',img: require('../../assets/destination/theme_season/season3.jpeg')},
        {message: '雪景',img: require('../../assets/destination/theme_season/season4.jpeg')},
        {message: '海岛',img: require('../../assets/destination/theme_season/season5.jpeg')},
        {message: '极限运动',img: require('../../assets/destination/theme_season/season6.jpeg')},
        {message: '滑雪',img: require('../../assets/destination/theme_season/season7.jpeg')},
        {message: '温泉',img: require('../../assets/destination/theme_season/season8.jpeg')},
        {message: '当地节庆',img: require('../../assets/destination/theme_season/season9.jpeg')},
        {message: '温暖地点',img: require('../../assets/destination/theme_season/season10.jpeg')},
        {message: '避暑',img: require('../../assets/destination/theme_season/season11.jpeg')},
        {message: '极光',img: require('../../assets/destination/theme_season/season12.png')},
      ],
      themeImg3: [
        {message: '徒步',img: require('../../assets/destination/theme_travel/travel1.jpeg')},
        {message: '自驾',img: require('../../assets/destination/theme_travel/travel2.jpeg')},
        {message: '游轮',img: require('../../assets/destination/theme_travel/travel3.jpeg')},
        {message: '骑行',img: require('../../assets/destination/theme_travel/travel4.jpeg')},
        {message: '蜜月',img: require('../../assets/destination/theme_travel/travel5.jpeg')},
        {message: '亲子游',img: require('../../assets/destination/theme_travel/travel6.jpeg')},
        {message: '带父母',img: require('../../assets/destination/theme_travel/travel7.jpeg')},
        {message: '一个人',img: require('../../assets/destination/theme_travel/travel8.jpeg')},
        {message: '好朋友',img: require('../../assets/destination/theme_travel/travel9.jpeg')},
      ],
      themeImg4: [
        {message: '元旦',img: require('../../assets/destination/theme_holiday/holiday1.jpeg')},
        {message: '春节',img: require('../../assets/destination/theme_holiday/holiday2.jpeg')},
        {message: '清明',img: require('../../assets/destination/theme_holiday/holiday3.jpeg')},
        {message: '五一',img: require('../../assets/destination/theme_holiday/holiday4.jpeg')},
        {message: '端午',img: require('../../assets/destination/theme_holiday/holiday5.jpeg')},
        {message: '中秋',img: require('../../assets/destination/theme_holiday/holiday6.jpeg')},
        {message: '国庆',img: require('../../assets/destination/theme_holiday/holiday7.jpeg')},
        {message: '寒假',img: require('../../assets/destination/theme_holiday/holiday8.jpeg')},
        {message: '暑假',img: require('../../assets/destination/theme_holiday/holiday9.jpeg')},
      ],
    };
  },
  methods: {
    classChange(index) {
      // console.log(index);
      this.changeOn = index
    },
    classMonthOn(index){
      // console.log(index);
      this.changeMonthOn = index;
      this.commIndex = index;
    },
    classTheme(index){
      this.changeThemeOn = index
      this.themeIndex = index;
    }
  },
  computed: {},
  created () {
    this.$parent.header(false);
  }
};
</script>

<style scoped>
.desContainer .head .head-img {
  width: 100%;
  height: auto;
  margin-top: -324px;
}
.desContainer .head {
  width: 100%;
  height: 730px;
  overflow: hidden;
  position: relative;
}
.desContainer .head .search-panel {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  margin: -112px 0 0 -500px;
  /* margin-top: 24px; */
  /* width: 430px; */
  padding: 15px;
  color: #ffffff;
  font-size: 20px;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
}
.desContainer .head .search-panel h2 {
  float: left;
  font-size: 20px;
  color: #fff;
  margin-bottom: 15px;
  font-weight: normal;
  line-height: 1;
  font-family: "Microsoft Yahei";
}
.desContainer .head .search-panel .searchbar-panel {
  height: 46px;
}
.desContainer .head .search-panel .searchbar-panel .search-input {
  float: left;
  width: 308px;
  height: 46px;
  margin: 0 6px 0 0;
  padding: 0 20px;
  outline: none;
  background-color: #fff;
  border: 0 none;
  line-height: 46px;
  font-size: 18px;
  color: #111;
  border-radius: 4px;
}
.desContainer .head .search-panel .searchbar-panel .search-button {
  float: left;
  width: 45px;
  height: 46px;
  background-color: #ff9d00;
  border-radius: 4px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.desContainer .head .search-panel .searchbar-panel a:hover {
  background-color: #ff8d00;
}
.desContainer .head .search-panel .searchbar-panel .icon-search {
  width: 24px;
  height: 24px;
}
.desContainer .head .search-panel .search-hot {
  float: left;
  font-size: 14px;
  margin-top: 15px;
  line-height: 16px;
}
.desContainer .head .search-panel .search-hot a {
  color: #ffffff;
  margin-right: 10px;
}
.desContainer .head .search-panel .search-hot a:hover {
  text-decoration: underline;
}
.desContainer .head .show-information {
  color: white;
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  margin: -152px 0 0 170px;
  line-height: 1.3;
  width: 550px;
  height: 285px;
  text-align: left;
  padding-right: 30px;
  border-right: 7px solid #fff;
}
.desContainer .head .show-about {
  font-size: 18px;
  line-height: 1.8;
  text-align: justify;
  margin-top: 10px;
  letter-spacing: 0.1px;
}
.desContainer .head .show-information .show-name a {
  color: white !important;
}
.desContainer .head .show-information .show-name a:hover {
  color: #ff9d00 !important;
}
.desContainer .head .show-information h2 {
  font-size: 50px;
}
.desContainer .head .show-links {
  font-size: 24px;
  line-height: 2;
  text-align: left;
  margin-top: 10px;
}
.desContainer .head .show-links a {
  color: white;
  text-decoration: underline;
}
.desContainer .head .show-links a:hover {
  color: #ff9d00;
  text-decoration: underline;
}
.desContainer .head .show-arrowdown {
  margin-top: -284px;
  position: absolute;
  left: 50%;
  margin-left: -24px;
}

.desContainer #hotdes {
  width: 100%;
  overflow: hidden;
  padding-top: 40px;
  border-bottom: 1px solid #ccc;
}
.desContainer #hotdes .hot-content {
  width: 1000px;
  margin: 0 auto;
}
.desContainer #hotdes .hot-content .hot-item {
  float: left;
  cursor: pointer;
}
.desContainer .hot-title {
  text-align: center;
}
.desContainer .hot-title h2 {
  font-size: 26px;
  font-weight: normal;
  color: #333;
  line-height: 26px;
}
.desContainer #hotdes .hot-content .hot-navbar {
  display: flex;
  justify-content: space-between;
  width: 716px;
  margin: 0 auto;
  font-size: 18px;
  text-align: center;
  margin-top: 22px;
}
.divide {
  display: block;
  float: right;
  margin-left: 26px;
  color: #ccc;
}
.hot-item:nth-of-type(7) span {
  display: none;
}
.on {
  color: #ff9d00;
  padding-bottom: 12px;
  border-bottom: 3px solid #ff9d00;
}

.list-left-box {
  height: auto;
  text-align: left;
  padding: 20px 0 20px 100px;
  line-height: 25px;
  border-bottom: 1px solid #eee;
}
.province {
  float: left;
  font-size: 16px;
  color: #333;
  margin-left: -100px;
  text-decoration: underline;
}
/* .province:hover{
  color: #FF8A00;
  text-decoration: underline;
} */
.wrapper {
  width: 370px;
  height: auto;
  margin-right: 10px;
}
.city {
  margin-right: 10px;
}
.city:hover {
  color: #ff8a00;
  text-decoration: underline;
}
.list-left-box:nth-of-type(7),.list-right-box:nth-of-type(7){
  border-bottom: none;
}
.list-left {
  float: left;
  width: 470px;
  margin-top: 28px;
}

.list-right {
  float: right;
  width: 470px;
  margin-top: 28px;
}
.list-right-box {
  height: auto;
  text-align: left;
  padding: 20px 0 20px 100px;
  line-height: 25px;
  border-bottom: 1px solid #eee;
}

.rol-line{
  height: 1px;
  background-color: #e4e4e4;
  overflow: hidden;
}

.season-command{
  padding-top: 40px;
  width: 100%;
  height: 658px;
  background-color: #fafafa;
}
.season-content{
  width: 1000px;
  margin: 0 auto;
}
.season-title{
  text-align: center;
  font-size: 26px;
  font-weight: normal;
  color: #333;
  line-height: 26px;
}
.monthon{
  color: #ff9d00;
  padding-bottom: 12px;
  border-bottom: 3px solid #ff9d00;
}
.themeon{
  color: #ff9d00;
  padding-bottom: 12px;
  border-bottom: 3px solid #ff9d00;
}
.season-navbar{
  display: flex;
  justify-content: space-between;
  width: 930px;
  margin: 0 auto;
  font-size: 18px;
  text-align: center;
  margin-top: 22px;
}
.season-item:nth-of-type(12) span{
  display: none;
}
.season-item{
  float: left;
  cursor: pointer;
}
.season-divide{
  display: block;
  float: right;
  margin-left: 20px;
  color: #ccc;
}
.season-img{
  width: 1000px;
  margin: 0 auto;
  height: 460px;
  /* background-color: pink; */
  margin-top: 42px;
}
.item-img{
  width: 1000px;
  height: 460px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
}
.item-box{
  width: 323px;
  height: 220px;
  float: left;
  position: relative;
  background-color: antiquewhite;
}
.item-box img{
  width: 323px;
  height: 220px;
}
.item-box:hover{
  box-shadow: 0px -2px 6px #999999;
  cursor: pointer;
}
.item-box2{
  width: 238px;
  height: 220px;
  background-color: #ff9d00;
  float: left;
}
.item-box2 img{
  width: 238px;
  height: 220px;
}
.item-box2:hover{
  box-shadow: 0px -2px 6px #999999;
  cursor: pointer;
}
.more{
  position: absolute;
  width: 238px;
  text-align: center;
  background-color: rgba(0,0,0,0.5);
  line-height: 220px;
  color: white;
  font-size: 20px;
  margin-top: -220px;
}
.item-title{
  position: absolute;
  font-size: 20px;
  color: #fff;
  width: 303px;
  margin-top: -56px;
  padding-left: 20px;
  line-height: 56px;
  font-weight: normal;
  text-align: left;
}
.item-title2{
  position: absolute;
  font-size: 20px;
  color: #fff;
  width: 218px;
  margin-top: -56px;
  padding-left: 20px;
  line-height: 56px;
  font-weight: normal;
}
.hide{
  display: none;
}
.theme-selection{
  padding-top: 40px;
  width: 100%;
  background-color: #fff;
}
.theme-content{
  width: 1000px;
  height: 900px;
  margin: 0 auto;
  /* background-color: wheat; */
}
.theme-title{
  text-align: center;
  font-size: 26px;
  font-weight: normal;
  color: #333;
  line-height: 26px;
}
.theme-navbar{
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin: 0 auto;
  font-size: 18px;
  text-align: center;
  margin-top: 22px;
}
.theme-item:nth-of-type(4) span{
  display: none;
}
.theme-item{
  float: left;
  cursor: pointer;
}
.theme-img-one,.theme-img-two,.theme-img-three,.theme-img-four{
  width: 1000px;
  height: 720px;
  margin-top: 22px;
  /* background-color: thistle; */
}
.theme-img-box{
  width: 238px;
  height: 220px;
  /* display: block; */
  float: left;
  margin-left: 16px;
  margin-top: 20px;
  background-color: red;
}
.theme-img-box:nth-of-type(1){
  margin-left: 0px;
}
.theme-img-box:nth-of-type(5){
  margin-left: 0px;
}
.theme-img-box:nth-of-type(9){
  margin-left: 0px;
}
.theme-img-box img{
  width: 238px;
  height: 220px;
}
.theme-img-box:hover{
  box-shadow: 0px -2px 6px #999999;
}
.theme-word{
  position: absolute;
  font-size: 20px;
  color: #fff;
  width: 218px;
  margin-top: -56px;
  padding-left: 20px;
  line-height: 56px;
  font-weight: normal;
}
</style>