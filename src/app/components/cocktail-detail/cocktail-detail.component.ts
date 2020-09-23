import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cocktail } from '../../interfaces/cocktail';
import { CocktailService } from '../../cocktail.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.css']
})
export class CocktailDetailComponent implements OnInit {
  @Input() cocktail: Cocktail;
  ingredients = [];

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService
  ) { }

  ngOnInit(): void {
    this.getCocktail(11007);
  }

  getCocktail(id: number): void {
    this.cocktailService.getCocktail(id.toString())
      .subscribe(cocktail => {
        console.log(cocktail)
        this.cocktail = cocktail
        for (let i = 1; i < 16; i++) {
          if (cocktail[`strIngredient${i}`] !== null) {
            this.ingredients.push({
              name: cocktail[`strIngredient${i}`],
              measurement: cocktail[`strMeasure${i}`]
            })
          }
        }
      })
  }

}
