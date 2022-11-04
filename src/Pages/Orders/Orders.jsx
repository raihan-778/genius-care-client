import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthProvider/AuthProvider"
import OrderRow from "./OrderRow"

const Orders = () => {
  const { user } = useContext(AuthContext)
  const [orders, setOrders] = useState({})
  console.log(user.email)
  console.log(orders)

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
  }, [user?.email])

  return (
    <div>
      <h2 text-5xl> Your have : {orders.length} Orders</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* Header */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {console.log(orders)}
            {orders.map((order) => (
              <OrderRow key={order._id} order={order}></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
