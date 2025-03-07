
export interface Product {
  id: number;
  name: string;
  price: number;
  salePrice?: number;
  description: string;
  images: string[];
  category: string;
  sizes: string[];
  colors: { name: string; value: string }[];
  isNew?: boolean;
  isFeatured?: boolean;
  onSale?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface FilterOptions {
  minPrice?: number;
  maxPrice?: number;
  sizes?: string[];
  colors?: string[];
  sortBy?: 'price-low' | 'price-high' | 'newest';
}
