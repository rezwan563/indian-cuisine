import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Spinner from "../../pages/Shared/Spinner/Spinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (user) {
    return children;
  }
  else{
    return <Navigate to='/login' state={{from: location}}></Navigate>
  }
};

export default PrivateRoute;
