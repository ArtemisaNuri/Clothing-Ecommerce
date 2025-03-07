
import { Link } from "react-router-dom";
import { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/category/${category.id}`} className="block">
      <div className="category-card relative rounded-lg overflow-hidden bg-secondary group">
        <div className="aspect-square w-full">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <div className="text-white">
            <h3 className="font-semibold text-lg">{category.name}</h3>
            <p className="text-sm text-white/80 mt-1">{category.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
