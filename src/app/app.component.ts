import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'landing-page';
  @ViewChild('app', { static: true }) _app: ElementRef;

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    fromEvent(this._app.nativeElement, 'scroll').subscribe((e: any) => {
      this.scrollService.sendScroll(e.target.scrollTop);
    });
  }
}
