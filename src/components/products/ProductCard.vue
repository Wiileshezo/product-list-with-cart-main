<script setup>
import { defineProps } from "vue";
import { useCartStore } from "@/components/stores/cart";
const cartStore = useCartStore();

defineProps({ product: Object });

function addedToCart(product) {
  cartStore.addToCart(product.id);
}
</script>

<template>
  <base-card class="list">
    <div>
      <img
        :src="product.desk"
        alt="desk"
        :class="{ 'border-red': product.isActive }"
        class="desk img-width"
      />
      <img
        :src="product.tab"
        alt="tab"
        :class="{ 'border-red': product.isActive }"
        class="tab img-width"
      />
      <img
        :src="product.mob"
        alt="mob"
        :class="{ 'border-red': product.isActive }"
        class="mob img-width"
      />
      <button
        class="cart1 btn-cart"
        v-if="!product.isActive"
        @click="addedToCart(product)"
      >
        <img src="@/assets/images/icon-add-to-cart.svg" alt="" />Add to Cart
      </button>
      <button v-else class="cart2 btn-cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          fill="none"
          viewBox="0 0 10 2"
          class="decre"
          @click="cartStore.decrement(product.id)"
        >
          <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
        </svg>
        {{ product.qty }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
          class="incre"
          @click="cartStore.increment(product.id)"
        >
          <path
            fill="#fff"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          />
        </svg>
      </button>
    </div>
    <p class="title">{{ product.title }}</p>
    <h2 class="details">{{ product.details }}</h2>
    <p class="price">${{ product.price.toFixed(2) }}</p>
  </base-card>
</template>

<style scoped>
.list {
  line-height: 2.3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: space-around;
}

div {
  position: relative;
}

.btn-cart {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
}
.border-red {
  border: 2px solid var(--Red);
  border-radius: 1rem;
}

.cart1 {
  display: flex;
  padding: 0.5rem;
  font-size: 0.9rem;
  border-radius: 3rem;
  margin: auto;
  color: var(--Rose900);
  background-color: var(--Rose50);
  align-items: center;
  border: 1px solid var(--Rose500);
  justify-content: center;
}
.cart1:hover {
  border-color: var(--Red);
  color: var(--Red);
}
.cart2 {
  background-color: var(--Red);
  color: var(--Rose50);
  padding: 0.4rem;
  border: 0;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  margin: auto;
  align-items: center;
  justify-content: space-between;
}

.cart1 > svg {
  margin-right: 5px;
  width: 1.5rem;
}
.cart2 > svg {
  border-radius: 50%;
  border: 1px solid var(--Rose50);
}

svg:hover path {
  fill: var(--Red);
}

.decre {
  padding: 0.8rem 0.6rem;
}
.decre:hover {
  background-color: var(--White);
  color: var(--Red);
}
.incre {
  padding: 0.6rem;
}
.incre:hover {
  background-color: var(--White);
  color: var(--Red);
}
.title {
  padding-top: 1rem;
  color: var(--Rose500);
}
.details {
  color: var(--Rose900);
  font-size: 1.3rem;
}
.price {
  color: var(--Red);
  font-weight: 600;
  font-size: 1.5rem;
}
.img-width {
  border-radius: 1rem;
}

@media (min-width: 770px) {
  .tab {
    display: none;
  }
  .desk {
    display: inline;
  }
  .mob {
    display: none;
  }
  .img-width {
    width: 18vw;
  }
}
@media (max-width: 768px) {
  .desk {
    display: none;
  }
  .tab {
    display: inline;
  }
  .mob {
    display: none;
  }
  .img-width {
    width: 26vw;
  }
}
@media (max-width: 500px) {
  .mob {
    display: inline;
  }
  .desk {
    display: none;
  }
  .tab {
    display: none;
  }
  .img-width {
    border-radius: 1rem;
    width: 80vw;
  }
}
</style>
