import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children, isAllowed, redirectTo="/login" }) => {
    console.log(isAllowed);
    if (!isAllowed) {
      return <Navigate to={redirectTo} replace />;
    }
    
    return children ? children : <Outlet />;
  }