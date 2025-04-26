import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Pizza = () => {
  const {id}  = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPizza = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      if (!response.ok) {
        throw new Error("Error al obtener la pizza");
      }
      const data = await response.json();
      setPizza(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPizza();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  if (!pizza) {
    return <div>No se encontró la pizza</div>;
  }
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center  ">
      <div className="col-md-4 d-flex border-radius-4px">
        <div className="card h-100 d-flex flex-column ">
          <h2 className="text-center ">{pizza.name}</h2>
          <img src={pizza.img} alt={pizza.name} className="img-fluid mb-3" />
          <p>
            <strong>Descripción:</strong> {pizza.desc}
          </p>
          <p className="">
            <strong>Precio:</strong> <strong>${pizza.price}</strong>{" "}
          </p>
          <div className="d-flex flex-column text-center border border-gray text-decoration-none">
            <h4>Ingredientes:</h4>
            <ul className="list-unstyled">
              {pizza.ingredients?.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
