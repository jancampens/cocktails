import { Component } from '@angular/core';

import { Cocktail } from './interfaces/cocktail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode = 'filter';
  title = 'cocktails';
  view = 'cocktails';
  cocktails: Cocktail[];

  renderCocktails(cocktails: Cocktail[]) {
    this.cocktails = cocktails;
  }
}
