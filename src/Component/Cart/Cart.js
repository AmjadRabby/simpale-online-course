import React from 'react';

const Cart = (props) => {
    const { coursename, price } = props.item;
    return (
      <li className="list-group-item d-flex my-2 shadow justify-content-between">
        <span>{coursename}</span> <span> ${price}</span>
      </li>
    );
  
};

export default Cart;