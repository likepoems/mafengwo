<template>
  <div class="myTravelContainer">
    <div class="slider_bar">
      <div class="top">
        <div class="visitor">
          <div class="text">最新访客</div>
          <p>
            <span>累计访问<i>0</i></span>
            <span>今日<i>0</i></span>
          </p>
        </div>
      </div>

      <!-- <div class="bottom">

      </div> -->
    </div>

    <div class="major">
      <div class="top">
        <ul class="numberCount">
          <li>
            <span>{{ this.resultlen }}</span>
            <span>游记</span>
          </li>
          <li>
            <span>0</span>
            <span>回复</span>
          </li>
          <li>
            <span>0</span>
            <span>阅读</span>
          </li>
        </ul>
        <a class="write" href="/travelWriting">
          <i class="el-icon-edit-outline"></i>
          写游记
        </a>
      </div>
      <div class="center">
        <div class="notes_list">
          <ul>
            <li v-for="item in result" :key="item.id">
              <dl>
                <dt>
                  <a
                    :href="
                      'http://localhost:8080/traveldetail/?t_id=' + item.t_id
                    "
                  >
                    <img
                      @click="toNotesdetail(item.t_id)"
                      :src="'http://localhost:5000/' + item.sight_img"
                      height="400"
                      width="680"
                      alt="封面"
                    />
                  </a>
                </dt>
                <dd>
                  <div class="note_title clearfix">
                    <div class="note_info">
                      <h3>
                        <a href="#">{{ item.notes_title }}</a>
                      </h3>
                      <div class="note_more">
                        <span class="time">{{ item.writetime }}</span>
                      </div>
                    </div>
                    <span class="deleteNotes" @click="deleteNote(item.t_id)"
                      >删除</span
                    >
                  </div>
                  <div class="note_word">
                    {{ item.notes_content }}
                  </div>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom"></div>
    </div>
    <div class="loading">
      <img v-show="loading" src="../../assets/loading.png" alt="" />
      <span>{{ loading ? "正在加载中..." : "已经到底啦~" }}</span>
    </div>
  </div>
</template>

<script>

