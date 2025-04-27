import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useCart } from "../context/CartContext"; 

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCart(); 
  const getPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al obtener las pizzas:", error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="cards row mt-4">
        {pizzas.map((pizza) => (
           <CardPizza
           key={pizza.id}
           id={pizza.id}
           name= {pizza.name}
           price={pizza.price}
           ingredients={pizza.ingredients}  
           img={pizza.img}
         />
        ))}
      </div>
    </div>
  );
};

export default Home;
