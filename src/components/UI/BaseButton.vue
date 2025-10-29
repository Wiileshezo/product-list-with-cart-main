<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  display: block;
  border-radius: 3rem;
  color: var(--Rose50);
  background-color: var(--Red);
  align-items: center;
  border: 0;
}
button:hover {
  background-color: var(--Rose900);
}
button:active {
  background-color: var(--Rose900);
}
</style>
