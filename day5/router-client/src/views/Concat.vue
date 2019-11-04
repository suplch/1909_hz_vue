<template>
    <div>
        联系方式: 132456767899
        <button @click="count++">inc {{count}}</button>

        <ul>
            <li>
                <router-link to="/concat/address">地址</router-link>
            </li>
            <li>
                <router-link to="/concat/mail">邮件</router-link>
            </li>
        </ul>

        <div style="border: solid 5px green;">
            <router-view/>
        </div>

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
