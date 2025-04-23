import React from "react";
import "./CardGrid.css";

const CardGrid = ({ title, items }) => {
  return (
    <div className="page">
      <h1 className="page-title">{title}</h1>
      <div className="card-grid">
        {items.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.name} className="card-image" />
            <p className="card-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;