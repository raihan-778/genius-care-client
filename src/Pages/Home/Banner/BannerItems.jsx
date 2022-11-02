import React from "react";
import "./BannerItems.css";

const BannerItems = ({ slide }) => {
  const { id, prev, next, image } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img ">
        <img src={image} className="w-full  rounded-xl" />
      </div>

      <div className="absolute text-white font-black text-6xl flex justify-end transform -translate-y-1/2 left-24  top-[270px]">
        <h2>
          Affordable
          <br />
          Price For Car
          <br />
          Servicing
        </h2>
      </div>
      <div className="absolute text-muted font-black text-1xl left-24 w-1/2 flex justify-end transform -translate-y-1/2  bottom-56">
        <p>
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute text-white font-black text-6xl flex justify-end transform -translate-y-1/2 left-24  bottom-1/4">
        <button className="btn btn-outline btn-secondary mx-2">
          Discover More
        </button>
        <button className="btn btn-outline btn-accent">Latest Project</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-2">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;
