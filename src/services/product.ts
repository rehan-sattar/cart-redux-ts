import { Product } from '../type-defs';

export const getProducts = async (): Promise<Product[]> =>
  fetch('https://fakestoreapi.com/products').then(res => res.json());
