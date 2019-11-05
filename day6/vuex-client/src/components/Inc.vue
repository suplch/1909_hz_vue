<template>
    <div style="border: solid 5px green">
        <button @click="inc">增加</button>
    </div>
</template>

<script>
    export default {
        name: "Inc",
        methods: {
            inc() {
                this.$store.dispatch('inc', {
                    money: 10
                });
            }
        }
    }
</script>
<style scoped>
</style>
