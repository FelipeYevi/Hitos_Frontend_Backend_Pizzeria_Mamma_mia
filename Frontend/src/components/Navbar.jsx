import React from "react";


const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">🍕 Pizzería Mamma Mia!</span>
      <div>
        <button className="btn btn-warning mx-1">🏠 Home</button>
        {token ? (
          <>
            <button className="btn btn-warning mx-1">🔓 Profile</button>
            <button className="btn btn-danger mx-1">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-warning mx-1">🔐 Login</button>
            <button className="btn btn-warning mx-1">🔐 Register</button>
          </>
        )}
        <button className="btn btn-success mx-1">
          🛒 Total: ${total.toLocaleString()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
