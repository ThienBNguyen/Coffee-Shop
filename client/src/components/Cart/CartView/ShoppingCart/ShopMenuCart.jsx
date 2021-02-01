import React, { useState, Fragment } from "react";
import {
  updateItem,
  removeItem,
} from "../../../MenuView/SubMenuView/cartHelpers";
import Button from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { API } from "../../../../config";
import Card from "react-bootstrap/Card";
export default function ShopMenuCart({
  product,

  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = (f) => f,
  run = undefined,
  // changeCartSize
}) {
  const [count, setCount] = useState(product.count);
  const [productPrice, SetProductPrice] = useState(product.price);
  const CartImage = ({ item, url }) => (
    <Fragment>
      <Card.Img
        style={{
          width: 100,
          height: 100,
        }}
        variant="top"
        src={`${API}/${url}/photo/${item._id}`}
        alt={item.name}
      />
    </Fragment>
  );
  // const showViewButton = (showViewProductButton) => {
  //   return (
  //     showViewProductButton && (
  //       <Link to={`/product/${product._id}`} className="mr-2">
  //         <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">
  //           View Product
  //         </button>
  //       </Link>
  //     )
  //   );
  // };
  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div>
          <InputGroup size="sm" className="mb-3">
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={count}
              onChange={handleChange(product._id)}
              type="number"
            />
          </InputGroup>
        </div>
      )
    );
  };
  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <Button
          className="cardRemove"
          variant="dark"
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
        >
          X
        </Button>
      )
    );
  };
  const handleChange = (productId) => (event) => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };
  const handleItemTotal = (currentCount, currentPrice) => {
    let total = currentCount * currentPrice;
    return total;
  };
  const showSelectItem = () => {
    return (
      <Fragment>
        <tbody>
          <tr>
            <td> {showRemoveButton(showRemoveProductButton)}</td>
            <td>
              <CartImage item={product} url="product" />
            </td>

            <td>
              <h3>{product.name}</h3>
              <p>{product.description.substring(0, 100)}</p>
            </td>
            <td>
              <p>
                <span>$</span>
                {product.price}
              </p>
            </td>
            <td>{showCartUpdateOptions(cartUpdate)}</td>
            <td>
              <p>
                <span>${handleItemTotal(count, productPrice)}</span>
              </p>
            </td>
          </tr>
        </tbody>
      </Fragment>
    );
  };

  return (
    <div>
      <Table striped bordered hover variant="dark" className="text-center">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th style={{ width: "50%" }}>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        {showSelectItem()}
      </Table>
      {/* <div><CartTotals /></div> */}
    </div>
  );
}
