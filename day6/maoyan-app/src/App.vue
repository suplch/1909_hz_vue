<template>
  <div ref="app" id="app">
    <div ref="content">
      <router-view/>
    </div>
    <ul>
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
        {text: '电影', logo: '/images/movie.svg', routeName: 'movies'},
        {text: '影院', logo: '/images/ciname.svg', routeName: 'ciname'},
        {text: '我的', logo: '/images/ciname.svg', routeName: 'movies'},
      ];

      return {
        selectItem: navs[0],
        navs: navs
      }
    },
    mounted() {

      let scrollHandler = async (event) => {
        console.log(event);
        console.log(this.$refs.app.scrollTop);
        console.log(this.$refs.app.offsetHeight);
        console.log(this.$refs.content.offsetHeight);

        let top = this.$refs.app.scrollTop;
        let appHeight = this.$refs.app.offsetHeight;
        let contentHeight = this.$refs.content.offsetHeight;
        // 接近 5 像素 是我们认为 滚动触底
        if (contentHeight -  (top + appHeight) < 5) {
          console.log('触底了');
          this.$refs.app.removeEventListener('scroll', scrollHandler);
          await this.$store.dispatch('moreComingList');
          // 确保 事件不会重复发生
          this.$refs.app.addEventListener('scroll', scrollHandler);
          console.log('remove scroll')
        }
      };

      this.$refs.app.addEventListener('scroll', scrollHandler);
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
  #app {
    overflow: auto;
  }
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
