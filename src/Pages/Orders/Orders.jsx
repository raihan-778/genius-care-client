import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user, userSignout, loader } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log(user?.email);
  console.log(orders);

  if (loader) {
    <>
      <h2>Loading...</h2>
    </>;
  }

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("genious-Token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          userSignout();
        }
        return res.json();
      })
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelet = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to candel this order?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";
          const newOrders = [...remaining, approving];
          console.log(approving);
          setOrders(newOrders);
        }
      });
  };

  return (
    <div>
      <h2 text-5xl> Your have : {orders?.length} Orders</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* Header */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="w-full">
            {console.log(orders)}
            {orders?.map((order) => (
              <OrderRow
                handleStatusUpdate={handleStatusUpdate}
                handleDelet={handleDelet}
                key={order?._id}
                order={order}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
