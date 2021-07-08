import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldCarDetailComponent } from './old-car-detail.component';

describe('OldCarDetailComponent', () => {
  let component: OldCarDetailComponent;
  let fixture: ComponentFixture<OldCarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldCarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldCarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
