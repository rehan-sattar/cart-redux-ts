import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  UPDATE_CART_ITEM,
  CLEAR_CART,
} from './types';
import { CartItem } from 'type-defs';

export interface AddToCartAction {
  type: typeof ADD_ITEM_TO_CART;
  payload: CartItem;
}

export interface RemoveFromCartAction {
  type: typeof REMOVE_ITEM_FROM_CART;
  payload: number;
}

export interface UpdateCartItemAction {
  type: typeof UPDATE_CART_ITEM;
  payload: CartItem;
}

export interface ClearCartAction {
  type: typeof CLEAR_CART;
}

export const addToCart = (cartItem: CartItem): AddToCartAction => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: cartItem,
  };
};

export const removeFromCart = (productId: number): RemoveFromCartAction => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: productId,
  };
};

export const updateCartItem = (updatedCart: CartItem): UpdateCartItemAction => {
  return {
    type: UPDATE_CART_ITEM,
    payload: updatedCart,
  };
};

export const clearCart = (): ClearCartAction => {
  return {
    type: CLEAR_CART,
  };
};

export type CartActions =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateCartItemAction
  | ClearCartAction;
