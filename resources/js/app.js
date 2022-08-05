require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import App from './views/app.vue'
import Home from './views/Home'
import About from './views/About'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        },
    ],
});


const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
