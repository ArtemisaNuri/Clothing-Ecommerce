
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
};

export const filterProducts = (products: any[], filters: any) => {
  return products.filter(product => {
    // Filter by price
    if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
      const price = product.salePrice || product.price;
      if (price < filters.minPrice || price > filters.maxPrice) return false;
    }

    // Filter by sizes
    if (filters.sizes && filters.sizes.length > 0) {
      if (!product.sizes.some((size: string) => filters.sizes.includes(size))) return false;
    }

    // Filter by colors
    if (filters.colors && filters.colors.length > 0) {
      if (!product.colors.some((color: { name: string }) => filters.colors.includes(color.name))) return false;
    }

    return true;
  });
};

export const sortProducts = (products: any[], sortBy?: string) => {
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'price-low':
      return sortedProducts.sort((a, b) => {
        const priceA = a.salePrice || a.price;
        const priceB = b.salePrice || b.price;
        return priceA - priceB;
      });
    case 'price-high':
      return sortedProducts.sort((a, b) => {
        const priceA = a.salePrice || a.price;
        const priceB = b.salePrice || b.price;
        return priceB - priceA;
      });
    case 'newest':
    default:
      return sortedProducts;
  }
};
