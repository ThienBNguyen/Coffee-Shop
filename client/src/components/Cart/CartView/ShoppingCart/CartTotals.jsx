
import React from "react";

export default function CartTotals({ products }) {
  const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  let discount = 0;
  let delivery = 0;


  return (
   
      <div className ="cartTotalSub">
      <h3>Cart Totals</h3>
        <p className="d-flex">
          <span>Subtotal:</span>
          <span>$ {getTotal()}</span>
        </p>
        <p className="d-flex">
          <span>Delivery:</span>
          <span>${delivery}</span>
        </p>
        <p className="d-flex">
          <span>Discount:</span>
          <span>${discount}</span>
        </p>
        <hr />
        <p className="d-flex total-price">
          <span>Total:</span>
          <span>$ {getTotal()}</span>
        </p>
      </div>
   
    
  );
}
