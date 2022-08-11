<template>
    <div>
        <Header />

        <router-view />

        <Footer />

        <Backtotop />
    </div>
</template>
<script>
    import Header from '@comp/header/Header.vue'
    import Footer from '@comp/footer/Footer.vue'
    import Backtotop from '@comp/partials/Backtotop.vue'

    export default {
        components: {
            Header,
            Footer,
            Backtotop,
        }

    }

</script>
