export interface Cocktail {
    strDrink: string;
    strDrinkThumb: string;
    strAlcoholic: string;
    strCategory: string;
    strGlass: string;
    ingredientsList: string[];
    measuresList: string[];
    instructionsList: string[]; 
}

export interface CocktailResponse {
    drinks: Cocktail[];
  }