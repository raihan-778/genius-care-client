import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../Pages/shared/Footer/Footer"
import Header from "../Pages/shared/Header/Header"

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root
