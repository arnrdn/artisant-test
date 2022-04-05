import { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from './ListItem';

const List = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const axiosProducts = async () => {
      const response = await axios.get('https://artisant.io/api/products');
      setProducts(response.data.data.products);
    };
    axiosProducts();
  }, []);

  const renderedList = products.map((product: Product) => {
    return <ListItem key={product.product_id} product={product} />;
  });

  return <ul className="product-list">{renderedList}</ul>;
};

export default List;
