import React from "react"
import { Link } from "react-router-dom"

const ServiceCard = ({ service }) => {
  const { title, price, _id, img, description } = service

  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img className="h-60" src={img} alt="car" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {description.length > 250
              ? description.slice(1, 200) + "..."
              : description}
          </p>
          <div className="card-actions justify-end">
            <p className="text-orange-600 font-semibold">Price: {price}</p>
            <button className="btn btn-primary">
              <Link to={`/checkout/${_id}`}>CHECKOUT</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
