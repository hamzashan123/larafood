<template>
  <!-- meal Area Start-->
    <section class="related-product-area pd-top-30">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="section-title mb-0">
                        <h2 class="title">{{ title }}</h2>
                    </div>
                    <div class="meal-slider style-2">
                        <carousel :autoplay="true" :nav="false" :items="Number(4)" :margin="Number(10)" :dots="false">
                            <div class="item" v-for="(meal, index) in foryou" :key="index">
                                <div class="single-blog-wrap">
                                    <router-link :to="{ name: 'meal-detail' }">
                                    <div class="thumb">
                                        <img :src="meal ? meal.image : ''" alt="img">
                                    </div>
                                    <div class="wrap-detail meal-details">
                                        <h6 class="mt-0 mb-0 meal-title">{{ meal ? meal.name : '' }}</h6>
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
                                        <div class="wrap-hover-are">
                                            <span class="text-dark">Starting from </span>
                                            <span class="link-btn"> ${{meal ? meal.price : ''  }}</span>

                                        </div>
                                    </div>
                                    </router-link>
                                </div>
                            </div>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- meal Area End -->
</template>

<script>
    import carousel from 'vue-owl-carousel'

export default {
    props: ['title'],
    components: {
        carousel,
    },
    data() {
        return {
            foryou: [
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
        }
    }

}
</script>

<style>

</style>
