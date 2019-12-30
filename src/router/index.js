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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/baseline',
    name:'baseline',
    component:()=>import('../views/Baseline.vue')
  },
  {
    path:'/restaurant',
    name:'restaurant',
    component:()=>import('../views/Restaurant.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
