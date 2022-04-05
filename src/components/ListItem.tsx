import React from 'react';

const ListItem = (props: ProductItemProps) => {
  return (
    <li className="card">
      <div className="card__image">
        <div className="card__product-info">
          <div className="card__author">
            created by{' '}
            <p className="card__author--bold">
              {props.product.created_by.display_name}
            </p>
          </div>
          <div className="card__name">{props.product.name}</div>
        </div>
      </div>
      <div className="card__product-stock">
        <div className="card__product-available">
          available
          <p className="card__product-stock--bold">
            {props.product.quantity_available} of {props.product.quantity}
          </p>
        </div>
        <div className="card__product-price">
          price
          <p className="card__product-price--bold">
            {props.product.initial_price} ETH
          </p>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
