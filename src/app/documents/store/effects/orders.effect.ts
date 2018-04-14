import { Injectable } from '@angular/core';

// Actions is an observable, we listen and respond accordingly
import { Effect, Actions } from '@ngrx/effects';
// switchMap allows us to return a brand new observable
// which we can then do things like Map over and then
// dispatch a new action.
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as orderActions from '../actions/orders.action';
import * as fromServices from '../../services';

@Injectable()
export class OrdersEffects {
  constructor(
    private actions$: Actions,
    private ordersService: fromServices.OrdersService
  ) {}

  @Effect()
  loadOrders$ = this.actions$.ofType(orderActions.LOAD_ORDERS).pipe(
    switchMap(() => {
      return this.ordersService
        .getOrders()
        .pipe(
          map(orders => new orderActions.LoadOrdersSuccess(orders)),
          catchError(error => of(new orderActions.LoadOrdersFail(error)))
        );
    })
  );
}
