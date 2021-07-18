import { AppState } from 'store/rootReducer';

export const getAllProducts = (state: AppState) => state.products.data;
