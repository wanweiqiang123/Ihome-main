/*
 * @Descripttion: 
 * @version: 
 * @Author: zyc
 * @Date: 2020-06-22 11:10:43
 * @LastEditors: zyc
 * @LastEditTime: 2020-12-29 14:35:10
 */
import Vue from 'vue'
import VueRouter, { RouteConfig, Route } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../components/Layout.vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })


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
    path: '/user',
    meta: { title: '用户列表', icon: 'form' },
    redirect: '/user/list',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'UserList',
        component: () => import('../views/user/list.vue'),
        meta: { title: '用户列表', icon: 'form', keepAlive: true }
      },
      {
        path: 'info',
        name: 'UserInfo',
        component: () => import('../views/user/info.vue'),
        meta: { title: '用户详情', icon: 'form' }
      },
    ]
  },
  {
    path: '/resources',
    meta: { title: '资源列表', icon: 'form' },
    redirect: '/resources/list',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'ResourcesList',
        component: () => import('../views/resources/list.vue'),
        meta: { title: '资源列表', icon: 'form', keepAlive: true }
      },
      {
        path: 'info',
        name: 'ResourcesInfo',
        component: () => import('../views/resources/info.vue'),
        meta: { title: '资源详情', icon: 'form' }
      },
    ]
  },
  {
    path: '/role',
    meta: { title: '角色列表', icon: 'form' },
    redirect: '/role/list',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'RoleList',
        component: () => import('../views/role/list.vue'),
        meta: { title: '角色列表', icon: 'form', keepAlive: true }
      },
      {
        path: 'info',
        name: 'RoleInfo',
        component: () => import('../views/role/info.vue'),
        meta: { title: '角色详情', icon: 'form' }
      },
    ]
  },
  {
    path: '/job',
    meta: { title: '岗位列表', icon: 'form' },
    redirect: '/job/list',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'JobList',
        component: () => import('../views/job/list.vue'),
        meta: { title: '岗位列表', icon: 'form', keepAlive: true }
      },
      {
        path: 'info',
        name: 'JobInfo',
        component: () => import('../views/job/info.vue'),
        meta: { title: '岗位详情', icon: 'form' }
      },
    ]
  },
  {
    path: '/organization',
    meta: { title: '组织列表', icon: 'form' },
    redirect: '/organization/list',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'OrganizationList',
        component: () => import('../views/organization/list.vue'),
        meta: { title: '组织列表', icon: 'form', keepAlive: true }
      },

    ]
  },
  {
    path: '/other',
    meta: { title: '新手引导', icon: 'form' },
    redirect: '/other/driver',
    component: Layout,
    children: [
      {
        path: 'driver',
        name: 'OtherDriver',
        component: () => import('../views/other/driver.vue'),
        meta: { title: '新手引导', icon: 'form' }
      },

    ]
  },
  {
    path: '/dic',
    meta: { title: '字典', icon: 'form' },
    redirect: '/dic/list',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'DicList',
        component: () => import('../views/dic/list.vue'),
        meta: { title: '字典', icon: 'form' }
      },

    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




router.beforeEach(async (to: Route, _: Route, next: any) => {
  if (to?.matched?.length === 0) {
    //encodeURIComponent,decodeURIComponent
    (window as any).location = "/web-sales/error404?source=" + encodeURIComponent((window as any).location.href);
  } else {
    // Start progress bar
    NProgress.start()
    next();
  }
})

router.afterEach(() => {
  // Finish progress bar
  NProgress.done()

  // set page title
  // document.title = to.meta && to.meta.title
})

export { router, routes }
