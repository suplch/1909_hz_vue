<template>
  <div>

    <router-view></router-view>
    hello vue 
    
    <!-- 路由容器 -->
  </div>
</template>

<script>
// 用import导入 , export default  导出
// module.exports=test;   require("")
import Vue from 'vue'


export default {
  data () {
    return {
      title: '111111',
      isShow: false
    }
  },

  methods: {
   
  },

  components: {
    
  }
}
</script>

<style>

   *{
    margin: 0;
    padding: 0;
   }

   html,body{
    height: 100%;
   }
</style>
