
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import ProductGrid from "@/components/products/ProductGrid";
import { ChevronRight, Minus, Plus, ShoppingBag } from "lucide-react";
import { getProductById, getProductsByCategory, getFeaturedProducts } from "@/data/products";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  const { addToCart } = useCart();

  useEffect(() => {
    if (productId) {
      const foundProduct = getProductById(Number(productId));
      
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.images[0]);
        setSelectedSize(foundProduct.sizes[0]);
        setSelectedColor(foundProduct.colors[0].name);
        
        // Get related products
        const categoryProducts = getProductsByCategory(foundProduct.category)
          .filter(p => p.id !== foundProduct.id);
          
        // If we don't have enough products in the same category, add some featured products
        if (categoryProducts.length < 4) {
          const featuredProducts = getFeaturedProducts()
            .filter(p => p.id !== foundProduct.id && p.category !== foundProduct.category);
          
          setRelatedProducts([...categoryProducts, ...featuredProducts].slice(0, 4));
        } else {
          setRelatedProducts(categoryProducts.slice(0, 4));
        }
      }
    }
  }, [productId]);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    if (product && selectedSize && selectedColor) {
      addToCart(product, quantity, selectedSize, selectedColor);
    }
  };

  if (!product) {
    return (
      <PageLayout>
        <div className="container px-4 py-12">
          <Alert>
            <AlertDescription>Product not found</AlertDescription>
          </Alert>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container px-4 py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm mb-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
          <Link to={`/category/${product.category}`} className="text-muted-foreground hover:text-foreground">
            {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
          <span className="font-medium">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square rounded-lg overflow-hidden bg-secondary mb-4">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  className={`aspect-square rounded overflow-hidden border-2 ${selectedImage === image ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`} 
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {product.isNew && (
                  <Badge className="bg-fashion-700">New</Badge>
                )}
                {product.onSale && (
                  <Badge variant="destructive">Sale</Badge>
                )}
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
              
              <div className="flex items-center text-xl">
                {product.salePrice ? (
                  <>
                    <span className="text-destructive font-semibold">
                      {formatCurrency(product.salePrice)}
                    </span>
                    <span className="ml-2 text-muted-foreground line-through">
                      {formatCurrency(product.price)}
                    </span>
                  </>
                ) : (
                  <span className="font-semibold">{formatCurrency(product.price)}</span>
                )}
              </div>

              <p className="text-muted-foreground">{product.description}</p>

              {/* Size Selection */}
              <div>
                <h3 className="font-medium mb-2">Size</h3>
                <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <div key={size}>
                      <RadioGroupItem 
                        value={size} 
                        id={`size-${size}`} 
                        className="sr-only peer" 
                      />
                      <Label
                        htmlFor={`size-${size}`}
                        className="flex h-9 w-9 items-center justify-center rounded-md border bg-background text-sm font-medium transition-colors hover:border-primary peer-data-[state=checked]:border-2 peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-foreground cursor-pointer"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="font-medium mb-2">Color</h3>
                <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex gap-3">
                  {product.colors.map((color) => (
                    <div key={color.name} className="flex flex-col items-center gap-1">
                      <RadioGroupItem 
                        value={color.name} 
                        id={`color-${color.name}`} 
                        className="sr-only peer" 
                      />
                      <Label
                        htmlFor={`color-${color.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 peer-data-[state=checked]:border-primary cursor-pointer"
                      >
                        <span 
                          className="h-6 w-6 rounded-full"
                          style={{ backgroundColor: color.value }}
                        ></span>
                      </Label>
                      <span className="text-xs">{color.name}</span>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={incrementQuantity}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button className="w-full mt-6" size="lg" onClick={handleAddToCart}>
                <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </div>

            {/* Product Details Tabs */}
            <Tabs defaultValue="details" className="mt-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
                <TabsTrigger value="returns">Returns</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="p-4">
                <p className="text-sm text-muted-foreground">
                  Our products are made with high-quality materials designed for comfort and durability. 
                  Each item is carefully crafted with attention to detail and finish.
                </p>
                <ul className="list-disc text-sm text-muted-foreground mt-2 pl-5">
                  <li>Premium quality materials</li>
                  <li>Ethically manufactured</li>
                  <li>Designed for everyday wear</li>
                  <li>Machine washable (see care instructions)</li>
                </ul>
              </TabsContent>
              <TabsContent value="shipping" className="p-4">
                <p className="text-sm text-muted-foreground">
                  We offer several shipping options to meet your needs:
                </p>
                <ul className="list-disc text-sm text-muted-foreground mt-2 pl-5">
                  <li>Standard Shipping (3-5 business days): $5.99</li>
                  <li>Express Shipping (2-3 business days): $12.99</li>
                  <li>Next Day Delivery (order before 2pm): $19.99</li>
                  <li>Free standard shipping on orders over $100</li>
                </ul>
              </TabsContent>
              <TabsContent value="returns" className="p-4">
                <p className="text-sm text-muted-foreground">
                  We want you to be completely satisfied with your purchase:
                </p>
                <ul className="list-disc text-sm text-muted-foreground mt-2 pl-5">
                  <li>30-day return policy for unworn items</li>
                  <li>Free returns for domestic orders</li>
                  <li>Items must be returned in original packaging</li>
                  <li>Gift receipts available for easy returns</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductPage;
