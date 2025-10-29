import { reactive, computed, ref } from "vue";
import { defineStore } from "pinia";

import { useProductsStore } from "./product";

export const useCartStore = defineStore("cartStore", () => {
  /*
  state
  */
  const productsStore = useProductsStore();
  let items = reactive([]);

  const order = ref(false);

  /*
  actions
  */
  function addToCart(productId) {
    const product = productsStore.products.find((p) => p.id === productId);

    if (product && !product.isActive) {
      product.isActive = true;
      product.qty = 1;
      items.push(product);
    }
  }

  function increment(id) {
    const product = items.find((p) => p.id === id);
    product.qty++;
  }

  function decrement(id) {
    const product = items.find((p) => p.id === id);
    product.qty--;
    if (product.qty <= 0) {
      items.splice(product, 1);
      productsStore.setProductToInactive(id);
    }
  }

  function remove(id) {
    const removedItem = items.findIndex((p) => p.id === id);
    if (removedItem !== -1) {
      items.splice(removedItem, 1);
      productsStore.setProductToInactive(id);
    }
  }

  function startNewOrder() {
    items.length = 0;
    order.value = false;
    productsStore.products.forEach((product) => {
      if (product.isActive === true) {
        product.isActive = false;
        product.qty = 0;
      }
    });
  }
  /*
  getters
  */
  const qtyTotal = computed(() => items.reduce((sum, p) => sum + p.qty, 0));

  const getTotalPrice = (id) => {
    // get product by id
    const product = items.find((item) => item.id == id);
    if (!product) {
      return 0;
    }
    return product.price * product.qty;
  };

  const total = computed(() =>
    items.reduce((sum, p) => sum + p.price * p.qty, 0)
  );

  return {
    // state
    items,
    order,

    // actions
    addToCart,
    increment,
    decrement,
    remove,
    startNewOrder,

    // getters
    qtyTotal,
    getTotalPrice,
    total,
  };
});
