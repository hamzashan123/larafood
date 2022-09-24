<template>
    <div>
        <SubpageBanner title="Search" subtitle="Best Meals to search!" />

        <div class="container mt-4 mb-4">
            <!-- <div class="row my-4">
                <h6>Filter:</h6>
                <div class="col-sm-3 pb-2">
                    <select class="single-select ">
                        <option>Meal Type</option>
                        <option value="asc">Lunch</option>
                        <option value="pop">Breakfast</option>
                        <option value="desc">Snacks</option>
                        <option value="asc">Dinner</option>
                    </select>
                </div>
    
                <div class="col-sm-3 pb-2">
                    <select class="single-select ">
                        <option>Days</option>
                        <option value="asc">Monday</option>
                        <option value="pop">Tuesday</option>
                        <option value="desc">Wednesday</option>
                        <option value="asc">Thusrday</option>
                        <option value="asc">Friday</option>
                    </select>
                </div>
    
                <div class="col-sm-3 pb-2">
                    <select class="single-select ">
                        <option>Meal Type</option>
                        <option value="asc">Lunch</option>
                        <option value="pop">Breakfast</option>
                        <option value="desc">Snacks</option>
                        <option value="asc">Dinner</option>
                    </select>
                </div>
            </div> -->

            <div class="row mt-4">
                <div class="col-lg-4">
                    <div class="sidebar-area">
                        <div class="widget widget_search mb-0">
                            <form class="search-form">
                                <div class="form-group">
                                    <input type="text" placeholder="Search meals, plans, dishes, days">
                                </div>
                                <button class="submit-btn" type="submit"><i class="ri-search-line"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="row position-relative">
                        <div class="col-sm-6 align-self-center pb-2">
                            <p class="mb-0">Showing 1–8 of 12 results</p>
                        </div>
                        <div class="col-sm-6 align-self-center pb-2 d-flex justify-content-end align-items-center">

                            <select class="single-select mr-2">
                                <option>Meal Type</option>
                                <option value="asc">Lunch</option>
                                <option value="desc">Breakfast</option>
                                <option value="desc">Snack</option>
                                <option value="desc">Dinner</option>
                            </select>

                            <button class="border-none" @click="showFilter = !showFilter">
                                <img src="/v-assets/img/icon/menu.svg" width="35" alt="">
                            </button>


                        </div>
                        <!-- Filter div -->
                        <div class='filter-popup' v-if="showFilter">
                            <h4>Show Only</h4>
                            <hr>
                            <div class="my-2">
                                <p class="fw-bold">Sort By</p>
                                <div class="form">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="sortBy" id="most-popular"
                                            value="option1">
                                        <label class="form-check-label ml-2" for="most-popular">Most Popular</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="sortBy" id="newest"
                                            value="option2">
                                        <label class="form-check-label ml-2" for="newest">Newst</label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="my-2">
                                <p class="fw-bold">Dietary preferences</p>
                                <div class="form">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" name="Diary" id="Diary"
                                            value="option1">
                                        <label class="form-check-label ml-2" for="Diary">Diary Free</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" name="egg" id="egg"
                                            value="option2">
                                        <label class="form-check-label ml-2" for="egg">Egg Free</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" name="gluten" id="gluten"
                                            value="option1">
                                        <label class="form-check-label ml-2" for="gluten">gluten Free</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" name="Nut" id="Nut"
                                            value="option2">
                                        <label class="form-check-label ml-2" for="Nut">Nut Free</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" name="Pescatarian" id="Pescatarian"
                                            value="option1">
                                        <label class="form-check-label ml-2" for="Pescatarian">Pescatarian</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" name="Vegan" id="Vegan"
                                            value="option2">
                                        <label class="form-check-label ml-2" for="Vegan">Vegan</label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="my-2">
                                <p class="fw-bold">Search by tags</p>
                                <div class="form">
                                    <div class="form-check-inline">
                                        <input type="checkbox" class="btn-check" v-model="avacado" id="btn-check-Avacado" autocomplete="off">
                                        <label class="border rounded px-2 py-1 " :class="avacado ? 'bg-success text-white' : ''" for="btn-check-Avacado"> Avacado  <span class="text-danger" v-if="avacado">x</span> </label>
                                    </div>

                                    <div class="form-check-inline">
                                        <input type="checkbox" class="btn-check" v-model="beans" id="btn-check-beans" autocomplete="off">
                                        <label class="border rounded px-2 py-1 " :class="beans ? 'bg-success text-white' : ''" for="btn-check-beans"> Beans  <span class="text-danger" v-if="beans">x</span> </label>
                                    </div>

                                    <div class="form-check-inline">
                                        <input type="checkbox" class="btn-check" v-model="beef" id="btn-check-beef" autocomplete="off">
                                        <label class="border rounded px-2 py-1 " :class="beef ? 'bg-success text-white' : ''" for="btn-check-beef"> Beef  <span class="text-danger" v-if="beef">x</span> </label>
                                    </div>

                                    <div class="form-check-inline">
                                        <input type="checkbox" class="btn-check" v-model="bread" id="btn-check-bread" autocomplete="off">
                                        <label class="border rounded px-2 py-1 " :class="bread ? 'bg-success text-white' : ''" for="btn-check-bread"> bread  <span class="text-danger" v-if="bread">x</span> </label>
                                    </div>  

                                    <div class="form-check-inline">
                                        <input type="checkbox" class="btn-check" v-model="cheese" id="btn-check-cheese" autocomplete="off">
                                        <label class="border rounded px-2 py-1 " :class="cheese ? 'bg-success text-white' : ''" for="btn-check-cheese"> Cheese  <span class="text-danger" v-if="cheese">x</span> </label>
                                    </div>  

                                    <div class="form-check-inline">
                                        <input type="checkbox" class="btn-check" v-model="chicken" id="btn-check-chicken" autocomplete="off">
                                        <label class="border rounded px-2 py-1 " :class="chicken ? 'bg-success text-white' : ''" for="btn-check-chicken"> Chicken  <span class="text-danger" v-if="chicken">x</span> </label>
                                    </div>  
                                    
                                </div>
                            </div>

                            <button class="btn btn-secondary">Apply</button>

                        </div>
                        <!-- filter div end -->

                    </div>


                </div>
            </div>
            <hr>
        </div>

        <div class="container mt-4 mb-4 meals-tab">
            <div class="row justify-content-center">
                <div class="col-xl-3 col-lg-4 col-md-6" v-for="(meal, index) in meals.all" :key="index">
                    <MealCard :meal="meal" />
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex"

