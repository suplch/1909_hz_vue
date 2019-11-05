import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0  // 这时一个计数器 状态
  },
  mutations: {
    inc(state, money) {
      state.count += money
    }
  },
  actions: {
    inc(context, payload) {

      setTimeout(function () {
        context.commit('inc', payload.money);
      }, 3000)
    }
  },
  modules: {

  }
})
