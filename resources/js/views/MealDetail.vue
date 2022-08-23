<template>
    <!-- shop-details Area Start-->
    <div class="shop-details-area pd-top-100 pd-bottom-60 meal-detail">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-7">
                    <div class="ticy-product">
                        <div class="product-thumbnail-wrapper">
                            <div class="single-thumbnail-slide">
                                <div class="slider-ite">
                                    <img class="rounded" :src="weeklyPlanSelected ? weeklyPlans[weeklyPlanSelected].image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg'" alt="item">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="shop-tabs">
                        <ul class="nav nav-pills" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> <h6>Upcomming Meals</h6> </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><h6>How it works</h6></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><h6>Why subscribe </h6> </button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div class="weekly-plan">
                                    <div class="plan-images">

                                        <div class="plan-image" :class="weeklyPlanSelected == index ? 'active' : ''" v-for="(weeklyPlan, index) in weeklyPlans" :key="index" @click="weeklyPlanSelected = index">
                                            <img :src="weeklyPlan.image" class="rounded " alt="img">
                                            <h6 class="plan-image-day text-center text-uppercase">{{ weeklyPlan.day }}</h6>
                                        </div>

                                    </div>
                                    <div class="plan-content">
                                        <h6 class="plan-content-day text-uppercase">{{ weeklyPlans[weeklyPlanSelected].day }}</h6>
                                        <h5>{{ weeklyPlans[weeklyPlanSelected].mealTitle }}</h5>
                                        <p>{{ weeklyPlans[weeklyPlanSelected].mealDescription }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                                <div class="quick-view mt-4">
                                    <!-- <h6 class="title mb-4">Quick View</h6> -->
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="">
                                                <img src="/v-assets/img/icon/3.png" alt="img">
                                                Meals are delivered every day at the chosen address and time
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="">
                                                <img src="/v-assets/img/icon/3.png" alt="img">
                                                Meals are delivered every day at the chosen address and time
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="">
                                                <img src="/v-assets/img/icon/3.png" alt="img">
                                                Meals are delivered every day at the chosen address and time
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="">
                                                <img src="/v-assets/img/icon/3.png" alt="img">
                                                Meals are delivered every day at the chosen address and time
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <div class="quick-view mt-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="single-about-wrap">
                                                <img src="/v-assets/img/icon/1.png" alt="img">
                                                Fresh foods
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-about-wrap">
                                                <img src="/v-assets/img/icon/2.png" alt="img">
                                                Fast delivery
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-about-wrap">
                                                <img src="/v-assets/img/icon/3.png" alt="img">
                                                Quality Maintain
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-about-wrap">
                                                <img src="/v-assets/img/icon/4.png" alt="img">
                                                24/7 Service


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="shop-item-details">
                        <h2 class="entry-title">Sambal Satay Gado-gado</h2>
                        <div class="row">
                            <p clas s="mt-4">Here is the epitome of cultural exploration of veg and non veg on a plate. A complete meal in itself, our Indian thalis come with goodness of taste and wholesomeness together.</p>
                            <div class="pd-container d-flex">
                                <div class="price-container">
                                    <div class="sale-price">
                                        <h6 class="price text-muted text-decoration-line-through">$37.00</h6>
                                    </div>
                                    <div class="regular-price">
                                        <h4 class="price">$27.00</h4>
                                    </div>
                                    <div class="for-days">
                                        For 5 days
                                    </div>
                                </div>
                                <div class="duration-container">
                                    <div class="durations">
                                        <div class="duration active">Weekly</div>
                                        <div class="duration">Monthly</div>
                                    </div>
                                    <div class="include-switch">
                                        <div class="">
                                            <input class="" type="checkbox" value="" id="flexCheckDefault">
                                            <label class="form-check-label" for="flexCheckDefault">
                                               Include Weekends
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-secondary">Sibscribe Meal Plan</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- shop-details Area End -->
</template>

<script>
export default {
    data() {
        return {
            weeklyPlanSelected: 0,
            weeklyPlans: {
                0: {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg',
                    day: 'Mon',
                    mealTitle: 'Kadhai Paneer, Soya Masala Sabzi',
                    mealDescription: 'A flavourful roti thali! Enjoy scoops of soft whole wheat rotis with flavourful kadhai paneer and chewy tasty soya masala sabzi. Served with salad and pickle. Allergen information: Gluten, dairy, nuts, seeds, soy. *Methi roti / Plain roti.'
                },
                1: {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg',
                    day: 'Tue',
                    mealTitle: 'Soya Masala Sabzi, Kadhai Paneer, ',
                    mealDescription: 'A flavourful roti thali! Enjoy scoops of soft whole whMethi roti / Plain roti.'
                },
                3: {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b89b735739065897a4f_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg',
                    day: 'Wed',
                    mealTitle: 'Kadhai Paneer, Soya Masala Sabzi',
                    mealDescription: 'A flavourful roti thali! Enjoy scoops of soft whole wheat rotis with flavourful kadhai paneer and chewy tasty soya masala sabzi. Served with salad and pickle. Allergen information: Gluten, dairy, nuts, seeds, soy. *Methi roti / Plain roti.'
                },
                4: {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b94f03e50f2e0d2b7f3_production-meal-image-bc1b24c8-f62a-4756-a40e-173a8b67a590.jpeg',
                    day: 'Thu',
                    mealTitle: 'Soya Masala Sabzi, Kadhai Paneer, ',
                    mealDescription: 'A flavourful roti thali! Enjoy scoops of soft whole wheat rotis with flavourful kadhai paneer and chewy tasty soya masala sabzi. Served with salad and pickle. Allergen information: Gluten, dairy, nuts, seeds, soy. *Methi roti / Plain roti.'
                },
                5: {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b9a85b43c3383a0a3b3_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg',
                    day: 'Fri',
                    mealTitle: 'Kadhai Paneer, Soya Masala Sabzi',
                    mealDescription: 'A flavourful roti thali! Enjoy scoops o/ Plain roti.'
                },
                6: {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640046931cb5d54bd5472_production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e.jpeg',
                    day: 'Sat',
                    mealTitle: 'Soya Masala Sabzi, Kadhai Paneer, ',
                    mealDescription: 'A flavourful roti thali! er and chewy tasty soya masala sabzi. Served with salad and pickle. Allergen information: Gluten, dairy, nuts, seeds, soy. *Methi roti / Plain roti.'
                },
                7: {
                    image: 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bb12037c27177184b97_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg',
                    day: 'Sun',
                    mealTitle: 'Soya Masala Sabzi, Kadhai Paneer, ',
                    mealDescription: 'A flavourful roti thali! Enjoy scoops of soft whole wheat rotis with flavourful kadhai paneer and chewy tasty soya masala sabzi. Served with salad and pickle. Allergen information: G roti / Plain roti.'
                }

            }
        }
    }

}
</script>

<style>

</style>
