<script setup>
import ProductCard from "./ProductCard.vue";

import TheHeader from "../layouts/TheHeader.vue";

import { useProductsStore } from "@/components/stores/product";
const storedProducts = useProductsStore();
</script>

<template>
  <div class="display-flex direction-column">
    <TheHeader></TheHeader>
    <div class="display-flex direction-row product-card">
      <ProductCard
        v-for="product in storedProducts.products"
        :key="product.id"
        :product="product"
        class="p-card"
      />
    </div>
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
.product-card {
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
}
.p-card {
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  width: 100%;
}

@media screen and (min-width: 500px) {
}

@media screen and (min-width: 700px) {
  .p-card {
    width: 28vw;
  }
}
@media screen and (min-width: 1000px) {
  .p-card {
    width: 20vw;
  }
}
</style>
