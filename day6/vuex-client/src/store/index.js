import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    count: 0  // 这时一个计数器 全局状态
  },
  mutations: {  // 声明 突变 对象 用来修改state 全局状态
    inc(state, money) {
      state.count += money
    }
  },
  actions: { // 声明 actions 动作对象 进行业务处理
    inc(context, payload) {

      setTimeout(function () {
        // 模拟后台 异步调用
        context.commit('inc', payload.money);
      }, 3000)
    }
  },
  modules: {

  }
})
