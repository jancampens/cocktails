import { Component, OnInit } from '@angular/core';

import  *  as  quotes  from  'src/assets/quotes.json';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  backgroundImage: string;
  quotes:  any  = (quotes  as  any).default;
  quote: string;
  cite: string;
  images = [
    'aperol',
    'cosmopolitan',
    'espresso-martini',
    'gin-and-tonic-bubble-glass',
    'gin-and-tonic',
    'margarita',
    'pornstar-martini',
    'sicilian-sour',
    'whisky'
  ];

  ngOnInit(): void {
    let index = 0;

    this.setContent(0);

    setInterval(() => {
      if (index < this.images.length - 1) {
        index++;
      } else {
        index = 0;
      };

      this.setContent(index);
    }, 8000);
  }

  setContent(index: number) {
    this.backgroundImage = `url('../../assets/images/backgrounds/${this.images[index]}.jpg')`
    this.quote = `“${this.quotes[index].quote}”`;
    this.cite = `— ${this.quotes[index].cite}`;
  }
}
