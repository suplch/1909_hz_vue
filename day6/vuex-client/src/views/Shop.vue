<template>
    <div>
        商店

        <Products></Products>
        <hr/>
        <Cart></Cart>
    </div>
</template>

<script>
    import Products from '@/components/Products.vue';
    import Cart from '@/components/Cart.vue';

    export default {
        name: "Shop",
        components: {
            Products,
            Cart
        }
    }
</script>

<style scoped>

</style>
