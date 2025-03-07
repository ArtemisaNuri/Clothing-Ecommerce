
import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: "womens-clothing",
    name: "Women's Clothing",
    image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Discover our collection of stylish women's clothing",
    featured: true
  },
  {
    id: "mens-clothing",
    name: "Men's Clothing",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Explore our range of contemporary men's apparel",
    featured: true
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Complete your look with our curated accessories",
    featured: true
  },
  {
    id: "shoes",
    name: "Shoes",
    image: "https://images.unsplash.com/photo-1518049362265-d5b2a6b00b37?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Step out in style with our footwear collection",
    featured: false
  },
  {
    id: "activewear",
    name: "Activewear",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Performance apparel for your active lifestyle",
    featured: false
  },
  {
    id: "outerwear",
    name: "Outerwear",
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Stay stylish in all weather conditions",
    featured: false
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Relaxed Fit Cotton T-shirt",
    price: 29.99,
    description: "A comfortable, relaxed-fit t-shirt made from 100% organic cotton. Perfect for everyday wear, this versatile piece features a classic crew neckline and short sleeves.",
    images: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "womens-clothing",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Black", value: "#000000" },
      { name: "Gray", value: "#808080" }
    ],
    isNew: true,
    isFeatured: true
  },
  {
    id: 2,
    name: "Slim Fit Denim Jeans",
    price: 79.99,
    description: "Classic five-pocket jeans in washed denim with a button fly and slim legs. Made with sustainable cotton for lasting comfort and style.",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "mens-clothing",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Blue", value: "#0000FF" },
      { name: "Black", value: "#000000" }
    ],
    isFeatured: true
  },
  {
    id: 3,
    name: "Oversized Wool Blend Coat",
    price: 149.99,
    salePrice: 119.99,
    description: "An elegant oversized coat in a wool blend. Features a lapel collar, concealed buttons at front, and side pockets. Lined with recycled polyester.",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "outerwear",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Camel", value: "#C19A6B" },
      { name: "Black", value: "#000000" }
    ],
    onSale: true
  },
  {
    id: 4,
    name: "Cotton Blend Hoodie",
    price: 59.99,
    description: "Relaxed-fit hoodie in cotton-blend fabric. Features a drawstring hood, kangaroo pocket, and ribbed cuffs and hem.",
    images: [
      "https://images.unsplash.com/photo-1556172732-639ab184a4b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "mens-clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Gray", value: "#808080" },
      { name: "Navy", value: "#000080" },
      { name: "Black", value: "#000000" }
    ]
  },
  {
    id: 5,
    name: "Floral Print Maxi Dress",
    price: 89.99,
    salePrice: 69.99,
    description: "A flowing maxi dress with a V-neck and adjustable spaghetti straps. Made from lightweight fabric with a floral print pattern.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "womens-clothing",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Floral", value: "#FF7F50" }
    ],
    onSale: true
  },
  {
    id: 6,
    name: "Leather Crossbody Bag",
    price: 119.99,
    description: "A small crossbody bag in grained leather with an adjustable shoulder strap. Features a fold-over flap with magnetic closure and interior pockets.",
    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "accessories",
    sizes: ["One Size"],
    colors: [
      { name: "Tan", value: "#D2B48C" },
      { name: "Black", value: "#000000" }
    ],
    isFeatured: true
  },
  {
    id: 7,
    name: "Performance Running Shoes",
    price: 129.99,
    description: "Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for comfort and performance during long runs.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "shoes",
    sizes: ["7", "8", "9", "10", "11"],
    colors: [
      { name: "Black/White", value: "#000000" },
      { name: "Blue/Orange", value: "#0000FF" }
    ]
  },
  {
    id: 8,
    name: "High-Rise Compression Leggings",
    price: 64.99,
    description: "High-rise compression leggings with four-way stretch fabric. Features moisture-wicking technology and a hidden waistband pocket.",
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1581790092615-c0b84b4c0d49?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "activewear",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Navy", value: "#000080" }
    ],
    isNew: true
  },
  {
    id: 9,
    name: "Classic White Sneakers",
    price: 69.99,
    description: "Timeless white sneakers crafted from smooth leather with a comfortable rubber sole. A versatile addition to any casual outfit.",
    images: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "shoes",
    sizes: ["6", "7", "8", "9", "10"],
    colors: [
      { name: "White", value: "#FFFFFF" }
    ],
    isFeatured: true
  },
  {
    id: 10,
    name: "Ribbed Knit Beanie",
    price: 24.99,
    salePrice: 19.99,
    description: "A soft ribbed knit beanie made from recycled materials. One size fits most with a folded brim for adjustable styling.",
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "accessories",
    sizes: ["One Size"],
    colors: [
      { name: "Gray", value: "#808080" },
      { name: "Black", value: "#000000" },
      { name: "Burgundy", value: "#800020" }
    ],
    onSale: true
  },
  {
    id: 11,
    name: "Linen Blend Shirt",
    price: 49.99,
    description: "A relaxed-fit shirt in a linen-cotton blend. Features a classic collar, button placket, and chest pocket. Perfect for warm weather.",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "mens-clothing",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Light Blue", value: "#ADD8E6" },
      { name: "Beige", value: "#F5F5DC" }
    ],
    isNew: true
  },
  {
    id: 12,
    name: "Quilted Puffer Jacket",
    price: 129.99,
    salePrice: 99.99,
    description: "A lightweight quilted puffer jacket filled with recycled materials. Features a stand-up collar, front zip, and side pockets with zips.",
    images: [
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Olive", value: "#808000" }
    ],
    onSale: true
  }
];

export const getProductsByCategory = (categoryId: string) => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.isFeatured);
};

export const getNewArrivals = () => {
  return products.filter(product => product.isNew);
};

export const getSaleProducts = () => {
  return products.filter(product => product.onSale);
};

export const getFeaturedCategories = () => {
  return categories.filter(category => category.featured);
};
