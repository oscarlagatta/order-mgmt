import { Order } from '../../models/order.model';
import * as fromOrders from '../actions/orders.action';

export interface OrderState {
  data: Order[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: OrderState = {
  data: [],
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
      console.log(action.payload);
      const data = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        data,
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

export const getOrdersLoading = (state: OrderState) => state.loading;
export const getOrdersLoaded = (state: OrderState) => state.loaded;
export const getOrders = (state: OrderState) => state.data;
