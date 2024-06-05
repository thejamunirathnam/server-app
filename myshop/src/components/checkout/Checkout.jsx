import React from "react";
import "./Checkout.scss";

const Checkout = ({ orderDetails }) => {
  console.log("orderDetails", orderDetails.products);

  if (!orderDetails) {
    return <div>No order details available.</div>;
  }

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <div className="checkout-center">Checkout</div>
        <div className="checkout-center checkout-ship-text">
          SHIPPING DETAILS
        </div>
        <div className="user-container">
          <div className="user-key">Name:</div>
          <div className="user-value">{orderDetails.name} </div>
        </div>
        <div className="user-container">
          <div className="user-key">Email:</div>
          <div className="user-value">{orderDetails.email}</div>
        </div>
        <div className="user-container">
          <div className="user-key">Mobile:</div>
          <div className="user-value">{orderDetails.mobile}</div>
        </div>
        <div className="user-container">
          <div className="user-key">Address:</div>
          <div className="user-value">{orderDetails.address}</div>
        </div>

        <div className="checkout-center checkout-ship-text">
          SHOPPING BAG
        </div>
        <div>
          <div className="notification-container">
            <div>
              You have got {orderDetails.products.length} item's on your Checkout Sheet{" "}
            </div>
            <div> Ok, Thanks </div>
          </div>
          <table className="product-details">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>#{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
