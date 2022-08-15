<template>
  <!-- product Area Start-->
    <section class="product-area pd-bottom-90 pt-5 meals-tab">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <ul class="product-nav  nav nav-pills" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="pills-ramen-tab" data-bs-toggle="pill" data-bs-target="#pills-ramen" type="button" role="tab" aria-controls="pills-ramen" aria-selected="true"><img src="/v-assets/img/category/1.png" alt="img">Breakfast</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-pizza-tab" data-bs-toggle="pill" data-bs-target="#pills-pizza" type="button" role="tab" aria-controls="pills-pizza" aria-selected="false"><img src="/v-assets/img/category/2.png" alt="img">Lunch</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-burger-tab" data-bs-toggle="pill" data-bs-target="#pills-burger" type="button" role="tab" aria-controls="pills-burger" aria-selected="false"><img src="/v-assets/img/category/3.png" alt="img">Snack</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-french-fry-tab" data-bs-toggle="pill" data-bs-target="#pills-french-fry" type="button" role="tab" aria-controls="pills-french-fry" aria-selected="false"><img src="/v-assets/img/category/4.png" alt="img">Dinner</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-ramen" role="tabpanel" aria-labelledby="pills-ramen-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="http://cdn.cnn.com/cnnnext/dam/assets/160222142959-indonesian-food-indomie-9444-1900px.jpg" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://images.squarespace-cdn.com/content/v1/56a1acf7d82d5ee027b340cb/1483932045749-9ZVRP3NY5N601HUEKRA6/image-asset.jpeg?format=1000w" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://nomadparadise.com/wp-content/uploads/2020/07/indonesian-food-007-1024x640.jpg.webp" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://i0.wp.com/cms.babbel.news/wp-content/uploads/2019/05/IndonesianDinner_Header.png" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://static.toiimg.com/photo/65561565/Main.jpg?width=748&resize=4" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://www.efjakarta.com/assets/uploaded/Indonesian%20Food%202.jpg" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://quillstorage.blob.core.windows.net/tiqon-resource/business/9CB41982-6744-4855-AA1B-5B554EB792E6/article/2AEB71AB-35C6-49A6-A2E8-F9D68AD1DAB0/4AF83576-FC02-4FAA-909F-C110BEB77099.jpg" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://nomadparadise.com/wp-content/uploads/2020/07/indonesian-food-004-1024x640.jpg" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"> <router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-pizza" role="tabpanel" aria-labelledby="pills-pizza-tab">
                    <div class="row justify-content-center">
                        <div class="col-lg-3 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="http://cdn.cnn.com/cnnnext/dam/assets/160222142607-indonesian-food-bebek-goreng-6558-1900px.jpg" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://cdn.wallpapersafari.com/38/60/fI5noF.jpg" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://media.istockphoto.com/photos/ketupat-lebaran-the-traditional-celebratory-dish-of-rice-cake-soup-picture-id1022878300?k=20&m=1022878300&s=612x612&w=0&h=WgCIR1cOdne0LKXG6KUuu09WvhQuFbFELv_yJBwQvVc=" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://media.istockphoto.com/photos/ketupat-lebaran-the-traditional-celebratory-dish-of-rice-cake-soup-picture-id1022878300?k=20&m=1022878300&s=612x612&w=0&h=WgCIR1cOdne0LKXG6KUuu09WvhQuFbFELv_yJBwQvVc=" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-burger" role="tabpanel" aria-labelledby="pills-burger-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="http://cdn.cnn.com/cnnnext/dam/assets/160222142959-indonesian-food-indomie-9444-1900px.jpg" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://images.squarespace-cdn.com/content/v1/56a1acf7d82d5ee027b340cb/1483932045749-9ZVRP3NY5N601HUEKRA6/image-asset.jpeg?format=1000w" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://nomadparadise.com/wp-content/uploads/2020/07/indonesian-food-007-1024x640.jpg.webp" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://i0.wp.com/cms.babbel.news/wp-content/uploads/2019/05/IndonesianDinner_Header.png" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://static.toiimg.com/photo/65561565/Main.jpg?width=748&resize=4" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://www.efjakarta.com/assets/uploaded/Indonesian%20Food%202.jpg" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-french-fry" role="tabpanel" aria-labelledby="pills-french-fry-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://themefie.com/html/foodka/assets/img/blog/1.png" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://themefie.com/html/foodka/assets/img/blog/1.png" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://themefie.com/html/foodka/assets/img/blog/1.png" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-blog-wrap">
                                <div class="thumb">
                                    <img src="https://themefie.com/html/foodka/assets/img/blog/1.png" alt="img">
                                </div>
                                <div class="wrap-details">
                                    <span class="cat">
                                        <span class="date">
                                            <i class="ri-calendar-todo-fill"></i>Bookings
                                        </span>
                                        <a href="#" class="tag me-0">
                                            <i class="ri-price-tag-3-fill"></i>Veg and Non Veg
                                        </a>
                                    </span>
                                    <h5 class="mt-0"><router-link :to="{ name: 'meal-detail' }">Sambal Satay</router-link></h5>
                                    <div class="wrap-hover-area">
                                        <p> Some details about Sambal
                                        </p>
                                        <p> Starting from $12
                                        </p>
                                        <router-link class="link-btn" :to="{ name: 'meal-detail' }">Subscribe</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- product Area End -->
</template>

<script>
export default {

}
</script>

<style>

</style>
