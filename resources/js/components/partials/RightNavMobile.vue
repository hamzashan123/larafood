
<template>
    <div class="nav-right-part nav-right-part-mobile">
        <!-- <ul>
            <li>
                <a class="search" href="#"><i class="ri-search-line"></i></a>
            </li>
            <li class="phone-contact d-md-block d-none">
                <i class="ri-phone-fill float-start"></i>
                +997 509 153 849
            </li>
            <li class="menu-cart">
                <a href="cart.html">CART <span>1</span></a>
            </li>
            <li>49.50 $</li>
        </ul> -->

        <ul>
            <li class="phone-contact">
                <a href="tel:+123456789" target="_blank" >
                    <i class="ri-phone-line ri-xl"></i>
                </a>
                <!-- <router-link :to="{ name: 'contact' }">
                    <i class="ri-phone-line ri-xl"></i>
                </router-link> -->
            </li>
            <li class="menu-cart">
                <!-- <a href="#" @click="cartOpen = !cartOpen ">
                    <i class="ri-shopping-cart-line ri-xl"></i> <span>2</span>
                </a> -->
                <router-link :to="{ name: 'cart' }">
                    <i class="ri-shopping-cart-line ri-xl"></i> <span>1</span>
                </router-link>
            </li>
            <li class="phone-contact">
                <!-- <router-link :to="{ name: 'cart' }"> -->
                    <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" >
                        <i class="ri-login-box-line ri-xl"></i>
                    </a>
                <!-- </router-link> -->

            </li>
        </ul>

        <!-- <MiniCart v-if="cartOpen"/> -->

    </div>
</template>

<script>
// import MiniCart from './MiniCart.vue';

export default {
    // components: {
    //     MiniCart,
    // },
    // data() {
    //     return {
    //         cartOpen: false,
    //     }
    // }
};
</script>

<style>
</style>
