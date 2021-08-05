import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css'],
})
export class CategoryNavComponent implements OnInit {
  @Input() selectedCategory: string;
  @Output() selectionEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  selectCategory(selectedCategoryName: string): void {
    this.selectionEvent.emit(selectedCategoryName);
  }
}
