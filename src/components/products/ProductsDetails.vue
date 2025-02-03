<template>
  <li>
    <base-card>
      <div>
        <img :src="mob" alt="" class="mob" ref="addedMob" />
        <img :src="desk" alt="" class="desk" ref="addedDesk" />
        <button class="cart1" @click="addNewCart()">
          <img src="@/assets/images/icon-add-to-cart.svg" alt="" />Add to Cart
        </button>
        <button class="cart2">
          <img
            src="@/assets/images/icon-decrement-quantity.svg"
            alt=""
            class="decre"
            @click="decrement"
          />
          {{ counter }}
          <img
            src="@/assets/images/icon-increment-quantity.svg"
            alt=""
            class="incre"
            @click="increment"
          />
        </button>
      </div>
      <p class="title" ref="addedTitle">{{ title }}</p>
      <h2 class="details" ref="addedDetails">{{ details }}</h2>
      <p class="price" ref="addedPrice">{{ price.toFixed(2) }}</p>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ["id", "mob", "desk", "tab", "thum", "title", "details", "price"],

  inject: ["addToCart"],

  computed: {},

  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    decrement() {
      if (this.counter <= 0) {
        return (this.counter = 0);
      }
      this.counter = --this.counter;
    },
    increment() {
      this.counter = ++this.counter;
    },
    addNewCart() {
      this.counter = 1 + this.counter;

      const addedDesk = this.$refs.addedDesk.src;
      const addedDetails = this.$refs.addedDetails.textContent;
      const addedId = this.id;
      const addedMob = this.$refs.addedMob.src;
      const addedPrice = Number(this.$refs.addedPrice.textContent);
      const addedQuantity = this.counter;
      const addedTab = this.tab;
      const addedThum = this.thum;
      const addedTitle = this.$refs.addedTitle.textContent;

      this.addToCart(
        addedDesk,
        addedDetails,
        addedId,
        addedMob,
        addedPrice,
        addedQuantity,
        addedTab,
        addedThum,
        addedTitle
      );
    },
  },
};
</script>

<style scoped>
li {
  line-height: 2.3rem;
  width: 100vw;
  display: inline-flex;
  justify-content: center;
}
div {
  position: relative;
}

.btn-cart {
  position: absolute;
  left: 4rem;
  top: 12rem;
}

.cart1 {
  display: flex;
  padding: 0.7rem 3rem;
  font-size: 1rem;
  border-radius: 3rem;
  margin: auto;
  color: var(--Rose900);
  background-color: var(--Rose50);
  align-items: center;
  border: 1px solid var(--Red);
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
}
.cart1 > img {
  margin-right: 5px;
  width: 1.5rem;
}
.cart2 > img {
  border-radius: 50%;
  border: 1px solid var(--Rose50);
}
.decre {
  margin-inline: 0.5rem 3rem;
  padding: 0.8rem 0.6rem;
}
.incre {
  margin-inline: 3rem 0.5rem;
  padding: 0.6rem;
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
}
.mob {
  width: 80vw;
  border-radius: 1rem;
}
.desk {
  display: none;
  border-radius: 1rem;
}

@media screen and (min-width: 500px) {
  .mob {
    width: 30vw;
  }
}
@media screen and (min-width: 700px) {
  li {
    width: 50%;
  }
  .mob {
    display: none;
  }
  .desk {
    display: inline;
    width: 25vw;
  }
}
@media screen and (min-width: 1000px) {
  .desk {
    width: 20vw;
  }
  li {
    width: 32%;
  }
}
</style>
