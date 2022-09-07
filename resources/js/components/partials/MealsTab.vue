<template>
  <!-- product Area Start-->
    <section class="product-area pd-bottom-90 pt-5 meals-tab">
        <div class="container">
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
                        <MealCard :meal="meal"  v-for="(meal, index) in breakfast" :key="index"/>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="pills-lunch-tab">
                    <div class="row justify-content-center">
                        <MealCard :meal="meal"  v-for="(meal, index) in lunch" :key="index"/>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-snack" role="tabpanel" aria-labelledby="pills-snack-tab">
                    <div class="row justify-content-center">
                        <MealCard :meal="meal"  v-for="(meal, index) in snack" :key="index"/>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-dinner" role="tabpanel" aria-labelledby="pills-dinner-tab">
                    <div class="row justify-content-center">
                        <MealCard :meal="meal"  v-for="(meal, index) in snack" :key="index"/>
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
            breakfast: [
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_03.jpg',
                    name: 'Meal Plan 1',
                    type: "breakfast",
                    price: 2
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_04.jpg',
                    name: 'Meal Plan 6',
                    type: "breakfast",
                    price: 5
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_01.jpg',
                    name: 'Meal Plan 2',
                    type: "breakfast",
                    price: 3
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/benefit_01_beragam_pilihan.jpg',
                    name: 'Meal Plan 7',
                    type: "breakfast",
                    price: 3.33
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/benefit_02_mix_n_match.jpg',
                    name: 'Meal Plan 8',
                    type: "breakfast",
                    price: 2
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_02.jpg',
                    name: 'Meal Plan 3',
                    type: "breakfast",
                    price: 2.5
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_04.jpg',
                    name: 'Meal Plan 4',
                    type: "breakfast",
                    price: 5
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/benefit_04.jpg',
                    name: 'Meal Plan 5',
                    type: "breakfast",
                    price: 4.5
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_04.jpg',
                    name: 'Meal Plan 6',
                    type: "breakfast",
                    price: 5
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_01.jpg',
                    name: 'Meal Plan 2',
                    type: "breakfast",
                    price: 3
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_03.jpg',
                    name: 'Meal Plan 1',
                    type: "breakfast",
                    price: 2
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_04.jpg',
                    name: 'Meal Plan 6',
                    type: "breakfast",
                    price: 5
                },
            ],
            lunch: [
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_02.jpg',
                    name: 'Meal Plan 3',
                    type: "lunch",
                    price: 2.5
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_04.jpg',
                    name: 'Meal Plan 4',
                    type: "lunch",
                    price: 5
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_03.jpg',
                    name: 'Meal Plan 1',
                    type: "lunch",
                    price: 2
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_04.jpg',
                    name: 'Meal Plan 6',
                    type: "lunch",
                    price: 5
                },
            ],
            snack: [
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_03.jpg',
                    name: 'Sambal Meal Satay',
                    type: "snack",
                    price: '2'
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_03.jpg',
                    name: 'Sambal Meal Satay',
                    type: "snack",
                    price: '2'
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_01.jpg',
                    name: 'Meal Plan 2',
                    type: "snack",
                    price: 3
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_03.jpg',
                    name: 'Meal Plan 1',
                    type: "snack",
                    price: 2
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_02.jpg',
                    name: 'Meal Plan 3',
                    type: "snack",
                    price: 2.5
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_04.jpg',
                    name: 'Meal Plan 4',
                    type: "snack",
                    price: 5
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_03.jpg',
                    name: 'Meal Plan 1',
                    type: "snack",
                    price: 2
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_04.jpg',
                    name: 'Meal Plan 6',
                    type: "snack",
                    price: 5
                },
            ],
            dinner: [
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_04.jpg',
                    name: 'Meal Plan 6',
                    type: "dinner",
                    price: 5
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_01.jpg',
                    name: 'Meal Plan 2',
                    type: "dinner",
                    price: 3
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_03.jpg',
                    name: 'Meal Plan 1',
                    type: "dinner",
                    price: 2
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_04.jpg',
                    name: 'Meal Plan 6',
                    type: "dinner",
                    price: 5
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_03.jpg',
                    name: 'Sambal Meal Satay',
                    type: "dinner",
                    price: '2'
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_03.jpg',
                    name: 'Sambal Meal Satay',
                    type: "dinner",
                    price: '2'
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_01.jpg',
                    name: 'Meal Plan 2',
                    type: "dinner",
                    price: 3
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_03.jpg',
                    name: 'Meal Plan 1',
                    type: "dinner",
                    price: 2
                },
            ],
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
    }


}
</script>

<style>

</style>
