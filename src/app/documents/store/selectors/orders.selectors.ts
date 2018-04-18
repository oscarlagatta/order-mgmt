import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
// Because this is a feature module we are asking
// for some of the logic we've put in that index.ts file
// inside the reducer
import * as fromFeature from '../reducers';
import * as fromOrders from '../reducers/orders.reducer';
import { Order } from '../../models/order.model';

// orders state
export const getOrderState = createSelector(
  fromFeature.getDocumentsState,
  (state: fromFeature.DocumentsState) => state.orders
);

export const getOrdersEntities = createSelector(
  getOrderState,
  fromOrders.getOrdersEntities
);

/**
 * We call it getSelectedOrder because when we navigate to /1 or /2
 * that in itself we want to say that's the selected order, and we know is the
 * selected order because the routeParams are telling us that we are currently
 * at that route.
 */
export const getSelectedOrder = createSelector(
  getOrdersEntities,
  fromRoot.getRouterState,
  (entities, router): Order => {
    // we use the router state
    // to lookup an entity
    // and the router state will tell us
    // the id of the order we are on
    return router.state && entities[router.state.params.orderId];
  }
);

export const getAllOrders = createSelector(getOrdersEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

export const getOrdersLoaded = createSelector(
  getOrderState,
  fromOrders.getOrdersLoaded
);
export const getOrdersLoading = createSelector(
  getOrderState,
  fromOrders.getOrdersLoading
);
