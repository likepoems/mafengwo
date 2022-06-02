<template>
  <div>
    <HeaderLoggedIn></HeaderLoggedIn>
    <div id="NewTravel">
      <div class="travelnote-head clearfix">
        <h1>发表新话题/文章</h1>
        <dl :class="{ active: noteIndex == 0 }" @click="noteIndex = 0">
          <dt>游记</dt>
          <dd>关联至具体的旅行目的地</dd>
        </dl>
        <dl :class="{ active: noteIndex == 1 }" @click="noteIndex = 1">
          <dt>随笔</dt>
          <dd>只在我的马蜂窝显示</dd>
        </dl>
        <div class="clearfix"></div>
      </div>
      <div class="travelnote-wrap clearfix">
        <div class="travelnote-main">
          <el-form ref="form" class="forms" :model="form">
            <div class="title">
              <el-input
                type="text"
                placeholder="请在这里输入标题"
                v-model="form.formtitle"
                maxlength="48"
                show-word-limit
              >
              </el-input>
            </div>
            <div class="con">
              <div class="toolbar clearfix">
                <div class="toolbar-tip"></div>
                <ul class="toolbar-group">
                  <el-upload
                    ref="upload"
                    action="http://localhost:5000/newtravel"
                    :auto-upload="false"
                    :before-upload="beforeupload"
                    :on-change="handleChange"
                    :show-file-list="false"
                    :data="form"
                  >
                    <li>图片</li>
                  </el-upload>
                </ul>
              </div>
              <div class="inputcon">
                <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar" />
                <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="请输入内容"
                  v-model="form.formconent"
                >
                </el-input>
                <el-input
                  v-model="form.username"
                  style="display: none"
                ></el-input>
              </div>
              <div class="btns">
                <div class="user_accept">
                  <el-checkbox v-model="isaccept"
                    >我已阅读并同意
                    <a href="" title="《马蜂窝游记协议》">《游记协议》</a>
                  </el-checkbox>
                </div>
                <el-button
                  type="submit"
                  class="btn_submit"
                  @click="onSumbit('form')"
                  >发表</el-button
                >
                <span class="cont">或者</span>
                <span class="btn_save">保存草稿</span>
                <div class="sync">
                  <span>同步到：</span>
                  <ul class="clearfix">
                    <li>
                      <a href="javascript:void(0);" title="微博"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="空间"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="人人"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="腾讯"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </el-form>
        </div>
        <div class="travelnote-aside">
          <div class="notes_new">
            <a href="javascript:void(0);">
              <img src="~@/assets/header/notes_pic.gif" />
              <span></span>
            </a>
            <p><i></i><a href="javascript:void(0);">游记新模板</a></p>
            <a class="noteques" href="javascript:void(0);"
              >游记常见问题与解答</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLoggedIn from "@/components/HeaderLoggedIn";
