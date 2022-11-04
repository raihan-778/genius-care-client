import React, { useContext } from "react"
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../../context/AuthProvider/AuthProvider"

const CheckOut = () => {
  const singleService = useLoaderData()
  const { title, price, _id } = singleService
  const { user } = useContext(AuthContext)
  console.log(singleService)

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    const form = e.target

    const name = `${form.firstName.value} ${form.lastName.value}`
    const phone = form.phone.value
    // const email = user?.email || "unregistered"
    const email = form.email.value
    const message = form.message.value
    console.log(name, phone, email, message)
    const order = {
      sevice: _id,
      serveceName: title,
      price,
      customer: name,
      email,
      message,
    }
    fetch(`http://localhost:5000/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          alert("Order Placed successfully")
          form.reset()
        }
      })
      .catch((err) => console.error(err))
  }

  return (
    <div>
      <h2 className="text-4xl text-blue-500">
        You are About to order: {title}
      </h2>
      <h2 className="text-2xl text-orange-600">Price{price}</h2>
      <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-5">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <textarea
            className="textarea textarea-bordered h-24 w-3/4 p-5 m-5"
            placeholder="Please write your value comments"
            name="message"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit Now"
          className="btn btn-primary mx-5"
        ></input>
      </form>
    </div>
  )
}

export default CheckOut
