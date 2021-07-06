import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldCarsComponent } from './old-cars.component';

describe('OldCarsComponent', () => {
  let component: OldCarsComponent;
  let fixture: ComponentFixture<OldCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
