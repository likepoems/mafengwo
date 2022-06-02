<template>
  <div class="backtop">
    <el-backtop>
      <a class="btn" @mouseover="showem" @mouseleave="hideem">
        <i class="icon_top"></i>
        <em v-show="isShow">返回顶部</em>
      </a>
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showem() {
      this.isShow = true;
    },
    hideem() {
      this.isShow = false;
    },
  },
};
</script>

<style scoped>
.btn {
  width: 43px;
  height: 43px;
  border: 1px solid #e5e5e5;
  text-align: center;
  background-color: #fff;
}
.backtop >>> .el-backtop {
  width: 43px;
  height: 43px;
  border: none;
  right: 185px !important;
  bottom: 60px !important;
}
.icon_top {
  display: inline-block;
  width: 21px;
  height: 12px;
  margin-top: 16px;
  background: url("~@/assets/detail/header-sprites9.png") no-repeat 0 0;
  background-position: -60px -165px;
}
em {
  width: 35px;
  background-color: #aaa;
  font-size: 12px;
  line-height: 16px;
  color: #fff;
  font-style: normal;
  position: absolute;
  left: -1px;
  top: -1px;
  z-index: 2;
  padding: 5px 4px 0 4px;
  height: 38px;
  border: 1px solid #aaa;
}
</style>