<template>
    <div style="border: solid 5px red">
        {{ count }}
    </div>
</template>

<script>
    export default {
        name: "Counter",
        computed: {
            count() {
                return this.$store.state.count
            }
        }
    }
</script>

<style scoped>

</style>
