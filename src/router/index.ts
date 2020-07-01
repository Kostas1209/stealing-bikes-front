import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import UserLostBikes from '../components/UserLostBikes.vue';
import NewLostBike from '../components/NewLostBike.vue';


Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import ('../views/Admin.vue'),
  },
  {
    path: '/user',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
    children : [
      {
        path: '/',
        component: UserLostBikes 
      },
      {
        path: 'form',
        component: NewLostBike
      }
    ]
  },
  {
    path: '*',
    redirect: '/user'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
