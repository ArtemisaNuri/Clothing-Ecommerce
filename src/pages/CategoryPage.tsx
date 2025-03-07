
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import ProductGrid from "@/components/products/ProductGrid";
import Filters from "@/components/products/Filters";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import { getProductsByCategory, categories } from "@/data/products";
import { FilterOptions, Product } from "@/types";
import { filterProducts, sortProducts } from "@/lib/utils";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentCategory, setCurrentCategory] = useState<any>(null);
  
  useEffect(() => {
    if (categoryId) {
      const category = categories.find(cat => cat.id === categoryId);
      setCurrentCategory(category);
      
      const categoryProducts = getProductsByCategory(categoryId);
      setProducts(categoryProducts);
      setFilteredProducts(categoryProducts);
    }
  }, [categoryId]);

  const handleFilterChange = (filters: FilterOptions) => {
    let result = [...products];
    
    // Apply filters
    result = filterProducts(result, filters);
    
    // Apply sorting
    result = sortProducts(result, filters.sortBy);
    
    setFilteredProducts(result);
  };

  // Extract unique sizes and colors from products
  const availableSizes = [...new Set(products.flatMap(product => product.sizes))];
  const availableColors = products.flatMap(product => product.colors)
    .filter((color, index, self) => 
      index === self.findIndex(c => c.name === color.name)
    );

  if (!currentCategory) {
    return (
      <PageLayout>
        <div className="container px-4 py-12">
          <Alert>
            <AlertDescription>Category not found</AlertDescription>
          </Alert>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{currentCategory.name}</h1>
          <p className="text-muted-foreground">{currentCategory.description}</p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden md:block w-64 shrink-0">
            <Filters 
              onFilterChange={handleFilterChange} 
              availableSizes={availableSizes}
              availableColors={availableColors}
            />
          </div>

          {/* Mobile Filters */}
          <div className="md:hidden mb-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full flex justify-between">
                  <span>Filters</span>
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-4/5 sm:max-w-md">
                <h2 className="text-lg font-semibold mb-6">Filters</h2>
                <Filters 
                  onFilterChange={handleFilterChange} 
                  availableSizes={availableSizes}
                  availableColors={availableColors}
                />
              </SheetContent>
            </Sheet>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No products match your filters</p>
                <Button onClick={() => handleFilterChange({})}>Reset Filters</Button>
              </div>
            ) : (
              <>
                <div className="mb-4 text-sm text-muted-foreground">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </div>
                <ProductGrid products={filteredProducts} />
              </>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CategoryPage;
