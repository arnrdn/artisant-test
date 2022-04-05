import React from 'react';
import ProductImage from '../img/product-img.png';

const ListItem = (props: ProductItemProps) => {
  return (
    <li>
      {props.product.product_id}
      {props.product.name}
      <div>{props.product.initial_price} ETH</div>
      <div>
        available {props.product.quantity_available} out of{' '}
        {props.product.quantity}
      </div>
      <div>created by {props.product.created_by.display_name}</div>
      <img src={ProductImage} alt="Изображение товара" />
    </li>
  );
};

export default ListItem;
