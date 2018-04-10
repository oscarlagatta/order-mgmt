import { Component, OnInit } from '@angular/core';
//import { OrdersService } from '../../services';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

import { Order } from '../../models/order.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  orders$: Observable<Order[]>;

  //constructor(private orderService: OrdersService) {}
  constructor(private store: Store<fromStore.DocumentsState>) {}
  //ngOnInit() {
  // this.orderService.getOrders().subscribe(orders => {
  //   this.orders = orders;
  // });
  //}

  ngOnInit() {
    this.orders$ = this.store.select<any>(fromStore.getAllOrders);
    // .subscribe(state => {
    //   console.log(state);
    // });
  }
}
