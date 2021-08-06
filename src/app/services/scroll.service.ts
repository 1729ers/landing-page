import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollDirection = new Subject<number>();
  private position: number;

  constructor() {}

  sendScroll(position: number) {
    const direction = position > this.position ? 1 : -1;
    this.scrollDirection.next(direction);
    this.position = position;
  }

  listenForScroll(): Observable<any> {
    return this.scrollDirection.asObservable();
  }
}
