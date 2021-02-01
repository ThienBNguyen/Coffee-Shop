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

