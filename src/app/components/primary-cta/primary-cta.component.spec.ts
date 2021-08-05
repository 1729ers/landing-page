import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryCtaComponent } from './primary-cta.component';

describe('PrimaryCtaComponent', () => {
  let component: PrimaryCtaComponent;
  let fixture: ComponentFixture<PrimaryCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
