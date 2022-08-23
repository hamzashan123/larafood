<template>
    <div>
        <Header />

        <HomeBanner />

        <MealsTab />

        <HomeAbout />

        <MealsTab />

    </div>
</template>

<script>
    import HomeBanner from '@comp/partials/HomeBanner.vue'
    import MealsTab from '@comp/partials/MealsTab.vue'
    import HomeAbout from '@comp/partials/HomeAbout.vue'

    export default {
        components: {
            HomeBanner,
            MealsTab,
            HomeAbout,
        }

    }

</script>


<style>

</style>
