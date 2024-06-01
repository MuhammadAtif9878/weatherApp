import React from "react";


import {Link, Navigate, useLocation, useNavigate} from 'react-router-dom'
const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  Navigate = useNavigate
  console.log("🚀 ~ file: ProtectedRoute.js:5 ~ ProtectedRoute ~ token:", token)
  
  if (!token) {
    Navigate("/weaher")
    
  } else
  Navigate("/")
  
};
export default ProtectedRoute;
