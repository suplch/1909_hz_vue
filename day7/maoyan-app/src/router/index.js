import Vue from 'vue'
import VueRouter from 'vue-router'

import Movies from '../views/Movies.vue';
import Online from '../views/Online.vue';
import Coming from '../views/Coming.vue';

Vue.use(VueRouter);

//     /movies/online

const routes = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies,
    children: [
      {
        path: '/',
        redirect: '/movies/online',
      },
      {
        path: 'online',
        name: 'online',
        component: Online
      }, {
        path: 'coming',
        name: 'coming',
        component: Coming
      }
    ]
  },
  {
    path: '/ciname',
    name: 'ciname',
    component: () => import('../views/Ciname.vue')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('../views/Ciname.vue')
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router
