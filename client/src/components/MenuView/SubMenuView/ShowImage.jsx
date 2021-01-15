import React, { Fragment } from "react";
import { API } from "../../../config";
import Card from "react-bootstrap/Card";

const ShowImage = ({ item, url }) => (
  <Fragment>
    <Card.Img
      variant="top"
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      style={{
        width: 300,
        height: 300,
      }}
    />
  </Fragment>
);
export default ShowImage;

/* <div className="product-img">
  <img
    src={`${API}/${url}/photo/${item._id}`}
    alt={item.name}
    className="mb-3"
    style={{ maxHeight: "100%", maxWidth: "100%" }}
  />
</div>; */
{
  /* <React.fragment>
{" "}
<Card.Img
  variant="top"
  src={`${API}/${url}/photo/${item._id}`}
  alt={item.name}
  width={300}
  height={300}
/>
);
</React.fragment> */
}
