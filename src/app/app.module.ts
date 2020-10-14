import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';
import { CocktailSearchComponent } from './components/cocktail-search/cocktail-search.component';
import { IngredientSearchComponent } from './components/ingredient-search/ingredient-search.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    CocktailDetailComponent,
    CocktailSearchComponent,
    IngredientSearchComponent,
    CocktailListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
