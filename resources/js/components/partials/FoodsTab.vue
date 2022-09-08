<template>
  <!-- product Area Start-->
    <section class="product-area pd-bottom-90 pt-5 foods-tab">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section-title text-center">
                        <h3 class="sub-title">Our signature</h3>
                        <h2 class="title">Delicious Deals for Delicious Meals</h2>
                    </div>
                    <ul class="product-nav  nav nav-pills" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="pills-ramen-tab" data-bs-toggle="pill" data-bs-target="#pills-ramen" type="button" role="tab" aria-controls="pills-ramen" aria-selected="true"><img src="/v-assets/img/category/1.png" alt="img">Ramen</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-pizza-tab" data-bs-toggle="pill" data-bs-target="#pills-pizza" type="button" role="tab" aria-controls="pills-pizza" aria-selected="false"><img src="/v-assets/img/category/2.png" alt="img">Pizza</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-burger-tab" data-bs-toggle="pill" data-bs-target="#pills-burger" type="button" role="tab" aria-controls="pills-burger" aria-selected="false"><img src="/v-assets/img/category/3.png" alt="img">Burger</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-french-fry-tab" data-bs-toggle="pill" data-bs-target="#pills-french-fry" type="button" role="tab" aria-controls="pills-french-fry" aria-selected="false"><img src="/v-assets/img/category/4.png" alt="img">French fries</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-fast-food-tab" data-bs-toggle="pill" data-bs-target="#pills-fast-food" type="button" role="tab" aria-controls="pills-fast-food" aria-selected="false"><img src="/v-assets/img/category/5.png" alt="img">Fast food</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-drinks-tab" data-bs-toggle="pill" data-bs-target="#pills-drinks" type="button" role="tab" aria-controls="pills-drinks" aria-selected="false"><img src="/v-assets/img/category/6.png" alt="img">Soft drinks</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-ramen" role="tabpanel" aria-labelledby="pills-ramen-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://res.cloudinary.com/curefoods/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/GIK44/primary/2_1.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Gulliver Burger </router-link></h5>
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://travelfoodatlas.com/wp-content/uploads/2020/12/gudeg.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Cheese Momos </router-link></h5>
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://www.chefspencil.com/wp-content/uploads/Gudeg.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Patty Buns Burgers</router-link> </h5>
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://photos.smugmug.com/Indonesia-2016/i-9hLVhWh/0/X3/indonesian-sate-ayam-1-X3.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Margherita Pizza </router-link></h5>
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://factsofindonesia.com/wp-content/uploads/2021/03/healthier-indonesian-food.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Maxican Pizza </router-link></h5>
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://nomadparadise.com/wp-content/uploads/2020/07/indonesian-food-015-1024x640.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Garlic Chicken </router-link>  </h5>
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Indonesian_Food.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> BBQ Chicken Pizza</router-link> </h5>
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
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-pizza" role="tabpanel" aria-labelledby="pills-pizza-tab">
                    <div class="row justify-content-center">
                        <div class="col-lg-3 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://photos.smugmug.com/Indonesia-2016/i-9hLVhWh/0/X3/indonesian-sate-ayam-1-X3.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Margherita Pizza </router-link></h5>
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
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://factsofindonesia.com/wp-content/uploads/2021/03/healthier-indonesian-food.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Maxican Pizza </router-link></h5>
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
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://nomadparadise.com/wp-content/uploads/2020/07/indonesian-food-015-1024x640.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Garlic Chicken Pizza</router-link>  </h5>
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
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Indonesian_Food.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> BBQ Chicken Pizza</router-link>   </h5>
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
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-burger" role="tabpanel" aria-labelledby="pills-burger-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://res.cloudinary.com/curefoods/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/GIK44/primary/2_1.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Gulliver Burger </router-link></h5>
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://travelfoodatlas.com/wp-content/uploads/2020/12/gudeg.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Cheese Momos </router-link></h5>
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://www.chefspencil.com/wp-content/uploads/Gudeg.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Patty Buns </router-link>  </h5>
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
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-french-fry" role="tabpanel" aria-labelledby="pills-french-fry-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://res.cloudinary.com/curefoods/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/GIK44/primary/2_1.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Gulliver Burger </router-link></h5>
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://travelfoodatlas.com/wp-content/uploads/2020/12/gudeg.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Cheese Momos </router-link></h5>
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://www.chefspencil.com/wp-content/uploads/Gudeg.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Patty Buns </router-link>  </h5>
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
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-fast-food" role="tabpanel" aria-labelledby="pills-fast-food-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://res.cloudinary.com/curefoods/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/GIK44/primary/2_1.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Gulliver Burger </router-link></h5>
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://travelfoodatlas.com/wp-content/uploads/2020/12/gudeg.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Cheese Momos </router-link></h5>
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://www.chefspencil.com/wp-content/uploads/Gudeg.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Patty Buns </router-link>  </h5>
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
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-drinks" role="tabpanel" aria-labelledby="pills-drinks-tab">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://res.cloudinary.com/curefoods/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/GIK44/primary/2_1.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Gulliver Burger </router-link></h5>
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://travelfoodatlas.com/wp-content/uploads/2020/12/gudeg.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Cheese Momos </router-link></h5>
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
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="single-item-wrap style-2 ">
                                <div class="thumb">
                                    <img class="rounded" src="https://www.chefspencil.com/wp-content/uploads/Gudeg.jpg" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-fill"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><router-link :to="{ name: 'food-detail'}"> Patty Buns </router-link>  </h5>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- product Area End -->
</template>

<script>

import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({ foods: 'food/getFoods', isLoading: "food/getIsLoading", })
    },
    methods: {
        ...mapActions({ loadFoods: 'food/loadFoods' })
    },
    mounted() {
        this.loadFoods()
    }

}
</script>

<style>

</style>
