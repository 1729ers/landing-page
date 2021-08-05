import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-column',
  templateUrl: './feature-column.component.html',
  styleUrls: ['./feature-column.component.css'],
})
export class FeatureColumnComponent implements OnInit {
  @Input() text: string;
  @Input() icon: string;

  constructor() {}

  ngOnInit() {
    this.icon = `../../../assets/${this.icon}.svg`;
  }
}
