import { Component, Input } from "@angular/core";
import { OrderItemModel } from "../../models/order-item.interface";

@Component({
  selector: "order-items",
  templateUrl: "order-items.component.html",
  styleUrls: ["order-items.component.css"]
})
export class OrderItemsComponent {
  @Input() orderItems: OrderItemModel[];
}
