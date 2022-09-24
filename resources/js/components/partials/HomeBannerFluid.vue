<template>
  <!-- Banner Area Start-->
    <section class="home banner-area banner-area banner-top-spacing mb-5">
        <!-- <div class="banner-thumb">
            <img src="/v-assets/img//home-2/banner/1.png" alt="img">
        </div> -->
        <div class="banner-bg">
            <div class="banner-bg-img"></div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-8 align-self-center"></div>
                <div class="col-lg-4 col-md-8 align-self-center">
                    <div class="banner-inner pt-5">
                        <h3>Balanced meals for busy lives.</h3>
                        <h1>Delivered to you fresh, not frozen.</h1>
                        <!-- <p>You need not only Just Food Stalls with Persons but also specialized equipment  start the Fast Food</p> -->
                        <router-link class="btn btn-secondary" :to="{ name: 'meals-plan' }">GET IT NOW</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Banner Area End -->
</template>

<script>
export default {

}
</script>

<style>

</style>