export default {
  name: "NewTravel",
  components: {
    HeaderLoggedIn,
  },
  created() {
    this.$parent.header(false);
  },
  data() {
    return {
      form: {
        formtitle: "",
        formconent: "",
        imageUrl: "",
        username: this.$store.state.userinfo.username,
        userid: this.$store.state.userinfo.userid,
      },
      isaccept: true,
      noteIndex: 0,
      uploadFile: [],
    };
  },
  methods: {
    handleChange(file) {
      if (file) {
        this.form.imageUrl = URL.createObjectURL(file.raw);
        this.uploadFile.push(file.raw);
      }
    },
    beforeupload(file) {
      const isImage = file.type.includes("image");
      if (!isImage) {
        this.$message.error("上传文件类型必须是图片!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isImage && isLt2M;
    },
    onSumbit(form) {
      let vm = this;
      this.$refs[form].validate((valid) => {
        if (valid) {
          vm.$refs.upload.submit();
          vm.$alert("游记发表成功", "提示", {
            confirmButtonText: "确定",
            callback: () => {
              vm.$message({
                type: "info",
                message: "发表状态: 已发表",
              });
            },
          });
          // vm.$router.push("/main");
          window.location.href = '/main'
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
#NewTravel {
  width: 980px;
  margin: 0 auto;
  color: #666;
}
.travelnote-head {
  height: 70px;
  border-bottom: 3px solid #e5e5e5;
  margin-top: 20px;
}
.travelnote-head h1 {
  width: 178px;
  float: left;
  font-size: 18px;
  line-height: 70px;
  font-weight: normal;
  padding-left: 3px;
}
.travelnote-head dl {
  width: 158px;
  height: 70px;
  border-bottom: 3px solid #e5e5e5;
  float: left;
  padding-left: 62px;
  position: relative;
  margin: 0 20px -3px 0;
  background: url("~@/assets/header/ap_sprite2.gif") 23px -80px no-repeat;
  cursor: pointer;
}
.travelnote-head dl.active {
  background-position: 23px 20px;
  border-bottom: 3px solid #ffa800;
}
.travelnote-head dt {
  font-size: 18px;
  line-height: 22px;
  margin-top: 13px;
}
.travelnote-head dd {
  font-size: 12px;
  color: #999;
  line-height: 20px;
}
.travelnote-wrap {
  clear: both;
  padding: 46px 0 50px;
}
.travelnote-main {
  width: 705px;
  float: left;
  padding-top: 4px;
}
.forms {
  width: 665px;
  position: relative;
}
.forms .title {
  height: 40px;
}
.forms .con {
  margin-top: 10px;
  margin-bottom: 10px;
}
.forms .con .toolbar {
  height: 26px;
  padding: 4px 5px;
  background-color: #e5e5e5;
  color: #999;
  font-size: 12px;
  white-space: nowrap;
}
.forms .con .toolbar-tip {
  float: right;
  height: 26px;
  padding-right: 10px;
  line-height: 27px;
  color: #999;
  overflow: hidden;
}
.forms .con .toolbar-group {
  float: left;
  margin-right: 5px;
  border: 1px solid #e4e2e2;
}
.forms .con .toolbar-group li {
  float: left;
  height: 16px;
  padding: 3px 5px 3px 24px;
  border: 1px solid #fff;
  border-right: 0 none;
  background: #f7f7f7 url("~@/assets/header/editor_bg3.gif") no-repeat;
  color: #999;
  line-height: 17px;
  cursor: pointer;
  z-index: 999;
}
.forms .con .toolbar-group li:hover {
  background-color: #ffa800;
  color: #fff;
}
.forms .con .toolbar-group li:nth-child(1) {
  background-position: 5px 4px;
}
.forms .con .toolbar-group li:nth-child(2) {
  background-position: 4px -204px;
}
.forms .con .toolbar-group li:nth-child(3) {
  background-position: 5px -22px;
}
.forms .con .toolbar-group li:nth-child(4) {
  background-position: 5px -48px;
}
.forms .con .toolbar-group li:nth-child(5) {
  background-position: 5px -74px;
}
.forms .con .toolbar-group li:nth-child(6) {
  background-position: 5px -100px;
  margin-left: 10px;
}
.inputcon {
  border: 3px solid #e5e5e5;
  margin-bottom: 10px;
}
.inputcon .avatar {
  min-width: 120px;
  min-height: 120px;
  width: 36%;
  height: 36%;
  padding-right: 10px;
  display: inline-block;
}
.forms .btns {
  padding: 10px 0 30px 0;
  width: 665px;
}
.forms .btns .user_accept {
  margin-bottom: 10px;
}
.forms .btns .btn_submit {
  float: left;
  border: 0 none;
  font-weight: 600;
  background-color: #ff9e00;
  color: #fff;
}

.forms .btns .btn_submit:hover {
  background-color: #ff7200;
}
.forms .btns .cont {
  float: left;
  line-height: 36px;
  color: #666;
  font-size: 14px;
  padding: 0 3px;
}
.forms .btns .btn_save {
  float: left;
  background-color: #fff;
  color: #ffa800;
  font-weight: normal;
  font-size: 14px;
  padding: 8px 3px;
  cursor: pointer;
}
.sync {
  float: left;
  padding: 10px 0 0 20px;
  color: #666;
  font-size: 12px;
}
.sync span {
  float: left;
}
.sync ul {
  float: left;
}
.sync ul li {
  display: inline;
  float: left;
  width: 20px;
  height: 20px;
  margin-right: 6px;
}
.sync ul li a {
  width: 100%;
  height: 100%;
  display: inline-block;
  background: #f7f7f7 url("~@/assets/header/connect_ico_s.png") no-repeat;
}
.sync ul li:nth-child(1) a {
  background-position: 0 0;
}
.sync ul li:nth-child(2) a {
  background-position: 0 -40px;
}
.sync ul li:nth-child(3) a {
  background-position: 0 -20px;
}
.sync ul li:nth-child(4) .a {
  background-position: 0 -60px;
}
.travelnote-aside {
  width: 270px;
  float: left;
  margin-left: 5px;
  position: relative;
}
.notes_new {
  margin: 4px 0 20px 0;
}
.notes_new .nn_link {
  width: 260px;
  height: 260px;
  overflow: hidden;
  display: block;
  position: relative;
}
.notes_new a span {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url("~@/assets/header/notes_ico.png") 0 0 no-repeat;
}
.notes_new p {
  margin-top: 12px;
  line-height: 20px;
}
.notes_new p i {
  width: 20px;
  height: 20px;
  background: url("~@/assets/header/note_q.gif") 0 0 no-repeat;
  display: inline-block;
  vertical-align: -5px;
  margin-right: 5px;
}
.notes_new p a {
  color: #654939;
  font-size: 14px;
}
.notes_new .noteques {
  display: inline-block;
  margin-top: 5px;
  color: #999;
  font-size: 14px;
  text-decoration: underline;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>