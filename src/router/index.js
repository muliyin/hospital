import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Confirm from '@/views/confirm/Confirm'
import List from "@/views/list/List";
import Search from "@/views/search/Search";
import Analysis from "@/views/Analysis";
import ConfirmDetail from "@/views/confirm/ConfirmDetail";
import ListDetail from "@/views/list/ListDetail"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/confirm',
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'confirm',
                name: 'confirm',
                component: Confirm
            },
            {
                path: 'confirmdetail',
                name: 'confirmdetail',
                component: ConfirmDetail
            },
            {
                path: 'list',
                name: 'list',
                component: List
            },
            {
                path: 'listdetail',
                name: 'listdetail',
                component: ListDetail
            },
            {
                path: 'search',
                name: 'search',
                component: Search
            },
            {
                path: 'analysis',
                name: 'analysis',
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
