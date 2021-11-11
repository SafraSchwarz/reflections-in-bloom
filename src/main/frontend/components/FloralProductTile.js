import React from "react";

const FloralProductTile = ({ id, type, event, season, photoUrl, size }) => {
  return (
    <div className="product-item">
      <img src={photoUrl}></img>
    </div>
  );
};

export default FloralProductTile;
