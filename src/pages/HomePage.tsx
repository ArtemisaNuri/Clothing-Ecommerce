
import PageLayout from "@/components/layout/PageLayout";
import ProductGrid from "@/components/products/ProductGrid";
import CategoryCard from "@/components/products/CategoryCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedProducts, getFeaturedCategories, getSaleProducts } from "@/data/products";

const HomePage = () => {
  const featuredProducts = getFeaturedProducts();
  const featuredCategories = getFeaturedCategories();
  const saleProducts = getSaleProducts();

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] bg-secondary overflow-hidden">
        <div className="absolute inset-0 hero-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
          alt="Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">New Season Collection</h1>
          <p className="text-lg md:text-xl mb-8 max-w-md text-center">
            Discover our latest styles designed for the modern individual
          </p>
          <div className="flex gap-4">
            <Link to="/category/womens-clothing">
              <Button className="bg-white text-black hover:bg-white/90">Shop Women</Button>
            </Link>
            <Link to="/category/mens-clothing">
              <Button className="bg-white text-black hover:bg-white/90">Shop Men</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Shop by Category</h2>
          <Link to="/categories" className="text-sm font-medium flex items-center text-muted-foreground hover:text-foreground transition-colors mt-2 md:mt-0">
            View All Categories <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4 py-16 bg-secondary/30">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <Link to="/categories" className="text-sm font-medium flex items-center text-muted-foreground hover:text-foreground transition-colors mt-2 md:mt-0">
            Shop All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      {/* Sale Section */}
      <section className="container px-4 py-16">
        <div className="bg-fashion-100 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-destructive text-destructive-foreground rounded-full text-xs font-medium mb-4">
                Limited Time
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Special Offers</h2>
              <p className="text-muted-foreground mb-6">
                Save up to 30% on our latest collection. Limited time only.
              </p>
              <Link to="/offers" className="self-start">
                <Button>Shop Sale</Button>
              </Link>
            </div>
            <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1613945407943-59cd755fd69e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Sale" 
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Sale Products */}
      <section className="container px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">On Sale</h2>
        <ProductGrid products={saleProducts} />
        <div className="mt-10 flex justify-center">
          <Link to="/offers">
            <Button variant="outline" className="px-8">View All Sale Items</Button>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container px-4 py-16 bg-fashion-50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Sign up for our newsletter to receive updates on new collections, exclusive offers, and styling tips.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-md"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;
