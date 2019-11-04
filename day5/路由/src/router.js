import Vue from 'vue'
import Router from 'vue-router' //已经下载
import Film from '@/views/film'
import Cinema from '@/views/cinema'
import Center from '@/views/center'
Vue.use(Router) //注册路由模块


const router = new Router({
  routes: [
    {
      path: '/film',
      // name: 'home',
      component: Film
    },
    {
      path: '/cinema',
      // name: 'home',
      component: Cinema
    },
    {
      path: '/center',
      // name: 'home',
      component: Center
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})


export default router //ES6 模块导出
