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
                // 返回全局 状态属性
                return this.$store.state.count
            }
        }
    }
</script>

<style scoped>

</style>
