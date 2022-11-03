import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const singleService = useLoaderData();
  console.log(singleService);

  return (
    <div>
      <h2>This is checkout page</h2>
    </div>
  );
};

export default CheckOut;
