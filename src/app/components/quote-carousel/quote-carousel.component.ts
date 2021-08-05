import { Component, OnInit } from '@angular/core';
import quotes from './quotes.json';

@Component({
  selector: 'app-quote-carousel',
  templateUrl: './quote-carousel.component.html',
  styleUrls: ['./quote-carousel.component.css'],
})
export class QuoteCarouselComponent implements OnInit {
  currentQuotes: any[] = quotes['Network states'];

  constructor() {}

  ngOnInit(): void {}

  shiftRight(): void {
    // shift order of quote cards to the right, the last card will become the first card
    this.currentQuotes.unshift(this.currentQuotes.pop());
  }
  shiftLeft(): void {
    // shift order of quote cards to the left, the first card will become the last card
    this.currentQuotes.push(this.currentQuotes.shift());
  }
}
