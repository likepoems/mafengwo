<template>
  <div id="footer-box">
    <div id="footer-content">
      <div class="footer-info">
        <div class="ft-info-col ft-info-intro">
          <dt>马蜂窝旅游网</dt>
          <dd>中国年轻一代用得更多的旅游网站</dd>
          <dd>上亿旅行者共同打造的<strong>"旅行神器"</strong></dd>
          <dd><strong>60,000</strong> 多个全球旅游目的地</dd>
          <dd><strong>600,000</strong> 个细分目的地新玩法</dd>
          <dd><strong>760,000,000</strong> 次攻略下载</dd>
          <dd><strong>38,000</strong> 家旅游产品供应商</dd>
        </div>
        <div class="ft-info-col ft-info-about">
          <dt>关于我们</dt>
          <dd>
            <a href="##">关于马蜂窝</a>
            <a href="##" class="m_l_10">联系我们</a>
          </dd>
          <dd>
            <a href="##">隐私政策</a>
            <a href="##" class="m_l_10">商标声明</a>
          </dd>
          <dd><a href="##">服务协议</a></dd>
          <dd><a href="##">商城平台服务协议</a></dd>
          <dd><a href="##">网络信息侵权通知指引</a></dd>
          <dd style="white-space: nowrap">
            <a href="##">马蜂窝旅游网服务监督员</a>
          </dd>
          <dd>
            <a href="##">网站地图</a
            ><a href="##" class="highlight m_l_10">加入马蜂窝</a>
          </dd>
        </div>
        <div class="ft-info-col ft-info-service">
          <dt>旅行服务</dt>
          <dd>
            <ul class="ulitem">
              <li><a href="##">旅游攻略</a></li>
              <li><a href="##">酒店预订</a></li>
              <li><a href="##">旅游特价</a></li>
              <li><a href="##">国际租车</a></li>
              <li><a href="##">旅游问答</a></li>
              <li><a href="##">旅游保险</a></li>
              <li><a href="##">旅游指南</a></li>
              <li><a href="##">订火车票</a></li>
              <li><a href="##">旅游资讯</a></li>
              <li><a href="##">APP下载</a></li>
              <li style="width: 120px">
                <a href="##" class="highlight">旅行商城全球商家入驻</a>
              </li>
            </ul>
          </dd>
        </div>
        <div class="ft-info-col ft-info-qrcode">
          <dd>
            <span class="ft-qrcode-tejia"></span>
            <p>马蜂窝良品<br />官方服务号</p>
          </dd>
          <dd>
            <span class="ft-qrcode-weixin"></span>
            <p>马蜂窝旅游<br />订阅号</p>
          </dd>
          <dd>
            <span class="ft-qrcode-app"></span>
            <p>马蜂窝APP<br />扫描立即下载</p>
          </dd>
        </div>
        <div class="ft-info-social">
          <dt>旅游之前，先上马蜂窝！</dt>
          <dd>
            <a href="##" class="ft-social-weibo">
              <i class="ft-social-icon"></i>
            </a>
            <a href="##" class="ft-social-qqt">
              <i class="ft-social-icon"></i>
            </a>
            <a href="##" class="ft-social-qzone">
              <i class="ft-social-icon"></i>
            </a>
          </dd>
        </div>
      </div>
      <div class="footer-copyright">
        <a href="##">
          <i class="ft-mfw-logo"></i>
        </a>
        <p>
          © 2021 Mafengwo.cn
          <a href="##">京ICP备11015476号</a>
          <a href="##">
            <img
              src="../../assets/zzy/police_record.png"
              width="12"
              alt=""
            />京公网安备11010502013401号
          </a>
          <a href="##">京ICP证110318号</a>
        </p>
        <p>
          <a href="##" class="m_l_10">网络出版服务许可证</a>
          <a href="##" class="m_l_10">增值电信业务经营许可证</a>
          <a href="##" class="m_l_10">营业执照</a>
          <a href="##" class="m_l_10">广播电视节目制作经营许可证</a>
          <a href="##" class="m_l_10">网络文化许可证</a>
          <a href="##" class="m_l_10">网上有害信息举报专区</a>
          <a href="##" class="m_l_10">帮助中心</a>
        </p>
        <p>
          <span class="m_l_10"
            >违法和不良信息举报电话: 010-83416877 举报邮箱:
            mfwjubao@mafengwo.com 全国旅游投诉电话：12301</span
          >
        </p>
        <p>
          <span class="m_l_10">马蜂窝客服：国内</span>
          <span class="highlight">4006-345-678</span>
          <span class="m_l_10">海外</span>
          <span class="highlight">+86-10-8341-6888</span>
        </p>
      </div>
      <div class="footer-safety">
        <a href="##" class="s-b"></a>
        <a href="##" class="s-c"></a>
        <a href="##" class="s-d"></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Myfooter'
};
</script>
<style scoped>
h1,
h2,
h3,
h4,
h5,
h6,
p,
dl,
dt,
dd {
  margin: 0;
}
ul,
li,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
#footer-box {
  background-color: #3c3c3c;
  color: #c2c2c2;
  line-height: 22px;
  padding-bottom: 20px;
  font-size: 12px;
}
#footer-content {
  width: 1105px;
  margin: 0 auto;
}
.footer-info {
  padding: 30px 8px 40px 8px;
  border-bottom: 1px solid #575a5b;
  text-align: left;
}
.ft-info-col {
  float: left;
}
.footer-info dt {
  height: 30px;
  font-size: 14px;
}
.footer-info .ft-info-intro {
  width: 200px;
  margin-right: 68px;
}
.footer-info .ft-info-about {
  width: 128px;
  margin-right: 85px;
}
#footer-box a {
  color: #c2c2c2;
}
a {
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
}
.m_l_10 {
  margin-left: 10px;
}
.highlight {
  color: #ff9d00 !important;
}
.footer-info .ft-info-service {
  width: 135px;
  margin-right: 80px;
}
.footer-info .ft-info-qrcode {
  float: right;
  padding-top: 22px;
  line-height: 1.4em;
}
.footer-info .ft-info-qrcode dd {
  width: 100px;
  float: right;
  margin-left: 30px;
  text-align: center;
}
.footer-info .ft-info-qrcode span {
  display: block;
  height: 90px;
  margin: 0 0 8px 6px;
}
.footer-info .ft-info-intro strong {
  color: #ff9d00;
  font-weight: normal;
}
.footer-info .ft-qrcode-tejia {
  background: url("../../assets/zzy/qr_tejia4.png") no-repeat;
}
.footer-info .ft-qrcode-weixin {
  background: url("../../assets/zzy/qr_mfw4.gif") no-repeat;
}
.footer-info .ft-qrcode-app {
  background: url("../../assets/zzy/1.png") no-repeat;
}
.footer-info .ft-info-service dt {
  text-align: center;
}
.footer-info .ft-info-service li {
  float: left;
  width: 85px;
}
.ulitem {
  overflow: hidden;
  margin-right: -35px;
}
.footer-info .ft-info-social {
  clear: both;
  text-align: center;
  padding-top: 25px;
}
.footer-info .ft-info-social dt {
  font-size: 16px;
}
.footer-info .ft-info-social dd a {
  margin: 0 6px;
}
.footer-info .ft-social-icon {
  display: inline-block;
  width: 28px;
  height: 28px;
  background: url("../../assets/zzy/sprite.png") no-repeat 0 0;
}
.footer-info .ft-social-qqt .ft-social-icon {
  background-position: -30px 0;
}

.footer-info .ft-social-qzone .ft-social-icon {
  background-position: -60px 0;
}
#footer-content .footer-copyright {
  padding: 12px 0 12px 7px;
  margin-top: -1px;
  border-top: 1px solid #575a5b;
  text-align: left;
}
.footer-copyright .ft-mfw-logo {
  float: left;
  margin: 2px 20px 0 0;
  width: 136px;
  height: 39px;
  background: url("../../assets/zzy/sprite.png") no-repeat 0 -30px;
  overflow: hidden;
}
#footer-box .footer-safety {
  text-align: center;
}
#footer-box .footer-safety a {
  display: inline-block;
  margin-left: 10px;
  width: 90px;
  height: 30px;
  background: url("../../assets/zzy/sprite.png") no-repeat 0 -70px;
  overflow: hidden;
}
#footer-box .footer-safety .s-b {
  background-position: 0 -110px;
}
#footer-box .footer-safety .s-c {
  background: url("../../assets/zzy/2.png");
}
#footer-box .footer-safety .s-d {
  background: url("../../assets/zzy/3.png");
}
</style>