import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";

import { addItem, updateItem, removeItem } from "./cartHelpers";
import Card from "react-bootstrap/Card";
const MenuCard = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = (f) => f,
  run = undefined,
  // changeCartSize
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
  // view individual product by ID
  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">
            View Product
          </button>
        </Link>
      )
    );
  };
  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(false));
  };

  // const shouldRedirect = (redirect) => {
  //   if (redirect) {
  //     return <Redirect to="/menu" />;
  //   }
  // };

  const showAddToCartBtn = (showAddToCartButton) => {
    return (
      showAddToCartButton && (
        <button
          onClick={addToCart}
          className="btn btn-outline-warning mt-2 mb-2 card-btn-1  "
        >
          Add to cart
        </button>
      )
    );
  };

  // const showStock = (quantity) => {
  //   return quantity > 0 ? (
  //     <span className="badge badge-primary badge-pill">In Stock </span>
  //   ) : (
  //     <span className="badge badge-primary badge-pill">Out of Stock </span>
  //   );
  // };

  const handleChange = (productId) => (event) => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={handleChange(product._id)}
            />
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
  };
  return (
    <Card
      key={product.name}
      style={{ width: "18rem" }}
      className="bg-transparent border-transparent m-3 text-light"
    >
      <ShowImage item={product} url="product" />
      <Card.Body>
        <Card.Title className="light-text">{product.name}</Card.Title>
        <Card.Text>{product.description.substring(0, 100)}</Card.Text>
        <p>$ {product.price}</p>
        {/* {showViewButton(showViewProductButton)} */}

        {showAddToCartBtn(showAddToCartButton)}

        {showRemoveButton(showRemoveProductButton)}

        {showCartUpdateOptions(cartUpdate)}
      </Card.Body>{" "}
    </Card>
  );
};

export default MenuCard;
