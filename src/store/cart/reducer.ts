import { CartItem } from 'type-defs';
import { CartActions } from './actions';
import * as ActionTypes from './types';

export type CartState = {
  items: CartItem[];
};

export const cartReducer = (
  state: CartState = { items: [] },
  action: CartActions
): CartState => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return { ...state, items: [...state.items, action.payload] };
    case ActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.productId !== action.payload),
      };
    case ActionTypes.UPDATE_CART_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...action.payload } : item
        ),
      };
    case ActionTypes.CLEAR_CART:
      return {
        items: [],
      };
    default:
      return { ...state };
  }
};
