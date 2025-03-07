
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link to="/" className="text-lg font-medium">
                Home
              </Link>
              <Link to="/categories" className="text-lg font-medium">
                Categories
              </Link>
              <Link to="/offers" className="text-lg font-medium">
                Offers
              </Link>
              <div className="h-px bg-border my-2" />
              <Link to="/category/womens-clothing" className="text-base">
                Women
              </Link>
              <Link to="/category/mens-clothing" className="text-base">
                Men
              </Link>
              <Link to="/category/accessories" className="text-base">
                Accessories
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="ml-4 md:ml-0">
          <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight">
            STYLISH
          </Link>
        </div>

        <nav className="mx-6 hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="transition-colors hover:text-foreground/80">
            Home
          </Link>
          <Link to="/categories" className="transition-colors hover:text-foreground/80">
            Categories
          </Link>
          <Link to="/category/womens-clothing" className="transition-colors hover:text-foreground/80">
            Women
          </Link>
          <Link to="/category/mens-clothing" className="transition-colors hover:text-foreground/80">
            Men
          </Link>
          <Link to="/category/accessories" className="transition-colors hover:text-foreground/80">
            Accessories
          </Link>
          <Link to="/offers" className="transition-colors hover:text-foreground/80">
            Offers
          </Link>
        </nav>

        <div className="ml-auto flex items-center space-x-2">
          {isSearchOpen ? (
            <div className="flex items-center border rounded-md px-2 mr-2">
              <input
                type="text"
                placeholder="Search products..."
                className="py-1 px-2 outline-none w-[150px] md:w-[200px]"
              />
              <X
                className="h-4 w-4 cursor-pointer opacity-70"
                onClick={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
