<template>
    <div>
        <Header />
        <HomeBanner />

        <section class="intro-contact-area pd-bottom-90">
            <div class="container">
                <div class="section-title mb-4 text-center">
                    <h2 class="title">How it works</h2>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="single-intro-contact-wrap single-intro-contact-wrap-active">
                            <img src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19dbc5f55c4206158f7_choose-your-meals%20(1).svg"
                                alt="icon">
                            <h5>Choose Your Meals</h5>
                            <p>Rotating menu of 50+ balanced dishes.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="single-intro-contact-wrap">
                            <img src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b358b954d12f769ba_we-cook-deliver%20(1).svg"
                                alt="icon">
                            <h5>We Cook & Deliver</h5>
                            <p>Fully-cooked meals sent fresh, not frozen.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="single-intro-contact-wrap">
                            <img src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b53e85f79fe3374c5_chill-reheat.svg"
                                alt="icon">
                            <h5>Chill & Reheat</h5>
                            <p>Refrigerate meals & reheat in 3 minutes.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="single-intro-contact-wrap">
                            <img src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b83b282277e15a7af_eat-repeat.svg"
                                alt="icon">
                            <h5>Eat & Repeat</h5>
                            <p>Change meals, skip a week, or cancel any time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section class="intro-contact-area pd-bottom-60 meal-slider">
            <div class="container">
                <div class="section-title mb-4 text-center">
                    <h2 class="title">This week meals</h2>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-3 col-lg-4 col-md-6" v-for="(meal, index) in thisWeekMeals" :key="index">
                    <div class="single-blog-wrap">
                        <router-link :to="{ name: 'meal-detail' }">
                            <div class="thumb"><img :src="meal ? meal.image : ''" alt="img"></div>
                            <div class="wrap-detail meal-details">
                                <h4 class="mt-0 mb-0 meal-title">{{ meal ? meal.name : '' }}</h4>
                                
                                <div class="wrap-hover-are">
                                    <span class="text-dark">Starting from </span>
                                    <span class="link-btn"> ${{meal ? meal.price : '' }}</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    </div>
                </div>
            </div>
        </section>

        <MealSlider title="Featured" :meals="meals.all" />
        <MealSlider title="Top this Month" :meals="meals.all" />
        <MealSlider title="Best for Next Month" :meals="meals.all" />

        <HomeAbout />

        <MealSlider title="For You" :meals="meals.all" />
        <MealSlider title="Vegs Items" :meals="meals.all" />
        <MealSlider title="Non Veg Items" :meals="meals.all" />

    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

import HomeBanner from '@comp/partials/HomeBannerFluid.vue'
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
        ...mapGetters({ meals: 'meal/getMeals', isLoading: "meal/getIsLoading", thisWeekMeals: 'meal/getThisWeekMeals' })
    },

}

</script>


<style>

</style>
