<template>
    <div>
        <ul>
            <li :key="movie.id" v-for="movie of movies" @click="goto(movie)">
                <img v-bind:src="movie.img | imgFilter('/128.180/')" />
                <div class="content">
                    {{movie.nm}},
                    {{movie.showInfo}}
                    {{movie.star}}
                </div>
            </li>
            <li v-if="noMovies">
                <div>没有更多数据了</div>
            </li>
        </ul>
    </div>
</template>

<script>

    // http://m.maoyan.com/ajax/movieOnInfoList?token=
    import eventBus from '../eventbus';
    export default {
        name: "Online",
        data() {
            return {

            }
        },
        computed: {
            movies() {
                return this.$store.state.movies;
            },
            noMovies() {
                return this.$store.state.noMovies;
            }
        },
        methods: {
            goto(movie) {
                this.$router.push({name: 'moviedetail', params: {id: movie.id}, query: {nm: movie.nm}});
            }
        },
        async mounted() { // hd    handler
            this.reachBottomHd = async () => {
                await this.$store.dispatch('moreComingList');
            };
            eventBus.$on('reachBottom', this.reachBottomHd);

            await this.$store.dispatch('movieOnInfoList')

        },

        destroyed() {
            eventBus.$off('reachBottom', this.reachBottomHd);
        },

    }
</script>

<style scoped>
    img {
        position: absolute;
        left: 15px;
        top: 12px;
        width: 64px;
        height: 90px
    }

    ul li {
        height: 114px;
    }

    ul li div.content {
        position: absolute;
        padding-top: 12px;
        padding-bottom: 12px;
        left: 94px;
        height: 78px;
        border-bottom: solid 1px grey;
    }
</style>
