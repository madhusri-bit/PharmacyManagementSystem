import React, { useState } from "react";
import { useSelector } from "react-redux";


const OrderManagement = () => {
  const { orders } = useSelector((state) => state.order);
  const [deliveryDate, setDeliveryDate] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleOrderStatus = (orderId, newStatus) => {
    // Update order status logic here (dispatch action to update order)
    console.log(`Order ID: ${orderId}, New Status: ${newStatus}`);
  };

  const handleScheduleDelivery = (orderId) => {
    // Logic for scheduling delivery
    console.log(`Order ID: ${orderId}, Delivery Date: ${deliveryDate}`);
  };

  // Filter orders based on status
  const filteredOrders = orders.filter(order => statusFilter ? order.status === statusFilter : true);

  return (
    <div className="order-management-container">
      <h1>Order Management</h1>

      <div className="order-filter">
        <label>Filter by Status: </label>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>

      <div className="order-list">
        {filteredOrders.map(order => (
          <div key={order.id} className="order-item">
            <h3>Order ID: {order.id}</h3>
            <p>Status: {order.status}</p>
            <p>Total Price: {order.totalPrice}</p>

            <label>Update Status: </label>
            <select onChange={(e) => handleOrderStatus(order.id, e.target.value)}>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>

            <div className="schedule-delivery">
              <input 
                type="date" 
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)} 
              />
              <button onClick={() => handleScheduleDelivery(order.id)}>
                Schedule Delivery
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderManagement;
