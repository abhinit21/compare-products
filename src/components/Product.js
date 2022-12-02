import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import data from "../assets/sample.json";

function Product() {
  const { product } = useParams();

  console.log(data.data);

  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">{product} Comapre</h1>
      </Container>
      {data.data.map((item) => {
        return (
          <Container>
            <p>{item.website}</p>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.link}</p>
          </Container>
        );
      })}
    </Container>
  );
}

export default Product;
