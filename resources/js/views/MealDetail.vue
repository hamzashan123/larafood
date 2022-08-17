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
                                    <img class="rounded" :src="weeklyPlanSelected ? weeklyPlans[weeklyPlanSelected].image : 'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1622207103/Indonesian-Food-Main/Indonesian-Food-Main.jpg'" alt="item">
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
                    image: 'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1622207103/Indonesian-Food-Main/Indonesian-Food-Main.jpg',
                    day: 'Mon',
                    mealTitle: 'Kadhai Paneer, Soya Masala Sabzi',
                    mealDescription: 'A flavourful roti thali! Enjoy scoops of soft whole wheat rotis with flavourful kadhai paneer and chewy tasty soya masala sabzi. Served with salad and pickle. Allergen information: Gluten, dairy, nuts, seeds, soy. *Methi roti / Plain roti.'
                },
                1: {
                    image: 'https://nomadparadise.com/wp-content/uploads/2020/07/indonesian-food-007-1024x640.jpg.webp',
                    day: 'Tue',
                    mealTitle: 'Soya Masala Sabzi, Kadhai Paneer, ',
                    mealDescription: 'A flavourful roti thali! Enjoy scoops of soft whole whMethi roti / Plain roti.'
                },
                3: {
                    image: 'https://nomadparadise.com/wp-content/uploads/2020/07/indonesian-food-004-1024x640.jpg',
                    day: 'Wed',
                    mealTitle: 'Kadhai Paneer, Soya Masala Sabzi',
                    mealDescription: 'A flavourful roti thali! Enjoy scoops of soft whole wheat rotis with flavourful kadhai paneer and chewy tasty soya masala sabzi. Served with salad and pickle. Allergen information: Gluten, dairy, nuts, seeds, soy. *Methi roti / Plain roti.'
                },
                4: {
                    image: 'https://quillstorage.blob.core.windows.net/tiqon-resource/business/9CB41982-6744-4855-AA1B-5B554EB792E6/article/2AEB71AB-35C6-49A6-A2E8-F9D68AD1DAB0/4AF83576-FC02-4FAA-909F-C110BEB77099.jpg',
                    day: 'Thu',
                    mealTitle: 'Soya Masala Sabzi, Kadhai Paneer, ',
                    mealDescription: 'A flavourful roti thali! Enjoy scoops of soft whole wheat rotis with flavourful kadhai paneer and chewy tasty soya masala sabzi. Served with salad and pickle. Allergen information: Gluten, dairy, nuts, seeds, soy. *Methi roti / Plain roti.'
                },
                5: {
                    image: 'https://media.istockphoto.com/photos/ketupat-lebaran-the-traditional-celebratory-dish-of-rice-cake-soup-picture-id1022878300?k=20&m=1022878300&s=612x612&w=0&h=WgCIR1cOdne0LKXG6KUuu09WvhQuFbFELv_yJBwQvVc=',
                    day: 'Fri',
                    mealTitle: 'Kadhai Paneer, Soya Masala Sabzi',
                    mealDescription: 'A flavourful roti thali! Enjoy scoops o/ Plain roti.'
                },
                6: {
                    image: 'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1622207103/Indonesian-Food-Main/Indonesian-Food-Main.jpg',
                    day: 'Sat',
                    mealTitle: 'Soya Masala Sabzi, Kadhai Paneer, ',
                    mealDescription: 'A flavourful roti thali! er and chewy tasty soya masala sabzi. Served with salad and pickle. Allergen information: Gluten, dairy, nuts, seeds, soy. *Methi roti / Plain roti.'
                },
                7: {
                    image: 'http://cdn.cnn.com/cnnnext/dam/assets/160222142607-indonesian-food-bebek-goreng-6558-1900px.jpg',
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
