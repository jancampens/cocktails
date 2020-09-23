import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Ingredient } from '../interfaces/ingredient';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private key = 9973533;
  private cocktailsUrl = `https://www.thecocktaildb.com/api/json/v2/${this.key}/`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getCocktail(id: string): Observable<any> {
    return this.http.get<any>(`${this.cocktailsUrl}/lookup.php?i=${id}`)
      .pipe(
        map(res => res.drinks[0])
      );
  }

  searchCocktails(term: string): Observable<any> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<any>(`${this.cocktailsUrl}/search.php?s=${term}`)
      .pipe(
        map(res => res.drinks)
      );
  }

  searchCocktailsByIngredients(ingredients: string): Observable<any> {
    return this.http.get<any>(`${this.cocktailsUrl}/filter.php?i=${ingredients}`)
      .pipe(
        map(res => res.drinks)
      );
  }

  getIngredients(): Observable<any> {
    return this.http.get<any>(`${this.cocktailsUrl}/list.php?i=list`)
      .pipe(
        map(res => res.drinks)
      );
  }
}
