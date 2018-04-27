import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

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

  visualise$: Observable<Order>;

  constructor(private store: Store<fromStore.DocumentsState>) {}

  ngOnInit() {
    // we move into the documents component, because we want to control where the
    // load Orders and load order lines where actually is taking place ,
    // we can hit /orders in the url so we can make sure the ordres and the orderlines
    // are both loaded so that when we click through to a particular order everything
    // is readily availble.

    //this.store.dispatch(new fromStore.LoadOrderlines()); // REMOVED LINE MOVED TO DOCUMENTS COMPONENT

    // the component won't display any of the orderlines, because when we actually load this component,
    // the orderlines are already loaded in the background. When we load this particular view we need
    // to dispatch an action on initialization of the component so we can say....
    // - this is the order that we want to visualise

    // If we don't dispatch the orderlines will be shown only when we make changes, therefore we need
    // an initial dispatch when we load this VIEW.

    // There are a couple of approaches we can take, we can subscribe to the this.orders$ and then
    // branch out of that.
    // But because the "store.select" method returns an OBSERVABLE, we can use the .pipe()
    this.order$ = this.store.select(fromStore.getSelectedOrder).pipe(
      // we introduce the "tap" operator that steps out of the observable stream and
      // do something with the data , also anything we do inside doesn't get returned to the stream,
      /// it doesn't mutate the stream either.
      tap((order: Order = null) => {
        // we default the order to null for the following case
        // if we have  the url with '/orders/1' the getSelectedOrder is using the router state
        // but if we nagivate to '/order/new' we want to create a new Order but we are actually
        // using the same component.
        // So we are doing some logic here to check if we are creating a new Order in case we
        // want to empty the state of the visualise orderlines
        const orderExists = !!(order && order.orderlines);
        // then we need to map and grab the id(s) as we are getting the actual orderlines objects
        // inside the order.
        const orderlines = orderExists
          ? order.orderlines.map(orderline => orderline.id)
          : [];

        this.store.dispatch(new fromStore.VisualiseOrderlines(orderlines));
      })
    );

    this.orderlines$ = this.store.select(fromStore.getAllOrderlines);

    this.visualise$ = this.store.select(fromStore.getOrderVisualised);
  }

  onSelect(event: number[]) {
    // dispatch new action
    this.store.dispatch(new fromStore.VisualiseOrderlines(event));

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
