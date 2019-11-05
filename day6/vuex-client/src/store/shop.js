

export const shopModule = {
    namespaced: true,
    state: {
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
    mutations: {
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
        addToCart(context, product) {
            console.log('shop addToCart')
            setTimeout(function () {
                context.commit('addToCart', product);
            }, 1000)
        },
        changeCartItem(context, payload) {
            context.commit('changeCartItem', payload);
        }
    }
};
