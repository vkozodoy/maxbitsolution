import axios from 'axios';

export default async function getCocktails(cocktail: string) {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`);
    if (response.data.drinks) {
        return response.data.drinks;
    } else {
        return null;
    }
}