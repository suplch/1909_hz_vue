<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="欢迎 Your Vue.js App"/>

    <Login></Login>

    <button @click="getInfo">获取用户信息</button>
    {{ username }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login';
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      username: ''
    }
  },
  methods: {
    getInfo() {
      axios.get('/userinfo').then((result) => {
        this.username = result.data.name;
      })
    }
  },
  components: {
    HelloWorld,
    Login: Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
