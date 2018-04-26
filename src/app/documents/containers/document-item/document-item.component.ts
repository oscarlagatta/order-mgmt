import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

import { Order } from '../../models/order.model';
import { OrderLine } from '../../models/order-line.model';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.scss'],
})
export class DocumentItemComponent implements OnInit {
  order$: Observable<Order>;
  orderlines$: Observable<OrderLine[]>;

  visualise: Order;

  constructor(private store: Store<fromStore.DocumentsState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadOrderlines());

    this.order$ = this.store.select(fromStore.getSelectedOrder);

    this.orderlines$ = this.store.select(fromStore.getAllOrderlines);
  }

  onSelect(event: number[]) {
    console.log('onselect:::', event);
  }

  onCreate(event: Order) {}

  onUpdate(event: Order) {}

  onRemove(event: Order) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
    }
  }
}