let obj = {};
let objkey = 0;
export default {
  inject:["reload"],
  data() {
    return {
      result: [],
      path: "",
      loading: true,
      resultlen: 0,
      token: "",
    };
  },
  methods: {
    scrollFn() {
      let winheight = window.innerHeight;
      let scrollheight = window.pageYOffset;
      let docheight = document.documentElement.scrollHeight;
      if (objkey >= Object.keys(obj).length - 1) {
        this.loading = false;
        return;
      }
      if (winheight + scrollheight >= docheight) {
        // this.loading = true
        objkey++;
        this.result = this.result.concat(obj[objkey]);
      }
    },
    toNotesdetail(id) {
      this.$router.push({
        path: "/localhost:8080/traveldetail",
        query: { t_id: id },
      });
    },
    deleteNote(tid) {
      this.$axios.delete("/travelnote", { params: { tid } }).then((res) => {
        if (res.status == 200) {
          this.reload()
          this.$message.success("删除成功！");
      
        }
      });
    },
  },
  created() {
    this.loading = true;
    this.token = localStorage.getItem("token");
    objkey = 0;
    obj = {};
    let userid = this.$store.state.userinfo.userid;
    this.$axios.get("/travelnote", {
        params: { userid },
        headers: {
          "Content-Type": "text/plain",
          Authorization: "Bearer " + this.token,
        },
      })
      .then((res) => {
        if (res.data == "unLogin") {
          this.$message.error("请先登录！");
          setTimeout(()=>{
          this.$router.push('/loginAndRegiser/login/countPwdLogin')
            
          },2500)
        } else {
          this.resultlen = res.data.length;
          if (res.data.length > 4) {
            for (let i = 0; i < Math.ceil(res.data.length / 4); i++) {
              obj[i] = res.data.slice(i * 4, 4 * (i + 1));
              this.result = obj[objkey];
              console.log(this.result);
              console.log(obj);
            }
          } else {
            this.result = res.data;
            this.loading = false;
          }
        }
      })
      .catch((error) => {
        if (error) {
          console.log("??");
          this.$message.error("请先登录！");
        }
      });

    // this.$axios.get('/cwd')
    // .then(res=>{
    //   console.log(res);
    //   // res.data.replace(/\\/,'/');
    //   this.path = res.data.split('\\').join('/')
    // })
  },
  mounted() {
    // this.loading = true
    // objkey = 0
    // obj = {}
    window.addEventListener("scroll", this.scrollFn);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollFn);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.myTravelContainer {
  width: 100%;
  /* height: 2000px; */
  /* background-color: pink; */
  overflow: hidden;
  padding-top: 18px;
  position: relative;
}
.myTravelContainer .slider_bar {
  width: 280px;
  height: 256px;
  border-top: #e2e2e2 1px solid;
  box-shadow: 0 0 2px rgb(0 0 0 / 5%);
  float: left;
}
.slider_bar .top {
  width: 100%;
  height: 190px;
  padding: 35px 30px 0;
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 2px rgb(0 0 0 / 5%);
}
.slider_bar .top .visitor {
  width: 220px;
  height: 94px;
  /* background: paleturquoise; */
  border-bottom: #e5e5e5 1px solid;
  /* padding-bottom: 6px; */
  /* margin: 35px 30px 0; */
}
.visitor .text {
  font-size: 16px;
  color: #444444;
  text-align: center;
}
.visitor p {
  width: 120px;
  height: 20px;
  margin: 0 auto;
  font-size: 14px;
  color: #999999;
  margin-top: 43px;
  display: flex;
  justify-content: space-between;
}
.visitor p i {
  color: #ff8a00;
  font-style: italic;
}
.slider_bar .bottom {
  width: 100%;
  height: 60px;
  background-color: #fff;
  margin-top: 4px;
  box-shadow: 0 0 2px rgb(0 0 0 / 5%);
}
.myTravelContainer .major {
  width: 682px;
  /* height: 537px; */
  background-color: #fff;
  float: right;
  box-shadow: 0 0 2px rgb(0 0 0 / 5%);
  overflow: hidden;
  margin-bottom: 30px;
}
.major .top {
  width: 100%;
  height: 110px;
  position: relative;
  /* background-color: thistle; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.numberCount {
  width: 432px;
  height: 60px;
  display: flex;
}
.numberCount li {
  flex: 1;
  /* background:darksalmon; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid #e2e2e2;
}
.numberCount li span:nth-of-type(1) {
  font-size: 20px;
  color: #444444;
  font-family: Arial;
  font-weight: bold;
}
.numberCount li span:nth-of-type(2) {
  font-size: 14px;
  color: #999999;
}
.numberCount li:nth-of-type(3) {
  border: none;
}
.top .write {
  position: absolute;
  display: block;
  width: 140px;
  height: 40px;
  background-color: #fea515;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  line-height: 40px;
  margin: 0 -490px -30px 0;
  text-align: center;
}
.top .write i {
  font-size: 17px;
  line-height: 44px;
}
.major .center {
  width: 100%;
  /* height: 320px; */
  background: url("../../assets/images/personal/noyj_v2.jpg");
}

.notes_list {
  position: relative;
  background-color: #fff;
}
.notes_list li {
  transition: 0.5s ease-out 0s;
  -webkit-transition: 0.5s ease-out 0s;
  overflow: hidden;
}
.notes_list dl {
  padding-bottom: 40px;
}
.notes_list dt {
  position: relative;
}
a {
  color: #ff9d00;
  text-decoration: none;
  cursor: pointer;
}
img {
  border: 0;
  vertical-align: middle;
}
.notes_list dt .thumb_description {
  position: absolute;
  right: 30px;
  top: 15px;
  color: #fff;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 40%);
}
.notes_status {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
}
.notes_status .tips {
  margin-left: 20px;
  _margin-left: 10px;
  font-size: 18px;
}
.notes_status .notes_handles {
  height: 48px;
  padding: 0 20px;
  line-height: 48px;
  margin-right: 6px;
  background-color: #5d5e5e;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 48px;
  box-shadow: 1px 1px 2px rgb(0 0 0 / 50%);
  color: #fff;
  font-size: 16px;
}
.flt1 {
  float: left;
}
.notes_list dd {
  padding: 20px 30px 0;
}
.note_info {
  width: 502px;
  float: left;
  font-size: 18px;
}
.note_info a {
  font-weight: 600;
}
.note_more {
  margin-top: 10px;
  color: #999;
}
.note_more .time {
  margin-right: 15px;
  position: relative;
  top: 1px;
  margin-left: 5px;
}
.note_more span {
  font-family: Arial;
  margin-right: 6px;
  font-size: 14px;
  vertical-align: middle;
  line-height: 16px;
}
.note_word {
  font-size: 14px;
  margin-top: 15px;
  line-height: 24px;
}
.loading {
  width: 300px;
  height: 50px;
  display: flex;
  margin-left: 460px;
  justify-content: center;
}
.loading img {
  width: 20px;
  height: 20px;
  animation: loading 1.5s linear infinite;
  margin-right: 10px;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.deleteNotes {
  /* display: inline-block;
    width: 50px;
    height: 20px; */
  z-index: 900;
  color: #ff9d00;
  text-decoration: underline;
  margin-left: 92px;
  cursor: pointer;
}
</style>