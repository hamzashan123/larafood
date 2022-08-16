<template>
  <!-- bredcrumb Area Start-->
    <section class="breadcrumb-area">
        <div class="banner-bg-img"></div>
        <div class="banner-shape-1"><img src="/v-assets/img/banner/shape-1.png" alt="img"></div>
        <div class="banner-shape-2"><img src="/v-assets/img/banner/shape-2.png" alt="img"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 align-self-center">
                    <div class="banner-inner text-center">
                        <h3>{{ subtitle }}</h3>
                        <h1> {{ title }} </h1>
                        <!-- <nav aria-label="breadcrumb">
                            <ul class="breadcrumb">
                              <li class="breadcrumb-item"><a href="home.html">Home</a></li>
                              <li class="breadcrumb-item active" aria-current="page">Menu Tab</li>
                            </ul>
                        </nav> -->
                    </div>

                    <div class="widget widget_search" v-if="search">
                        <form class="search-form">
                            <div class="form-group">
                                <input type="text" placeholder="Search your itmes">
                            </div>
                            <button class="submit-btn" type="submit"><i class="ri-search-line"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- bredcrumb Area End -->
</template>

<script>
export default {
    props: ['title', 'subtitle', 'search']

}
</script>

<style>

</style>
