<script setup lang="ts">
    import { computed, onMounted } from 'vue'
    import { useRoute } from 'vue-router';
    import useCocktailStore from '../../store/index.ts'
</script>

<template>
    <div class="cocktail-ingredients">
        <h3>List of ingredients:</h3>
    </div>
</template>
