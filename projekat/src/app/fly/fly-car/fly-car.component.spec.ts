import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyCarComponent } from './fly-car.component';

describe('FlyCarComponent', () => {
  let component: FlyCarComponent;
  let fixture: ComponentFixture<FlyCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
