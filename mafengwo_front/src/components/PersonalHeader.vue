<template>
  <div class="personalHeader">
    <div class="topBarc">
      <div class="logo">
        <a href="#"></a>
      </div>

      <ul class="nav">
        <li><a href="/main">首页</a></li>
        <li><a href="#">问答</a></li>
        <li><a href="#">马蜂窝周边</a></li>
        <li><a href="#">结伴</a></li>
        <li><a href="#">小组</a></li>
        <li><a href="#">蜂首俱乐部</a></li>
        <li><a href="#">更多</a></li>
      </ul>

      <div class="search">
        <form action="">
          <input type="text">
          <i class="el-icon-search"></i>
          <!-- <input class="el-icon-search" type="submit"> -->
        </form>
      </div>

      <div class="info">
        <button class="daka">打卡</button>
        <p class="msg"><span>消息</span></p>
        <p class="photo">
          <img src="../assets/images/personal/profile.jpg" alt="">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>  
input,select,option,textarea  {
  outline:none;
}
.personalHeader{
  width: 100%;
  height: 46px;
  background-color: #2C2D2E;
}
.topBarc{
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  color: #fff;

}
.topBarc .logo{
  width: 32px;
  height: 29px;
  position: absolute;
  margin-top: 8px;
}
.topBarc .logo a{
  display: inline-block;
  width: 32px;
  height: 29px;
  background: url('../assets/images/personal/logo.png');
}
.topBarc .nav{
  float: left;
  margin-left: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topBarc .nav li:nth-of-type(1),.nav li:nth-of-type(2),.topBarc .nav li:nth-of-type(4),.nav li:nth-of-type(5){
  width: 66px;
  /* background-color: #fff; */
}
.topBarc .nav li:nth-of-type(3),.topBarc .nav li:nth-of-type(6){
  width: 114px;
}
.topBarc .nav li:nth-of-type(7){
  width: 74px;
}
.nav li{
  display: flex;
  justify-content: center;
  align-items: center;
}
.topBarc .nav li:hover{
  background-color: #000000;
}
.topBarc .nav li a{
  color: #fff;
  font-size: 16px;
  line-height: 46px;
}
.topBarc .search{
  width: 150px;
  height: 26px;
  margin: 10px 0 0 5px;
  background-color: #4a4b4c;
  float: left;
}
.search form{
  position: relative;
}
.search input:nth-of-type(1){
  float: left;
    width: 112px;
    height: 26px;
    margin: 0;
    padding: 0 30px 0 8px;
    border: 0 none;
    background-color: none;
    background: 0;
    color: #fff;
    font-size: 14px;
    line-height: 14px;

}
.search input:nth-of-type(2){
  position: absolute;
    right: 9px;
    top: 5px;
    border: 0 none;
    width: 16px;
    height: 16px;
}
.el-icon-search{
  position: absolute;
    right: 9px;
    top: 5px;
    border: 0 none;
    width: 16px;
    height: 16px;
    font-size: 16px;
    color: #B6B6B6;
}
.topBarc .info{
  width: 211px;
  height: 100%;
  float: left;
  margin-left: 8px;
  font-size: 14px;

}
.info .daka{
  width: 60px;
  height: 24px;
  margin-top: 11px;
  background-color: #1493E3;
  border: none;
  border-radius: 4px;
  float: left;
  color: #fff;
}
.info .msg{
  width: 69px;
  height: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
.info .photo{
  width: 64px;
  height: 100%;
  float: left;
}
.info .photo img{
  width: 32px;
  height: 32px;
  margin-top: 7px;
  border-radius: 50%;
  border: 1px solid goldenrod;
}
</style>