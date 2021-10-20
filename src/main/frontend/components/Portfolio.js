import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    getFloralProducts();
  }, []);

  return <div>Sup from portfolio</div>;
};

export default Portfolio;
