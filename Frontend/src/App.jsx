import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import NotFoundPage from "./pages/NotFoundPage";
import { CartProvider } from "./context/CartContext";
import { UserProvider, useUser } from "./context/userContext";  

const AppRoutes = () => {
  const { token } = useUser(); 
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/login"
        element={token ? <Navigate to="/" /> : <LoginPage />}
      />

      <Route
        path="/register"
        element={token ? <Navigate to="/" /> : <LoginPage />}
      />

      <Route
        path="/profile"
        element={token ? <Profile /> : <Navigate to="/login" />}
      />

      <Route path="/cart" element={<Cart />} />
      <Route path="/pizza/:id" element={<Pizza />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <AppRoutes /> 
          <Footer />
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;

