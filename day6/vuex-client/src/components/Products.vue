<template>
    <div style="border: solid 5px orange">
        产品列表
        <ul>
            <li v-for="product of products">
                {{product.name}}, 价格: {{product.price}} {{product.pic}}
                <button @click="addToCart(product)">添加到购物车</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Products",
        methods: {
            addToCart(product) {
                this.$store.dispatch('shop/addToCart', product);
            }
        },
        computed: {
            products() {
                return this.$store.state.shop.products;
            }
        }
    }
</script>

<style scoped>

</style>
