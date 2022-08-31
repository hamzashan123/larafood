<template>
  <div class='minicart'>
  <div class='minicart--item-container'>
    You have
    <span class='minicart--item-count' style='font-weight: 600'>2 items</span>
    in your cart!
  </div>
  <hr>
  <ul>
    <li class='minicart--item'>
      <div class='placeholder'>
        <img src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bb12037c27177184b97_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg" alt="">
      </div>
      <h1 class='title'>Title of Product 01</h1>

      <p class='size'>
        <span style='font-weight: 600'>Size:</span>
        6 1/2
      </p>
      <p class='price'>$90.00 USD (x1)</p>
      <p class='remove'>
        <a href='#'>
          <i class='fa fa-trash-o'></i>
          Remove from cart
        </a>
      </p>
    </li>
    <li class='minicart--item'>
      <div class='placeholder'>
        <img src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61064050a510183577a6c7f7_production-meal-image-ea98e43b-5663-49f6-9c00-8f2b23225bd2.jpeg" alt="">
      </div>
      <h1 class='title'>Some Product 02</h1>

      <p class='size'>
        <span style='font-weight: 600'>Size:</span>
        6 1/2
      </p>
      <p class='price'>$90.00 USD (x1)</p>
      <p class='remove'>
        <a href='#'>
          <i class='fa fa-trash-o'></i>
          Remove from cart
        </a>
      </p>
    </li>
  </ul>
  <hr>
  <div class='minicart--subtotal clearfix '>
    <p class='minicart--subtotal-title'>Subtotal</p>
    <p class='minicart--subtotal-amount'>$270.00 USD</p>
  </div>
  <hr>
  <div class="">
    <router-link class="btn btn-secondary d-block mb-2" :to="{ name: 'cart' }">View Cart</router-link>
    <router-link class="btn btn-primary d-block mb-2" :to="{ name: 'checkout' }">Checkout</router-link>
  </div>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
