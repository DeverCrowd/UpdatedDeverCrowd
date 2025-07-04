"use client";
import React from "react";
const Card = ({ icon, title, num }) => {
  return (
    <div className="flex flex-col justify-center items-center m-10 p-4 w-1/3">
      <div className="text-9xl text-primary">{icon}</div>
      <div className="md:border border-primary md:w-[94%] my-4"></div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <br />
      <h1 className="text-4xl font-bold">{num}</h1>
      
    </div>
  );
};

export default Card;
