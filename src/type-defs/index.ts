export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity?: number;
}

export interface ProductState {
  products: Product[];
}

export interface CartItem {
  id: string;
  productId: number;
  quantity: number;
}
