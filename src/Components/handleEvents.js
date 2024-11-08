import React from "react";
import styled from "styled-components";
import { useState } from "react";

const StyleP = styled.p`
  color: ${(props) => {
    if (props.color === "blue") {
      return "red";
    } else {
      return "green";
    }
  }};
`;
function HandleEvents() {
  // const [name, setname] = useState("Om");
  const [time, setctime] = useState(new Date().toLocaleTimeString());
  const [msg, setmsg] = useState("Enable");
  const [count, setcount] = useState(0);
  const [form, setform] = useState({ name: "", email: "" });
  const [bg, setbg] = useState("red");
  const handleClick1 = () => {
    setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setctime(currentTime);
    }, 1000);
  };
  const handleClick = () => {
    msg === "Disable" ? setmsg("Enable") : setmsg("Disable");
    // setmsg("Disable");
    // alert("Hello");
  };
  const handleOnMouseHover = () => {
    alert("Mouse Hovered");
  };
  const handleChanges = (e) => {
    setform({ [e.target.name]: e.target.value });
    console.log(form);
  };
  const changeColor = () => {
    bg == "red" ? setbg("blue") : setbg("red");
  };
  return (
    <div style={{ backgroundColor: bg }}>
      <button onClick={changeColor}>change color</button>
      <button>{time}</button>
      <button onClick={handleClick1}>Start</button>
      <button onClick={handleClick}>{msg}</button>
      <StyleP color="red" onMouseOver={handleOnMouseHover}>
        I am Prashant
      </StyleP>

      <input
        type="text"
        name="email"
        value={form.email}
        placeholder="Email"
        onChange={handleChanges}
      ></input>
      <input
        type="text"
        name="name"
        value={form.name}
        placeholder="Name"
        onChange={handleChanges}
      ></input>
      <p>{form.name}</p>
      <p>{form.email}</p>

      <div>
        <button onClick={() => setcount(count + 1)}>+</button>
        <p>{count}</p>
        <button
          onClick={() => {
            count <= 0 ? setcount(10) : setcount(count - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default HandleEvents;
