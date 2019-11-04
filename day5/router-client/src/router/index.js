import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';
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
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      other: () => import(/* webpackChunkName: "about" */ '../views/Other.vue'),
    }
    //component: About
  },
  {
    path: '/concat',
    name: 'concat',
    component: () => import('../views/Concat.vue'),
    beforeEnter(to, from, next) {
      console.log(to);
      console.log(from);
      console.log(next);

      // to.name;
      // from.name;


        axios.get('/valid').then((result) => {
          if (result.data.ok) {
            next()
          }
        });


      //next();
    },
    children: [
      {
        path: 'address',
        name: 'address',
        meta: {
          name: 'zhang', age: 18
        },
        component: () => import('../views/Address.vue')
      },
      {
        path: 'mail',
        name: 'mail',
        component: () => import('../views/Mail.vue')
      }
    ]
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
});


router.beforeEach(function (to, from, next) {
  console.log(to);
  console.log(from);
  console.log(next);
   next();
});

export default router
