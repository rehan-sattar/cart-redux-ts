import { Product } from 'type-defs';
import { ProductActions } from './actions';
import * as ActionTypes from './types';

export type ProductState = {
  loading: boolean;
  data: Product[];
  error: string;
};

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const productReducer = (
  state: ProductState = initialState,
  actions: ProductActions
): ProductState => {
  switch (actions.type) {
    case ActionTypes.GET_PRODUCTS:
      return { ...state, loading: true };
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, data: actions.payload };
    case ActionTypes.GET_PRODUCTS_FAILURE:
      return { ...initialState, error: 'Something went wrong!' };
    default:
      return { ...state };
  }
};
