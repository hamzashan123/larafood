
<template>
    <div class="" style="flex: 0 0 50%;">
        <div class="nav-right-part nav-right-part-desktop">

            <div class="widget widget_search mb-0 mx-4 flex-fill">
                <form class="search-form rounded-3 border">
                    <div class="form-group">
                        <input type="text" v-model="search" name="search" placeholder="Search meals, plans, dishes, days">
                    </div>
                    <button class="submit-btn" @click.prevent="searchForm" type="submit"><i class="ri-search-line"></i></button>
                </form>
            </div>

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
            search: '',
        }
    },
    methods: {
        searchForm() {
            this.$router.push({ name: 'search', query: {q: this.search} })
        }
    }
};
</script>

<style>
</style>
