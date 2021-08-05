import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css'],
})
export class QuoteCardComponent implements OnInit {
  @Input() text: string;
  @Input() author: string;
  @Input() author_bg: string;

  constructor() {}

  ngOnInit(): void {}
}
