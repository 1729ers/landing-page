import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliding-logos',
  templateUrl: './sliding-logos.component.html',
  styleUrls: ['./sliding-logos.component.css'],
})
export class SlidingLogosComponent implements OnInit {
  // right = 1, left = -1
  @Input() direction: number;

  constructor() {}

  ngOnInit(): void {}
}
