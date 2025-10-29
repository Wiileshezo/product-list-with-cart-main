<script setup>
import StoredProducts from "./StoredProducts.vue"; //eslint-disable-next-line
import TheCart from "./TheCart.vue"; //eslint-disable-next-line
</script>

<template>
  <div class="container">
    <StoredProducts class="main" />
    <TheCart class="side" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: 4rem;
  gap: 1rem;
}

.side {
  height: fit-content;
  margin-inline: auto;
  border-radius: 1rem;
}

@media screen and (min-width: 800px) {
  .container {
    flex-direction: row;
    align-items: flex-start;
  }
  .main {
    width: 60vw;
  }
  .side {
    width: 40vw;
  }
}
</style>
