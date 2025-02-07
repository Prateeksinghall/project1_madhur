import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from "./pages/home/home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import SecondFooter from "./Components/SecondFooter/SecondFooter";

const Layout = () => {
  return (
    <div className="app">
      {/* <Navbar />   */}
      <Outlet />
      <SecondFooter />
      {/* <Footer /> */}
    </div>
  )
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App