import { Component, OnInit, Input } from '@angular/core';

import { CocktailService } from '../../cocktail.service';

import { Ingredient } from '../../interfaces/ingredient';

@Component({
  selector: 'app-ingredient-search',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.css']
})
export class IngredientSearchComponent implements OnInit {
  cocktails = [];
  filteredIngredients: Ingredient[];
  ingredients: Ingredient[];
  selectedIngredients = [];

  constructor(
    private cocktailService: CocktailService
  ) { }

  search(term: string): void {
    this.filteredIngredients = this.ingredients.filter(x => x.strIngredient1.toLowerCase().includes(term.toLowerCase()));
  }

  addIngredient(ingredient: Ingredient) {
    if (!this.selectedIngredients.includes(ingredient.strIngredient1)) {
      this.selectedIngredients.push(ingredient.strIngredient1);
      this.searchCocktails(this.selectedIngredients.join(','));
    }
  }

  removeIngredient(chip) {
    this.selectedIngredients.splice(this.selectedIngredients.indexOf(chip), 1);
    this.searchCocktails(this.selectedIngredients.join(','));
  }

  searchCocktails(ingredients: string) {
    this.cocktailService.searchCocktailsByIngredients(ingredients)
      .subscribe(cocktails => {
        this.cocktails = cocktails !== 'None Found' ? cocktails : [];
      });
  }

  ngOnInit(): void {
    this.cocktailService.getIngredients()
      .subscribe(ingredients => {
        this.ingredients = ingredients;
      });
  }

}
