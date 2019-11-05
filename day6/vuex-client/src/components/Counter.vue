<template>
    <div style="border: solid 5px red">
        {{ count }}, {{ fullName }}
        <hr/>
        {{countBase100 }}, {{ countBase100Double }}
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "Counter",

        data() {
            return {
                firstName: 'zhang',
                lastName: 'san'
            }
        },

        computed: {
            // ...mapState('counter', {
            //     count(state) {
            //         return state.count
            //     }
            // }),
            ...mapState('counter', [
                'count'   // state.count
            ]),

            countBase100() {
                return this.$store.getters['counter/countBase100'];
            },

            countBase100Double() {
                return this.$store.getters['counter/countBase100Double']
            },

            fullName() {
                return this.firstName + ' ' + this.lastName;
            }
        }


        // computed: mapState('counter', {
        //     count(state) {
        //         return state.count
        //     }
        // })

        // computed: {
        //     count() {
        //         // 返回全局 状态属性
        //         return this.$store.state.counter.count
        //     }
        // }
    }
</script>

<style scoped>

</style>
