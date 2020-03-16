export interface Cocktail {
    idDrink: string;
    strDrink: string;
    strTags: string;
    strCategory: string;
    strIBA: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    ingredients: Array<{name: string, measure: string}>;
}
