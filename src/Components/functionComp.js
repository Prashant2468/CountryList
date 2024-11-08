import React from "react";
import styled from "styled-components";

const StyleButton = styled.button`
  color: white;
  height: 35px;
  width: 200px;
  color: blueviolet;
  font-weight: 600;
  font-size: 25px;
  font-size: 1em;
  border: 1px solid red;
  border-radius: 5px;
`;
const StyleBox = styled.div`
  align: center;
  width: 200px;
  height: 250px;
  box-shadow: 0px 5px 5px 2px rgba(0, 120, 122, 0.3);
  padding: 10px;
  border-radius: 15px;
  background: url("https://www.texturepalace.com/gallery/book/2016-02-08-leather-book-cover/leather-book-textures--3.jpg"); /* Example direct image URL */
  color: white;
  margin: 40px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const BookFunctional = (props) => {
  const handleClick = () => {
    alert(
      `Book Name : ${props.title} \nAuthor : ${props.author} \nPrice : ${props.price}`
    );
  };

  return (
    <>
      <StyleBox>
        <h3>{props.title}</h3>
        <h3>by {props.author}</h3>
        <h3>Rs {props.price}/- Only</h3>
        <StyleButton onClick={handleClick}>Buy</StyleButton>
      </StyleBox>
    </>
  );
};