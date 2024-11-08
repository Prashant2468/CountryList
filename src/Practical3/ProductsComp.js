import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  background-color: ${(props) =>
    props.type === "vegetable"
      ? "green"
      : props.type === "fruit"
      ? "red"
      : props.type === "grain"
      ? "yellow"
      : "#f8f8f8"};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  width: 250px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: 15px;
  text-align: center;
`;

const ProductsComp1 = (props) => {
  //   if (props.quantity < 1 || props.quantity > 10) {
  //     throw new Error("Quantity Should be in range of 1 to 10");
  //   }
  return (
    <div>
      <Card type={props.type}>
        <h2>{props.name}</h2>
        <p>Type: {props.type}</p>
        <p>Quantity: {props.quantity}</p>
      </Card>
    </div>
  );
};

function typeValidator(props, propName, componentName) {
  const validTypes = ["vegetable", "fruit", "grain"];
  if (!validTypes.includes(props[propName])) {
    return new Error(
      `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected one of: ${validTypes.join(
        ", "
      )}.`
    );
  }
}
function rangeValidator(props, propName, componentName) {
  const range = props[propName];
  if (range < 1 || range > 10) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName} . Expected Range is 1 to 10`
    );
  }
}

ProductsComp1.propTypes = {
  name: PropTypes.string.isRequired,
  //   type: PropTypes.oneOf(["vegetable", "fruit", "grain"]),
  type: typeValidator,
  quantity: rangeValidator,
};

export default ProductsComp1;
