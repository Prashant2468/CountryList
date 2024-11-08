import React, { useState, useEffect } from "react";

function ProductComp() {
  const [farmerProduct, setFarmerProduct] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/671a0377acd3cb34a89c2c5f")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFarmerProduct(data.record.farmProducts); // Correctly access farmProducts array
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div>
      <h1>Product Component</h1>
      {farmerProduct.map((product) => (
        <p key={product.id}>
          {product.productName} - {product.quantity} {product.unit}
        </p>
      ))}
    </div>
  );
}

export default ProductComp;
