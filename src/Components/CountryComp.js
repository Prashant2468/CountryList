import React, { useEffect, useState } from "react";
import "./MoviesComp.css";

const CountryComp = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data); // Check if data is logged correctly
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const filteredData = data.filter((item) =>
    item.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Container">
      <h1 className="heading">Countries, Capitals and Currencies</h1>
      <input
        type="text"
        placeholder="Search country"
        className="searchBox"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="Movies">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => {
            const currencyKey = item.currencies
              ? Object.keys(item.currencies)[0]
              : null;
            const currencySymbol = currencyKey
              ? item.currencies[currencyKey]?.symbol
              : null;
            const currencyName = currencyKey
              ? item.currencies[currencyKey]?.name
              : null;

            return (
              <div
                key={index}
                className="Movie"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  className="img"
                  src={item.flags.png}
                  alt="MovieImage"
                  height="200px"
                  width="200px"
                />

                <div
                  className={`MovieInfo ${
                    hoveredIndex === index ? "show" : ""
                  }`}
                >
                  <h5 className="Title">{item.name.common}</h5>
                  <p className="Capital">{item.capital}</p>
                  <span className="Name">{currencyName} </span>
                  <span className="Symbol">( {currencySymbol} )</span>
                </div>
              </div>
            );
          })
        ) : (
          <p className="noResults">No countries found</p> // Message when no match
        )}
      </div>
    </div>
  );
};

export default CountryComp;
