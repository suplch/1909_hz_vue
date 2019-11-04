<template>
  <div id="app">
    <router-view/>
    <ul>
      <li v-for="item of navs" @click="selNav(item)" :class="{select: selectItem === item}">
        <div>
          <img :src="item.logo"/><br/>
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
        {text: '电影', logo: '/images/movie.svg', routeName: 'movies'},
        {text: '影院', logo: '/images/ciname.svg', routeName: 'ciname'},
        {text: '我的', logo: '/images/ciname.svg', routeName: 'movies'},
      ];

      return {
        selectItem: navs[0],
        navs: navs
      }
    },
    methods: {
      selNav(item) {
        this.selectItem = item;

        this.$router.push({name: item.routeName});

      }
    }
  }
</script>
<style scoped>
  ul {
    width: 100%;
    height: 48px;
    display: flex;
    position: fixed;
    bottom: 0px;
    background: white;
    box-shadow: 0px -1px 5px lightgrey
  }
  ul li {
    display: inline-block;
    flex: 1;
    text-align: center;
  }

  ul li.select {
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
</style>
