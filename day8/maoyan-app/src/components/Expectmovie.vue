<template>
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
</template>

<script>
    export default {
        name: "Expectmovie",
        computed: {
            expectComing() {
                return this.$store.state.coming.expectComing;
            },
        },
        async mounted() {

            let scrollHandler = async () => {
                let left = this.$refs.ul.scrollLeft;
                let width = this.$refs.ul.offsetWidth;
                let contentWidth = this.$refs.ul.scrollWidth;

                console.log(left, width, contentWidth);

                if (contentWidth -  (left + width) < 5) {
                    console.log('触底了');

                    this.$refs.ul.removeEventListener('scroll', scrollHandler);

                    await this.$store.dispatch('coming/mostExpected');

                    this.$refs.ul.addEventListener('scroll', scrollHandler);
                    console.log('remove scroll')

                }
            };

            this.$refs.ul.addEventListener('scroll', scrollHandler);

            await this.$store.dispatch('coming/mostExpected');

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
    div.ul {
        width: 100%;
        height: 164px;
        overflow: scroll;
        white-space: nowrap;
        display: block;
    }

    div.ul div.li {
        display: inline-block;
        width: 85px;
        height: 159px;
        margin-right: 10px;
        /*box-shadow: 0px 0px 5px red;*/
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
