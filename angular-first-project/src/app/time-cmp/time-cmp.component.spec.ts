import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCmpComponent } from './time-cmp.component';

describe('TimeCmpComponent', () => {
  let component: TimeCmpComponent;
  let fixture: ComponentFixture<TimeCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
