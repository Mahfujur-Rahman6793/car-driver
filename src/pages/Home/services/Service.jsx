import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Service = ({service}) => {
    const {title,img,price} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions flex justify-center items-center">
          <p>${price}</p>
          <button className="text-red-500"> <BsArrowRight/></button>
        </div>
      </div>
    </div>
  );
};

export default Service;
