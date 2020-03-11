import { Component, OnInit, Input } from '@angular/core';

import { Cocktail } from '../../interfaces/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  @Input() cocktails: Cocktail[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.cocktails);
  }

}
