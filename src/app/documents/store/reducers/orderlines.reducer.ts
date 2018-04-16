import * as fromOrderlines from '../actions/orderlines.action';

import { OrderLine } from '../../models/order-line.model';

// interface for the Order Lines State
export interface OrderlinesState {
  entities: { [id: number]: OrderLine };
  loaded: boolean;
  loading: boolean;
}

export const initialState: OrderlinesState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromOrderlines.OrderlinesActions
): OrderlinesState {
  switch (action.type) {
    case fromOrderlines.LOAD_ORDERLINES: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromOrderlines.LOAD_ORDERLINES_SUCCESS: {
      const orderlines = action.payload;
      /**
       * we acutally don't want to repeat this once and again for each
       * reducer, perahps we can create a function and pass it through
       * an utiliy folder and pass the orderlines as an array, and we
       * can give the function a name like 'mapToAnEntity' or something
       * similar where we return this data structure that we are expecting.
       */
      const entities = orderlines.reduce(
        (entities: { [id: number]: OrderLine }, orderline: OrderLine) => {
          return {
            ...entities,
            [orderline.id]: orderline,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loaded: true,
        loading: false,
        entities,
      };
    }
    case fromOrderlines.LOAD_ORDERLINES_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }
  }

  return state;
}

export const getOrderlineEntities = (state: OrderlinesState) => state.entities;
export const getOrderlinesLoaded = (state: OrderlinesState) => state.loaded;
export const getOrderlinesLoading = (state: OrderlinesState) => state.loading;
