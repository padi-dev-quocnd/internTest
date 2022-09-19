import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, useLocation } from "react-router-dom";

export function PrivateRoute({ children }) {
  const location = useLocation();
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [auth] = useState(true);
  return auth ? (
    children
  ) : (
    <Navigate
      to="/base"
      state={{ from: location }}
      replace
    />
  );
}
