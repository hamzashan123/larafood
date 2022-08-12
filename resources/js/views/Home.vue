<template>
    <div>
        <Header></Header>

        <HomeBanner />

        <ProductsTab />

        <HomeAbout />

        <ProductsTab />

    </div>
</template>

<script>
    import HomeBanner from '@comp/partials/HomeBanner.vue'
    import ProductsTab from '@comp/partials/ProductsTab.vue'
    import HomeAbout from '@comp/partials/HomeAbout.vue'

    export default {
        components: {
            HomeBanner,
            ProductsTab,
            HomeAbout,
        }

    }

</script>


<style>

</style>
