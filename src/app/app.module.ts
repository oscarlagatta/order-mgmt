import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { OrderComponent } from "./orders/containers/orders/orders.component";
import { OrderItemsComponent } from "./orders/containers/order-items/order-items.component";
import { OrdersService } from "./orders/services/orders.service";
import { OrdersModule } from "./orders/orders.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    OrdersModule, // DashboardComponent, SettingsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
