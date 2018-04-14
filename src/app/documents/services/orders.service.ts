import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Order } from '../models/order.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class OrdersService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http
      .get<Order[]>(`${environment.url}/orders`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createOrder(payload: Order): Observable<Order> {
    return this.http
      .post<Order>(`${environment.url}/orders`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  updateOrder(payload: Order): Observable<Order> {
    return this.http
      .put<Order>(`${environment.url}/orders/${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeOrder(payload: Order): Observable<Order> {
    return this.http
      .delete<any>(`${environment.url}/orders/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
