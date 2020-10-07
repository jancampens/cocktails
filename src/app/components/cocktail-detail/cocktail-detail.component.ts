import { Component, OnInit, Input, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  parentUrl: string;

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService,
    private renderer: Renderer2,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.renderer.addClass(document.body, 'modal-open');
  }

  ngOnInit(): void {
    this.getCocktail();
    this.activatedRoute.parent.url.subscribe((urlPath) => {
      this.parentUrl = urlPath[urlPath.length - 1].path;
    })
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
    this.router.navigate([this.parentUrl]);
  }
}
