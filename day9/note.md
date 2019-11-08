### 服务端渲染 与 Nuxt 框架

- 脚手架工具 https://github.com/nuxt/create-nuxt-app
- npm install create-nuxt-app -g

- 方式一: 
    + npx create-nuxt-app <项目名>
    + cd <项目名>
    + npm install;
- 方式二: ```
- mkdir <项目名>
- cd <项目名>
- npm init -y
- npm install nuxt --save
- 修改 package.json
```
{
    "scripts": {
        "dev": "nuxt"
    }
}
```

- mkdir pages
- 在pages 文件夹里 创建 index.vue;

- npm run dev
- 创建 nuxt.config.js
```javascript
module.exports = {
    modules: [
        '@nuxtjs/proxy'
    ],
    axios: {
        proxy: true
    },
    proxy: {  // 配置代理
        '/api': {
            target: 'http://localhost:5000',
        }
    },
    head: {  
        title: '学习世界',
        titleTemplate: '%s - 我的英语',
        meta: [
            { charset: 'utf-8'}
        ]
    },

    css: [
        '~assets/global.css'
    ]
};
// 注  ~表示源代码目录
//    ~~表示项目根目录
```
- 目录结构
    + assets 资源目录 css 图片
    + components, vue 组件目录
    + layouts, 布局目录
    + middleware, 中间件目录
    + pages, 页面组件目录
    + plugins, 插件目录
    + static, 静态资源目录
    + store,  vuex store配置目录

