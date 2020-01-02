import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('../views/Restaurant.vue')
  },
  {
    path: '/record',
    name: 'record',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Record.vue')
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/Login.vue')
  },
  {
    path:'/restaurant',
    name:'restaurant',
    component:()=>import('../views/Restaurant.vue')
  },
  {
    path:'/history',
    name:'history',
    component:()=>import('../views/History.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
