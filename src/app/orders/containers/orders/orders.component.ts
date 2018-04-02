import { Component, OnInit } from "@angular/core";
import { OrderItemModel } from "../../models/order-item.interface";
import { OrdersService } from "../../services/orders.service";

@Component({
  selector: "orders",
  styleUrls: ["orders.component.scss"],
  templateUrl: "orders.component.html"
})
export class OrderComponent implements OnInit {
  orderHaeding;

  orderItemsData: OrderItemModel[] = [];

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    // read data from the service
    this.ordersService.getOrders().subscribe(orders => {
      this.orderItemsData = orders;
    });
  }
}
