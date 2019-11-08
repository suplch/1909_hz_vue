<template>
    <div>
        用户名: <input type="text" />
        密码: <input type="text" />
        <button @click="doLogin">登录</button>
        {{ msg }}
    </div>
</template>

<script>
    export default {
        name: "Login",
        data () {
            return {
                msg: '请登录'
            }
        },
        methods: {
            doLogin() {
                alert('login');
            }
        }
    }
</script>

<style scoped>

</style>
