import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store/rootReducer';

import { getProducts } from 'store/products/actions';
import { Product } from 'type-defs';
import { ProductList } from 'components/ProductList';

function Products() {
  const dispatch = useDispatch();
  const loading: boolean = useSelector(
    (state: AppState) => state.products.loading
  );
  const products: Product[] = useSelector(
    (state: AppState) => state.products.data
  );
  const error: string = useSelector((state: AppState) => state.products.error);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products]);

  if (loading) {
    return <div>loading products...</div>;
  }

  if (error) {
    return <div>{'error: ' + error}</div>;
  }

  return <ProductList products={products} />;
}

export default Products;
