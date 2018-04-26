import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
// Because this is a feature module we are asking
// for some of the logic we've put in that index.ts file
// inside the reducer
import * as fromFeature from '../reducers';
import * as fromOrders from '../reducers/orders.reducer';

import * as fromOrderlines from './orderlines.selectors';
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

// we use a selector from the orderlines.selector
// Note: we need to think in terms of the existing selectors,
// if we can use an existing selector, as we are in the
// order view which displays the order, we can re use the
// getSelectedOrder; because what we want to do is to take
// that array of selected order lines and merge the
// difference between them; and this is the view level state;
// it's not something we want to keep in our store and select
// the whole object every single time.
// We will introduce a selector from the order lines after; we
// grab the entities and also we grab the selected order line.
export const getOrderVisualised = createSelector(
  getSelectedOrder,
  fromOrderlines.getOrderlinesEntities,
  fromOrderlines.getSelectedOrderlines,
  (order, orderlinesEntities, selectedOrderlines) => {
    // we have now few pieces of state from which we can
    // now return and compose some new state from.
    // When we dispatch an action saying here are the
    // the new orderlines we want to reference the selectedOrderlines,
    // which is the array of those orderlines IDs.
    // To get the actual entities based on this IDs, we can lookup
    // on the orderlines entities.
    const orderlines = selectedOrderlines.map(id => orderlinesEntities[id]);

    // we want to return an updated representation of what an order look like
    // but we don't want to save the new order until the user has committed
    // that change.
    return { ...order, orderlines };
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
