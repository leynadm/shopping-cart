import React,{useState} from "react";
import "../styles/ItemCard.css";

function ItemCard({
  name,
  description,
  image,
  price,
  orderItems,
  setOrderItems,
}) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    const newOrderItems = [
      ...orderItems,
      {
        name: name,
        description: description,
        image: image,
        price: price,
        quantity:quantity
      },
    ];
    setOrderItems(newOrderItems);
  };

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };
  
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (event) => {
    const newQuantity = Number(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="item-card">
      <div className="item-name">{name}</div>
      <div className="item-image">
        <img src={image} alt={name} />
      </div>
      <div className="item-description">{description}</div>
      <div className="item-price">{price} €</div>
      <div className="utility-buttons">
        <div className="quantity">
          <button className="item-card-btn increment-by-one-btn" onClick={handleIncrement}>
            <span className="material-symbols-outlined quantity-button-icons">
              keyboard_arrow_up
            </span>
          </button>

          <input type="number" value={quantity} className="no-of-items" onChange={handleInputChange} min="0" max="10"/>

          <button className="item-card-btn decrease-by-one-btn" onClick={handleDecrease}>
            <span className="material-symbols-outlined quantity-button-icons">
              keyboard_arrow_down
            </span>
          </button>
        </div>
        <button
          type="button"
          className="add-item-btn item-card-btn"
          onClick={handleAddToCart}
        >
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
