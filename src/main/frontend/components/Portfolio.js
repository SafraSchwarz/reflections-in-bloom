import React, { useEffect, useState } from "react";

import FloralProductTile from "./FloralProductTile";

const Portfolio = (props) => {
  const [floralProducts, setFloralProducts] = useState([]);

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

  const listOfFloralProducts = floralProducts.map(product =>{
    return(
        <FloralProductTile
          key = {product.id}
          id = {product.id}
          type = {product.type}
          event = {product.event}
          season = {product.season}
          photoUrl = {product.photoUrl}
          size =  {product.size}
        ></FloralProductTile>
    )
  })

  useEffect(() => {
    getFloralProducts();
  }, []);

  return <div>{listOfFloralProducts}</div>;
};

export default Portfolio;
