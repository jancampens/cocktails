import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';
import { CocktailSearchComponent } from './components/cocktail-search/cocktail-search.component';


@NgModule({
  declarations: [
    AppComponent,
    CocktailDetailComponent,
    CocktailSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
