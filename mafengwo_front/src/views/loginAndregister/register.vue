<template>
  <div class="container">
    <form>
      <div class="field">
        <input type="text" ref="registerInput" placeholder="您的手机号码" />
        <button type="button" @click="register">立即注册</button>
      </div>
    </form>
    <div class="agreement">
      注册即为同意
      <a href="#">《马蜂窝用户使用协议》</a>
    </div>

  </div>

</template>

<script>
// import axios from 'axios'
export default {
  
  methods:{
    register(){
      var phoneNumber = this.$refs.registerInput.value
      // console.log(phoneNumber)
      // 判断手机号码的正确性
      // alert(1)
      if(phoneNumber!=''){
        // alert(2)
        this.$axios.get('/users',{params:{phoneNumber}})
          .then(res => {
            if(res.data.length!=0){
              this.$message.error("您已注册过！")
            }else{
              this.$router.push({
                path:"/registerdetail",
                query:{
                  phoneNumber:phoneNumber
                }
              })

            }  
          })

      }else{
        alert("请输入")
      }
    },
    
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  height: 100%;
  padding-top: 96px;
  /* background-color: pink; */
}
form {
  width: 100%;
  height: 100px;
}
form .field {
  width: 100%;
  height: 42px;
  background-color: #f6f7f9;
  border-radius: 6px;
}
input {
  background-color: #f6f7f9;

  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
  line-height: 28px;
  padding: 6px 0 6px 12px;
  box-shadow: 0 0 5px #fff;
  outline: 0;
}
input:focus {
  border: 1px solid #ffa200;
  box-shadow: 0 0 5px #ffa200;
  background-color: #fff;
  transition: box-shadow 0.25s linear 0s;
  -webkit-transition: box-shadow 0.25s linear 0s;
}
button {
  width: 100%;
  height: 42px;
  margin-top: 17px;
  color: #fff;
  background: linear-gradient(
    135deg,
    rgba(255, 149, 0, 1) 0,
    rgba(255, 165, 38, 1) 100%
  );
  border-radius: 6px;
  font-size: 20px;
  font-weight: 500;
  border: none;
}
.agreement {
  width: 100%;
  margin: 0 auto;
  padding-top: 12px;
  font-size: 12px;
  color: #ccc;
  text-align: right;
  line-height: 1em;
}
.agreement a {
  color: #999;
  font-size: 12px;
  margin-left: 2px;
}
.agreement a:hover {
  color: #3f200f;
  text-decoration: underline;
}

</style>