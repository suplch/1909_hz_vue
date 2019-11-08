<template>
  <div>
    Hello {{ count }} <button @click="inc">增加</button>
    <hr/>

    <hr/>
    <nuxt-link to="/news">新电影</nuxt-link>
    <ul>
      <li :key="todo.id" v-for="todo of todos">
        {{todo.text}}
      </li>
    </ul>
    <hr/>
    <ul>
      <li v-for="movie of movieList">
        {{movie.nm}}
      </li>
    </ul>

  </div>
</template>

<script>
import axios from 'axios';
// http://m.maoyan.com/ajax/movieOnInfoList?token=
export default {
  data() {
    return {
      todos: [
        {id: '111', text: '起床'},
        {id: '222', text: '上学'},
      ]
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    inc() {
      this.$store.dispatch('inc')
    }
  },
  // 异步数据访问, 返回的数据对象最终会被合并到 组件的数据模型中
  async asyncData() {

    let path = '/ajax/movieOnInfoList?token=';
    // 判断是否是在服务端执行, 如果是的话, 直接访问完整路径, 负责需要代理
    if (process.server) {
      path = 'http://m.maoyan.com' + path;
    }

    let result = await axios.get(path);
    return result.data;
  },
  mounted() {
    console.log('hello world');
  }
}
</script>

<style>

</style>
