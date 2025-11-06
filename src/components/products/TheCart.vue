<script setup>
import { computed } from "vue";
import { useCartStore } from "@/components/stores/cart";

const cartStore = useCartStore();

const isEmpty = computed(() => {
  return cartStore.items.length === 0;
});

function confirmOrder() {
  cartStore.order = true;
}
</script>

<template>
  <base-dialog v-if="cartStore.order">
    <div class="display-flex direction-column">
      <img
        src="@//assets/images/icon-order-confirmed.svg"
        alt=""
        class="icon-order-confirmed"
      />
      <div class="margin-bottom">
        <h1 class="header">Order Confirmed</h1>
        <p>We hope you enjoy your food!</p>
      </div>
      <div class="container-confirm-product">
        <div
          class="display-flex direction-column"
          v-for="item in cartStore.items"
          :key="item.id"
        >
          <base-card
            class="confirm-product display-flex direction-row align-items-center"
          >
            <div class="display-flex direction-row gap-1rem align-items-center">
              <img :src="item.thum" alt="thum" class="thum" />
              <div class="details display-flex direction-column">
                <h2 class="title">{{ item.details }}</h2>
                <div>
                  <p class="qty">{{ item.qty }}x</p>
                  <p class="price">@ ${{ item.price.toFixed(2) }}</p>
                </div>
              </div>
            </div>
            <p class="price">
              ${{ cartStore.getTotalPrice(item.id).toFixed(2) }}
            </p>
          </base-card>
          <hr />
        </div>
        <div class="display-flex direction-row cart-detail">
          <p>Order Total</p>
          <p class="font-weight">${{ cartStore.total.toFixed(2) }}</p>
        </div>
      </div>
      <base-button
        class="confirm-button full-width"
        @click="cartStore.startNewOrder"
      >
        Start New Order
      </base-button>
    </div>
  </base-dialog>

  <div class="cart-side display-flex direction-column">
    <h1 class="header text-red">Your Cart ({{ cartStore.qtyTotal }})</h1>

    <div class="empty-cart display-flex direction-column" v-if="isEmpty">
      <img src="@/assets/images/illustration-empty-cart.svg" alt="" />
      <p class="text-align-center">Your added items will appear here</p>
    </div>

    <ul class="full-cart display-flex direction-column" v-else>
      <li v-for="item in cartStore.items" :key="item.id">
        <div class="product-container display-flex direction-column">
          <div class="cart-detail display-flex direction-row">
            <div class="details display-flex direction-column">
              <h2 class="title">{{ item.details }}</h2>
              <div>
                <p class="qty">{{ item.qty }}x</p>
                <p class="price">@ ${{ item.price.toFixed(2) }}</p>
                <p>${{ cartStore.getTotalPrice(item.id).toFixed(2) }}</p>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
              class="remove"
              @click="cartStore.remove(item.id)"
            >
              <path
                fill="#CAAFA7"
                d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
              />
            </svg>
            <!-- <img
              src="@/assets/images/icon-remove-item.svg"
              alt=""
              class="remove"
              @click="cartStore.remove(item.id)"
            /> -->
          </div>
          <hr />
        </div>
      </li>
      <div class="display-flex direction-row cart-detail">
        <p>Order Total</p>
        <p class="font-weight">${{ cartStore.total.toFixed(2) }}</p>
      </div>
      <div class="carbon">
        <img src="@/assets/images/icon-carbon-neutral.svg" alt="" />
        <p>This is a <a href="#">carbon-neutral</a> delivery</p>
      </div>
      <base-button class="confirm-button" @click="confirmOrder">
        Confirm Order
      </base-button>
    </ul>
  </div>
</template>

<style scoped>
.display-flex {
  display: flex;
}
.direction-column {
  flex-direction: column;
}
.direction-row {
  flex-direction: row;
}
.align-items-center {
  align-items: center;
}
.cart-side {
  background-color: var(--White);
  padding: 2rem;
  border-radius: 1rem;
  width: 75vw;
}
.header {
  text-align: left;
  padding-block: 1rem;
}
.text-red {
  color: var(--Red);
}
.empty-cart > img {
  width: 45vw;
  margin-inline: auto;
}
.full-cart {
  list-style: none;
}
.cart-detail {
  align-items: center;
  justify-content: space-between;
  padding-block: 1rem;
}
.details {
  gap: 0.5rem;
}
.title {
  font-size: clamp(0.5rem, 1vw + 0.5rem, 1rem);
}
p {
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: 400;
  display: inline;
}
.text-align-center {
  text-align: center;
}
.qty {
  color: var(--Red);
  font-weight: 700;
}
.price {
  color: var(--Rose500);
}
.font-weight {
  font-weight: 700;
  font-size: 1.3rem;
}
.carbon {
  background-color: var(--Rose100);
  border-radius: 0.5rem;
  text-align: center;
  padding: 0.5rem;
}
.remove {
  border-radius: 50%;
  border: 1px solid var(--Rose300);
  padding: 0.2rem;
  width: 0.7rem;
}
.remove:hover {
  border-color: var(--Rose900);
}
svg:hover path {
  fill: var(--Rose900);
}
hr {
  border: none;
  width: auto;
  height: 1px;
  display: block;
  background-color: var(--Rose300);
}
.confirm-button {
  margin-top: 2rem;
  padding: 1rem 5rem;
}

.full-width {
  display: block;
}
.container-confirm-product {
  background-color: var(--Rose100);
  padding: 1rem;
  border-radius: 1rem;
}
.confirm-product {
  justify-content: space-between;
  align-items: center;
}
.icon-order-confirmed {
  width: 2.5rem;
}
.gap-1rem {
  gap: 1rem;
}
.thum {
  border-radius: 0.5rem;
  width: 4rem;
}
.margin-bottom {
  margin-bottom: 2rem;
}

@media screen and (min-width: 500px) {
  .empty-cart > img {
    width: 15vw;
  }
}
@media screen and (min-width: 1000px) {
  .cart-side {
    width: 25vw;
  }
  .empty-cart > img {
    width: 10vw;
  }
}
</style>
