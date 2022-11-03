import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [carServices, setCarServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => {
        setCarServices(data);
      });
  }, []);

  console.log(carServices);
  return (
    <div>
      <div className="text-center">
        <p className="text-orange-600 text-2x font-bold">Service</p>
        <h2 className="text-5xl font-semibold py-6">Our Service Area</h2>
        <p className="py-6">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {carServices.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
