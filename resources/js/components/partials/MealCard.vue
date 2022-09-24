<template>

  <!-- <div class="col-xl-3 col-lg-4 col-md-6"> -->
        <div class="single-blog-wrap">
            <router-link :to="{ name: 'meal-detail' }">
            <div class="thumb">
                <img :src="meal ? meal.image : ''" alt="img">
                <div class="meal-image-badge " v-if="meal.type">
                    <span class="mx-1 badge bg-dark text-capitalize " v-for="(type, index) in meal.type" :key="index">{{ type }}</span>
                </div>
            </div>
            <div class="wrap-detail meal-details">
                <h6 class="mt-0 mb-0 meal-title">{{ meal ? meal.name : '' }}</h6>
                <span class="meal-features">
                    <!-- <span class="text-dark feature">
                        500 Cal
                    </span>
                    <span class="one-sep"></span>
                    <span class="text-dark feature">
                        Gluten Free
                    </span>
                    <span class="one-sep"></span>
                    <span class="text-dark feature">
                        3-Serve
                    </span> -->
                </span>
                <div class="wrap-hover-are">
                    <span class="text-dark">Starting from </span>
                    <span class="link-btn"> ${{meal ? meal.price : ''  }}</span>
                </div>
                <div v-if="meal.days" class="list-group list-group-horizontal">
                    <span class="list-group-item p-1 border-none mx-1" v-for="day in meal.days ">{{ day ? day : '' }}</span>
                </div>
            </div>
            </router-link>
        </div>
    <!-- </div> -->
</template>

<script>
export default {
    props: ['meal']

}
</script>

<style>

</style>
