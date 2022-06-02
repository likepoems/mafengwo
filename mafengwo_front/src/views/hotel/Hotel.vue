<template>
  <div class="container">
    <div class="main">
      <div class="search">
        订酒店
      </div>
      <div class="date ">
        <div class="destination common">
        <input type="text" @keyup.enter="toOrder" placeholder="出行目的地">
        </div>
        <div class="inDate common">
          
          <input type="text">
          <span>入住日期</span>
          <i class="iconCommon1 icon1"></i>
          
        </div>
        <div class="outDate common">
          
          <input type="text">
          <span>离店日期</span>
          <i class="iconCommon1 icon2"></i>
        </div>
        <div class="countPeopel common">
          <span>人数未定</span>
          <i class="peopleCount"></i>
        </div>
        <div class="serchButton  ">
          <i class=" iconCommon1 icon3"></i>
        </div>
      </div>

      <ul class="notice">
        <li>
          <i class="iconCommon2 icon4"></i>
          <p>
            <span>住宿攻略</span>
          <span>区域攻略到特色主题，应有尽有</span>
          </p>
          </li>
        <li>
          <i class="iconCommon2 icon5"></i>
          <p>
            <span>专享价格</span>
          <span>多平台价格对比，天天专享特惠</span>
          </p>
        </li>
        <li>
          <i class="iconCommon2 icon6"></i>
          <p>
            <span>真实点评</span>
          <span>超过100万真实用户点评和游记</span>
          </p>
          </li>
      </ul>
      <p class="theme">
        主题住宿
      </p>
      <ul class="themeList" >
        <li v-for="(item,index) in hotels" :key="index" :class="{active:myIndex0==index}" @click="changeIndex0(index)">{{item.title}}</li>
      </ul>
      <ul class="imageList">
        <li v-for="(item,index) in hotels[myIndex0].imgUrl" :key="index">
          <div @mouseover="moveText" class="mainShow">
            <img class="bg"  :src="item.src" alt="">
            <div class="mask">
              
            </div>
            <p class="msgInfo">
                <span class="maxText">{{item.msg1}}</span>
                <span class="minText">{{item.msg2}}</span>
              </p>
          </div>
          <img class="shadow" src="../../assets/images/hotel/shadow.png" alt="">
        </li>

      </ul>

      <p class="priceHotel">特价酒店</p>
       <ul class="themeList">
        <li v-for="(item,index) in specialHotel" :key="index" :class="{active:myIndex==index}" @click="changeIndex(index)">{{item.title}}</li>

      </ul>

      <ul class="imageList">
        <li v-for="(item,index) in specialHotel[myIndex].imgUrl" :key="index">
          <div @mouseover="moveText" class="mainShow">
            <img class="bg"  :src="item.src" alt="">
            <div class="mask">
              
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      myIndex0:0,
      myIndex:0,
      hotels:[{
        title:'超值酒店',
        imgUrl:[{src:require('../../assets/images/hotel/theme01.jpeg'),msg1:"塞班岛",msg2:"美国"},
                {src:require('../../assets/images/hotel/theme02.jpeg'),msg1:"香港",msg2:"中国"},
                {src:require('../../assets/images/hotel/theme03.jpeg'),msg1:"巴黎",msg2:"法国"},
                {src:require('../../assets/images/hotel/theme04.jpeg'),msg1:"纽约",msg2:"美国"},
                {src:require('../../assets/images/hotel/theme05.jpeg'),msg1:"东京",msg2:"日本"},
                {src:require('../../assets/images/hotel/theme06.jpeg'),msg1:"新加坡",msg2:"新加坡"},
        ],},

      {
        title:'私人海滩',
        imgUrl:[
                {src:require('../../assets/images/hotel/theme11.jpeg'),msg1:"长滩岛",msg2:"菲律宾"},
                {src:require('../../assets/images/hotel/theme12.jpeg'),msg1:"苏梅岛",msg2:"泰国"},
                {src:require('../../assets/images/hotel/theme13.jpeg'),msg1:"芽庄",msg2:"越南"},
                {src:require('../../assets/images/hotel/theme14.jpeg'),msg1:"兰卡威",msg2:"马来西亚"},
                {src:require('../../assets/images/hotel/theme15.jpeg'),msg1:"岘港",msg2:"越南"},
                {src:require('../../assets/images/hotel/theme16.jpeg'),msg1:"三亚",msg2:"海南"},
        ]
      },
      {
        title:'迪士尼乐园',
        imgUrl:[
                {src:require('../../assets/images/hotel/theme21.jpeg'),msg1:"奥南多",msg2:"美国"},
                {src:require('../../assets/images/hotel/theme22.jpeg'),msg1:"上海",msg2:"中国"},
                {src:require('../../assets/images/hotel/theme23.jpeg'),msg1:"香港",msg2:"中国"},
                {src:require('../../assets/images/hotel/theme24.jpeg'),msg1:"洛杉矶",msg2:"美国"},
                {src:require('../../assets/images/hotel/theme25.jpeg'),msg1:"巴黎",msg2:"法国"},
                {src:require('../../assets/images/hotel/theme26.jpeg'),msg1:"东京",msg2:"日本"},
        ]
      },
      {
        title:'血拼购物',
        imgUrl:[
         {src:require('../../assets/images/hotel/theme31.jpeg'),msg1:"香港中环",msg2:"中国"},
                {src:require('../../assets/images/hotel/theme32.jpeg'),msg1:"台北西门町",msg2:"中国"},
                {src:require('../../assets/images/hotel/theme33.jpeg'),msg1:"首尔明洞",msg2:"韩国"},
                {src:require('../../assets/images/hotel/theme34.jpeg'),msg1:"北京三里屯",msg2:"中国"},
                {src:require('../../assets/images/hotel/theme35.jpeg'),msg1:"东京涉谷",msg2:"日本"},
                {src:require('../../assets/images/hotel/theme36.jpeg'),msg1:"伦敦SOHO区",msg2:"英国"},
        ]
      },
      {
        title:'潜水胜地',
        imgUrl:[
          {src:require('../../assets/images/hotel/theme41.jpeg'),msg1:"仙本那",msg2:"马来西亚"},
                {src:require('../../assets/images/hotel/theme42.jpeg'),msg1:"涛岛",msg2:"阁拍岩"},
                {src:require('../../assets/images/hotel/theme43.jpeg'),msg1:"上海",msg2:"中国"},
                {src:require('../../assets/images/hotel/theme44.jpeg'),msg1:"巴厘岛",msg2:"印度尼西亚"},
                {src:require('../../assets/images/hotel/theme45.jpeg'),msg1:"夏威夷",msg2:"美国"},
        ]
      },
      {
        title:'通话小镇',
        imgUrl:[
          {src:require('../../assets/images/hotel/theme51.jpeg'),msg1:"罗腾堡",msg2:"德国"},
                {src:require('../../assets/images/hotel/theme52.jpeg'),msg1:"海德堡",msg2:"德国"},
                {src:require('../../assets/images/hotel/theme53.jpeg'),msg1:"哈尔施塔特",msg2:"奥地利"},
                {src:require('../../assets/images/hotel/theme54.jpeg'),msg1:"五渔村",msg2:"意大利"},
                {src:require('../../assets/images/hotel/theme55.jpeg'),msg1:"羊角村",msg2:"荷兰"},
                {src:require('../../assets/images/hotel/theme56.jpeg'),msg1:"因特拉肯",msg2:"瑞士"},
        ]
      },
      ],
      specialHotel:[
        {
          title:"曼谷",
          imgUrl:[
            {src:require('../../assets/images/hotel/special1.jpeg')},
            {src:require('../../assets/images/hotel/special2.jpeg')},
            {src:require('../../assets/images/hotel/special3.jpeg')},
            {src:require('../../assets/images/hotel/special4.jpeg')},
            {src:require('../../assets/images/hotel/special5.jpeg')},
            {src:require('../../assets/images/hotel/special6.jpeg')},
          ]
        },
        {
          title:"台北",
          imgUrl:[
          {src:require('../../assets/images/hotel/theme51.jpeg'),msg1:"罗腾堡",msg2:"德国"},
          {src:require('../../assets/images/hotel/theme52.jpeg'),msg1:"海德堡",msg2:"德国"},
          {src:require('../../assets/images/hotel/theme53.jpeg'),msg1:"哈尔施塔特",msg2:"奥地利"},
          {src:require('../../assets/images/hotel/theme54.jpeg'),msg1:"五渔村",msg2:"意大利"},
          {src:require('../../assets/images/hotel/theme55.jpeg'),msg1:"羊角村",msg2:"荷兰"},
          {src:require('../../assets/images/hotel/theme56.jpeg'),msg1:"因特拉肯",msg2:"瑞士"},
        ]
        },
        {
          title:"东京"
        },
        {
          title:"香港"
        },
        {
          title:"首尔"
        },
        {
          title:"新加坡"
        }
      ]
    }
  },
  methods:{
    toOrder(){
      this.$router.push('/orderhotel')
    },
    changeIndex(index){
      this.myIndex = index
      console.log(this.myIndex);
    },
    changeIndex0(index){
      this.myIndex0 = index
    },
    moveText(e){
      let thisInfo = e.target.parentNode.childNodes[2]
      let thisLeft = thisInfo.getBoundingClientRect().left
      let thisTop = thisInfo.getBoundingClientRect().top
      console.log(thisLeft,thisTop);
      // console.log(e.pageX,e.pageY)
      console.log(thisInfo);
      e.target.parentNode.addEventListener("mousemove", function (event){
        if(thisInfo.style.left>50){
          thisInfo.style.left = 50
        }else{
          thisInfo.style.left = Math.abs(event.clientX-thisLeft)-20+'px'
        }
        if(thisInfo.style.top>50){
          thisInfo.style.top = 50
        }else{
        thisInfo.style.top = Math.abs(event.clientY-thisTop)-20+'px'

        }
        
          this.addEventListener("mouseleave",function(){
            thisInfo.style.left =  0
            thisInfo.style.top = 0
            console.log(111);
            console.log(thisInfo.style.left,thisInfo.style.top);

          })
      })
      
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.active{
  border-bottom: 3px solid #FFA800;
}
.container{
  width: 100%;
}
.main{
  padding-top: 120px;
  width: 1000px;
  margin: 0 auto;
  /* background-color: cadetblue; */
}
.main .search{
  width: 100%;
  height: 30px;
  color: #333333;
  font-size: 24px;

}
.date{
  width: 100%;
  height: 47px;
  margin: 40px 0 70px 0;
  display: flex;
  justify-content: space-between;
}
.destination{
  width: 352px;
  height: 100%;
}
.destination input{
  width: 100%;
  height: 100%;
  padding-left: 10px;
  font-size: 16px;
    color: #666;
}
.inDate,.outDate{
  width: 187px;
  height: 100%;
  position: relative;
}
.inDate span,.outDate span{
  position: absolute;
  margin: 10px 0  10px 15px;
}
.inDate input,.outDate input{
  position: absolute;
  width: 187px;
  height: 45px;
  padding: 0 15px;
}
.date input{
  border: none;
  /* border-radius: 4px; */
}
.date .common{
  border: 1px solid #999;
    font-size: 16px;
    color: #666;
    border-radius: 4px;
    background-color: #fff;
    overflow: hidden;
}

/* 187 187 185 */
.countPeopel{
  width: 185px;
  height: 100%;
  padding: 0 12px;
  line-height: 45px;
}
div.serchButton{
  width: 46px;
  height: 46px;
  background-color: #FFA800;
  border-radius: 5px;
    cursor: pointer;
    text-align: center;
}

.notice{
  width: 100%;
  height: 42px;
}
.notice li{
  float: left;
  width: 333px;
  height: 100%;
  color: #666666;
}
.notice li i{
  /* font-size: 42px; */
  margin-right: 13px;
  float: left;
}
.notice li p{
  height: 100%;
  width: 196px ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  float: left;
}
.notice li p>span:nth-child(1){
  font-size: 18px;
}
.notice li p>span:nth-child(2){
  font-size: 14px;
}
.theme,.priceHotel{
  width:100%;
  height: 30px;
  font-size: 24px;
  color: #333333;
  margin: 50px 0 25px;
  text-align: center;
  line-height: 30px;

}
.themeList{
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 200px; */
}
.themeList li{
  /* flex: 1; */
  width: 166px;
  height: 100%;
  float: left;
  text-align: center;
  font-size: 18px;
  color: #666666;
  line-height: 50px;
}
.imageList,.himageList{
  margin: 22px 0 80px 0;
  overflow: auto;
}
.imageList li{
  width: 318px;
  height: 261px;
  overflow: hidden;
  float: left;
  margin:0 23px 0 0;
  background-image: url('../../assets/images/hotel/shadow.png');
  background-position-y: 20px;
}
.imageList li:nth-child(3n){
  margin-right: 0;
}
.imageList li .bg{
  width: 100%;
  height: 240px;
  position: absolute;
}
.imageList .mainShow{
  position: relative;
}
.imageList .mask{
  position: absolute;
  width: 100%;
  height: 240px;
  background-color: #000;
  opacity: .2;
}
.imageList p{
  width: 286px;
  height: 58px;
  position: absolute;
  margin-left: 16px;
  margin-top: 91px;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* justify-content: center; */
  
  color: #fff;
  /* left: 50%;
  margin-left: -30px;
  top: ; */
}
.maxText{
  font-size: 30px;
}
.minText{
  font-size: 18px;
}
.imageList li .shadow{
  width: 100%;
  height: 23px
}
.himageList li{
  width: 240px;
  height: 240px;
  float: left;
  margin:20px 13px 0 0;
}
.himageList li:nth-child(4n){
  margin-right: 0;
}
.himageList li .bg{
  width: 100%;
  height: 240px
}
.iconCommon1{
  background:url('../../assets/images/hotel/header-sprites3.png') no-repeat
}
.icon1,.icon2{
  background-position: 0 -140px;
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  margin-top: 15px;
  margin-left: 156px;
}
.icon3{
  display: block;
  width: 24px;
  height: 24px;
  background-position: 0 -165px;
  margin-left: 11px;
  margin-top: 11px;
  position: absolute;
  
}
.iconCommon2{
  display: block;
  height: 42px;
  background:url('../../assets/images/hotel/hotel-sprites1.png') no-repeat
}
.icon4{
  background-position: 0 0 ;
  width: 35px;
}
.icon5{
  background-position: -40px 0 ;
  width: 43px;
}
.icon6{
  background-position: -85px 0 ;
  width: 44px;
}
.peopleCount{
  background:url('../../assets/images/hotel/hotel-detail-icon7.png') no-repeat;
  background-position: -70px -140px!important;
  width: 15px;
  height: 16px;
  display: block;
  margin-top: -30px;
  margin-left: 146px;
}
</style>
