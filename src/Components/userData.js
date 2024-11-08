import React from "react";

function UserData(props) {
  const handleClick = () => {
    alert("Name is : " + props.name);
  };
  // const user = {
  //   name: "Prashant",
  //   email: "prashantpatil932870@gmail.com",
  //   mobile: "9328708273",
  //   img: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
  //   isMarried: false,
  // };
  return (
    <div>
      <h1>User Data</h1>
      <img src={props.img} height="200px" width="200px"></img>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Mobile: {props.mobile}</p>
      <p>Is Married: {props.isMarried ? "Yes" : "No"}</p>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default UserData;
