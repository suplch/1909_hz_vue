<template>
    <div>
        商品详情

        <div v-if="loaded && detail">
            名称: {{detail.name}},
            价格: {{detail.price}},
            图片: {{detail.pic}},
            简介: {{detail.descript}}
            <hr/>
            周报产品
            <ul>
                <li :key="item.id" v-for="item of detail.relationGoods">

                    <router-link :to="'/detail/' + item.id">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
        <div v-if="loaded && !detail">
            商品不存在
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
                loaded: false,
                detail: undefined
            }
        },
        methods: {
            loadProduct(id) {

                console.log(this.$route);
                let ret = sessionStorage.getItem('goods_' + id);

                // 如果缓存有数据, 直接使用 缓存中的数据
                if (ret) {
                    let detail = JSON.parse(ret);
                    this.loaded = true;
                    this.loading = false;
                    this.detail = detail;
                    return;
                }


                this.loading = true;
                // 发起 ajax 请求 获取 后台数据
                axios.get('/detail?id=' + id).then((result) => {
                    this.detail = result.data.detail;
                    this.loaded = true;
                    // 将结果 缓存 到 sessionStorate里
                    if (this.detail) {
                        sessionStorage.setItem('goods_' + id, JSON.stringify(result.data.detail))
                    }
                }).finally(() => {
                    this.loading = false;
                })
            }
        },
        mounted() {
            this.loadProduct(this.$route.params.id);
        },

        beforeRouteEnter(to, from, next) {
            console.log('进入');
            next(new Promise(function (resolve) {

                setTimeout(function () {
                    resolve(true)
                }, 3000)


            }));
        },

        beforeRouteUpdate(to, from, next) {
            console.log('更新地址');
            this.loadProduct(to.params.id);
            next()
        },

        beforeRouteLeave(to, from, next) {
            console.log('离开');
            console.log(next);

            if (window.confirm('真的要离开啊')) {
                next();
            }

            //next();
        }
    }
</script>

<style scoped>

</style>
