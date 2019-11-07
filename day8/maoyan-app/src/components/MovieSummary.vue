<template>
    <div class="summary">
        <img :src="movie.img | imgFilter('/148.208/')"/>
        {{movie.nm}}
        {{movie.sc}}
        {{movie.src}}/{{movie.dur}}分钟
        {{movie.cat}}
    </div>
</template>

<script>
    export default {
        name: "MovieSummary",
        props: ['movie'],
        mounted() {
            console.log(this.movie)
        }
    }
</script>

<style scoped>
    .summary {
        border: solid 1px red;
        width: 100%;
        height: 150px;
        padding: 19px
    }

    img {
        width: 110px;
        height: 150px;
    }
</style>
