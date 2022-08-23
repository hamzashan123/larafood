<template>
    <div>
        <Header />

        <HomeBanner />

        <MealsTab />


        <HomeAbout />
        <MealSlider title="For You"/>
        <MealSlider title="Vegs Items"/>
        <MealSlider title="Non Veg Items"/>


    </div>
</template>

<script>
    import HomeBanner from '@comp/partials/HomeBanner.vue'
    import MealsTab from '@comp/partials/MealsTab.vue'
    import HomeAbout from '@comp/partials/HomeAbout.vue'
    import MealSlider from '@comp/partials/MealSlider.vue'

    export default {
        components: {
            HomeBanner,
            MealsTab,
            HomeAbout,
            MealSlider,
        }

    }

</script>


<style>

</style>
