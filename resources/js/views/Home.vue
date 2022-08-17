<template>
    <div>
        <Header />

        <HomeBanner />

        <FoodsTab />

        <HomeAbout />

        <FoodsTab />

    </div>
</template>

<script>
    import HomeBanner from '@comp/partials/HomeBanner.vue'
    import FoodsTab from '@comp/partials/FoodsTab.vue'
    import HomeAbout from '@comp/partials/HomeAbout.vue'

    export default {
        components: {
            HomeBanner,
            FoodsTab,
            HomeAbout,
        }

    }

</script>


<style>

</style>
