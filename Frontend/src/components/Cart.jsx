import React, { useState } from "react";
import pizza from "./Pizza"; 
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {

  const [cart, setCart] = useState(
    pizzas.map((pizza) => ({ ...pizza, quantity: 0 })) 
  );


  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id
          ? { ...pizza, quantity: pizza.quantity + 1 } 
          : pizza
      )
    );
  };


  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === id && pizza.quantity > 0
            ? { ...pizza, quantity: pizza.quantity - 1 } 
            : pizza
        )
        .filter((pizza) => pizza.quantity > 0) 
    );
  };


  const total = cart.reduce(
    (sum, pizza) => sum + pizza.price * pizza.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2>Detalles del pedido:</h2>
      <ul className="list-group">
        {cart.map((pizza) => (
          <li key={pizza.id} className="list-group-item d-flex align-items-center">
            <img
              src={pizza.img}
              alt={pizza.name}
              className="cart-img me-3"
              style={{ width: "100px", height: "100px" }}
            />
            <span className="me-auto">{pizza.name}</span>
            <span className="me-3">${pizza.price.toLocaleString()}</span>
            <button
              className="btn btn-outline-danger me-2"
              onClick={() => decreaseQuantity(pizza.id)}
            >
              -
            </button>
            <span>{pizza.quantity}</span>
            <button
              className="btn btn-outline-primary ms-2"
              onClick={() => increaseQuantity(pizza.id)}
            >
              +
            </button>
          </li>
        ))}
      </ul>
      <h3 className="mt-3">Total: ${total.toLocaleString()}</h3>
      <button className="btn btn-dark mt-2">Pagar</button>
    </div>
  );
};

export default Cart;

