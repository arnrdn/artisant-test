import { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from './ListItem';

const List = () => {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const axiosProducts = async () => {
      const response = await axios.get('https://artisant.io/api/products');
      setProducts(response.data.data.products);
    };
    axiosProducts();
  }, []);

  const filteredProducts = products.filter((product: Product) => {
    return product.quantity_available > 0;
  });

  let renderedList;
  if (checked) {
    renderedList = filteredProducts.map((product: Product) => {
      return <ListItem key={product.product_id} product={product} />;
    });
  } else {
    renderedList = products.map((product: Product) => {
      return <ListItem key={product.product_id} product={product} />;
    });
  }

  return (
    <div className="cards">
      <div className="cards__filter">
        <label htmlFor="availability">Products in stock</label>
        <input
          checked={checked}
          onChange={() => setChecked(!checked)}
          type="checkbox"
          name="availability"
          id="availability"
        />
      </div>

      <ul className="cards__list">{renderedList}</ul>
    </div>
  );
};

export default List;
