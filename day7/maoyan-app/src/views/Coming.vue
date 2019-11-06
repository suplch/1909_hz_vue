<template>
    <div ref="coming" class="coming">
        <div ref="expect" class="expect">
            <div ref="ul" class="ul">
                <div class="li" v-for="movie of expectComing">
                    <img :src="movie.img | imgFilter('/170.230/')"/>
                    <div class="mn">
                        {{ movie.nm }}
                    </div>
                    <div class="date">
                        {{movie.comingTitle}}
                    </div>
                </div>
            </div>
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


            await this.$store.dispatch('coming/mostExpected');
            await this.$store.dispatch('coming/comingList');
        },

        destroyed() {
            eventBus.$off('reachBottom', this.reachBottomHd);
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

    .expect {
        width: 100%;
        height: 164px;
        overflow: scroll;
        white-space: nowrap;
    }
    div.ul {
        display: block;
    }

    div.ul div.li {
        display: inline-block;
        width: 85px;
        height: 159px;
        margin-right: 10px;
        box-shadow: 0px 0px 5px red;
    }

    div.ul div.li img {
        width: 85px;
        height: 115px;
    }

    div.ul div.li div.mn {
        font-size: 13px;
        color: black;
        margin-bottom: 3px;
    }

    div.ul div.li div.date {
        font-size: 12px;
        color: #999;
    }

</style>
