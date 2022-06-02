<template>
  <div class="myHomeContainer">
    <personal-header></personal-header>
    <div class="banner"></div>

    <div class="tags_bar">
      <div class="middle">
        <div class="userinfo" v-show="isShow">
          <form
            action="http://localhost:5000/profile"
            ref="headimgform"
            method="post"
            encType="multipart/form-data"
          >
            <img
              class="profile"
              :src="'http://localhost:5000/' + myprofile"
              alt=""
            />
            <label for="uploadimg" class="mask"> </label>
            <input
              ref="upload"
              id="uploadimg"
              type="file"
              :name="this.$store.state.userinfo.userid.toString()"
              class="uploadProfile"
              @change="choice()"
            />
          </form>

          <p class="description">
            <span>{{ username }}</span>
            <span>Lv.1</span>
          </p>
        </div>

        <ul class="nav">
          <li
            @click="changeStyle"
            :class="{ active: index == 0 }"
            data-index="0"
          >
            <router-link to="myProfile" @click="changeStyle" data-index="0"
              >我的窝</router-link
            >
          </li>
          <li
            @click="changeStyle"
            :class="{ active: index == 1 }"
            data-index="1"
          >
            <router-link to="myTraveling">我的游记</router-link>
          </li>
          <li
            @click="changeStyle"
            :class="{ active: index == 2 }"
            data-index="2"
          >
            <router-link to="myComment">我的评论</router-link>
          </li>
          <li
            @click="changeStyle"
            :class="{ active: index == 3 }"
            data-index="3"
          >
            <router-link to="mySpoor">我的足迹</router-link>
          </li>
          <li
            @click="changeStyle"
            :class="{ active: index == 4 }"
            data-index="4"
          >
            <router-link to="#">我的点评</router-link>
          </li>
          <li
            to="#"
            @click="changeStyle"
            :class="{ active: index == 5 }"
            data-index="5"
          >
            <router-link to="#">我的结伴</router-link>
          </li>
          <li
            @click="changeStyle"
            :class="{ active: index == 6 }"
            data-index="6"
          >
            <router-link to="#">更多</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="common">
      <div class="middle">
        <router-view />
      </div>
    </div>

    <!-- <aside>
      <div><i class="el-icon-edit"></i></div>
      <div>意见反馈</div>
    </aside> -->
  </div>
</template>

<script>
import PersonalHeader from "../../components/PersonalHeader";
export default {
  // inject:["reload"],
  name: "MyHome",
  components: { PersonalHeader },
  created() {
    this.$parent.header(false);

    // this.$parent.footer(false);
    this.token = localStorage.getItem("token");
    this.username = this.$store.state.userinfo.username;
    this.myprofile = this.$store.state.userinfo.userprofile;

    let userid = this.$store.state.userinfo.userid;
    this.$axios
      .get("/usersbyid", {
        params: { userid },
        headers: {
          "Content-Type": "text/plain",
          Authorization: "Bearer " + this.token,
        },
      })
      .then((res) => {
        console.log("res.data"+res.data);
        if (res.data == "unLogin") {
          console.log("object");
          this.$message.error("请先登录！");
        } else {
          this.myprofile = res.data;
        }
      });
  },
  mounted() {
    // console.log(this.$refs.upload);
    // this.reload()
  },
  data() {
    return {
      index: 0,
      isShow: true,
      username: "",
      myprofile: "",
    };
  },
  methods: {
    changeStyle(e) {
      this.index = e.target.parentNode.dataset.index;
      console.log(this.index);
      if (this.index == 2) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
    choice() {
      this.$refs.headimgform.submit();
    },
  },
};
</script>

<style scoped>
.myHomeContainer .active {
  border-bottom: 3px solid #ff8a00;
  padding-bottom: 3px;
}
.myHomeContainer {
  width: 100%;
  background-color: #efefef;
}
.myHomeContainer .banner {
  width: 100%;
  height: 260px;
  background: url("../../assets/images/personal/banner_note (1).gif") no-repeat;
  background-size: 980px 260px;
  background-position-x: center;
  background-color: #006488;
}
.tags_bar {
  width: 100%;
  height: 59px;
  background-color: #f2f7f9;
  border-bottom: #d6d6d6 1px solid;
  box-shadow: 0 2px 5px rgb(0 0 0 / 12%);
}
.tags_bar .middle {
  width: 980px;
  height: 58px;
  margin: 0 auto;
  position: relative;
}
.tags_bar .userinfo {
  width: 243px;
  height: 120px;
  position: absolute;
  margin-top: -80px;
}
.userinfo .profile {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  float: left;
}
.userinfo .description {
  width: 114px;
  height: 24px;
  margin-top: 48px;
  float: left;
  margin-left: 8px;
  /* z-index: 900; */
}
.description span {
  font-size: 16px;
}
.description span:nth-of-type(1) {
  color: #fff;
}
.description span:nth-of-type(2) {
  display: inline-block;
  margin-left: 4px;
  color: #ea3c1a;
}
.tags_bar .nav {
  width: 764px;
  height: 100%;
  float: right;
  display: flex;
  justify-content: space-around;
}
.tags_bar .nav li {
  width: 102px;
  height: 48px;
}
.tags_bar .nav li:nth-of-type(1) {
  width: 84px;
}
.tags_bar .nav li:nth-of-type(7) {
  width: 88px;
}
.tags_bar .nav li:hover a {
  color: #ff8a00;
}
.tags_bar .nav a {
  display: inline-block;
  text-align: center;
  line-height: 48px;
  width: 100%;
  height: 100%;
  font-size: 18px;
  color: #444444;
}
.common {
  width: 100%;
}
.common .middle {
  width: 980px;
  margin: 0 auto;
  /* background-color: pink; */
  /* height: 400px; */
}
.myHomeContainer aside {
  width: 44px;
  height: 88px;
  display: flex;
  flex-direction: column;
  display: block;
  position: absolute;
  bottom: 189px;
  right: 300px;
  font-size: 15px;
}
.myHomeContainer aside i {
  font-size: 30px;
}
.myHomeContainer aside div {
  flex: 1;
  height: 44px;
  background-color: #fff;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
}
.mask {
  width: 40px;
  height: 40px;
  background: url("../../assets/images/personal/camera.png") no-repeat;
  background-size: 40%;
  background-position: 50%;
  margin-left: 40px;
  margin-top: 40px;
  position: absolute;
  background-color: #39322f;
  opacity: 0.8;
  border-radius: 50%;
  display: none;
}
form {
  transition: transform 3s;
}
form:hover .mask {
  display: block;
  transform: scale(3);
}
.uploadProfile {
  position: absolute;

  width: 100px;
  height: 36px;
  position: absolute;
  opacity: 0;
  /* background-color: #0e0f0f; */
}
.su {
  margin-left: 500px;
}
</style>