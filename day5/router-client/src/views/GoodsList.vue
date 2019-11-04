<template>
    <div>
        <ul>
            <li :key="goods.id" v-for="goods of goodsList">
                {{goods.name}}, 价格 {{goods.price}}
                <router-link :to="'/detail/' + goods.id">详情</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "GoodsList",
        data() {
            return {
                goodsList: []
            }
        },
        mounted() {
            // 发起 ajax 请求 获取 后台数据
            axios.get('/goods').then((result) => {
                this.goodsList = result.data.goodsList;
            })
        }
    }
</script>

<style scoped>

</style>
