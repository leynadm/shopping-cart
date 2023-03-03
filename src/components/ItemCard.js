import React, { useState, useEffect } from "react";
import "../styles/ItemCard.css";

function ItemCard({
  name,
  description,
  image,
  price,
  orderItems,
  setOrderItems
}) {

  const [includeIcon, setIncludeIcon] = useState(true);
  const [buttonText, setButtonText] = useState("");
  const [cartBtnError, setCartBtnError] = useState("");
  const [itemInCart, setItemInCart] = useState("");
  const [quantity, setQuantity] = useState(0);


  console.log('logging quantity: ' + quantity)
  const handleAddToCart = () => {
    if (quantity > 0) {
      setIncludeIcon(false);
      addItemsToCart();
      setButtonText("Go to checkout");
    } else if (quantity === 0) {
      setCartBtnError("You need to add at least 1 item to your cart.");
    }
  };

  useEffect(() => {
    for (let i = 0; i < orderItems.length; i++) {
      let counter = 0;
      if (orderItems[i].name === name) {
        setItemInCart(orderItems[i].quantity);
      }
      console.log(counter);
    }
  }, [orderItems,name]);

  const checkItemQuantity = () => {
    const existingItem = orderItems.find((item) => item.name === name);
    if (existingItem) {
      orderItems.map((item) => {
        if (item.name === name) {
          if (item.quantity === 10) {
            setCartBtnError("The maximum amount of items you can order is 10.");
          }
          return { ...item };
        } else {
          return item;
        }
      });
    }
  };

  const addItemsToCart = () => {
    let quantityExceeded = false;
    const existingItem = orderItems.find((item) => item.name === name);
    if (existingItem) {
      const updatedItems = orderItems.map((item) => {
        if (item.name === name) {
          const newQuantity = Math.min(item.quantity + quantity, 10);
          if (newQuantity > 10) {
            quantityExceeded = true;
          }
          return { ...item, quantity: newQuantity };
        } else {
          return item;
        }
      });
      setOrderItems(updatedItems);
    } else {
      const newItem = {
        name: name,
        description: description,
        image: image,
        price: price,
        quantity: Math.min(quantity, 10),
      };
      if (quantity > 10) {
        quantityExceeded = true;
      }

      const updatedItems = [...orderItems, newItem];
      setOrderItems(updatedItems);
    }

    if (quantityExceeded) {
      setCartBtnError("You can only order 10 items at a time.");
    } else {
      setCartBtnError("");
    }
    checkItemQuantity();
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
      <div className="item-header">
        <div className="item-name">{name}</div>

        {itemInCart > 0 ? (
          <div className="item-in-cart">
            {itemInCart}{" "}
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
        ) : null}
      </div>
      <div className="item-image">
        <img src={image} alt={name} />
      </div>
      <div className="item-description">{description}</div>
      <div className="item-price">{price} €</div>
      <div className="utility-buttons">
        <div className="orders-quantity">
          <button
            className="item-card-btn increment-by-one-btn"
            onClick={handleIncrement}
          >
            <span className="material-symbols-outlined quantity-button-icons">
              keyboard_arrow_up
            </span>
          </button>

          <input
            type="number"
            value={quantity}
            className="no-of-items"
            onChange={handleInputChange}
            min="0"
            max="10"
          />

          <button
            className="item-card-btn decrease-by-one-btn"
            onClick={handleDecrease}
          >
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
          {buttonText}

          {includeIcon && (
            <span className="material-symbols-outlined">add_shopping_cart</span>
          )}
        </button>
      </div>
      <div className="error-text">{cartBtnError}</div>
    </div>
  );
}

export default ItemCard;
