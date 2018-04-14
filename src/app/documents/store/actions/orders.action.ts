import { Action } from '@ngrx/store';
import { Order } from '../../models/order.model';

// load orders
export const LOAD_ORDERS = '[Documents] Load Orders';
export const LOAD_ORDERS_FAIL = '[Documents] Load Orders Fail';
export const LOAD_ORDERS_SUCCESS = '[Documents] Load Orders Success';

// action creators
export class LoadOrders implements Action {
  readonly type = LOAD_ORDERS;
}

export class LoadOrdersFail implements Action {
  readonly type = LOAD_ORDERS_FAIL;
  constructor(public payload: any) {}
}

export class LoadOrdersSuccess implements Action {
  readonly type = LOAD_ORDERS_SUCCESS;
  constructor(public payload: Order[]) {}
}

// action types
export type OrdersAction = LoadOrders | LoadOrdersFail | LoadOrdersSuccess;
