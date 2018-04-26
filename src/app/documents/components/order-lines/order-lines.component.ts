import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { OrderLine } from '../../models/order-line.model';

const ORDER_LINES_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => OrderLinesComponent),
  multi: true,
};

@Component({
  selector: 'order-lines',
  providers: [ORDER_LINES_ACCESSOR],
  templateUrl: './order-lines.component.html',
  styleUrls: ['./order-lines.component.scss'],
})
export class OrderLinesComponent implements OnInit {
  @Input() orderlines: OrderLine[] = [];

  value: OrderLine[] = [];

  private onTouch: Function;
  private onModelChange: Function;

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: OrderLine[]) {
    this.value = value;
  }

  constructor() {}

  ngOnInit() {}

  selectOrderline(line: OrderLine) {
    if (this.existsInOrderLines(line)) {
      this.value = this.value.filter(item => item.id !== line.id);
    } else {
      this.value = [...this.value, line];
    }
    this.onTouch();
    this.onModelChange(this.value);
  }

  existsInOrderLines(orderline: OrderLine) {
    return this.value.some(val => val.id === orderline.id);
  }
}
