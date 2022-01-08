import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/overview',
    name: 'Overview',
    // route level code-splitting
    // this generates a separate chunk (overview.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "overview" */ '../views/Overview.vue')
    }
  },
  {
    path: '/employees',
    name: 'Employees',
    // route level code-splitting
    // this generates a separate chunk (employees.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "employees" */ '../views/Employees.vue')
    }
  },
  {
    path: '/objects',
    name: 'Objects',
    // route level code-splitting
    // this generates a separate chunk (objects.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "objects" */ '../views/Objects.vue')
    }
  },
  {
    path: '/colors',
    name: 'Colors',
    // route level code-splitting
    // this generates a separate chunk (colors.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "colors" */ '../views/Colors.vue')
    }
  },
  {
    path: '/stations',
    name: 'Stations',
    // route level code-splitting
    // this generates a separate chunk (stations.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "stations" */ '../views/Stations.vue')
    }
  },
  {
    path: '/stations-lorraine',
    name: 'Stations Lorraine',
    // route level code-splitting
    // this generates a separate chunk (stations-lorraine.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "stations-lorraine" */ '../views/StationsLorraine.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
