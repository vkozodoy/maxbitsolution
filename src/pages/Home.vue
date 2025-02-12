<script setup lang="ts">
    import Menu from '../components/menu/Menu.vue'
    import CocktailContainer from '../components/cocktails/CocktailContainer.vue';
</script>

<template>
    <div class="home-container">
        <Menu></Menu>
        <CocktailContainer></CocktailContainer>
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
