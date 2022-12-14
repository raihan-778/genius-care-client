import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../context/AuthProvider/AuthProvider"
import logo from "./../../../assets/icons/logo.svg"

const Header = () => {
  const { user, userSignout } = useContext(AuthContext)

  const handleSignout = () => {
    userSignout()
      .then(() => {})
      .catch((err) => {
        console.error(err)
      })
  }

  const menuItems = (
    <>
      <li className="semi-bold">
        <Link to="/">Home</Link>
        {user?.email ? (
          <>
            <Link to="/orders">Orders</Link>
            <button onClick={handleSignout} className="btn btn-primary">
              SignOut
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </li>
    </>
  )
  return (
    <div className="navbar mb-12 pt-12 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn  btn-warning">Appointment</a>
      </div>
    </div>
  )
}

export default Header
