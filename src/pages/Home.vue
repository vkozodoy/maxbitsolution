<script setup lang="ts">
import Menu from '../components/menu/Menu.vue';
import CocktailContainer from '../components/cocktails/CocktailContainer.vue';
import useCocktailStore from '../store';
import { onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useCocktailStore();

const handleClick = async (cocktail: string) => {
  router.push(`/${cocktail}`);
  await store.getCocktails(cocktail);
};

onMounted(() => {
  watch(
    () => router.currentRoute.value,
    async (route) => {
      const cocktailName = route.params.cocktailName as string;
      if (cocktailName) {
        await handleClick(cocktailName);
      }
    },
    { immediate: true }
  );
});
</script>

<template>
  <div v-if="store.cocktails.length" class="home-container">
    <Menu @click="handleClick"></Menu>
    <CocktailContainer :cocktails="store.cocktails"></CocktailContainer>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: row;
  max-width: 1024px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0;
  flex-wrap: wrap;
  height: 100%;
}
</style>
