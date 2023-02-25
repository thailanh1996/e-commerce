import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../custom-hook/useAuth";

function ProtectRouter({ children }) {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
}

export default ProtectRouter;
