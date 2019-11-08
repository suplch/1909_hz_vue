<template>

  <div style="color: red;">
    Hello

    <nuxt-link to="/user">用户</nuxt-link> <br/>
    <nuxt-link to="/user/one">用户</nuxt-link> <br/>

    <button @click="inc">add {{ count }}</button>
    <ul>
      <li :key="hobby.id" v-for="hobby of hobbies">{{hobby.text}}</li>
    </ul>
    <hr/>

    <ul>
      <li v-for="movie of movieList">
        {{movie.nm}}, {{movie.star}}
      </li>
    </ul>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      hobbies: [
        {id: '111', text: '写代码'},
        {id: '222', text: '打游戏'},
      ]
    }
  },
  async asyncData(context) {
    for (let p in context) {
      //console.log(p);
    }
    // context.req;  context.res;  context.params;  context.query;
    // http://m.maoyan.com/ajax/movieOnInfoList?token=
    let url = '/ajax/movieOnInfoList?token=';
    console.log(process.server);
    if (process.server) {
      url = 'http://m.maoyan.com' + url
    }
    console.log(url);
    let result = await axios.get(url)
    return result.data;

  },
  mounted() {
    console.log(this.$store)
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    inc() {
      this.$store.dispatch('inc')
    }
  }
}
</script>

<style>

</style>
