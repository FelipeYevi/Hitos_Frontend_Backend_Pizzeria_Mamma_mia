import React from "react";
import imageError404 from "../assets/img/error404.jpg";

import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container text-center mt-5">
      <h2>Página no encontrada</h2>
      <img
        src={imageError404}
        alt="error404"
        style={{ width: "420px", height: "auto" }}
      />
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="btn btn-primary">
        Volver a la página principal
      </Link>
    </div>
  );
};

export default NotFoundPage;
