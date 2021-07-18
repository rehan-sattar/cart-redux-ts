import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from 'store/cart/actions';
import { Product } from 'type-defs';

export const CartItem: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="cart__item">
      <div>Product Name: {product.title}</div>
      <br />
      <div>Description: {product.description}</div>
      <br />
      <div>Price: {product.price}</div>
      <br />
      <button onClick={removeItemFromCart}>X</button>
    </div>
  );
};
