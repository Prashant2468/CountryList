import React from "react";
import { BookFunctional } from "./Components/functionComp.js";
import { BookClass } from "./Components/classComp.js";
import { APICall } from "./Components/EffectHooks.js";
import "./App.css";
import styled from "styled-components";
import HandleEvents from "./Components/handleEvents.js";
import UserData from "./Components/userData.js";
import MoviesComp from "./Components/MoviesComp.js";
import ProductComp from "./Components/ProductComp.js";
import FarmersComp1 from "./Practical3/FarmersComp.js";
import ProductsComp1 from "./Practical3/ProductsComp.js";

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  background-color: rgb(231, 233, 233);
  width: 100%;
  flex-wrap: wrap;
`;
const Practical3 = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const Farmers_and_Product = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function App() {
  const count = 3;
  const names = ["Prashant", "Harshal", "hlllo"];
  const contact = ["1234567899", "1237894568", "7418529630"];
  const farmers = [
    { name: "Kishor Sharma", age: 35, location: "Malegoan" },
    { name: "Ajay Kumar", age: 29, location: "Mumbai" },
    { name: "Rahul Patel", age: 40, location: "Nashik" },
    { name: "Nayan Solanki", age: 22, location: "Pune" },
    { name: "Sakaram Patil", age: 52, location: "Surat" },
  ];
  const products = [
    { name: "Carrot", type: "vegetable", quantity: 2 },
    { name: "Apple", type: "fruit", quantity: 1 },
    { name: "Wheat", type: "grain", quantity: 5 },
    { name: "Broccoli", type: "vegetable", quantity: 1 },
    { name: "Banana", type: "fruit", quantity: 2 },
    { name: "Rice", type: "grain", quantity: 4 },
    { name: "Spinach", type: "vegetable", quantity: 3 },
    { name: "Orange", type: "fruit", quantity: 5 },
    { name: "Oats", type: "grain", quantity: 9 },
    { name: "Lettuce", type: "vegetable", quantity: 8 },
  ];

  return (
    <>
      <StyledContainer>
        {/* <h1>Farm Management System</h1> */}

        {/* ________________________Practical 3___Start_______________________ */}
        {/* <Practical3>
          <Farmers_and_Product>
            {farmers.map((farmer, index) => {
              return (
                <FarmersComp1
                  key={index}
                  name={farmer.name}
                  age={farmer.age}
                  location={farmer.location}
                />
              );
            })}
          </Farmers_and_Product>
          <Farmers_and_Product>
            {products.map((product, index) => {
              return (
                <ProductsComp1
                  key={index}
                  name={product.name}
                  type={product.type}
                  quantity={product.quantity}
                />
              );
            })}
          </Farmers_and_Product>
        </Practical3> */}
        {/* ________________________Practical 3___End_________________________ */}

        {/* <ProductComp /> */}
        <MoviesComp />
        {/* <HandleEvents></HandleEvents> */}
        {/* Functional Components Part */}
        {/* <BookFunctional
          title="Java Programming"
          author="James Gosling"
          price="5000"
        />        

        <BookFunctional
          title="Python Crash Course"
          author="Eric Matthes"
          price="4500"
        />

        <BookFunctional
          title="Clean Code"
          author="Robert C. Martin"
          price="6000"
        />

        <BookFunctional
          title="JavaScript: The Good Parts"
          author="Douglas Crockford"
          price="3500"
        /> */}

        {/* class Components Parts  */}
        {/* <BookClass
        title="Java Programming"
        author="James Goslin"
        price="500"
        ></BookClass> */}

        {/* Simple Async API Data fetching */}
        {/* <APICall /> */}

        {/* User Data Functional Components */}
        {/* {Array(count)
          .fill()
          .map((_, index) => (
            <UserData                                                                                                                           
              name={names[index]}
              img="https://cdn-icons-png.flaticon.com/512/21/21104.png"
              email="prashant@gmail.com"
              mobile={contact[index]} 
              isMarried="true"
            />
          ))} */}

        {/* <UserData
          name="Prashant"
          img="https://cdn-icons-png.flaticon.com/512/21/21104.png"
          email="prashant@gmail.com"
          mobile="9328708273"
          isMarried="true"
        /> */}
      </StyledContainer>
    </>
  );
}

export default App;
