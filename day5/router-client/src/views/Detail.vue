<template>
    <div>
        商品详情

        <div v-if="detail">
            名称: {{detail.name}},
            价格: {{detail.price}},
            图片: {{detail.pic}},
            简介: {{detail.descript}}
        </div>
        <div v-if="loading">
            加载中...
        </div>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Detail",
        data() {
            return {
                loading: false,  // 只是当前 状态十分为加载中
                detail: undefined
            }
        },
        mounted() {
            let ret = sessionStorage.getItem('goods_' + this.$route.params.id);
            // 如果缓存有数据, 直接使用 缓存中的数据
            if (ret) {
                let detail = JSON.parse(ret);
                this.loading = false;
                this.detail = detail;
                return;
            }

            console.log(this.$route.params.id);
            this.loading = true;
            // 发起 ajax 请求 获取 后台数据
            axios.get('/detail?id=' + this.$route.params.id).then((result) => {
                this.detail = result.data.detail;
                // 将结果 缓存 到 sessionStorate里
                sessionStorage.setItem('goods_' + this.$route.params.id, JSON.stringify(result.data.detail))

            }).finally(() => {
                this.loading = false;
            })
        }
    }
</script>

<style scoped>

</style>
