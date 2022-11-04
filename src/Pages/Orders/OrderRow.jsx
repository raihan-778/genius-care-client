import React, { useEffect, useState } from "react";

const OrderRow = ({ order }) => {
  const [orderService, setOrderService] = useState({});
  const { serveceName, service, price, message, customer } = order;
  console.log(order);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [service]);

  return (
    <div>
      <tr>
        <th>
          <label>
            <button className="btn btn-ghost">X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-24 rounded">
                {console.log(orderService)}
                {orderService?.img && (
                  <img
                    src={orderService?.img}
                    alt="Avatar Tailwind CSS Component"
                  />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{serveceName}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          {customer}
          <br />
          <span className="badge badge-ghost badge-sm">
            Desktop Support Technician
          </span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">{message}</button>
        </th>
      </tr>
    </div>
  );
};

export default OrderRow;
