import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';
import { CocktailSearchComponent } from './components/cocktail-search/cocktail-search.component';
import { IngredientSearchComponent } from './components/ingredient-search/ingredient-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/cocktails', pathMatch: 'full' },
  {
    path: 'cocktails', component: CocktailSearchComponent, children: [
      { path: ':id', component: CocktailDetailComponent },
    ]
  },
  {
    path: 'ingredients', component: IngredientSearchComponent, children: [
      { path: ':id', component: CocktailDetailComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
