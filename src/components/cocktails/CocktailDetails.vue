<script setup lang="ts">
    import { ref } from 'vue'
    import CocktailImage from '../cocktails/CocktailImage.vue'
    import Cocktailingredients from '../cocktails/Cocktailingredients.vue'
    import { Cocktail } from '../interfaces/index';

    defineProps<{ cocktails: Cocktail[] }>()
</script>

<template>
    <div v-if="cocktails.length > 0" class="cocktail-details" v-for="cocktail in cocktails" :key="cocktail">
        <div class="cocktail-info-box">
            <div class="cocktail-info">
                <h1>{{ cocktail.strDrink }}</h1>
                <p><strong>Category:</strong> {{ cocktail.strCategory }}</p>
                <p><strong>Alcoholic:</strong> {{ cocktail.strAlcoholic }}</p>
                <p><strong>Glass:</strong> {{ cocktail.strGlass }}</p>
                <p><strong>Instructions:</strong> {{ cocktail.strInstructions }}</p>
            </div>
            <CocktailImage :src="cocktail.strDrinkThumb"></CocktailImage>
        </div>
        <Cocktailingredients></Cocktailingredients>
    </div>
</template>

<style scoped>
    .cocktail-details {
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        color: black;
        
        h1, p {
            margin: 10px 0;
        }

        h3 {
            margin-top: 20px;
        }
    }

    .cocktail-details .cocktail-info-box {
        display: flex;
    }

    .cocktail-details .cocktail-info-box .cocktail-info {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        width: 50%;
        text-align: left;
    }

    @media (max-width: 768px) {
        .cocktail-details .cocktail-info-box {
            flex-direction: column-reverse;
            width: 100%;
        }

        .cocktail-details .cocktail-info-box .cocktail-info {
            width: 100%;
            align-items: center;
            text-align: center;
        }
    }
</style>
