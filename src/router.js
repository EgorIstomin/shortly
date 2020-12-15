import Vue from "vue" 
import Router from 'vue-router' 
import Head from './components/Head'

Vue.use(Router) 
export default new Router({
    mode: 'history', 
    routes: [
        { 
            path: '/', 
            component: Head
        }, 
        { 
            path: '/start', 
            component: () => import('./components/StartPage.vue')
        }
    ]
})