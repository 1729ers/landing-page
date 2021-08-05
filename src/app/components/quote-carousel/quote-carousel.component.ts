import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-carousel',
  templateUrl: './quote-carousel.component.html',
  styleUrls: ['./quote-carousel.component.css'],
})
export class QuoteCarouselComponent implements OnInit {
  @Input() quotes: any[];

  constructor() {}

  ngOnInit(): void {}

  shiftRight(): void {
    // shift order of quote cards to the right, the last card will become the first card
    this.quotes.unshift(this.quotes.pop());
  }
  shiftLeft(): void {
    // shift order of quote cards to the left, the first card will become the last card
    this.quotes.push(this.quotes.shift());
  }
}
