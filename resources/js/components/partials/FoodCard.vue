<template>
  <div class="single-item-wrap ">
    <div class="thumb">
        <img class="rounded" src="http://cdn.cnn.com/cnnnext/dam/assets/160222142959-indonesian-food-indomie-9444-1900px.jpg" alt="img">
        <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
    </div>
    <div class="wrap-details">
        <h5><router-link :to="{ name: 'food-detail'}"> Double Burger </router-link></h5>
        <div class="wrap-footer">
            <div class="rating">
                4.9
                <span class="rating-inner">
                    <i class="ri-star-fill ps-0"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-half-line pe-0"></i>
                </span>
                (200)
            </div>
        </div>
        <div class="btn-area">
            <h6 class="price">$17.00</h6>
            <a class="btn btn-secondary" href="single-product.html">Add <i class="ri-add-line"></i></a>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
