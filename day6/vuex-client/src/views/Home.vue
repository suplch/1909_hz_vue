<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter></Counter>
    <Inc></Inc>

    <button @click="getUserInfo">获取用户信息</button>
    {{ userInfo }}
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue';
import Inc from '@/components/Inc.vue';
export default {
  name: 'home',
  mounted() {
    console.log(this)
  },
  methods: {
    async getUserInfo() {
      //await this.$store.dispatch('get_user_info');
      // await this.$store.dispatch('get_salary');

      // await this.$store.dispatch('get_user_info');
      // console.log('用户数据已经获取' + result);

      this.$store.dispatch('get_user_info').then((result) => {
        console.log('用户数据已经获取' + result);
      })

    }
  },
  computed: {
    userInfo() {
      return this.$store.state.username
              + ', '
              + this.$store.state.age
              + ', '
              + this.$store.state.salary

    }
  },
  components: {
    Counter,
    Inc
  }
}
</script>
