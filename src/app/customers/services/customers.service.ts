
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CustomerModel } from "../models/customer.interface";

import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";

///https://angular.io/guide/architecture-services
@Injectable()
export class CustomersService {
  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<CustomerModel[]> {
    return this.httpClient
      .get<CustomerModel[]>(`http://localhost:3400/customers`)
      .pipe(catchError(error => Observable.throw(error.json())));
  }
}
