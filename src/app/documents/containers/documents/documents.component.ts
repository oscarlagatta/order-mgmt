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

  constructor(private store: Store<fromStore.DocumentsState>) {}
  ngOnInit() {
    this.orders$ = this.store.select<any>(fromStore.getAllOrders);
    this.store.dispatch(new fromStore.LoadOrders());
    // coming from document-item component, moved from document-item.component.ts
    this.store.dispatch(new fromStore.LoadOrderlines());
  }
}
