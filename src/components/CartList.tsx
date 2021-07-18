import React from 'react';
import { Product } from 'type-defs';
import { CartItem } from './CartItem';

interface ProductListProps {
  products: Product[];
}

export const CartList: React.FC<ProductListProps> = ({ products }) => {
  if (!products.length) {
    return <div>Your cart is empty at the moment.</div>;
  }
  return (
    <div className="cart">
      {products.map(p => {
        return <CartItem product={p} />;
      })}
    </div>
  );
};
