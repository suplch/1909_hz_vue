<template>
    <div>
        电影列表
        <ul style="margin-bottom: 56px">
            <li v-for="movie of movies">
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
    export default {
        name: "Movies",
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
        async mounted() {
            await this.$store.dispatch('movieOnInfoList')

        },

        filters: {
            imgFilter (value, size) {
                console.log(value)
                return value.replace('/w.h/', size);

            }
        }
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
