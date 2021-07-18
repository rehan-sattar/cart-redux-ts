import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Product } from 'type-defs';
import { addToCart } from 'store/cart/actions';
import { AppState } from 'store/rootReducer';

export const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: AppState) => state.cart.items);

  const addItemToCart = () => {
    const item = {
      id: nanoid(),
      productId: product.id,
      quantity: 1,
    };
    dispatch(addToCart(item));
  };

  return (
    <div className="products__item">
      <div>
        <strong>{product.title}</strong>
      </div>
      <div>{product.category}</div>
      <div>Price: {product.price} $</div>
      <div>
        <button
          onClick={addItemToCart}
          disabled={cartItems.some(c => c.productId === product.id)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
