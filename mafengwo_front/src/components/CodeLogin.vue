<template>
  <div class="codeContainer">
    <p>
      打开
      <a href="#">马蜂窝APP</a>
      -V9.3.38及以上版本扫描二维码，
    <br>
    免输入，更快更安全。
    </p>
    <div class="code">
      <img src="../../src/assets/images/login/code.png" alt="">
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.codeContainer{
  width: 100%;
}
.codeContainer p{
  text-align: center;
  font-size: 14px;
    font-weight: 500;
    color: #717376;
    line-height: 20px;
}

.codeContainer  a{
    color: #4d97ff;
  }
  .code{
    margin: 10px auto 0;

  }
  .code img{
    width: 150px;
    height: 150px;
    display: block;
    margin: 0 auto;
  }
</style>