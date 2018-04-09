import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  orders: Order[];

  constructor(private orderService: OrdersService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }
}
