import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: CocktailDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
