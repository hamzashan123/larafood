<template>
    <div>
        <Header />

        <router-view />

        <Footer />

        <Backtotop />

        <LoginModal />
        <SignupModal />

    </div>
</template>
<script>
    import Header from '@comp/header/Header.vue'
    import Footer from '@comp/footer/Footer.vue'
    import Backtotop from '@comp/partials/Backtotop.vue'
    import LoginModal from '@comp/partials/LoginModal.vue'
    import SignupModal from '@comp/partials/SignupModal.vue'

    export default {
        components: {
            Header,
            Footer,
            Backtotop,
            LoginModal,
            SignupModal,
        }

    }

</script>
