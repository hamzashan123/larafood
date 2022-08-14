<template>
    <!-- navbar start -->
    <header class="navbar-area navbar-area-2">
        <nav class="navbar navbar-expand-lg">
            <div class="container nav-container">
                <div class="responsive-mobile-menu">
                    <button class="menu toggle-btn d-block d-lg-none" data-target="#themefie_main_menu"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-left"></span>
                        <span class="icon-right"></span>
                    </button>
                </div>

                <Logo />

                <Navigation />

                <RightNavMobile />
                <RightNavDesktop />

            </div>
        </nav>
    </header>
    <!-- navbar end -->

</template>

<script>
import Navigation from '@comp/partials/Navigation.vue'
import Logo from '@comp/partials/Logo.vue'
import RightNavMobile from '../partials/RightNavMobile.vue'
import RightNavDesktop from '../partials/RightNavDesktop.vue'

    export default {
        components: {
            Navigation,
            Logo,
            RightNavMobile,
            RightNavDesktop,

        }


    }

</script>

<style>

</style>
