import { Component } from "@angular/core";
import { OrderItemModel } from "../../models/order-item.interface";

@Component({
  selector: "orders",
  styleUrls: ["orders.component.css"],
  templateUrl: "orders.component.html"
})
export class OrderComponent {
  orderHaeding;
  orderItemsData: OrderItemModel[] = [
    {
      orderId: "xxxx1111",
      productId: "000001",
      productName: "PRODUCT 01",
      quantity: 9999
    },
    {
      orderId: "xxxx2222",
      productName: "PRODUCT 02",
      productId: "000001",
      quantity: 8999
    }
  ];
}
