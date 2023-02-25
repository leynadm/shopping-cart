import React from "react";
import "../styles/ItemCard.css";

function ItemCard({ name, description, image, price }) {
  return (
    <div className="item-card">
      <div className="item-name">{name}</div>
      <div className="item-image">
        <img src={image} alt={name} />
      </div>
      <div className="item-description">{description}</div>
      <div className="item-price">{price}</div>

      <div className="utility-buttons">
        <div className="quantity">
          <button></button>
          <input />
          <button></button>
        </div>
        <button type="button" className="add-item-btn">
          Add Item
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
