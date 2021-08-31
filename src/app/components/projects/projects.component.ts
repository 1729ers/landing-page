import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  topLogos: string[] = [
    '../../../assets/portanorte.png',
    '../../../assets/fairground.png',
  ];
  bottomLogos: string[] = [
    '../../../assets/bacondao.png',
    '../../../assets/citydao.png',
  ];

  constructor() {}

  ngOnInit(): void {}
}
