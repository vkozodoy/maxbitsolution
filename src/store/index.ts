import { defineStore } from 'pinia';
import { Cocktail, CocktailResponse } from '../interfaces/index';
import getCocktails from '../providers/index';

export const useCocktailStore = defineStore('cocktailStore', {
  state: () => ({
    cocktails: [] as Array<CocktailResponse>,
    activeCocktail: '',
    isLoading: false,
    error: null as string | null,
  }),

  actions: {
    async getCocktails(cocktail: string) {
        this.setLoadingState(true);

        try {
            const response = await getCocktails(cocktail);
        if (response) {
            this.cocktails = response;
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
}
});

export default useCocktailStore;
