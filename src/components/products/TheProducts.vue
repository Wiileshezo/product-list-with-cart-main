<template>
  <div class="container">
    <stored-products class="main"></stored-products>
    <the-cart class="side"></the-cart>
  </div>
</template>

<script>
import StoredProducts from "./StoredProducts.vue";
import TheCart from "./TheCart.vue";
export default {
  components: {
    StoredProducts,
    TheCart,
  },
  data() {
    return {
      storedProducts: [
        {
          id: "Waffle",
          title: "Waffle",
          details: "Waffle with Berries",
          price: 6.5,
          mob: require("@/assets/images/image-waffle-mobile.jpg"),
          desk: require("@/assets/images/image-waffle-desktop.jpg"),
          tab: require("@/assets/images/image-waffle-tablet.jpg"),
          thum: require("@/assets/images/image-waffle-thumbnail.jpg"),
        },
        {
          id: "Crème",
          title: "Crème Brûlée",
          details: "Vanilla Bean Crème Brûlée",
          price: 7.0,
          mob: require("@/assets/images/image-creme-brulee-mobile.jpg"),
          desk: require("@/assets/images/image-creme-brulee-desktop.jpg"),
          tab: require("@/assets/images/image-creme-brulee-tablet.jpg"),
          thum: require("@/assets/images/image-creme-brulee-thumbnail.jpg"),
        },
        {
          id: "Macaron",
          title: "Macaron",
          details: "Macaron Mix of Five",
          price: 8.0,
          mob: require("@/assets/images/image-macaron-mobile.jpg"),
          desk: require("@/assets/images/image-macaron-desktop.jpg"),
          tab: require("@/assets/images/image-macaron-tablet.jpg"),
          thum: require("@/assets/images/image-macaron-thumbnail.jpg"),
        },
        {
          id: "Tiramisu",
          title: "Tiramisu",
          details: "Classic Tiramisu",
          price: 5.5,
          mob: require("@/assets/images/image-tiramisu-mobile.jpg"),
          desk: require("@/assets/images/image-tiramisu-desktop.jpg"),
          tab: require("@/assets/images/image-tiramisu-tablet.jpg"),
          thum: require("@/assets/images/image-tiramisu-thumbnail.jpg"),
        },
        {
          id: "Baklava",
          title: "Baklava",
          details: "Pistachio Baklava",
          price: 4.0,
          mob: require("@/assets/images/image-baklava-mobile.jpg"),
          desk: require("@/assets/images/image-baklava-desktop.jpg"),
          tab: require("@/assets/images/image-baklava-tablet.jpg"),
          thum: require("@/assets/images/image-baklava-thumbnail.jpg"),
        },
        {
          id: "Pie",
          title: "Pie",
          details: "Lemon Meringue Pie",
          price: 5.0,
          mob: require("@/assets/images/image-meringue-mobile.jpg"),
          desk: require("@/assets/images/image-meringue-desktop.jpg"),
          tab: require("@/assets/images/image-meringue-tablet.jpg"),
          thum: require("@/assets/images/image-meringue-thumbnail.jpg"),
        },
        {
          id: "Cake",
          title: "Cake",
          details: "Red Velvet Cake",
          price: 4.5,
          mob: require("@/assets/images/image-cake-mobile.jpg"),
          desk: require("@/assets/images/image-cake-desktop.jpg"),
          tab: require("@/assets/images/image-cake-tablet.jpg"),
          thum: require("@/assets/images/image-cake-thumbnail.jpg"),
        },
        {
          id: "Brownie",
          title: "Brownie",
          details: "Salted Caramel Brownie",
          price: 4.5,
          mob: require("@/assets/images/image-brownie-mobile.jpg"),
          desk: require("@/assets/images/image-brownie-desktop.jpg"),
          tab: require("@/assets/images/image-brownie-tablet.jpg"),
          thum: require("@/assets/images/image-brownie-thumbnail.jpg"),
        },
        {
          id: "Panna",
          title: "Panna Cotta",
          details: "Vanilla Panna Cotta",
          price: 6.5,
          mob: require("@/assets/images/image-panna-cotta-mobile.jpg"),
          desk: require("@/assets/images/image-panna-cotta-desktop.jpg"),
          tab: require("@/assets/images/image-panna-cotta-tablet.jpg"),
          thum: require("@/assets/images/image-panna-cotta-thumbnail.jpg"),
        },
      ],
      yourCart: [],
    };
  },
  provide() {
    return {
      products: this.storedProducts,
      addToCart: this.addToCart,
      yourCart: this.yourCart,
    };
  },

  methods: {
    addToCart(desk, details, id, mob, price, quantity, tab, thum, title) {
      const exists = this.yourCart.find((pro) => pro.id === id);
      if (!exists) {
        const newCart = {
          desk: desk,
          details: details,
          id: id,
          mob: mob,
          price: price,
          quantity: quantity,
          tab: tab,
          thum: thum,
          title: title,
        };
        this.yourCart.push(newCart);
      } else {
        console.log("Duplicate object detected, not adding:", id);
      }

      console.log("this is your cart:", this.yourCart);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.main {
  width: 100vw;
  margin-left: 0;
}
.side {
  width: 90vw;
  height: fit-content;
  margin-inline: auto;
  border-radius: 1rem;
}

@media screen and (min-width: 600px) {
  .container {
    flex-direction: row;
  }
  .main {
    width: 70vw;
    margin-left: 2rem;
  }
  .side {
    width: 30vw;
  }
}
</style>
