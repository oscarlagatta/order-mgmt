import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";

import { OrdersService } from "./orders/services/orders.service";
import { OrdersModule } from "./orders/orders.module";
import { CustomersModule } from "./customers/customers.module";
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    OrdersModule, // DashboardComponent, SettingsComponent
    CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
