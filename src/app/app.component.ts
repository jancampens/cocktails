import { Component, ViewChild, ElementRef } from '@angular/core';

import { Cocktail } from './interfaces/cocktail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode = 'filter';
  title = 'cocktails';
  cocktails: Cocktail[];
  view = 'cocktails';
  @ViewChild('viewCocktails') viewCocktails: ElementRef;
  @ViewChild('viewIngredients') viewIngredients: ElementRef;

  onArrowClick(): void {
    if (this.view === 'cocktails') {
      this.viewIngredients.nativeElement.scrollIntoView({behavior: 'smooth'}); 
      this.view = 'ingredients'
    } else {
      this.viewCocktails.nativeElement.scrollIntoView({behavior: 'smooth'}); 
      this.view = 'cocktails'
    }
  }

  renderCocktails(cocktails: Cocktail[]) {
    this.cocktails = cocktails;
  }
}
