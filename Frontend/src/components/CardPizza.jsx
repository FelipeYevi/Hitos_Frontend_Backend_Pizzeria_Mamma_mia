import React from "react";
import { useCart } from "../context/CartContext";

const CardPizza = ({ name, price, ingredients, img }) => {
  const { addToCart } = useCart(); 

  const handleAddToCart = () => {
    addToCart({ name, price, ingredients, img, id: name }); 
  };

  return (
    <div className="col-md-4 d-flex">
      <div className="card h-100 d-flex flex-column">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <div className="d-flex flex-column text-center border border-gray">
            <h5>Ingredientes</h5>
            <ul className="list-inline">
              {ingredients.map((ing, index) => (
                <li key={index} className="list-inline-item">
                  {ing}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center fs-4">
            <strong>Precio: ${price.toLocaleString()}</strong>
          </p>
          <div className="mt-auto d-flex justify-content-between">
            <button className="btn btn-outline-secondary">Ver Más</button>
            <button className="btn btn-dark" onClick={handleAddToCart}>Añadir 🛒</button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
