import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../models/order.model';

@Component({
  selector: 'order-display',
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.scss'],
})
export class OrderDisplayComponent implements OnInit {
  @Input() order: Order;
  constructor() {}

  ngOnInit() {}
}
