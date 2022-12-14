import React, { useEffect, useState } from "react"

const OrderRow = ({ order, handleStatusUpdate, handleDelet }) => {
  const [orderService, setOrderService] = useState({})
  const { serveceName, sevice, _id, status, price, message, customer } = order

  useEffect(() => {
    fetch(`http://localhost:5000/services/${sevice}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderService(data)
      })
  }, [sevice])

  return (
    <div>
      <tr>
        <th>
          <label>
            <button onClick={() => handleDelet(_id)} className="btn btn-ghost">
              X
            </button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-24 rounded">
                {orderService?.img && (
                  <img
                    src={orderService.img}
                    alt="Avatar Tailwind CSS Component"
                  />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{serveceName}</div>
              <div className="text-sm opacity-50">Cost: {price} </div>
            </div>
          </div>
        </td>
        <td>
          {customer}
          <br />
          <span className="badge badge-ghost badge-sm">{message}</span>
        </td>
        <td>Purple</td>
        <th>
          <button
            onClick={() => handleStatusUpdate(_id)}
            className="btn btn-ghost btn-xs"
          >
            {!status ? "pending" : status}
          </button>
        </th>
      </tr>
    </div>
  )
}

export default OrderRow
