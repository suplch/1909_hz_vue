import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import About from '../views/About.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //component: About
  },
  {
    path: '/concat',
    name: 'concat',
    component: () => import('../views/Concat.vue')
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import('../views/GoodsList.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/Detail.vue')
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
