<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter></Counter>
    <Inc></Inc>
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
  components: {
    Counter,
    Inc
  }
}
</script>
