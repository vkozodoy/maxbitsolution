<script setup lang="ts">
defineProps<{ src: string }>();
</script>

<template>
  <div class="cocktail-image">
    <img :src="src" loading="lazy" />
  </div>
</template>

<style scoped>
.cocktail-image {
  width: 50%;
  height: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-top: 20px;
  justify-content: right;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 12px;
  }
}

@media (max-width: 768px) {
  .cocktail-image {
    width: 100%;
    justify-content: center;
  }
}
</style>
