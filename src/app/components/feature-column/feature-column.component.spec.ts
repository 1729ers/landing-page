import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureColumnComponent } from './feature-column.component';

describe('FeatureColumnComponent', () => {
  let component: FeatureColumnComponent;
  let fixture: ComponentFixture<FeatureColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
