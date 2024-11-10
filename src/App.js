import React from "react";
import "./App.css";
import styled from "styled-components";
import CountryComp from "./Components/CountryComp.js";

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  background-color: rgb(231, 233, 233);
  width: 100%;
  flex-wrap: wrap;
`;

function App() {
  return (
    <>
      <StyledContainer>
        <CountryComp />
      </StyledContainer>
    </>
  );
}

export default App;
