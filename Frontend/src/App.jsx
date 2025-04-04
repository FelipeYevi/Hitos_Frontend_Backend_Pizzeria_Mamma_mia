import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./LoginPage";
import Cart from "./components/Cart";
import Pizza from "./components/Pizza"

function App() {
  return (
    <>
      <Navbar />
     {/*<Home />*/}
    {/* <RegisterPage/>*/}
    {/*  <LoginPage/>*/}
    {/*<Cart/>*/}
    <Pizza />
      <Footer />
    </>
  );
}

export default App;