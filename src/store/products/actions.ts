import { Dispatch } from 'redux';
import { Product } from 'type-defs';
import { getProducts as getProductsService } from 'services/product';
import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
} from './types';

export interface GetProductsAction {
  readonly type: typeof GET_PRODUCTS;
}

export interface SetProductsAction {
  readonly type: typeof GET_PRODUCTS_SUCCESS;
  readonly payload: Product[];
}

export interface GetProductsFailureAction {
  readonly type: typeof GET_PRODUCTS_FAILURE;
}

const startFetchingProducts = (): GetProductsAction => {
  return {
    type: GET_PRODUCTS,
  };
};

const setProducts = (products: Product[]): SetProductsAction => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

const getProductsFailed = (): GetProductsFailureAction => {
  return {
    type: GET_PRODUCTS_FAILURE,
  };
};

/**
 * A union for all the actions
 */
export type ProductActions =
  | GetProductsAction
  | SetProductsAction
  | GetProductsFailureAction;

/**
 * getProducts - an action creator for getting all the products
 *
 * This will dispatch three different actions based on three different
 * states such as loading, success and failure.
 */
export const getProducts = () => async (dispatch: Dispatch<ProductActions>) => {
  try {
    dispatch(startFetchingProducts());
    const products = await getProductsService();
    dispatch(setProducts(products));
  } catch (err) {
    dispatch(getProductsFailed());
  }
};
