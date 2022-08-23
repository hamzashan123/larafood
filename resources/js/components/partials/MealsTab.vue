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
import MealCard from './MealCard.vue'
export default {
    data() {
        return {
            breakfast: [
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
            lunch: [
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
            snack: [
                {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg',
                    name: 'Sambal Meal Satay',
                    price: '2'
                },
                {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg',
                    name: 'Sambal Meal Satay',
                    price: '2'
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
            dinner: [
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
                {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg',
                    name: 'Sambal Meal Satay',
                    price: '2'
                },
                {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg',
                    name: 'Sambal Meal Satay',
                    price: '2'
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
            ],
        }
    },
    components: {
        MealCard,
    }

}
</script>

<style>

</style>
