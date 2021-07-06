import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentCarComponent } from './sent-car.component';

describe('SentCarComponent', () => {
  let component: SentCarComponent;
  let fixture: ComponentFixture<SentCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
