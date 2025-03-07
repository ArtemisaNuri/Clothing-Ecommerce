
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative">
      <div className="product-image-container aspect-[3/4] w-full overflow-hidden rounded-md bg-secondary">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-all duration-300"
          />
        </Link>
        {product.onSale && (
          <Badge variant="destructive" className="absolute top-2 right-2">
            Sale
          </Badge>
        )}
        {product.isNew && (
          <Badge className="absolute top-2 left-2 bg-fashion-700">
            New
          </Badge>
        )}
      </div>
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-medium">{product.name}</h3>
        </Link>
        <div className="mt-1 flex items-center">
          {product.salePrice ? (
            <>
              <span className="text-sm font-medium text-destructive">
                {formatCurrency(product.salePrice)}
              </span>
              <span className="ml-2 text-sm text-muted-foreground line-through">
                {formatCurrency(product.price)}
              </span>
            </>
          ) : (
            <span className="text-sm font-medium">{formatCurrency(product.price)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
