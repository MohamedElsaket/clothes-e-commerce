import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Collection from "../pages/Collection";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import PlaceOrder from "../pages/PlaceOrder";
import Order from "../pages/Order";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopContextProvider from "../context/ShopContext";
import { Toaster } from "react-hot-toast";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="clothes-e-commerce" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="collection" element={<Collection />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="place-order" element={<PlaceOrder />} />
          <Route path="order" element={<Order />} />
        </Routes>
        <Footer />
      </ShopContextProvider>
    </BrowserRouter>
  );
};

export default AppRouting;
