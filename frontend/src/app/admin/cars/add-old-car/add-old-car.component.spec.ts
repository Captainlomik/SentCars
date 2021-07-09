import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOldCarComponent } from './add-old-car.component';

describe('AddOldCarComponent', () => {
  let component: AddOldCarComponent;
  let fixture: ComponentFixture<AddOldCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOldCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOldCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
