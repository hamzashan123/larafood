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
                            <div class="item" v-for="(meal, index) in meals" :key="index"> 
                                <MealCard class="item" :meal="meal"/>
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
    import MealCard from './MealCard.vue'
    

export default {
    props: ['title', 'meals'],
    components: {
        carousel,
        MealCard
    },

}
</script>

<style>

</style>
