import { createSelector } from 'reselect';
import { getAllProducts } from 'store/products/selectors';
import { AppState } from 'store/rootReducer';
import { CartItem, Product } from 'type-defs';

const getCartItems = (state: AppState) => state.cart.items;

export const getAllProductsFromCart = createSelector(
  [getAllProducts, getCartItems],
  (products: Product[], cartItems: CartItem[]) => {
    const productsFromCart: Product[] = [];
    cartItems.forEach(c => {
      const product = products.find(p => c.productId === p.id);
      if (product) {
        productsFromCart.push(product);
      }
    });
    return productsFromCart;
  }
);

export const getTotalPriceFromCart = createSelector(
  [getAllProductsFromCart],
  (products: Product[]) => {
    return products.reduce((totalPrice, product) => {
      return totalPrice + product.price;
    }, 0);
  }
);
