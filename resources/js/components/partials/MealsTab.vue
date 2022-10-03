<template>
  <!-- product Area Start-->
    <section class="product-area pd-bottom-60 pt-5 meals-tab">
        <div class="container">
            <h2 class="text-center my-5">Delivering 4 times a day</h2>
            <div class="row justify-content-center">
                <div class="col-12">
                    <ul class="product-nav  nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="pills-breakfast-tab" data-bs-toggle="pill" data-bs-target="#pills-breakfast" type="button" role="tab" aria-controls="pills-breakfast" aria-selected="true">
                            <!-- <img src="/v-assets/img/category/1.png" alt="img"> -->
                            Breakfast</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-lunch-tab" data-bs-toggle="pill" data-bs-target="#pills-lunch" type="button" role="tab" aria-controls="pills-lunch" aria-selected="false">
                            <!-- <img src="/v-assets/img/category/2.png" alt="img"> -->
                          Lunch</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-snack-tab" data-bs-toggle="pill" data-bs-target="#pills-snack" type="button" role="tab" aria-controls="pills-snack" aria-selected="false">
                            <!-- <img src="/v-assets/img/category/3.png" alt="img"> -->
                            Snack</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-dinner-tab" data-bs-toggle="pill" data-bs-target="#pills-dinner" type="button" role="tab" aria-controls="pills-dinner" aria-selected="false">
                                <!-- <img src="/v-assets/img/category/4.png" alt="img"> -->
                                Dinner</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-breakfast" role="tabpanel" aria-labelledby="pills-breakfast-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6" v-for="(meal, index) in meals.breakfast" :key="index">
                        <MealCard :meal="meal"  />
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="pills-lunch-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6" v-for="(meal, index) in meals.lunch" :key="index">
                        <MealCard :meal="meal"  />
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-snack" role="tabpanel" aria-labelledby="pills-snack-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6" v-for="(meal, index) in meals.snack" :key="index">
                        <MealCard :meal="meal"  />
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-dinner" role="tabpanel" aria-labelledby="pills-dinner-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6" v-for="(meal, index) in meals.dinner" :key="index">
                        <MealCard :meal="meal"  />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- product Area End -->
</template>

<script>

import { mapGetters, mapActions } from "vuex"
import MealCard from './MealCard.vue'

export default {
    data() {
        return {
        }
    },
    components: {
        MealCard,
    },
    computed: {
        ...mapGetters({ meals: 'meal/getMeals', isLoading: "meal/getIsLoading", })
    },
    methods: {
        ...mapActions({ loadMeals: 'meal/loadMeals' })
    },
    mounted() {
        this.loadMeals()
        console.log(this.meals);
    }


}
</script>

<style>

</style>
