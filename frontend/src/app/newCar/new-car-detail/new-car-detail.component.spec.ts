import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarDetailComponent } from './new-car-detail.component';

describe('NewCarDetailComponent', () => {
  let component: NewCarDetailComponent;
  let fixture: ComponentFixture<NewCarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
