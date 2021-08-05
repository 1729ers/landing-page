import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css'],
})
export class QuoteCardComponent implements OnInit {
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}
}
