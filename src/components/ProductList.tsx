import React from 'react';
import { Product } from 'type-defs';
import { ProductItem } from './ProductItem';

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="products">
      {products.map(product => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </div>
  );
};
