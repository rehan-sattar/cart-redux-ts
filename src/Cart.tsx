import { CartList } from 'components/CartList';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProductsFromCart,
  getTotalPriceFromCart,
} from 'store/cart/selectors';
import { clearCart } from 'store/cart/actions';

export const Cart: React.FC<{}> = () => {
  const cartProducts = useSelector(getAllProductsFromCart);
  const totalPrice = useSelector(getTotalPriceFromCart);
  const dispatch = useDispatch();

  const proceedCheckout = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-page">
      <h2>Total Price:{Math.round(totalPrice)}</h2>
      <button onClick={proceedCheckout}>Checkout</button>
      <br />
      <CartList products={cartProducts} />
    </div>
  );
};
