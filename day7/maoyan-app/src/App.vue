<template>
  <div id="app">
    <div class="content" ref="content">
      <router-view/>
    </div>
    <header>
      猫眼电影
    </header>
    <ul class="list">
      <li v-for="item of navs" @click="selNav(item)" :class="{select: selectItem === item}">
        <div>
          <img :src="item.logo"/><br/>
        </div>
        <div>
          <span>{{item.text}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      const navs = [
        {text: '电影', logo: '/images/movie.svg', path: '/movies'},
        {text: '影院', logo: '/images/ciname.svg', path: '/ciname'},
        {text: '我的', logo: '/images/ciname.svg', path: '/movies'},
      ];
      return {
        selectItem: navs[0],
        navs,
      }
    },
    mounted() {

    },
    methods: {
      selNav(item) {
        this.selectItem = item;

        this.$router.push({path: item.path});
      },

    }
  }
</script>
<style scoped>
  #app {
    overflow: auto;
  }
  ul.list {
    width: 100%;
    height: 48px;
    display: flex;
    position: fixed;
    bottom: 0px;
    background: white;
    box-shadow: 0px -1px 5px lightgrey
  }
  ul.list li {
    display: inline-block;
    flex: 1;
    text-align: center;
  }

  ul.list li.select {
    color: red;
  }

  span {
    font-size: 12px;
  }

  img {
    width: 25px;
    height: 25px;
    display: inline-block;
  }

  header {
    position: fixed;
    top: 0px;
    width: 100%;
    height: 50px;
    background: #e54847;
    text-align: center;
    color: white;
    line-height: 50px;
  }
  .content {
    position: absolute;
    top: 50px;
    width: 100%;
    bottom: 0px;
  }
</style>
