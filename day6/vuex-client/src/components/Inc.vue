<template>
    <div style="border: solid 5px green">
        <button @click="inc">增加</button>
        <button @click="add">增加</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "Inc",
        methods: {
            inc() {
                this.$store.dispatch('counter/inc', {
                    money: 10
                });
            },
            ...mapActions('counter', {
                add: 'inc'
            })
        }
    }
</script>
<style scoped>
</style>
