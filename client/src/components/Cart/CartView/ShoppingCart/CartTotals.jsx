import { toast } from "react-toastify";

import React from "react";

export default function CartTotals({ products }) {
  const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };
  // let price = displayedList.reduce(
  //   (itemPrice, eachPrice) =>
  //     itemPrice + eachPrice.product.price * eachPrice.quantity,
  //   0
  // );
  let discount = 0;
  let delivery = 0;
  // let totalPrice = price - discount + delivery;
  // if (price > 50 && price < 100) {
  //   discount = price * 0.05;
  //   delivery = 5;
  //   totalPrice = price - discount + delivery;
  // } else if (price > 100) {
  //   discount = price * 0.07;
  //   delivery = 7;
  //   totalPrice = price - discount + delivery;
  // } else {
  //   discount = price * 0.0;
  //   delivery = 0;
  //   totalPrice = price - discount + delivery;
  // }

  const cartTotal = {
    display: "flex",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "20px",
  };
  return (
    <div className="cartTotal">
      <div>
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
    </div>
  );
}
