// Task-11

import { useContext } from "react";
import { ShoppingContext } from "./ShoppingContext";
import "../../index.css";

const ProductsComponent = () => {
  const { products, handleAddToCart, handleTakeFromCart } =
    useContext(ShoppingContext);

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

  return (
    <>
      <div>
        <h2>PRODUCT LIST</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Product Name</th>
              <th style={thStyle}>Price</th>
              {/* <th style={thStyle}>Quantity</th> */}
              <th style={thStyle}>To Cart</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(products).map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.name}</td>
                <td style={tdStyle}>{item.price}</td>
                {/* <td style={tdStyle}>{item.quantity}</td> */}
                <td style={tdStyle}>
                  <button onClick={() => handleAddToCart(item)}>
                    <img
                      src="https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-add-vector-icon-png-image_470700.jpg"
                      alt="Remove from cart"
                      style={{ width: 35, height: 35 }}
                    />
                  </button>
                  <button onClick={() => handleTakeFromCart(item)}>
                    <img
                      src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-flattened-minus-image_1127795.jpg"
                      alt="Remove from cart"
                      style={{ width: 35, height: 35 }}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsComponent;
