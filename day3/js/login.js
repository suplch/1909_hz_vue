// 声明一个 Login 组件
Vue.component('Login', {
    props: {  // 声明 组件属性
        color: String,
        options: {
            default: {  // default 表示属性的默认值
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
    // template 组件模板, 用来表示组件的外观
    template: `
            <div v-bind:style="{border: 'solid 5px ' + color}">
                <template v-if="loginOk">
                    欢迎 {{userName}} 光临 !!!
                </template>
                <template v-else>
                    {{options.LoginName}}: <input ref="uname" type="text"/>
                    {{options.Password}}: <input ref="upwd" type="password"/>
                                   <!--  登录中将登录按钮禁用  -->
                    <button v-bind:disabled="logining" @click="login">登录</button>
                    <span>
                        {{logining ? '登陆中 请稍后...': ''}}
                    </span>
                </template>
            </div>
        `,
    data () { // 声明组件的数据模型, 必须定义为 函数, 返回数据模型对象
        return {
            logining: false,  // 表示 当前是否在登录中...
            loginOk: false,   // 表示当前是否已经登录成功
            userName: '',    // 登录成功 后 保持用户名
        }
    },
    methods: { // 定义组件的方法
        login() {
            // this.$refs  获取原生的 dom 元素
            let uname = this.$refs.uname.value;
            let upwd = this.$refs.upwd.value;
            if (uname.trim() !== '' && upwd.trim() !== '') {
                // 将 logining 置为 true 表示 正在登录中...
                this.logining = true;
                doLogin(uname, upwd).then((result) => {
                    if (result.data.ok) {
                        alert('登录成功');
                        this.loginOk = true;
                        // 发射一个事件
                        this.$emit('login_success');
                        // 获取后台返回的用户名
                        this.userName = result.data.user.name;
                    } else {
                        alert('登录失败');
                    }
                    // 将 logining 置为 false 表示 登录结束...
                    this.logining = false;
                }).catch((err) => {
                    console.log(err);
                    // 将 logining 置为 false 表示 登录结束...
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
