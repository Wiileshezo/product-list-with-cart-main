<template>
  <ul>
    <products-details
      v-for="pro in products"
      :key="pro.id"
      :id="pro.id"
      :mob="pro.mob"
      :desk="pro.desk"
      :tab="pro.tab"
      :thum="pro.thum"
      :title="pro.title"
      :details="pro.details"
      :price="pro.price"
    >
    </products-details>
  </ul>
</template>

<script>
import ProductsDetails from "./ProductsDetails.vue";
export default {
  inject: ["products"],
  components: {
    ProductsDetails,
  },
  methods: {},
};
</script>

<style scoped>
ul {
  list-style: none;
}

@media screen and (min-width: 500px) {
}
</style>
