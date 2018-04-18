import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { OrderLine } from '../models/order-line.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class OrderLinesService {
  constructor(private http: HttpClient) {}

  getOrderLines(): Observable<OrderLine[]> {
    return this.http
      .get<OrderLine[]>(`${environment.url}/orderlines`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
