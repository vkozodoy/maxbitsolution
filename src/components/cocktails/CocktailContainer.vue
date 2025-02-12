<script setup lang="ts">
    import CocktailDetails from '../cocktails/CocktailDetails.vue'
    import useCocktailStore from '../../store/index'

    const store = useCocktailStore();
</script>

<template>
    <div v-if="store.cocktails" class="cocktail-container">
        <CocktailDetails :cocktails="store.cocktails"></CocktailDetails>
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
