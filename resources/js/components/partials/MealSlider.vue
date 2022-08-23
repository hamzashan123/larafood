<template>
  <!-- meal Area Start-->
    <section class="related-product-area pd-top-30">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="section-title mb-0">
                        <h2 class="title">{{ title }}</h2>
                    </div>
                    <div class="meal-slider owl-carousel style-2">
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
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- meal Area End -->
</template>

<script>
export default {
    props: ['title'],
    data() {
        return {
            foryou: [
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
    }

}
</script>

<style>

</style>
