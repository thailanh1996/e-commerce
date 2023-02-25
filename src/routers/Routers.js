import React from "react";
import Home from "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";
import Checkout from "../pages/Checkout.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import Cart from "../pages/Cart.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectRouter from "./ProtectRouter.js";
import AllProduct from "../admin/AllProduct.jsx";
import AddProduct from "../admin/AddProducts.jsx";
import Dashboard from "../admin/Dashboard.jsx";
import Users from "../admin/Users.jsx";

function Routers(props) {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />}></Route>
      <Route path="/home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />

      <Route path="/*" element={<ProtectRouter />}>
        <Route path="checkout" element={<Checkout />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/all-products" element={<AllProduct />} />
        <Route path="dashboard/add-products" element={<AddProduct />} />
        <Route path="dashboard/users" element={<Users />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default Routers;
