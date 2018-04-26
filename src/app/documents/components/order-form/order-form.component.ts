import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

import { map } from 'rxjs/operators';

import { Order } from '../../models/order.model';
import { OrderLine } from '../../models/order-line.model';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit, OnChanges {
  exists: boolean = false;

  @Input() order: Order;
  @Input() orderlines: OrderLine[];

  @Output() selected = new EventEmitter<Order>();
  @Output() create = new EventEmitter<Order>();
  @Output() update = new EventEmitter<Order>();
  @Output() remove = new EventEmitter<Order>();

  form = this.fb.group({
    customerName: ['', Validators.required],
    orderlines: [[]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.order && this.order.id) {
      this.exists = true;
      this.form.patchValue(this.order);
    }
    this.form
      .get('orderlines')
      .valueChanges.pipe(
        map(orderlines => orderlines.map((line: OrderLine) => line.id))
      )
      .subscribe(value => {
        console.log(`value::: ${value}`);
        return this.selected.emit(value);
      });
  }

  ngOnInit() {}

  get customerNameControl() {
    return this.form.get('customerName') as FormControl;
  }

  get nameControlInvalid() {
    return (
      this.customerNameControl.hasError('required') &&
      this.customerNameControl.touched
    );
  }

  createOrder(form: FormGroup) {
    const { value, valid } = form;
    if (valid) {
      this.create.emit(value);
    }
  }

  updateOrder(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.order, ...value });
    }
  }

  removeOrder(form: FormGroup) {
    const { value } = form;
    this.remove.emit({ ...this.order, ...value });
  }
}
