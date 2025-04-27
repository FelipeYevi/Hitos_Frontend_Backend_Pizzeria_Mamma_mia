import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/userContext";

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">🍕 Pizzería Mamma Mia!</span>
      <div>
        <Link to="/" className="btn btn-warning mx-1">
          🏠 Home
        </Link>

        {token ?(

        <>
          <Link to="/profile" className="btn btn-warning mx-1">
            🔓 Profile
          </Link>
          <button onClick={logout} className="btn btn-danger mx-1">🔒 Logout</button>
        </>
        ) : (

        <>
          <Link to="/login" className="btn btn-warning mx-1">
            🔐 Login
          </Link>
          <Link to="/register" className="btn btn-warning mx-1">
            🔐 Register
          </Link>
        </>
        )}

        <Link to="/cart" className="btn btn-success mx-1">
          🛒 Total: ${total.toLocaleString()}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
