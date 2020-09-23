import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Cocktail } from '../../interfaces/cocktail';
import { CocktailService } from '../../cocktail.service';

@Component({
  selector: 'app-cocktail-search',
  templateUrl: './cocktail-search.component.html',
  styleUrls: ['./cocktail-search.component.css']
})
export class CocktailSearchComponent implements OnInit {
  cocktails$: Observable<Cocktail[]>;
  @Output() cocktailClick = new EventEmitter();
  private searchTerms = new Subject<string>();
  focused = false;

  constructor(
    private cocktailService: CocktailService
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }
  
  setFocus(value:boolean){
    this.focused = value;
 }

  ngOnInit(): void {
    this.cocktails$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.cocktailService.searchCocktails(term)),
    );
  }

}
