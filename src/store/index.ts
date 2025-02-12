import { defineStore } from 'pinia';
import { Cocktail, CocktailResponse } from '../interfaces/index';
import getCocktails from '../providers/index';

export const useCocktailStore = defineStore('cocktailStore', {
    state: () => ({
        cocktails: [] as Array<Cocktail>,
        activeCocktail: '',
        isLoading: false,
        error: null as string | null,
    }),

    actions: {
        async getCocktails(cocktail: string) {
            this.setLoadingState(true);

            try {
                const response = await getCocktails(cocktail);
                if (response?.drinks.length) {
                    console.log(response.drinks);
                    this.cocktails = response.drinks;
                } else {
                    throw new Error('No cocktails found');
                }
            } catch (err) {
                this.error = err instanceof Error ? err.message : 'Error fetching data';
                return null;
            } finally {
                this.setLoadingState(false);
            }
        },

        setActiveCocktail(cocktailName: string) {
            this.activeCocktail = cocktailName;
        },

        setLoadingState(state: boolean) {
            this.isLoading = state;
            this.error = state ? null : this.error;
        },

        getIngredientsWithMeasures(cocktail: Cocktail) {
            const ingredients = [];

            for (let i = 1; i <= 15; i++) {
                const ingredient = cocktail[`strIngredient${i}` as keyof Cocktail];
                const measure = cocktail[`strMeasure${i}` as keyof Cocktail] || ""; // Если `null`, ставим пустую строку

                if (ingredient) {
                    ingredients.push({
                        ingredient,
                        measure, // Теперь `measure` всегда строка
                    });
                }
            }

            return ingredients;
        },
    }
});

export default useCocktailStore;
