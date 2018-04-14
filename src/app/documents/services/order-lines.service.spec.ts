import { TestBed, inject } from '@angular/core/testing';

import { OrderLinesService } from './order-lines.service';

describe('OrderLinesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderLinesService]
    });
  });

  it('should be created', inject([OrderLinesService], (service: OrderLinesService) => {
    expect(service).toBeTruthy();
  }));
});
