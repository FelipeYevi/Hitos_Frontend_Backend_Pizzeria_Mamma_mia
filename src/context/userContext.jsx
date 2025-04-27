import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [token, setToken] = useState(() => {
  
    return localStorage.getItem("token") === "true";
  });

  // Función para iniciar sesión
  const login = () => {
    setToken(true); 
    localStorage.setItem("token", "true"); 
  };

  // Función para cerrar sesión
  const logout = () => {
    setToken(false);
    localStorage.removeItem("token"); 
  };

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
