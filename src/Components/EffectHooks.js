import React from "react";
import { useState, useEffect } from "react";

export function APICall() {
  const [resourceType, setResourceType] = useState("posts");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [resourceType]);
  return (
    <>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>users</button>
      <h1>{"Type  "+resourceType}</h1>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            {resourceType === "posts" ? (
              <>
                <h1>{item.id}</h1>
                <p>Name : {item.title}</p>
                <i>Email : {item.body}</i>
              </>                                         
            ) : (
              <>
                <h2>{item.name}</h2>      
                <p>{item.email}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
