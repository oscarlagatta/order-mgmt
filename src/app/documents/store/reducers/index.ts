/**
 * This is the point where we want to have one particular file
 * and that's why the index is good for this which actually
 * contains all of the reducers for this particular
 * DOCUMENTS MODULE
 */

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromOrders from './orders.reducer';

export interface DocumentsState {
  orders: fromOrders.OrderState;
}

/**
 * a slice of state is managed by a reducer function
 * e.g the slice of state called orders and is managed by
 * fromOrders.reducer; and we can type check the reducers
 * constants with ActionReducerMap which accepts a generic
 * type.
 */
export const reducers: ActionReducerMap<DocumentsState> = {
  orders: fromOrders.reducer,
};

// create the base level of our state object
// The following constant holds a selector for our entire
// lazy loaded MODULE::: DOCUMENTS MODULE
export const getDocumentsState = createFeatureSelector<DocumentsState>(
  'documents'
);
