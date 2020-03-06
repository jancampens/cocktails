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

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService
  ) { }

  ngOnInit(): void {
    this.getCocktail();
  }

  getCocktail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cocktailService.getCocktail(id.toString())
      .subscribe(cocktail => this.cocktail = cocktail);
  }

}