import SubpageBanner from '@comp/partials/SubpageBanner.vue'
import FoodsTab from '@comp/partials/FoodsTab.vue'
import MealCard from '@comp/partials/MealCard.vue'

export default {
    components: {
        SubpageBanner,
        FoodsTab,
        MealCard,
    }, 
    data() {
        return {
            avacado: false,
            beans: false,
            beef: false,
            bread: false,
            cheese: false,
            chicken: false,
            showFilter: false,
            foods: [
                {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg',
                    name: 'Steak Peppercorn',
                    price: 2
                },
                {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg',
                    name: 'Homestyle Chicken',
                    price: 5
                },
                {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b89b735739065897a4f_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg',
                    name: 'Cauliflower Shell Beef Bolognese',
                    price: 3
                },
                {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b9a85b43c3383a0a3b3_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg',
                    name: 'Zingy Buffalo Chicken',
                    price: 3.33
                },
                {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b94f03e50f2e0d2b7f3_production-meal-image-bc1b24c8-f62a-4756-a40e-173a8b67a590.jpeg',
                    name: 'Golden Oven-Fried Chicken & Mash',
                    price: 2
                },
                {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640046931cb5d54bd5472_production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e.jpeg',
                    name: 'Protein-Packed Chicken Parm',
                    price: 2.5
                },
                {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bb12037c27177184b97_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg',
                    name: 'Chicken Tikka Masala',
                    price: 5
                },
                {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106408537852f1be32d5466_production-meal-image-86a5a9df-909d-4034-b6fa-6b48e5d110cf.jpeg',
                    name: 'Baked Turkey Meatballs & Zoodles',
                    price: 4.5
                },
                {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg',
                    name: 'Homestyle Chicken',
                    price: 5
                },
                {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b89b735739065897a4f_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg',
                    name: 'Cauliflower Shell Beef Bolognese',
                    price: 3
                },
                {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg',
                    name: 'Steak Peppercorn',
                    price: 2
                },
                {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg',
                    name: 'Homestyle Chicken',
                    price: 5
                },
            ],
        }
    },
    computed: {
        ...mapGetters({ meals: 'meal/getMeals', isLoading: "meal/getIsLoading", })
    },
    methods: {
        ...mapActions({ searched: 'meal/searchedMeals' })
    },
    mounted() {
        // this.searched( this.$route.query.q )
    },

}
</script>

<style>

</style>
