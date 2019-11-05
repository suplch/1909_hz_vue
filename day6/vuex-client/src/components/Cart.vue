<template>
    <div  style="border: solid 5px blue">
        购物车
        <ul>
            <li v-for="item of cartItems">
                {{item.name}}, 价格: {{item.price}} {{item.pic}}
                <button @click="changeNum(-1, item.id)">-</button>
                数量 {{item.count}}
                <button @click="changeNum(1, item.id)">-</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Cart",
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
