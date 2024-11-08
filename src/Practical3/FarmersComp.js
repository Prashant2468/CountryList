import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  width: 250px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: 15px;
  text-align: center;
`;

const FarmersComp1 = (props) => {
  return (
    <div>
      <Card>
        <h2>{props.name}</h2>
        <p>age: {props.age}</p>
        <p>Farm Location: {props.location}</p>
      </Card>
    </div>
  );
};

FarmersComp1.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string,
};

export default FarmersComp1;
