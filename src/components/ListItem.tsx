import React from 'react';

const ListItem = (props: ProductItemProps) => {
  return (
    <li>
      {props.product.product_id}
      {props.product.avatar.compressed}
    </li>
  );
};

export default ListItem;
