<template>
  <div>
    最新的电影
    <ul>
      <li :key="movie.id" v-for="movie of movies">

        <nuxt-link :to="'/news/' + movie.id" >{{movie.name}}</nuxt-link>
      </li>
    </ul>

    <ul>
      <li v-for="m of movieList">
        {{m.nm}}, {{m.star}}
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "news",
    data() {
      return {
        movies: [
          {id: '111', name: '阿凡达'},
          {id: '222', name: '少年的你'},
          {id: '333', name: '少年的你222'},
        ]
      }
    },
    computed: {
      movieList() {
        return this.$store.state.maoyanData.movieList
      }
    }
  }
</script>

<style scoped>

</style>
