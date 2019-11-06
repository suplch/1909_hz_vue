<template>
    <div ref="coming" class="coming">

        <div style="padding: 0px 15px 0px 15px">
            <Expectmovie></Expectmovie>
        </div>


        <hr/>
        <div>
            <ul>
                <li v-for="movie of coming">
                    <img v-bind:src="movie.img | imgFilter('/128.180/')" />
                    <div class="content">
                        {{movie.nm}},

                        {{movie.star}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    // http://m.maoyan.com/ajax/movieOnInfoList?token=
    import Expectmovie from '../components/Expectmovie';

    import eventBus from '../eventbus';
    export default {
        name: "Coming",
        computed: {
            expectComing() {
                return this.$store.state.coming.expectComing;
            },
            coming() {
                return this.$store.state.coming.coming;
            }
        },
        async mounted() {

            this.reachBottomHd = async () => {
                await this.$store.dispatch('coming/moreComingList');
            };
            eventBus.$on('reachBottom', this.reachBottomHd);



            await this.$store.dispatch('coming/comingList');
        },

        destroyed() {
            eventBus.$off('reachBottom', this.reachBottomHd);
        },

        components: {
            Expectmovie
        },

        filters: {
            imgFilter (value, size) {
                console.log(value);
                return value.replace('/w.h/', size);

            }
        }
    }
</script>

<style scoped>

    .coming {

    }



</style>
