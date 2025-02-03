<template>
  <the-header></the-header>
  <the-products></the-products>
</template>

<script>
import TheProducts from "./components/products/TheProducts.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
export default {
  components: {
    TheHeader,
    TheProducts,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&display=swap");

:root {
  --Red: hsl(14, 86%, 42%);
  --Green: hsl(159, 69%, 38%);

  --Rose50: hsl(20, 50%, 98%);
  --Rose100: hsl(13, 31%, 94%);
  --Rose300: hsl(14, 25%, 72%);
  --Rose400: hsl(7, 20%, 60%);
  --Rose500: hsl(12, 20%, 44%);
  --Rose900: hsl(14, 65%, 9%);
}

* {
  box-sizing: content-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: "Red Hat Text", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

body {
  font-size: 16px;
  background-color: var(--Rose50);
}
</style>
