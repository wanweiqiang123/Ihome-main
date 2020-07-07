/*
 * @Descripttion: 
 * @version: 
 * @Author: zyc
 * @Date: 2020-06-22 11:10:43
 * @LastEditors: zyc
 * @LastEditTime: 2020-07-06 10:43:50
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../components/Layout.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '主页'
    }
  },
  {
    path: '/api',
    name: 'api',
    component: () => import('../views/api.vue'),
    meta: {
      title: 'api'
    }
  },
  {
    path: '/user',
    meta: { title: '用户', icon: 'form' },
    redirect: '/user/list',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'UserList',
        component: () => import('../views/user/list.vue'),
        meta: { title: '用户列表', icon: 'form' }
      },
    ]
  },
  {
    path: '/resources',
    meta: { title: '资源', icon: 'form' },
    redirect: '/resources/list',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'ResourcesList',
        component: () => import('../views/resources/list.vue'),
        meta: { title: '资源列表', icon: 'form' }
      },
    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export { router, routes }
