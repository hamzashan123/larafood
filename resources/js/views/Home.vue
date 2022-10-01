<template>
    <div>
        <Header />
        <HomeBanner />

        <!-- Meals served this week -->
        <section class="intro-contact-area pd-bottom-30 this-week">
            <div class="container">
                <div class="section-title mb-4 text-center">
                    <h2 class="title">Meals served this week</h2>
                </div>
                <div class="row justify-content-center">
                    <div class="w-auto" v-for="(meal, index) in thisWeekMeals" :key="index">
                    <div class="single-blog-wrap">
                        <router-link :to="{ name: 'search' }">
                            <div class="thumb"><img :src="meal ? meal.image : ''" alt="img"></div>
                            <div class="wrap-detail meal-details">
                                <h4 class="mt-0 mb-0 meal-title">{{ meal ? meal.name : '' }}</h4>
                                
                                <div class="wrap-hover-are">
                                    <!-- <span class="text-dark">Starting from </span> -->
                                    <!-- <span class="link-btn"> ${{meal ? meal.price : '' }}</span> -->
                                </div>
                            </div>
                        </router-link>
                    </div>
                    </div>
                </div>
            </div>
        </section>

        <MealsTab></MealsTab>

        <!-- exciting meals -->
        <MealSlider title="Exciting meals we deliver " :meals="meals.all" />

        <!-- Subscribe weekly/monthly meal delivery  -->
        <section class="intro-contact-area pd-bottom-90">
            <div class="container">
                <div class="section-title mb-4 text-center">
                    <h2 class="title">Subscribe weekly/monthly meal delivery </h2>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-4 d-flex align-items-strech justify-content-center rounded-3">
                        <div class="text-center bg-white  p-3 flex-fill">
                            <img src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19dbc5f55c4206158f7_choose-your-meals%20(1).svg"
                                alt="icon">
                            <h5>#1</h5>
                            <p class="fs-5">Fresh food cooked by expert chefs.  </p>
                        </div>
                    </div>
                    <div class="col-md-4 d-flex align-items-strech justify-content-center rounded-3">
                        <div class="text-center bg-white  p-3 flex-fill">
                            <img src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b358b954d12f769ba_we-cook-deliver%20(1).svg"
                                alt="icon">
                            <h5>#2</h5>
                            <p class="fs-5">Always healthy.</p>
                        </div>
                    </div>
                    <div class="col-md-4 d-flex align-items-strech justify-content-center rounded-3">
                        <div class="text-center bg-white  p-3 flex-fill">
                            <img src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b83b282277e15a7af_eat-repeat.svg"
                                alt="icon">
                            <h5>#3</h5>
                            <p class="fs-5">Delivered free.</p>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-5">
                    <a href="/meals-plan" class="btn btn-lg btn-secondary">SUBSCRIBE</a>
                </div>
            </div>
        </section>

        <!-- How it works -->
        <section class="intro-contact-area pd-bottom-90">
            <div class="container">
                <div class="section-title mb-4 text-center">
                    <h2 class="title">How does it work?</h2>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="single-intro-contact-wrap">
                            <img src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19dbc5f55c4206158f7_choose-your-meals%20(1).svg"
                                alt="icon">
                            <h6>Step #1</h6>
                            <p class="fs-6">Choose weekly/monthly subscription plan</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-intro-contact-wrap single-intro-contact-wrap-active">
                            <img src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b358b954d12f769ba_we-cook-deliver%20(1).svg"
                                alt="icon">
                            <h6>#2</h6>
                            <p class="fs-6">Pay for your subscription .</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-intro-contact-wrap">
                            <img src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b83b282277e15a7af_eat-repeat.svg"
                                alt="icon">
                            <h6>#3</h6>
                            <p class="fs-6">Delicious food delivered to you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <HomeAbout />

        <!-- Upcoming week Meals -->
        <section class="intro-contact-area pd-bottom-60 meal-slider">
            <div class="container">
                <div class="section-title mb-4 text-center">
                    <h2 class="title">Upcoming week Meals</h2>
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

        <MealSlider title="For You" :meals="meals.all" />
        <MealSlider title="Featured" :meals="meals.all" />
        <MealSlider title="Top this Month" :meals="meals.all" />
        <MealSlider title="Best for Next Month" :meals="meals.all" />


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
