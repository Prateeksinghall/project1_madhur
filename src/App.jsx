import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SecondFooter from "./Components/SecondFooter/SecondFooter";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import Orders from "./pages/Order/Order";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";

const Layout = () => {
  const location = useLocation();  // Get the current route

  // Hide Navbar and Footer on the login page
  const hideNavbarAndFooter = location.pathname === "/login" || location.pathname === "/cart";


  return (
    <div className="app">
      {!hideNavbarAndFooter && <Navbar />}
      <Outlet /> {/* This will render the matched child routes */}
      {!hideNavbarAndFooter && <SecondFooter />}
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
};

// Protect Private Pages
const PrivateRoute = ({ children }) => {
  const user = useSelector(state => state.auth.user);
  console.log(user)
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Pages (Home, Products, Login) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="categories/:id" element={<CategoriesPage />} />

          {/* Protected Routes (Cart, Checkout, Orders) */}
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
          <Route path="orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
