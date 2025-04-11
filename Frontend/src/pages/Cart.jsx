import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      if (!response.ok) {
        throw new Error("Error al obtener las pizzas");
      }
      const data = await response.json();

      setCart(data.map((pizza) => ({ ...pizza, quantity: 0 })));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
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

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (cart.length === 0) {
    return <div>No hay pizzas en el carrito</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Detalles del pedido:</h2>
      <ul className="list-group">
        {cart.map((pizza) => (
          <li
            key={pizza.id}
            className="list-group-item d-flex align-items-center"
          >
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
