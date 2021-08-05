import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.css'],
})
export class CategoryButtonComponent implements OnInit {
  @Input() text: string;
  @Input() selected: boolean = false;
  @Output() clickEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.clickEvent.emit(this.text);
  }
}
