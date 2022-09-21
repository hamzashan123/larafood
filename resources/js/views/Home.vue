<template>
    <div>
        <Header />
        <HomeBanner />
        
        <MealSlider title="Top this Week" :meals="meals.all"/>
        <MealSlider title="Featured" :meals="meals.all"/>
        <MealSlider title="Best for Oct" :meals="meals.all"/>

        <HomeAbout />

        <MealSlider title="For You" :meals="meals.all"/>
        <MealSlider title="Vegs Items" :meals="meals.all"/>
        <MealSlider title="Non Veg Items" :meals="meals.all"/>

    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex"

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
        },
        computed: {
            ...mapGetters({ meals: 'meal/getMeals', isLoading: "meal/getIsLoading", })
        },

    }

</script>


<style>

</style>
