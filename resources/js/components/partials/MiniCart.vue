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
      <div class='placeholder'></div>
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
      <div class='placeholder'></div>
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
  <div class='minicart--subtotal'>
    <p class='minicart--subtotal-title'>Subtotal</p>
    <p class='minicart--subtotal-amount'>$270.00 USD</p>
  </div>
  <hr>
  <router-link class="btn btn-secondary d-block mb-2" :to="{ name: 'cart' }">View Cart</router-link>
  <router-link class="btn btn-primary d-block mb-2" :to="{ name: 'checkout' }">Checkout</router-link>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
