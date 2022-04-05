/// <reference types="react-scripts" />

interface Product {
  product_id: number;
  quantity_available: number;
  created_by: Author;
  name: string;
  avatar: Avatar;
}

interface Author {
  display_name: string;
  user_id: number;
}

interface Avatar {
  compressed: string;
}

interface ProductItemProps {
  key: number;
  product: Product;
}
