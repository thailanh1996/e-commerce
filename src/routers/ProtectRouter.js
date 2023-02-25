import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../custom-hook/useAuth";

function ProtectRouter() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectRouter;
