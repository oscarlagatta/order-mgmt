import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
  @Input() order: Order;
  constructor() {}

  ngOnInit() {}
}
