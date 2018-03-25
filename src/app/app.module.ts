import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { OrderComponent } from "./orders/containers/orders/orders.component";
import { OrderItemsComponent } from "./orders/containers/order-items/order-items.component";
import { OrdersService } from "./orders/services/orders.service";

@NgModule({
  declarations: [AppComponent, OrderComponent, OrderItemsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
