<script setup lang="ts">
    import { Cocktail } from '@/interfaces';
    import useCocktailStore from '../../store/index'

    const store = useCocktailStore();

    const props = defineProps<{ cocktail: Cocktail }>();

    const ingredients = store.getIngredientsWithMeasures(props.cocktail);
</script>

<template>
    <div class="cocktail-ingredients">
      <h3>List of ingredients:</h3>
      <ul>
        <li v-for="(item, index) in ingredients" :key="index">
          <strong>{{ item.measure || 'No measure' }}</strong> - {{ item.ingredient }}
        </li>
      </ul>
    </div>
</template>

<style scoped>
    .cocktail-ingredients {
        display: flex;
        flex-direction: column;
        text-align: left;

        h3 {
            margin-bottom: 0;
        }

        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            text-align: left;
            padding: 0;
        }
    }

    @media (max-width: 768px) {
        .cocktail-ingredients,
        .cocktail-ingredients ul {
            text-align: center;;
        }
    }
</style>
