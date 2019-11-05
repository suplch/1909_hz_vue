import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    count: 0,  // 这时一个计数器 全局状态,

    products: [  // 商品列表
      {id: '111', name: '电脑', price: 1000, pic: '💻'},
      {id: '222', name: '鼠标', price: 200, pic: '🖱'},
      {id: '333', name: '键盘', price: 100, pic: '⌨️'},
    ],

    cartItems: [  //购物车
      {id: '111', name: '电脑', price: 1000, pic: '💻', count: 2},
      {id: '222', name: '鼠标', price: 200, pic: '🖱', count: 1},
    ]

  },
  mutations: {  // 声明 突变 对象 用来修改state 全局状态
    inc(state, money) {
      state.count += money
    },
    addToCart(state, product) {

      let item = state.cartItems.find(function (item) {
        return item.id === product.id
      });

      if (item) {
        item.count++;
      } else {
        state.cartItems.push({
          ...product,
          count: 1
        })
      }
    },
    changeCartItem(state, payload) {
      let item = state.cartItems.find(function (item) {
        return item.id === payload.id
      });
      if (item) {
        if (item.count + payload.n > 0) {
          item.count += payload.n
        }
      }
    }
  },
  actions: { // 声明 actions 动作对象 进行业务处理
    inc(context, payload) {

      setTimeout(function () {
        // 模拟后台 异步调用
        context.commit('inc', payload.money);
      }, 3000)
    },
    addToCart(context, product) {

      setTimeout(function () {
        context.commit('addToCart', product);
      }, 1000)
    },
    changeCartItem(context, payload) {
      context.commit('changeCartItem', payload);
    }
  },
  modules: {

  }
})
