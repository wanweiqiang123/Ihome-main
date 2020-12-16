/*
 * @Description: 
 * @version: 
 * @Author: zyc
 * @Date: 2020-06-22 11:10:43
 * @LastEditors: zyc
 * @LastEditTime: 2020-12-16 10:48:43
 */
import Vue from 'vue'
import VueRouter, { RouteConfig, Route } from 'vue-router'
// import Home from '../views/Home.vue'
import Layout from '../components/Layout.vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })


Vue.use(VueRouter);


import { channelRoutes } from './channel';
import { developerRoutes } from './developer';
import { contractRoutes } from './contract'
import { projectRoutes } from './project'
import { dealRoutes } from './deal'

let routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home/index',
  },
  {
    path: '/home',
    meta: { title: '主页', icon: null },
    redirect: '/home/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'HomeIndex',
        component: () => import('../views/home/index.vue'),
        meta: { title: '首页', icon: 'form', keepAlive: true }
      },
   
    ]
  },
]

routes = routes.concat(channelRoutes, developerRoutes, contractRoutes, projectRoutes, dealRoutes);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




router.beforeEach(async (to: Route, _: Route, next: any) => {
  // Start progress bar
  NProgress.start()
  next();

})

router.afterEach(() => {
  // Finish progress bar
  NProgress.done()

  // set page title
  // document.title = to.meta && to.meta.title
})

export { router, routes }
