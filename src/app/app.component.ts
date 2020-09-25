import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

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

  @ViewChild('viewCocktails') viewCocktails: ElementRef;
  @ViewChild('viewIngredients') viewIngredients: ElementRef;

  @HostListener('wheel', ['$event'])
  onScroll(event:WheelEvent) {
    if (event.deltaY > 0) {
      this.view = 'cocktails'
    } else {
      this.view = 'ingredients'
    }

    this.switchView();
  }

  switchView(): void {
    if (this.view === 'cocktails') {
      this.viewIngredients.nativeElement.scrollIntoView({ behavior: 'smooth' });
      this.view = 'ingredients';
    } else {
      this.viewCocktails.nativeElement.scrollIntoView({ behavior: 'smooth' });
      this.view = 'cocktails';
    }
  }

  renderCocktails(cocktails: Cocktail[]) {
    this.cocktails = cocktails;
  }
}
