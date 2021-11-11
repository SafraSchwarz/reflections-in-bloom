import React, { useEffect, useState } from "react";

import FloralProductTile from "./FloralProductTile";

const Portfolio = (props) => {
  const [floralProducts, setFloralProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getFloralProducts = async () => {
    try {
      const response = await fetch("/api/v1/floral-products");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();

      setFloralProducts(responseBody.floralProducts);
    } catch (error) {
      console.error(`There was an error in fetch: ${error}`);
    }
  };

  //need to adjust the schema for "event" it is a reserved word... name it evenType or something.
  const listOfFloralProducts = floralProducts
    .filter((val) => {
      if (searchTerm == "") {
        return val;
      } else if (val.type.includes(searchTerm)) {
        return val;
      } else if (val.eventType.includes(searchTerm)) {
        return val;
      } else if (val.size.includes(searchTerm)) {
        return val;
      }
    })
    .map((product) => {
      return (
        <FloralProductTile
          key={product.id}
          id={product.id}
          type={product.type}
          eventType={product.eventType}
          season={product.season}
          photoUrl={product.photoUrl}
          size={product.size}
        ></FloralProductTile>
      );
    });

  useEffect(() => {
    getFloralProducts();
  }, [handleInputChange]);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = event.name;
    const value = target.value;
    setSearchTerm(value);
  };

  // later make a function that creats JSX radio buttons based on the keyvalue pairs of the products fetched.
  return (
    <div>
      <label name="all">All</label>
      <input
        type="radio"
        name="all"
        value=""
        onChange={handleInputChange}
        checked={searchTerm == ""}
      ></input>
      <label name="wreath">Wreaths</label>
      <input
        type="radio"
        name="wreath"
        value="wreath"
        onChange={handleInputChange}
        checked={searchTerm == "wreath"}
      ></input>
      <label name="wedding">Weddings</label>
      <input
        type="radio"
        name="wedding"
        value="wedding"
        onChange={handleInputChange}
        checked={searchTerm == "wedding"}
      ></input>
      <label name="small">Small</label>
      <input
        type="radio"
        name="small"
        value="small"
        onChange={handleInputChange}
        checked={searchTerm == "small"}
      ></input>
      <label name="medium">Medium</label>
      <input
        type="radio"
        name="medium"
        value="medium"
        onChange={handleInputChange}
        checked={searchTerm == "medium"}
      ></input>
      <label name="Large">Large</label>
      <input
        type="radio"
        name="large"
        value="large"
        onChange={handleInputChange}
        checked={searchTerm == "large"}
      ></input>
      <div>{listOfFloralProducts}</div>
    </div>
  );
};

export default Portfolio;
