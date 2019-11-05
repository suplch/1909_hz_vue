export const counter = {
    namespaced: true,
    state: {
        count: 0,  // 这时一个计数器 全局状态,
    },
    getters: {
        countBase100(state) {
            return state.count + 100
        },
        countBase100Double(state, getters) {
            return getters.countBase100 * 2;
        }
    },
    mutations: {  // 声明 突变 对象 用来修改state 全局状态
        inc(state, money) {
            state.count += money
        },
    },
    actions: { // 声明 actions 动作对象 进行业务处理
        inc(context, payload) {

            setTimeout(function () {
                // 模拟后台 异步调用
                context.commit('inc', payload.money);
            }, 1000)
        },
        addToCart(context) {
            console.log('root addToCart')
        }
    },
};
