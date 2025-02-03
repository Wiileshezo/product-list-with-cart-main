<template>
  <div class="cart-side">
    <h1>Your Cart ()</h1>

    <div class="empty-cart" v-if="isEmpty">
      <img src="@/assets/images/illustration-empty-cart.svg" alt="" />
      <p>Your added items will appear here</p>
    </div>

    <ul class="full-cart" v-else>
      <li
        v-for="item in yourCart"
        :key="item.id"
        :id="item.id"
        :mob="item.mob"
        :desk="item.desk"
        :tab="item.tab"
        :thum="item.thum"
        :title="item.title"
        :details="item.details"
        :price="item.price"
        :quantity="item.quantity"
      >
        <div class="product">
          <div>
            <h2>{{ item.title }}</h2>
            <div class="cart-detail">
              <p>{{ item.quantity }}</p>
              <p>{{ item.price.toFixed(2) }}</p>
              <p @click="oneProductSum">{{ proSum }}</p>
            </div>
          </div>
          <img src="@/assets/images/icon-remove-item.svg" alt="" />
        </div>
      </li>
      <div class="cart-detail">
        <p>Order Total</p>
        <p>$all sum</p>
      </div>
      <p>
        <img src="@/assets/images/icon-carbon-neutral.svg" alt="" />
        This is a <a href="#">carbon-neutral</a> delivery
      </p>
      <base-button>Confirm Order</base-button>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ["yourCart"],
  data() {
    return {
      proSum: 0,
    };
  },
  computed: {
    isEmpty() {
      return !Array.isArray(this.yourCart) || this.yourCart.length === 0;
    },
  },
  methods: {
    oneProductSum() {
      this.proSum =
        Number(this.yourCart.quantity) * Number(this.yourCart.price);
      return this.proSum;
    },
  },
};
</script>

<style scoped>
.cart-side {
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
h1 {
  text-align: left;
  padding: 1rem 2rem;
  color: var(--Red);
}
.empty-cart {
  display: flex;
  flex-direction: column;
}
.empty-cart > img {
  width: 45vw;
  margin-inline: auto;
}
.full-cart {
  list-style: none;
}
.product {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.cart-detail {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
p {
  color: var(--Rose900);
  padding: 1rem;
  text-align: center;
  font-weight: 400;
}

@media screen and (min-width: 500px) {
  .empty-cart > img {
    width: 15vw;
  }
}
@media screen and (min-width: 1000px) {
  .empty-cart > img {
    width: 10vw;
  }
}
</style>
