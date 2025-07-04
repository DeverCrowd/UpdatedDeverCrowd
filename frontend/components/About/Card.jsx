"use client";
import Image from "next/image";
import React from "react";
const Card = ({ icon, text, desc }) => {
  return (
    <div className="border-2 border-primary flex flex-col justify-center items-center m-10 p-4 rounded-4xl w-1/3">
      <div className="flex justify-center gap-4 items-center p-4">
        <h1 className="text-4xl font-bold">{text}</h1>
        <div className="text-7xl text-primary">
            {icon}
        </div>
      </div>
      <div className="md:border border-primary md:w-[94%] mb-5"></div>

      <div className="text-lg w-[94%] text-start leading-relaxed text-purple-100">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
