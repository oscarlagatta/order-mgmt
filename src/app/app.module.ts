import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { OrderComponent } from "./orders/containers/orders/orders.component";
import { OrderItemsComponent } from "./orders/containers/order-items/order-items.component";

@NgModule({
  declarations: [AppComponent, OrderComponent, OrderItemsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
