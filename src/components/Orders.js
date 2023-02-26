import React from "react";
import "../styles/Orders.css"

function Orders({ orderItems, setOrderItems }) {

  const totalPrice = orderItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  
  return (
    <div className="order-checkout">
      <div className="order-checkout-title">Your order summary</div>
      {orderItems.map((item, index) => (
        <div className="order-item">
          <img className="checkout-item-image" src={item.image} alt={item.name} />

          <div className="checkout-item-details">
            <div>{item.name}</div>
            <div>Quantity: {item.quantity}</div>
            <div>{(item.price*item.quantity).toFixed(2)} €</div>
          </div>
        </div>
      ))}

      <div className="checkout-order-total">Your total order is: {totalPrice.toFixed(2)} €</div>
    </div>
  );
}

export default Orders;
