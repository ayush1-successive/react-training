// Task-11

import { useContext, useEffect, useState } from "react";
import { ShoppingContext } from "./ShoppingContext";

const CartComponent = () => {
  const { cartItems } = useContext(ShoppingContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const tableStyle = {
    width: "60%",
    borderCollapse: "collapse",
    border: "2px solid #333",
    margin: "0 auto",
    fontSize: 20,
  };

  const thStyle = {
    border: "2px solid #333",
    padding: "8px",
    backgroundColor: "#f2f2f2",
  };

  const tdStyle = {
    border: "2px solid #333",
    padding: "8px",
    textAlign: "center",
  };

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [totalPrice, cartItems]);

  return (
    <>
      <div>
        <h2>My CART</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Product Name</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(cartItems).map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.name}</td>
                <td style={tdStyle}>{item.price}</td>
                <td style={tdStyle}>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>
          The total price for all items is: {Math.round(totalPrice)} (rounded)
        </h2>
      </div>
    </>
  );
};

export default CartComponent;
