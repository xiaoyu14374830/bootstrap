import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselfigureComponent } from './carouselfigure.component';

describe('CarouselfigureComponent', () => {
  let component: CarouselfigureComponent;
  let fixture: ComponentFixture<CarouselfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
