<template>
  <div class="accountContainer">
    <form action="">
      <div class="form_filed">
        <input name="passport" ref="phone" placeholder="您的邮箱/手机号" type="text">
      </div>
      <div class="form_filed">
        <input name="password" ref="pwd" placeholder="您的密码" type="password">
      </div>
      <div class="form_link">
        <a href="#">忘记密码</a>
      </div>
      
    </form>
    <div class="toLogin" @click="login">
        登 录
      </div>
  </div>
</template>

<script>
export default {

  methods:{
    login(){
      let phoneNumber = this.$refs.phone.value
      let pwd = this.$refs.pwd.value
      // console.log(this.$md5(pwd));
      if(phoneNumber==''||pwd==''){
        alert("账号密码不能为空！")
      }else{
        // let password = this.$md5(pwd)
        this.$axios.get('/userinfo',{params:{phoneNumber,pwd}})
        .then(res=>{
          console.log(res);
          let code = res.data.status
          if(code==0){
            this.$message.error("该用户不存在！");
          }else if(code==1){
            this.$message.error("账号或密码错误！");
          }
          else if(code==2){
            let thisInfo = {};
              // ({id:thisInfo.userid,name:thisInfo.username} = res.data[0]);
              thisInfo.userid = res.data.id
              thisInfo.username = res.data.name
              thisInfo.userprofile = res.data.profile
              // alert(thisInfo.userprofile)
              this.$store.commit('getUser',thisInfo);
              
              this.$parent.$parent.$parent.header(true)
              // this.$router.push('/')
              localStorage.setItem("token",res.data.token)
              this.$message.success("登录成功！");
              window.location.href = '/'             
          }
        
        })
      }
    }
  }
}
</script>

<style>
.accountContainer{
  width: 100%;
  height: 201px;
  padding-top: 22px;
}
form .form_filed{
    background: #f6f7f9;
    width: 100%;
    height: 42px;
    border-radius: 4px;

}
form .form_filed:nth-of-type(2){
  margin-top: 12px;
}
form .form_filed input{
  border-color: #f6f7f9;
    background: #f6f7f9;
    border-radius: 6px;
    font-family: PingFangSC-Medium,PingFang SC;
    width: 100%;
    /* height: 40px; */
    border:none;
    font-size: 14px;
    color: #666;
    line-height: 28px;
    padding: 6px 0 6px 12px;
    box-shadow: 0 0 5px #fff;
    outline: 0;
    transition: box-shadow .25s linear 0s;
    -webkit-transition: box-shadow .25s linear 0s;
}
 .form_filed input:focus {
    border: 1px solid #ffa200;
    box-shadow: 0 0 5px #ffa200;
    outline: 0;
    transition: box-shadow .25s linear 0s;
    -webkit-transition: box-shadow .25s linear 0s;
    background-color: #fff;
 }
.form_link{
  width: 320px;
  height: 26px;
  padding: 10px 0 0;
}
.form_link a{
  float: right;
  color: #717376;;
  font-size: 12px;

}
.form_link a:hover{
  color: #3F200F;
  text-decoration: underline;
}
.toLogin{
  width: 100%;
  /* height: 59px; */
  margin-top: 17px;
  
}
.toLogin {
  width: 100%;
  height: 42px;
  text-align: center;
  line-height: 42px;
  border: none;
  color: #fff;
  background: linear-gradient(
135deg
,rgba(255,149,0,1) 0,rgba(255,165,38,1) 100%);
    border-radius: 6px;
    font-size: 20px;
    font-weight: 500;
}
</style>