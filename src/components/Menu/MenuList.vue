<script setup lang="ts">
  import { onMounted, nextTick, ref, watch } from 'vue'
  import MenuListItem from './MenuListItem.vue'
  import useCocktailStore from '../../store/index.ts'
  import { useRouter } from 'vue-router';

  defineProps<{ cocktailList: string[] }>()
  const router = useRouter();
  const store = useCocktailStore();


  const handleClick = async (cocktail: string) => {
    store.setActiveCocktail(cocktail);
    router.push(`/${cocktail}`);
    await store.getCocktails(cocktail);
  };

  onMounted(() => {
    watch(() => router.currentRoute.value, async (route) => {
      const cocktailName = route.params.cocktailName;
      if (cocktailName) {
        await handleClick(cocktailName);
      }
    }, { immediate: true });
  });

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
