import { Component, HostListener } from '@angular/core';

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

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
      if (event.deltaY > 0) {
        this.view = 'cocktails'
      } else {
        this.view = 'ingredients'
      }
      this.switchView();
  }

  switchView(): void {
    if (this.view === 'cocktails') {
      window.scrollTo({top: 1000000, behavior: 'smooth'});
      this.view = 'ingredients';
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'});
      this.view = 'cocktails';
    }
  }

  renderCocktails(cocktails: Cocktail[]) {
    this.cocktails = cocktails;
  }
}
