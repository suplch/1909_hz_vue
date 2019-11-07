import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

Vue.config.productionTip = false

Vue.filter('imgFilter', function (value, size) {

  return (value && value.replace('/w.h/', size)) || '';
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
