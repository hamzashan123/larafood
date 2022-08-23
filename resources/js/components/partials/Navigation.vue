<template>
    <div class="collapse navbar-collapse" id="themefie_main_menu">
        <ul class="navbar-nav menu-open">
            <li class="current-menu-item">
                <router-link :to="{ name: 'home' }" class="active">Home</router-link>
            </li>
            <!-- <li class="current-menu-item">
                <router-link :to="{ name: 'meals-plan' }">Meal Plans</router-link>
            </li> -->
            <li>
                <router-link :to="{ name: 'search' }">Search</router-link>

            </li>
        </ul>
    </div>
</template>

<script>
    export default {

    }

</script>

<style>

</style>
