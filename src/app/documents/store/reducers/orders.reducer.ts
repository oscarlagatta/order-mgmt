import { Order } from '../../models/order.model';
import * as fromOrders from '../actions/orders.action';

export interface OrderState {
  entities: { [id: number]: Order };
  loaded: boolean;
  loading: boolean;
}

export const initialState: OrderState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromOrders.OrdersAction
): OrderState {
  switch (action.type) {
    case fromOrders.LOAD_ORDERS: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromOrders.LOAD_ORDERS_SUCCESS: {
      const orders = action.payload;
      const entities = orders.reduce(
        (entities: { [id: number]: Order }, order: Order) => {
          return {
            ...entities,
            [order.id]: order,
          };
        },
        {
          ...state.entities,
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }
    case fromOrders.LOAD_ORDERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }
  return state;
}

export const getOrdersEntities = (state: OrderState) => state.entities;
export const getOrdersLoading = (state: OrderState) => state.loading;
export const getOrdersLoaded = (state: OrderState) => state.loaded;
