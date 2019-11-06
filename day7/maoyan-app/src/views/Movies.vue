<template>
    <div class="movielist">
        <div class="list" ref="mlist">
            <div ref="mlistcontent" >
                <router-view></router-view>
            </div>
        </div>
        <ul class="tab">
            <li v-for="tab of tabs" @click="selTab(tab)" :class="{select: selectTab === tab}">
                {{tab.text}}
            </li>
        </ul>
    </div>
</template>

<script>
    // http://m.maoyan.com/ajax/movieOnInfoList?token=
    import eventBus from '../eventbus';
    export default {
        name: "Movies",
        data() {
            const tabs = [
                {text: '正在热映', routeName: 'online'},
                {text: '即将上映', routeName: 'coming'},
            ];
            return {
                tabs,
                selectTab: tabs[0],
            }
        },
        mounted() {
            let scrollHandler = async (event) => {
                console.log(event);
                console.log(this.$refs.mlist.scrollTop);
                console.log(this.$refs.mlist.offsetHeight);
                console.log(this.$refs.mlistcontent.offsetHeight);

                let top = this.$refs.mlist.scrollTop;
                let appHeight = this.$refs.mlist.offsetHeight;
                let contentHeight = this.$refs.mlistcontent.offsetHeight;

                //接近 5 像素 是我们认为 滚动触底
                if (contentHeight -  (top + appHeight) < 5) {
                    console.log('触底了');
                    this.$refs.mlist.removeEventListener('scroll', scrollHandler);
                    eventBus.$emit('reachBottom');
                    //await this.$store.dispatch('moreComingList');
                    // 确保 事件不会重复发生
                    this.$refs.mlist.addEventListener('scroll', scrollHandler);
                    console.log('remove scroll')
                }
            };

            this.$refs.mlist.addEventListener('scroll', scrollHandler);
        },
        methods: {
            selTab(tab) {
                this.selectTab = tab;
                this.$router.push({name: tab.routeName});
            }
        }
    }
</script>

<style scoped>
    .movielist {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
    }
    .list {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 30px;
        bottom: 50px;
        overflow: auto;
    }
    ul.tab li.select {
        color: red;
        border-bottom: solid 1px red;
    }

    ul.tab {
        width: 100%;
        height: 30px;
        display: flex;
        position: absolute;
        top: 0px;
        background: white;
    }

    ul.tab li {
        display: inline-block;
        flex: 1;
        text-align: center;
    }
</style>
