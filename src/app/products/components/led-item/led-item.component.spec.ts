import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedItemComponent } from './led-item.component';

describe('LedItemComponent', () => {
  let component: LedItemComponent;
  let fixture: ComponentFixture<LedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
