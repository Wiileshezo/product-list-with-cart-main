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
  padding: 1rem 5rem;
  font-size: 1rem;
  border-radius: 3rem;
  margin: auto;
  color: var(--Rose50);
  background-color: var(--Red);
  align-items: center;
  border: 0;
}
</style>
