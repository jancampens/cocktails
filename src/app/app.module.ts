import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';
import { CocktailSearchComponent } from './components/cocktail-search/cocktail-search.component';
import { IngredientSearchComponent } from './components/ingredient-search/ingredient-search.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CocktailDetailComponent,
    CocktailSearchComponent,
    IngredientSearchComponent,
    CocktailListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
