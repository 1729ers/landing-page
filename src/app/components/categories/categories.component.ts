import { Component, OnInit } from '@angular/core';
import quotes from './quotes.json';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  activeCategory: string;
  // must convert JSON to any variable so TS knows what's going on
  allQuotes: any = quotes;
  currentQuotes: any[];

  constructor() {}

  ngOnInit(): void {
    this.activeCategory = 'Network states';
    this.currentQuotes = this.allQuotes[this.activeCategory];
  }

  setActive(categoryName: string) {
    this.activeCategory = categoryName;
    this.currentQuotes = this.allQuotes[this.activeCategory];
  }
}
