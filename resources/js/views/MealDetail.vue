<template>
    <!-- shop-details Area Start-->
    <div class="shop-details-area pd-top-100 pd-bottom-60 meal-detail">
        <Modal :title="weeklyPlanSelected  + ' lunch '" modalFor="mealDaySelector" size="xl" backdrop="static" >
            <template v-slot:modal-body>
                <section class="offer-area pd-bottom-90">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 align-self-start" v-for="(weeklyPlan, i) in weeklyPlans[weeklyPlanSelected]" :key="i">
                                <div class="single-blog-wrap">
                                    <div class="thumb">
                                        <img :src="weeklyPlan.image" alt="img" style="height: 350px; width: 100%; object-fit: cover;">
                                    </div>
                                    
                                    <div class="wrap-detail meal-details">
                                        <h6 class="mt-0 mb-0 meal-title">{{ weeklyPlan ? weeklyPlan.name : '' }}</h6>
                                        <span class="meal-features">
                                            <span class="text-dark feature">
                                                500 Cal
                                            </span>
                                            <span class="one-sep"></span>
                                            <span class="text-dark feature">
                                                Gluten Free
                                            </span>
                                            <span class="one-sep"></span>
                                            <span class="text-dark feature">
                                                3-Serve
                                            </span>
                                        </span>
                                        <p> {{ weeklyPlan.description }} </p>
                                        <router-link class="py-2 px-3 rounded-pill btn-dark btn-dark" target="_blank" :to="{ name: 'food-detail' }">View</router-link>
                                    </div>
                                </div>
                                <!-- <div class="col-md-6">
                                    
                                </div> -->
                            </div>
                        </div>
                    </div>
                </section>


            </template>

        </Modal>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="ticy-product">
                        <div class="product-thumbnail-wrapper">
                            <div class="single-thumbnail-slide">
                                <div class="slider-ite">
                                    <img class="rounded" src="https://images.squarespace-cdn.com/content/v1/5da10bdf01106247e5f4eca7/1599773377794-T9GS2EXR6D5N7DBEFORY/wXYbzlNw.jpeg" alt="item">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="shop-tabs">

                        <ul class="nav nav-pills d-flex" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> <h6 class="nav-link-title">Daily Meals</h6> </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><h6 class="nav-link-title">How it works</h6></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><h6 class="nav-link-title">Why subscribe </h6> </button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div class="weekly-plan">
                                    <div class="plan-images">
                                        <div class="plan-image rounded"
                                            :class="weeklyPlanSelected == index ? 'active' : ''"
                                            v-for="(weeklyPlan, index) in weeklyPlansComp"
                                            :key="index"
                                            @click="weeklyPlanSelected = index"
                                            data-bs-toggle="modal"
                                            data-bs-target="#mealDaySelector">
                                            <!-- <img :src="weeklyPlan.image" class="rounded " alt="img"> -->
                                            <h6 class="plan-image-day text-center text-uppercase m-0">{{ index }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                                <div class="quick-view mt-4">
                                    <!-- <h6 class="title mb-4">Quick View</h6> -->
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="">
                                                <img src="/v-assets/img/icon/3.png" alt="img">
                                                Meals are delivered every day at the chosen address and time
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="">
                                                <img src="/v-assets/img/icon/3.png" alt="img">
                                                Meals are delivered every day at the chosen address and time
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="">
                                                <img src="/v-assets/img/icon/3.png" alt="img">
                                                Meals are delivered every day at the chosen address and time
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="">
                                                <img src="/v-assets/img/icon/3.png" alt="img">
                                                Meals are delivered every day at the chosen address and time
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <div class="quick-view mt-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="single-about-wrap">
                                                <img src="/v-assets/img/icon/1.png" alt="img">
                                                Fresh foods
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-about-wrap">
                                                <img src="/v-assets/img/icon/2.png" alt="img">
                                                Fast delivery
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-about-wrap">
                                                <img src="/v-assets/img/icon/3.png" alt="img">
                                                Quality Maintain
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-about-wrap">
                                                <img src="/v-assets/img/icon/4.png" alt="img">
                                                24/7 Service


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="shop-item-details mt-0">
                        <span class=" badge bg-primary text-capitalize " > Lunch </span>
                        <h2 class="entry-title mt-0">Meal Plan 1</h2>
                        <div class="row">
                            <p class="mt-2">What's included: </p>
                            
                            <div class="meal-detail-dishes-slider style-2 mb-3">
                                <carousel :autoplay="true" :nav="false" :items="Number(2)" :margin="Number(10)" :dots="false">
                                    <div class="item" v-for="(dish, index) in weeklyPlans[weeklyPlanSelected]" :key="index">
                                        <div class="single-blog-wrap">
                                            
                                            <div class="thumb">
                                                <img class="img-responsive" :src="dish ? dish.image : ''" alt="img">
                                            </div>
                                            <div class="wrap-detail meal-details">
                                                <h6 class="mt-0 meal-title">{{ dish ? dish.name : '' }}</h6>
                                                <router-link class="py-2 px-3 rounded-pill btn-dark" :to="{ name: 'food-detail' }">View</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </carousel>
                                <!-- <div class="item" v-for="(dish, index) in weeklyPlans[weeklyPlanSelected]" :key="index">
                                    <div class="single-blog-wrap">
                                        
                                        <div class="thumb">
                                            <img class="img-responsive" :src="dish ? dish.image : ''" alt="img">
                                        </div>
                                        <div class="wrap-detail meal-details">
                                            <h6 class="mt-0 mb-0 meal-title">{{ dish ? dish.name : '' }}</h6>
                                            <router-link :to="{ name: 'food-detail' }">View</router-link>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                            <!-- <p clas s="mt-4">Here is the epitome of cultural exploration of veg and non veg on a plate. A complete meal in itself, our Indian thalis come with goodness of taste and wholesomeness together.</p> -->
                            <div class="pd-container d-flex">
                                <div class="price-container">
                                    <div class="sale-price">
                                        <h6 class="price text-muted text-decoration-line-through">$37.00</h6>
                                    </div>
                                    <div class="regular-price">
                                        <h4 class="price">$27.00</h4>
                                    </div>
                                    <div class="for-days">
                                        For {{ weeknds ? noOfDays == 5 ? noOfDays + 2  : noOfDays + 8  : noOfDays   }} days
                                    </div>
                                </div>
                                <div class="duration-container">
                                    <div class="durations">
                                        <div class="duration" @click="duration = 'weekly', noOfDays = 5" :class=" duration == 'weekly' ? 'active' : '' ">Weekly</div>
                                        <div class="duration" @click="duration = 'monthly', noOfDays = 22"  :class=" duration == 'monthly' ? 'active' : '' ">Monthly</div>
                                    </div>
                                    <div class="include-switch">
                                        <div class="">
                                            <input class="" type="checkbox" value="" v-model="weeknds" id="flexCheckDefault">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Include Weekends
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-secondary">Sibscribe Meal Plan</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <MealSlider title="Featured plans" :meals="meals.all" />
        </div>
    </div>
    <!-- shop-details Area End -->
</template>

<script>
import { mapGetters, mapActions } from "vuex"

import Modal from '@comp/partials/Modal.vue'
import MealSlider from '@comp/partials/MealSlider.vue'
import carousel from 'vue-owl-carousel'

export default {
    components: {
        Modal,
        MealSlider,
        carousel,
    },
    data() {
        return {
            weeknds: true,
            noOfDays: 5,
            duration: 'weekly',
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            weeklyPlanSelected: 'mon',
            weeklyPlans: {
                'mon': [
                    {
                        name: 'Dish 1',
                        image: 'https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1652893119/production-meal-image-6c9081ec-aecf-4eb0-980c-4843c3883727.jpg',
                        description: 'A tangle of tender linguine sauced up in our Masterful Marinara, packed with hidden cauliflower, onion, butternut squash, and carrot for extra goodness',
                    },
                    {
                        name: 'Dish 2',
                        image: 'https://www.tasteofhome.com/wp-content/uploads/2018/05/Slow-Cooker-Chocolate-Pots-De-Creme_EXPS_EDSC18_206947_C03_21_2b-3.jpg?resize=700,700',
                        description: 'Lunch on the go just got a whole lot sweeter. Tuck jars of rich chocolate custard into lunch bags for a midday treat. These desserts in a jar are fun for picnics, too. —Nick Iverson, Denver, Colorado',
                    },
                    {
                        name: 'Dish 3',
                        image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bb12037c27177184b97_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg',
                        description: 'A tangle of tender linguine sauced up in our Masterful Marinara, packed with hidden cauliflower, onion, butternut squash, and carrot for extra goodness',
                    },
                ],
                'tue': [
                    {
                        name: 'Dish ',
                        image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bb12037c27177184b97_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg',
                        description: 'A tangle of tender linguine sauced up in our Masterful Marinara, packed with hidden cauliflower, onion, butternut squash, and carrot for extra goodness',
                    },
                    {
                        name: 'Dish ',
                        image: 'https://www.tasteofhome.com/wp-content/uploads/2018/05/Slow-Cooker-Chocolate-Pots-De-Creme_EXPS_EDSC18_206947_C03_21_2b-3.jpg?resize=700,700',
                        description: 'Lunch on the go just got a whole lot sweeter. Tuck jars of rich chocolate custard into lunch bags for a midday treat. These desserts in a jar are fun for picnics, too. —Nick Iverson, Denver, Colorado',
                    },
                    {
                        name: 'Dish ',
                        image: 'https://cdn.shopify.com/s/files/1/0278/0112/4958/products/grocerapp-coca-cola-drink-can-5e9edb8239734_360x.jpg',
                        description: 'A tangle of tender linguine sauced up in our Masterful Marinara, packed with hidden cauliflower, onion, butternut squash, and carrot for extra goodness',
                    },
                ],
                'wed': [
                    {
                        name: 'Dish ',
                        image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106404a9ca1f30fe0fbb9a9_production-meal-image-50d04c03-029a-4039-ab75-8aecefbdcf43.jpeg',
                        description: 'A tangle of tender linguine sauced up in our Masterful Marinara, packed with hidden cauliflower, onion, butternut squash, and carrot for extra goodness',
                    },
                    {
                        name: 'Dish ',
                        image: 'https://www.tasteofhome.com/wp-content/uploads/2018/05/Slow-Cooker-Chocolate-Pots-De-Creme_EXPS_EDSC18_206947_C03_21_2b-3.jpg?resize=700,700',
                        description: 'Lunch on the go just got a whole lot sweeter. Tuck jars of rich chocolate custard into lunch bags for a midday treat. These desserts in a jar are fun for picnics, too. —Nick Iverson, Denver, Colorado',
                    },
                    {
                        name: 'Dish ',
                        image: 'https://cdn.shopify.com/s/files/1/0278/0112/4958/products/grocerapp-coca-cola-drink-can-5e9edb8239734_360x.jpg',
                        description: 'A tangle of tender linguine sauced up in our Masterful Marinara, packed with hidden cauliflower, onion, butternut squash, and carrot for extra goodness',
                    },
                ],
                'thu': [
                    {
                        name: 'Dish ',
                        image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61064050a510183577a6c7f7_production-meal-image-ea98e43b-5663-49f6-9c00-8f2b23225bd2.jpeg',
                        description: 'A tangle of tender linguine sauced up in our Masterful Marinara, packed with hidden cauliflower, onion, butternut squash, and carrot for extra goodness',
                    },
                    {
                        name: 'Dish ',
                        image: 'https://www.tasteofhome.com/wp-content/uploads/2018/05/Slow-Cooker-Chocolate-Pots-De-Creme_EXPS_EDSC18_206947_C03_21_2b-3.jpg?resize=700,700',
                        description: 'Lunch on the go just got a whole lot sweeter. Tuck jars of rich chocolate custard into lunch bags for a midday treat. These desserts in a jar are fun for picnics, too. —Nick Iverson, Denver, Colorado',
                    },
                    {
                        name: 'Dish ',
                        image: 'https://cdn.shopify.com/s/files/1/0278/0112/4958/products/grocerapp-coca-cola-drink-can-5e9edb8239734_360x.jpg',
                        description: 'A tangle of tender linguine sauced up in our Masterful Marinara, packed with hidden cauliflower, onion, butternut squash, and carrot for extra goodness',
                    },
                ],
                'fri': [
                    {
                        name: 'Dish ',
                        image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106404a9ca1f30fe0fbb9a9_production-meal-image-50d04c03-029a-4039-ab75-8aecefbdcf43.jpeg',
                        description: 'A tangle of tender linguine sauced up in our Masterful Marinara, packed with hidden cauliflower, onion, butternut squash, and carrot for extra goodness',
                    },
                    {
                        name: 'Dish ',
                        image: 'https://www.tasteofhome.com/wp-content/uploads/2018/05/Slow-Cooker-Chocolate-Pots-De-Creme_EXPS_EDSC18_206947_C03_21_2b-3.jpg?resize=700,700',
                        description: 'Lunch on the go just got a whole lot sweeter. Tuck jars of rich chocolate custard into lunch bags for a midday treat. These desserts in a jar are fun for picnics, too. —Nick Iverson, Denver, Colorado',
                    },
                    {
                        name: 'Dish ',
                        image: 'https://cdn.shopify.com/s/files/1/0278/0112/4958/products/grocerapp-coca-cola-drink-can-5e9edb8239734_360x.jpg',
                        description: 'A tangle of tender linguine sauced up in our Masterful Marinara, packed with hidden cauliflower, onion, butternut squash, and carrot for extra goodness',
                    },
                ],
                'sat': [
                    {
                        name: 'Dish ',
                        image: 'https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1652893119/production-meal-image-6c9081ec-aecf-4eb0-980c-4843c3883727.jpg',
                        description: 'A tangle of tender linguine sauced up in our Masterful Marinara, packed with hidden cauliflower, onion, butternut squash, and carrot for extra goodness',
                    },
                    {
                        name: 'Dish ',
                        image: 'https://www.tasteofhome.com/wp-content/uploads/2018/05/Slow-Cooker-Chocolate-Pots-De-Creme_EXPS_EDSC18_206947_C03_21_2b-3.jpg?resize=700,700',
                        description: 'Lunch on the go just got a whole lot sweeter. Tuck jars of rich chocolate custard into lunch bags for a midday treat. These desserts in a jar are fun for picnics, too. —Nick Iverson, Denver, Colorado',
                    },
                    {
                        name: 'Dish ',
                        image: 'https://cdn.shopify.com/s/files/1/0278/0112/4958/products/grocerapp-coca-cola-drink-can-5e9edb8239734_360x.jpg',
                        description: 'A tangle of tender linguine sauced up in our Masterful Marinara, packed with hidden cauliflower, onion, butternut squash, and carrot for extra goodness',
                    },
                ],
                'sun': [
                     {
                        name: 'Dish ',
                        image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bb12037c27177184b97_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg',
                        description: 'A tangle of tender linguine sauced up in our Masterful Marinara, packed with hidden cauliflower, onion, butternut squash, and carrot for extra goodness',
                    },
                    {
                        name: 'Dish ',
                        image: 'https://www.tasteofhome.com/wp-content/uploads/2018/05/Slow-Cooker-Chocolate-Pots-De-Creme_EXPS_EDSC18_206947_C03_21_2b-3.jpg?resize=700,700',
                        description: 'Lunch on the go just got a whole lot sweeter. Tuck jars of rich chocolate custard into lunch bags for a midday treat. These desserts in a jar are fun for picnics, too. —Nick Iverson, Denver, Colorado',
                    },
                    {
                        name: 'Dish ',
                        image: 'https://cdn.shopify.com/s/files/1/0278/0112/4958/products/grocerapp-coca-cola-drink-can-5e9edb8239734_360x.jpg',
                        description: 'A tangle of tender linguine sauced up in our Masterful Marinara, packed with hidden cauliflower, onion, butternut squash, and carrot for extra goodness',
                    },
                ],
            },
        }
    },
    computed: {
        ...mapGetters({ meals: 'meal/getMeals', isLoading: "meal/getIsLoading", }),

        weeklyPlansComp() {
            if( !this.weeknds ) {
                return Object.fromEntries( Object.entries(this.weeklyPlans).slice(0, 5) )
            } else {
                return this.weeklyPlans
            }
        }
    }

}
</script>

<style>

</style>
