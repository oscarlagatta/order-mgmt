import { Action } from '@ngrx/store';

import { OrderLine } from '../../models/order-line.model';

/**
 * with [Documents] we create are creating or faking a namespace
 * the reason is we can have multiple actions under the same name
 * e.g. if we have the Load Order Lines, but we can have a
 *      Load Order Lines in a complete different module. We might
 *      be doing something else in a bigger application with the
 *      Load Order Lines.
 *      Let's assume is part of the Dashboard module, so if we
 *      were in a 'Dashboard' we might be doing something like
 *      '[Dashboard] Load Order Lines' and this is not going to
 *      conflict with any other actions and the reducers that are
 *      listening for these actions to be dispatched. So using an
 *      Alias or NameSpace and we have the Load Order Lines.
 *      The idea is to keep the namespace consistent via the
 *      MODULE we are using.
 *      In this case we are lazy loading the Documents module and
 *      every action will be namespaced with [Documents]
 */
export const LOAD_ORDERLINES = '[Documents] Load Order Lines';
export const LOAD_ORDERLINES_FAIL = '[Documents] Load Order Lines Fail';
export const LOAD_ORDERLINES_SUCCESS = '[Documents] Load Order Lines Success';

export class LoadOrderlines implements Action {
  readonly type = LOAD_ORDERLINES;
}

export class LoadOrderlinesFail implements Action {
  readonly type = LOAD_ORDERLINES_FAIL;
  /**
   *
   * @param payload
   * the any type will allows us to pass any error
   * message back from the server
   */
  constructor(public payload: any) {}
}

export class LoadOrderlinesSuccess implements Action {
  readonly type = LOAD_ORDERLINES_SUCCESS;
  constructor(public payload: OrderLine[]) {}
}

// action types
export type OrderlinesActions =
  | LoadOrderlines
  | LoadOrderlinesFail
  | LoadOrderlinesSuccess;
