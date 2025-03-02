<script setup lang="ts">
import { defineEmits } from 'vue';
import MenuListItem from './MenuListItem.vue';
import useCocktailStore from '../../store/index';

defineProps<{ cocktailList: string[] }>();
const emit = defineEmits<{
  (event: 'click', value: string): void;
}>();
const store = useCocktailStore();

const handleClick = async (cocktail: string) => {
  store.setActiveCocktail(cocktail);
  emit('click', cocktail);
};
</script>

<template>
  <ul>
    <MenuListItem
      v-for="cocktail in cocktailList"
      :cocktail="cocktail"
      :key="cocktail"
      :isActive="cocktail === store.activeCocktail"
      @click="handleClick(cocktail)"
    />
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
