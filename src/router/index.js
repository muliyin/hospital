import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Confirm from '@/views/confirm/Confirm'
import List from "@/views/list/List";
import Search from "@/views/search/Search";
import Analysis from "@/views/Analysis";
import ConfirmDetail from "@/views/confirm/ConfirmDetail";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'confirm',
                component: Confirm
            },
            {
                path: 'confirmdetail',
                component: ConfirmDetail
            },
            {
                path: 'list',
                component: List
            },
            {
                path: 'search',
                component: Search
            },
            {
                path: 'analysis',
                component: Analysis
            },
        ]
    },
    /*{
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ '../views/Confirm.vue')
    }*/
]

const router = new VueRouter({
    routes
})

export default router
