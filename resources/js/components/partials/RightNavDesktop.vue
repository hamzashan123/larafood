
<template>
    <div class="nav-right-part nav-right-part-desktop">
        <ul>
            <li class="phone-contact">
                <router-link :to="{ name: 'contact' }">
                    <i class="ri-phone-line ri-xl"></i>
                </router-link>
            </li>
            <li class="menu-cart">
                <router-link :to="{ name: 'cart' }">
                    <i class="ri-shopping-cart-line ri-xl"></i> <span>1</span>
                </router-link>
            </li>
            <li class="phone-contact">
                 <router-link :to="{ name: 'cart' }">

                    <i class="ri-login-box-line ri-xl"></i>
                    Login
                </router-link>

            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
