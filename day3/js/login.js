Vue.component('Login', {
    props: {
        color: String,
        options: {
            default: {
                LoginName: '用户名',
                Password: '密码'
            }
        },
        // uname: {
        //     default: '用户名'
        // },
        // upwd: {
        //     default: '密码'
        // }
    },
    template: `
            <div v-bind:style="{border: 'solid 5px ' + color}">
                <template v-if="loginOk">
                    欢迎 {{userName}} 光临 !!!
                </template>
                <template v-else>
                    {{options.LoginName}}: <input ref="uname" type="text"/>
                    {{options.Password}}: <input ref="upwd" type="password"/>
                    <button v-bind:disabled="logining" @click="login">登录</button>
                    <span>
                        {{logining ? '登陆中 请稍后...': ''}}
                    </span>
                </template>
            </div>
        `,
    data () {
        return {
            logining: false,
            loginOk: false,
            userName: '',
        }
    },
    methods: {
        login() {
            //alert(this.options.LoginName);
            let uname = this.$refs.uname.value
            let upwd = this.$refs.upwd.value
            if (uname.trim() !== '' && upwd.trim() !== '') {
                //axios.post('/')
                this.logining = true;
                doLogin(uname, upwd).then((result) => {
                    if (result.data.ok) {
                        alert('登录成功');
                        this.loginOk = true;
                        this.$emit('login_success');
                        this.userName = result.data.user.name;
                    } else {
                        alert('登录失败');
                    }
                    this.logining = false;
                }).catch((err) => {
                    console.log(err);
                    this.logining = false;
                })
            } else {
                alert('请输入用户名或密码');
            }
        }
    }
});



function doLogin(uname, pwd) {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            if (uname === 'zhang' && pwd === '123') {
                resolve({
                    data: {
                        ok: true,
                        msg: '登录成功',
                        user: {
                            name: '张三'
                        }
                    }
                })
            } else {
                resolve({
                    data: {
                        ok: false,
                        msg: '登录失败'
                    }
                })
            }
        }, 3000)

    });

}
