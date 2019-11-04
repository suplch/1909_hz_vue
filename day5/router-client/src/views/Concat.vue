<template>
    <div>
        联系方式: 132456767899
        <button @click="count++">inc {{count}}</button>
    </div>
</template>

<script>
    export default {
        name: "Concat",
        data() {
            return {
                count: 0
            }
        }
    }
</script>

<style scoped>

</style>
