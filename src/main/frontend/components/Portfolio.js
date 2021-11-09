import React, { useEffect, useState } from "react";

import FloralProductTile from "./FloralProductTile";

const Portfolio = (props) => {
  const [floralProducts, setFloralProducts] = useState([]);
  const [selectedRadioBtns, setSelectedRadioBtns] = useState({
    wedding : false
  })

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

  //use a filter method to sort through these once the radial buttons are done.
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


  const handleInputChange = event =>{
    const target = event.target
    const name = event.name
    const value = target.value
    selectedRadioBtns({
      ...selectedRadioBtns,
      [name] : value
    })
  }

  // later make a function that creats JSX radio buttons based on the keyvalue pairs of the products fetched.
  return <div><div>{listOfFloralProducts}</div>
<label>Wedding</label>
 <input type="radio" name="wedding" value = "wedding" onChange={handleInputChange} checked={selectedRadioBtns.wedding}>
 </input>
  </div>;
};

export default Portfolio;
