
import PageLayout from "@/components/layout/PageLayout";
import CategoryCard from "@/components/products/CategoryCard";
import { categories } from "@/data/products";

const CategoriesPage = () => {
  return (
    <PageLayout>
      <div className="container px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Categories</h1>
        <p className="text-muted-foreground mb-8">Browse all our product categories</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default CategoriesPage;
