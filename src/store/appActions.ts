import {
  GetProductsAction,
  GetProductsFailureAction,
  SetProductsAction,
} from 'store/products/actions';
import {
  AddToCartAction,
  RemoveFromCartAction,
  UpdateCartItemAction,
  ClearCartAction,
} from 'store/cart/actions';

export type AppActions =
  | GetProductsAction
  | SetProductsAction
  | GetProductsFailureAction
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateCartItemAction
  | ClearCartAction;
