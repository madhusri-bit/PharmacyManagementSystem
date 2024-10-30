import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const location = useLocation();
  const { cart, totalAmount, user } = location.state || {};

  return (
    <div className="confirmation-page">
      <h1>Order Confirmation</h1>
      <div className="user-info">
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Phone:</strong> {user?.phone}</p>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.medicineName} - Qty: {item.quantity} - ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p><strong>Total Amount:</strong> ₹{totalAmount}</p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
