import { combineReducers } from 'redux';
import { productReducer } from './products/reducer';
import { cartReducer } from './cart/reducer';

export const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export type AppState = Readonly<ReturnType<typeof rootReducer>>;
