import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromOrderlines from '../reducers/orderlines.reducer';
import { getOrdersLoaded } from '../reducers/orders.reducer';

/**
 * These selector are essentially composing different levels of
 * our state tree and allowing us to fetch individual properties
 * or perhaps combine properties to return as an OBSERVABLE
 * to our component
 */

export const getOrderlinesState = createSelector(
  fromFeature.getDocumentsState,
  (state: fromFeature.DocumentsState) => state.orderlines
);

export const getOrderlinesEntities = createSelector(
  getOrderlinesState,
  fromOrderlines.getOrderlineEntities
);

// for our componebt to consume
export const getAllOrderlines = createSelector(
  getOrderlinesEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getOrderlinesLoaded = createSelector(
  getOrderlinesState,
  fromOrderlines.getOrderlinesLoaded
);

export const getOrderlinesLoading = createSelector(
  getOrderlinesState,
  fromOrderlines.getOrderlinesLoading
);
