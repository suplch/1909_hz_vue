<template>
    <div>
        购物车页面
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>价格</th>
                    <th>图片</th>
                    <th>数量</th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="item of cartItems">
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.pic}}</td>
                    <td>
                        <button @click="changeNum(-1, item.id)">-</button>
                        {{item.count}}
                        <button @click="changeNum(1, item.id)">-</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: "CartPage",
        computed: {
            cartItems() {
                return this.$store.state.cartItems;
            }
        },
        methods: {
            changeNum(n, id) {
                this.$store.dispatch('changeCartItem', {
                    n, id
                })
            }
        }
    }
</script>

<style scoped>

</style>
