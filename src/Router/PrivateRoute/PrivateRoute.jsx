import React, { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../../context/AuthProvider/AuthProvider"

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext)
  const location = useLocation()

  if (loader) {
    ;<h2 className="text-5xl">Loading...</h2>
  }

  if (user) {
    return children
  }
  return <Navigate state={{ from: location }} replace></Navigate>
}

export default PrivateRoute
