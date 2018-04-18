import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as orderlinesActions from '../actions/orderlines.action';
import * as fromServices from '../../services/order-lines.service';

@Injectable()
export class OrderlinesEffects {
  constructor(
    private actions$: Actions,
    private orderlinesService: fromServices.OrderLinesService
  ) {}

  @Effect()
  loadOrderlines$ = this.actions$
    .ofType(orderlinesActions.LOAD_ORDERLINES)
    .pipe(
      switchMap(() => {
        return this.orderlinesService
          .getOrderLines()
          .pipe(
            map(
              orderlines =>
                new orderlinesActions.LoadOrderlinesSuccess(orderlines)
            ),
            catchError(error =>
              of(new orderlinesActions.LoadOrderlinesFail(error))
            )
          );
      })
    );
}
