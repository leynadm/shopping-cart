import React from "react";
import "../styles/Orders.css";
import imgPaymentMethod from "../images/cards.png";

function Orders({ orderItems, setOrderItems }) {
  const totalPrice = orderItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleDelete = (index) => {
    const newOrderItems = [...orderItems];
    newOrderItems.splice(index, 1);
    setOrderItems(newOrderItems);
  };

  const handleIncrement = (index) => {

    /* 
    if (orderItems[index].quantity < 10) {
      console.log('yes')
    }
     */
    
  };

  if (orderItems.length === 0) {
    return (
      <div className="order-checkout-no-orders-wrap">
        <div className="order-checkout-no-orders">
          You haven't added any items to your cart
        </div>
        <span class="material-symbols-outlined empty-cart">
          production_quantity_limits
        </span>
      </div>
    );
  } else {
    return (
      <div className="order-checkout">
        <div className="order-checkout-title">Your order summary</div>
        {orderItems.map((item, index) => (
          <div className="order-item">
            <img
              className="checkout-item-image"
              src={item.image}
              alt={item.name}
            />

            <div className="checkout-item-details">
              <div>{item.name}</div>

              <div className="quantity">
                <button className="orders-card-btn orders-increment-by-one-btn" onClick={handleIncrement}>
                  <span className="material-symbols-outlined order-button-icons">
                    keyboard_arrow_up
                  </span>
                </button>

                <input
                  type="number"
                  className="orders-no-of-items"
                  min="0"
                  max="10"
                  value={item.quantity}
                />

                <button className="orders-card-btn orders-decrease-by-one-btn">
                  <span className="material-symbols-outlined order-button-icons">
                    keyboard_arrow_down
                  </span>
                </button>
              </div>

              <div>{(item.price * item.quantity).toFixed(2)} €</div>
            </div>

            <div className="checkout-item-buttons">
              <button
                type="button"
                className="orders-card-btn"
                onClick={handleDelete}
              >
                <span class="material-symbols-outlined order-button-icons">
                  delete
                </span>
              </button>
            </div>
          </div>
        ))}

        <div className="checkout-order-total">
          <div className="checkout-order-total-header">Total</div>

          <div className="orders-summary-wrap">
            <div>Sub-total: </div>
            <div>{totalPrice.toFixed(2)} €</div>
          </div>

          <div className="orders-summary-wrap">
            <div>Shipping:</div>
            <div>FREE</div>
          </div>

          <hr></hr>

          <div className="checkout-order-total-vat orders-summary-wrap">
            <div>Total(VAT incl.):</div>
            <div>{totalPrice.toFixed(2)} €</div>
          </div>

          <div className="complete-order-wrap">
            <button className="complete-order-btn orders-card-btn">
              Complete Order
            </button>
          </div>
        </div>

        <div className="payment-methods">
          <div>We accept the following payment methods:</div>
          <img
            src={imgPaymentMethod}
            alt="list of accepted payment methods, visa, mastercard, american express"
          ></img>
        </div>
      </div>
    );
  }
}

export default Orders;
