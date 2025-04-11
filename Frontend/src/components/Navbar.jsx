import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">🍕 Pizzería Mamma Mia!</span>
      <div>
        <Link to="/" className="btn btn-warning mx-1">
          🏠 Home{" "}
        </Link>
        (
        <>
          <Link to="profile" className="btn btn-warning mx-1">
            🔓 Profile
          </Link>
        </>
        ) : (
        <>
          <Link to="login" className="btn btn-warning mx-1">
            🔐 Login
          </Link>
          <Link to="register" className="btn btn-warning mx-1">
            🔐 Register
          </Link>
        </>
        )
        <Link to="cart" className="btn btn-success mx-1">
          🛒 Total: ${total.toLocaleString()}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
