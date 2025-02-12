<script setup lang="ts">
import { Cocktail } from '@/interfaces';
import CocktailDetails from '../cocktails/CocktailDetails.vue';
defineProps<{ cocktails: Cocktail[] }>();
</script>

<template>
  <div v-if="cocktails.length" class="cocktail-container">
    <CocktailDetails :cocktails="cocktails"></CocktailDetails>
  </div>
</template>

<style scoped>
.cocktail-container {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #f9f9f9;
}
</style>
