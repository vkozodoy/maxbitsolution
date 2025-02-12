<script setup lang="ts">
import CocktailDetails from '../cocktails/CocktailDetails.vue';
import useCocktailStore from '../../store/index';

const store = useCocktailStore();
</script>

<template>
  <div v-if="store.cocktails.length" class="cocktail-container">
    <CocktailDetails :cocktails="store.cocktails"></CocktailDetails>
  </div>
  <div v-else class="cocktail-container empty">
    Oooooooops, cocktail list is empty
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

  &.empty {
    color: black;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    height: 200px;
  }
}
</style>
