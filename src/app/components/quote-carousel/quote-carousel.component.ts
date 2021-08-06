import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-carousel',
  templateUrl: './quote-carousel.component.html',
  styleUrls: ['./quote-carousel.component.css'],
})
export class QuoteCarouselComponent implements OnInit {
  @Input() quotes: any[];
  offset: number;
  index: number;

  constructor() {}

  ngOnInit(): void {
    // initialize index as the middle card
    this.index = ~~(this.quotes.length / 2);
    this.offset = 0;
  }

  shiftLeft(): void {
    if (this.index > 0) {
      // 448 is the width of a card + its margins
      this.offset = this.offset + 448;
      this.index -= 1;
    }
  }
  shiftRight(): void {
    if (this.index < this.quotes.length - 1) {
      // 448 is the width of a card + its margins
      this.offset = this.offset - 448;
      this.index += 1;
    }
  }
}
