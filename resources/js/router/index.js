// @ts-nocheck
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@views/Home.vue'
import MealsPlan from '@views/MealsPlan.vue'
import About from '@views/About.vue'
import Contact from '@views/Contact.vue'
import Cart from '@views/Cart.vue'
import Checkout from '@views/Checkout.vue'
import Search from '@views/Search.vue'
import FoodDetail from '@views/FoodDetail.vue'
import MealDetail from '@views/MealDetail.vue'

const router = new VueRouter({
    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/meals-plan',
            name: 'meals-plan',
            component: MealsPlan,
        },
        {
            path: '/meals-plan/meal-detail',
            name: 'meal-detail',
            component: MealDetail,
        },
        {
            path: '/food-detail/',
            name: 'food-detail',
            component: FoodDetail,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: Checkout,
        },
        {
            path: '/search',
            name: 'search',
            component: Search,
        },
    ],
});


export default router

