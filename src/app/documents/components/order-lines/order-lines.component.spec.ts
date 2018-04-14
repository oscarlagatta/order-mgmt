import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLinesComponent } from './order-lines.component';

describe('OrderLinesComponent', () => {
  let component: OrderLinesComponent;
  let fixture: ComponentFixture<OrderLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
