<script setup></script>

<template>
  <Teleport to="body">
    <div @click="close"></div>
    <dialog open>
      <slot></slot>
    </dialog>
  </Teleport>
</template>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 33%;
  transform: translate(-50%, -50%);
  z-index: 100;
  border-radius: 1rem;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  padding: 2rem;
}

@media (width<770px) {
  dialog {
    max-height: 80vh;
    width: clamp(360px, 33%, 500px);
    overflow-y: auto;
  }
}
@media (width<600px) {
  dialog {
    max-height: 75vh;
    bottom: 0;
    width: clamp(310px, 33%, 500px);
    overflow-y: auto;
    transform: translate(-50%, -40%);
  }
}
</style>
