<template>
<div class="signup-forms">
  <div class="signup-box">
    <div class="add-info">
        <div class="hd">账号注册</div>
          <form id="_j_regist_form" style="position:relative; padding-top: 15px; ">
            <input type="hidden" name="mobile" value="17381590920" id="_js_regist_phone">
            <input type="hidden" name="challenge" id="_js_regist_challenge">
            <div class="form-field m-t-10">
                <input name="name" type="text" placeholder="您的名号" ref="username" autocomplete="off" data-verification-name="名号" class="verification[required]">
                <div class="err-tip" id="_j_err_tip_1"></div>
            </div>
            <div class="form-field">
                <input name="password" type="password" ref="pwd" placeholder="您的密码" autocomplete="off" data-verification-name="密码" class="verification[required,minSize[8],maxSize[30],funcCall[checkPasswordStrong]]">
                <div class="err-tip"></div>
            </div>
            <div class="form-field">
                <input name="rpassword" type="password" ref="repwd" placeholder="确认密码" autocomplete="off" data-verification-name="密码" class="verification[equals[password]]" id="_j_regist_rpassword">
                <div class="err-tip"></div>
            </div>
            <!-- <div class="form-field">
                <div class="clearfix">
                    <button class="vcode-send" id="_js_regist_get_code" type="button">免费获取验证码</button>
                    <input name="smscode" type="text" placeholder="短信验证码" autocomplete="off" data-verification-name="短信验证码" class="vcode-input verification[required,funcCall[checkSMSCode]]" id="_js_regist_code">
                </div>
                <div class="err-tip clearfix" id="_j_err_tip_2"></div>
            </div> -->
            <div class="submit-btn">
                <button type="button" ref="registered" @click="submitRegister" id="submit_button">完成注册</button>
            </div>
        </form>

        <form action="/regist/mobile" method="POST" id="_j_regist_form_hide" style="visibility: hidden">
            <input id="_j_regist_challenge" type="text" name="challenge" value="">
            <input id="_j_regist_name" type="text" name="name" value="">
            <input id="_j_regist_password" type="text" name="password" value="">
            <input id="_j_regist_mobile" type="text" name="mobile" value="">
            <input id="_j_regist_smscode" type="text" name="smscode" value="">
        </form>
      </div>
  </div>
</div>
</template>

<script>
export default {
created() {
    this.$parent.header(false);
    this.$parent.footer(false);
    if(this.$route.fullPath.includes('loginAndRegiser/login/')){
      this.url = '/loginAndRegiser/register'
    }else{
      this.url = '/loginAndRegiser/login'
    }
    
  },
  methods:{
      submitRegister(){
          let username = this.$refs.username.value
          let pwd = this.$refs.pwd.value
          let repwd = this.$refs.repwd.value
          if(username=='' || pwd=='' || repwd==''){
              alert("不能为空")
          }else if(pwd!=repwd){
              alert("两次密码不一致")
          }else{
              let phone = this.$route.query.phoneNumber
              this.$axios.post('/users',{params:{
                  phone,username,pwd
              }})
              .then(res=>{
                  console.log(res.status);
                  if(res.status==200){
                      this.$message.success("注册成功！")
                      setInterval(this.goToLogin,1000)
                  }
              })
          }
      },
      goToLogin(){
          this.$router.push('/loginAndRegiser/login/countPwdLogin')
      }
  }
}
</script>

<style scoped>
/* 第二块 */
.signup-forms{
    widows: 100%;
    height: 960px;
    background: url("../../assets/images/login/bg.jpg") no-repeat;
    background-size: cover;
    /* padding-bottom: 237px; */
}
.signup-box{
  position: relative;
  width: 370px;
  height: 474px;
  left: 50%;
  top: 20%;
  margin-left: -185px;

}
.add-info {
    text-align: center;
    width: 370px;
    background-color: #fff;
    border-radius: 5px;
    padding-bottom: 20px;
}
.add-info .hd {
    height: 56px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #d8d8d8;
    line-height: 56px;
    font-size: 18px;
    color: #666;
    padding: 0 26px;
    border-radius: 5px 5px 0 0;
    text-align: left;
}
input[type="hidden" i] {
    display: none;
    appearance: none;
    background-color: initial;
    cursor: default;
    padding: initial;
    border: initial;
}
.add-info .m-t-10 {
    margin-top: 10px;
}
.signup-forms .form-field {
    clear: both;
    width: 320px;
    margin: 0 auto;
    padding-top: 10px;
}
.signup-forms .form-field input {
    width: 306px;
    height: 28px;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    font-size: 14px;
    color: #666;
    line-height: 28px;
    padding: 6px 0 6px 12px;
    box-shadow: 0 0 5px #fff;
    outline: 0;
    transition: box-shadow .25s linear 0s;
    -webkit-transition: box-shadow .25s linear 0s;
}
.signup-forms .err-tip {
    clear: both;
    background: url(/images/signup/err_ico2.png) 0 -60px no-repeat #fff;
    padding: 0 0 3px 22px;
    width: 300px;
    font-size: 12px;
    color: #ff3c00;
    margin-top: 10px;
    top: 0;
    position: absolute;
    text-align: left;
    display: none;
}
.signup-forms .err-tip {
    clear: both;
    background: url(/images/signup/err_ico2.png) 0 -60px no-repeat #fff;
    padding: 0 0 3px 22px;
    width: 300px;
    font-size: 12px;
    color: #ff3c00;
    margin-top: 10px;
    top: 0;
    position: absolute;
    text-align: left;
    display: none;
}
.signup-forms .submit-btn {
    width: 320px;
    margin: 0 auto;
    padding: 12px 0 0;
}
.signup-forms .submit-btn button {
    width: 320px;
    height: 42px;
    border: 0;
    background-color: #ffa800;
    border-radius: 5px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}
</style>