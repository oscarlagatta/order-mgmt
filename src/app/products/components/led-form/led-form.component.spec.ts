import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedFormComponent } from './led-form.component';

describe('LedFormComponent', () => {
  let component: LedFormComponent;
  let fixture: ComponentFixture<LedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
