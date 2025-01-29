import React from 'react';
import { FaDropbox } from "react-icons/fa";

function OrderDetails() {
  const orderSummary = {
    total: 18,
    inProgress: 10,
    completed: 5,
    cancelled: 3,
  };

  return (
    <section className="order-details">
        <div className="order-details-header">
            <h2>Order Details</h2>
            <p>View All</p>
        </div>
      <div className="order-summary">
        <div className="order-tile">
        <div className='test'><p>{orderSummary.total}</p><FaDropbox className='box'/></div>
          <h3>Total Orders</h3>
          
        </div>
        <div className="order-tile">
          <h3>In Progress</h3>
          <p>{orderSummary.inProgress}</p>
        </div>
        <div className="order-tile">
          <h3>Completed Order</h3>
          <p>{orderSummary.completed}</p>
        </div>
        <div className="order-tile">
          <h3>Cancelled Order</h3>
          <p>{orderSummary.cancelled}</p>
        </div>
      </div>
    </section>
  );
}

export default OrderDetails;