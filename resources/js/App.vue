<template>
    <div>
        <Header />

        <router-view />

        <Footer />

        <Backtotop />
        <Modal />
    </div>
</template>
<script>
    import Header from '@comp/header/Header.vue'
    import Footer from '@comp/footer/Footer.vue'
    import Backtotop from '@comp/partials/Backtotop.vue'
    import Modal from '@comp/partials/Modal.vue'

    export default {
        components: {
            Header,
            Footer,
            Backtotop,
            Modal,
        }

    }

</script>
