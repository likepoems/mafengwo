<template>
  <div id="app">
    <Myheader v-show="header_show"></Myheader>
    <router-view v-if="isRouterAlive" />
    <Myfooter v-show="footer_show"></Myfooter>
  </div>
</template>

<script>
import Myheader from "@/components/Header.vue";
import Myfooter from "@/components/publicComponents/footer.vue";
export default {
  name: "App",
  components: {
    Myheader,
    Myfooter
  },
  provide(){
    return{
      reload:this.reload
    }
  },
  data() {
    return {
      header_show: true,
      footer_show: true,
      isRouterAlive:true
    };
  },
  methods: {
    //是否显示头部
    header: function(bool) {
      this.header_show = bool;
    },
    //是否显示底部
    footer: function(bool) {
      this.footer_show = bool;
    },
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(()=>{
        this.isRouterAlive = true
      })
    }
  },
};
</script>

<style>
</style>
