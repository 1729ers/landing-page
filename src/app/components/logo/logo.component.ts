import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent implements OnInit {
  @Input() src: string;
  // 1 = right, left = -1
  @Input() direction: number;
  offset: number;

  constructor(private scrollService: ScrollService, private elRef: ElementRef) {
    this.scrollService.listenForScroll().subscribe((scrollDirection) => {
      this.incrementOffset(scrollDirection);
    });
  }

  ngOnInit(): void {
    this.offset = 0;
  }

  incrementOffset(scrollDirection: number): void {
    const speed = 5;
    var newOffset = this.offset + this.direction * speed * scrollDirection;
    const startingPosition = this.elRef.nativeElement.offsetLeft;
    const componentWidth = this.elRef.nativeElement.offsetWidth;
    const screenWidth = window.innerWidth;
    if (newOffset < -(startingPosition + componentWidth)) {
      newOffset = screenWidth - startingPosition;
    } else if (newOffset > screenWidth - startingPosition) {
      newOffset = -(startingPosition + componentWidth);
    }
    this.offset = newOffset;
  }
}
