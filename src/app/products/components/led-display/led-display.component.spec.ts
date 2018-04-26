import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedDisplayComponent } from './led-display.component';

describe('LedDisplayComponent', () => {
  let component: LedDisplayComponent;
  let fixture: ComponentFixture<LedDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
