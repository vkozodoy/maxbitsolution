import { CocktailResponse } from '@/interfaces';
import axios from 'axios';

export default async function getCocktails(cocktail: string): Promise<CocktailResponse | null> {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`);

    if (response.data) {
        return response.data;
    } else {
        return null;
    }
}