import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingLogosComponent } from './sliding-logos.component';

describe('SlidingLogosComponent', () => {
  let component: SlidingLogosComponent;
  let fixture: ComponentFixture<SlidingLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingLogosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
