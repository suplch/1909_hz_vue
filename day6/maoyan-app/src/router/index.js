import Vue from 'vue'
import VueRouter from 'vue-router'

import Movies from '../views/Movies';

Vue.use(VueRouter);

const routes = [
  {
    path: '/movies',
    name: 'movies',
    component: Movies
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
