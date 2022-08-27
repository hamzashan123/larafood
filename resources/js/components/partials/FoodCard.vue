<template>
<div class="col-xl-3 col-lg-4 col-md-6">
        <div class="single-blog-wrap">
            <router-link :to="{ name: 'meal-detail' }">
            <div class="thumb">
                <img :src="food ? food.image : ''" alt="img">
            </div>
            <div class="wrap-detail meal-details style-2">
                <h6 class="mt-0 mb-0 meal-title">{{ food ? food.name : '' }}</h6>
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
                <div class="wrap-hover-are text-end">
                    <button type="submit" class="btn btn-food-modal btn-secondary"  @click="$emit('addtocart', food)" > + </button>
                </div>
            </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['food']

}
</script>

<style>

</style>
