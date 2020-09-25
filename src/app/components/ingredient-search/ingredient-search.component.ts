import { Component, EventEmitter, Output } from '@angular/core';

import { CocktailService } from '../../services/cocktail.service';

import { Ingredient } from '../../interfaces/ingredient';

@Component({
  selector: 'app-ingredient-search',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.css']
})
export class IngredientSearchComponent {
  filteredIngredients: Ingredient[];
  ingredients: Ingredient[];
  // selectedIngredients = ['Light Rum', 'Lime Juice', 'Sugar'];
  selectedIngredients = []
  focused = false;
  @Output() cocktails = new EventEmitter<string[]>();

  constructor(
    private cocktailService: CocktailService
  ) { }

  ngOnInit() {
    this.cocktailService.getIngredients()
      .subscribe(ingredients => {
        this.ingredients = ingredients;
      });
  }

  setFocus(value: boolean) {
    this.focused = value;
  }

  search(term: string): void {
    if (term.length > 0) {
      this.filteredIngredients = this.ingredients.filter(x => x.strIngredient1.toLowerCase().includes(term.toLowerCase()));
    } else {
      this.filteredIngredients = []
    }
  }

  addIngredient(ingredient: Ingredient) {
    if (!this.selectedIngredients.includes(ingredient.strIngredient1)) {
      this.selectedIngredients.push(ingredient.strIngredient1);
      this.searchCocktails(this.selectedIngredients.join(','));
    }
  }

  removeIngredient(chip: string) {
    this.selectedIngredients.splice(this.selectedIngredients.indexOf(chip), 1);
    if (this.selectedIngredients.length > 0) {
      this.searchCocktails(this.selectedIngredients.join(','));
    } else {
      this.cocktails.emit([])
    }
  }

  searchCocktails(ingredients: string) {
    this.cocktailService.searchCocktailsByIngredients(ingredients)
      .subscribe(cocktails => {
        if (cocktails === 'None Found') {
          this.cocktails.emit([])
        } else {
          console.log(cocktails.length, 'cocktails found for ingredients', ingredients, cocktails)
          this.cocktails.emit(cocktails)
        }
      });
  }
}
