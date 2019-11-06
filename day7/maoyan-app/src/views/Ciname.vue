<template>
    <div>
        影院类别

        <div ref="wrapper" class="wrapper">
            <ul class="content">
                <li v-if="refreshing" style="height: 30px; background: green">加载中...</li>
                <li v-for="(item, index) of items">{{index}}, {{item.text}}</li>
                <li v-if="loadMore">加载更多...</li>
            </ul>
            <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
        </div>

    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
        name: "Ciname",
        data() {
            return {
                refreshing: false,
                loadMore: false,
                items: [
                    {text: 'test'},
                    {text: 'test'},
                    {text: 'test'},
                    {text: 'test'},
                    {text: 'test'},
                    {text: 'test'},
                    {text: 'test'},
                    {text: 'test'},
                    {text: 'test'},
                    {text: 'test'},
                    {text: 'test'},
                    {text: 'test'},
                    {text: 'test'},
                    {text: 'test'},
                ]
            }
        },
        mounted() {

            const scroll = new BScroll(this.$refs.wrapper, {
                //snap: true,
                pullDownRefresh: {
                    threshold: 50,
                    stop: 200
                },
                scrollbar: {
                    fade: true,
                    interactive: false,
                },
                pullUpLoad: {
                    threshold: 50
                }
            });

            scroll.on('pullingDown', () => {
                console.log('下拉刷新');

                this.refreshing = true;
                setTimeout(() => {
                    this.refreshing = false;
                    this.items = [{text: '新闻1'}, {text: '新闻2'}, ...this.items];
                }, 5000)

                scroll.finishPullDown();  // 结束下拉刷新
            });

            scroll.on('pullingUp', () => {
                console.log('正在加载...')

                this.loadMore = true;
                setTimeout(() => {
                    this.loadMore = false;
                    this.items = [...this.items, {text: '更多数据aaa'}, {text: '更多数据bbb'}]
                    scroll.finishPullUp(); // 结束 上拉加载
                }, 2000)
            })


            this.$nextTick(() => {


            });

            setTimeout(() => {

            }, 1000)




        }
    }
</script>

<style scoped>
    .wrapper {
        width: 100%;
        height: 400px;

        box-shadow: 0px 0px 5px green;
        overflow: hidden;
    }

    .wrapper .content {

    }

    ul li {
        height: 100px;
        margin: 20px;
        border: solid 1px red;
    }

</style>
