// Task-11

import React, { createContext, useState } from "react";
import ProductsComponent from "./ProductsComponent";
import CartComponent from "./CartComponent";

export const ShoppingContext = createContext();

const ShoppingComponent = () => {
  const products = [
    {
      name: "Product A",
      price: 19.99,
      quantity: 5,
    },
    {
      name: "Product B",
      price: 29.99,
      quantity: 10,
    },
    {
      name: "Product C",
      price: 9.99,
      quantity: 7,
    },
    {
      name: "Product D",
      price: 14.99,
      quantity: 3,
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const index = cartItems.findIndex((elem) => elem.name === item.name);
    if (index === -1) cartItems.push({ ...item, quantity: 1 });
    else cartItems[index].quantity += 1;

    setCartItems([...cartItems]);
  };

  const handleTakeFromCart = (item) => {
    const index = cartItems.findIndex((elem) => elem.name === item.name);

    if (index === -1) return;

    cartItems[index].quantity -= 1;
    if (cartItems[index].quantity === 0) cartItems.splice(index, 1);

    setCartItems([...cartItems]);
  };

  //   const handleAddProduct = (item) => setProducts([...products, item]);

  return (
    <ShoppingContext.Provider
      value={{ products, cartItems, handleAddToCart, handleTakeFromCart }}
    >
      <ProductsComponent />
      <CartComponent />
    </ShoppingContext.Provider>
  );
};

export default ShoppingComponent;
