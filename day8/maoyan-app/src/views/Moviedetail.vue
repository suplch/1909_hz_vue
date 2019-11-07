<template>
    <div>
        <MovieSummary :movie="detailMovie"></MovieSummary>
        <FilterMovie></FilterMovie>
    </div>
</template>

<script>
    import MovieSummary from '@/components/MovieSummary';
    import FilterMovie from '@/components/FilterMovie';
    export default {
        name: "Moviedetail",

        computed: {
            detailMovie() {
                return this.$store.state.movieDetail.detailMovie;
            }
        },
        async mounted() {
            console.log(this.$route);
            this.$store.commit('setPageTitle', this.$route.query.nm);

            await this.$store.dispatch('movieDetail/detailmovie', this.$route.params.id)
        },

        components: {
            MovieSummary,
            FilterMovie
        }
    }
</script>

<style scoped>

</style>
