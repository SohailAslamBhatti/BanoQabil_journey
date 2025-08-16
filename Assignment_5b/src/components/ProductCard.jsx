import React from "react";
import "./ProductCard.css"; // CSS file for styling

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" />
      <div className="card-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <h4>Price: ${product.price}</h4>
      </div>
    </div>
  );
}
