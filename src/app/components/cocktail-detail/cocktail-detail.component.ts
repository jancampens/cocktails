import { Component, OnInit, Input, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Cocktail } from '../../interfaces/cocktail';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.css']
})
export class CocktailDetailComponent implements OnInit, OnDestroy {
  @Input() cocktail: Cocktail;
  ingredients = [];

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService,
    private renderer: Renderer2,
    private location: Location
  ) {
    this.renderer.addClass(document.body, 'modal-open');
  }

  ngOnInit(): void {
    this.getCocktail();
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }

  getCocktail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cocktailService.getCocktail(id.toString())
      .subscribe(cocktail => {
        this.cocktail = cocktail
        for (let i = 1; i < 16; i++) {
          const ingredientName = cocktail[`strIngredient${i}`];
          if (ingredientName !== null && ingredientName !== '') {
            this.ingredients.push({
              name: cocktail[`strIngredient${i}`],
              measurement: cocktail[`strMeasure${i}`]
            })
          }
        }
      })
  }

  goBack(): void {
    this.location.back();
  }

}
