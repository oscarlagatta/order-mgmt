import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { OrderItemModel } from "../models/order-item.interface";

import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";

///https://angular.io/guide/architecture-services
@Injectable()
export class OrdersService {
  constructor(private httpClient: HttpClient) {}

  getOrders(): Observable<OrderItemModel[]> {
    return this.httpClient
      .get<OrderItemModel[]>(`http://localhost:3400/orders`)
      .pipe(catchError(error => Observable.throw(error.json())));
  }
}
