<template>
    <div>
        电影列表

        <ul>
            <li v-for="movie of movies">
                <img v-bind:src="movie.img | imgFilter('/128.180/')" />
                <div class="content">
                    {{movie.nm}},
                    {{movie.showInfo}}
                    {{movie.star}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    // http://m.maoyan.com/ajax/movieOnInfoList?token=
    export default {
        name: "Movies",
        data() {
            return {
                movies: []
            }
        },
        mounted() {
            axios.get('/ajax/movieOnInfoList?token=').then((result) => {
                console.log(result);
                this.movies = result.data.movieList;
            })
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
