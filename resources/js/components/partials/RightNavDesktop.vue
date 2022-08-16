
<template>
    <div>
        <div class="nav-right-part nav-right-part-desktop">
        <ul>
            <li class="phone-contact">
                <router-link :to="{ name: 'contact' }">
                    <i class="ri-phone-line ri-xl"></i>
                </router-link>
            </li>
            <li class="menu-cart">
                <a href="#" @click="cartOpen = !cartOpen ">
                    <i class="ri-shopping-cart-line ri-xl"></i> <span>2</span>
                </a>
                <!-- <router-link :to="{ name: 'cart' }">
                    <i class="ri-shopping-cart-line ri-xl"></i> <span>1</span>
                </router-link> -->
            </li>
            <li class="phone-contact">
                 <!-- <router-link :to="{ name: 'cart' }"> -->
                    <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" >
                    <i class="ri-login-box-line ri-xl"></i>
                    Login
                    </a>
                <!-- </router-link> -->

            </li>
        </ul>
    </div>
    <MiniCart v-if="cartOpen"/>

    </div>
</template>

<script>
import MiniCart from './MiniCart.vue';

export default {
    components: {
        MiniCart
    },
    data() {
        return {
            cartOpen: false,
        }
    }
};
</script>

<style>
</style>
