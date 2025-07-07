import React from "react";
import Image from "next/image";

const TestCard = ({ name, image, test }) => {
  return (
    <div className="shadow-lg transition-shadow duration-400 hover:shadow-xl shadow-primary flex flex-col items-center justify-center gap-4 border p-4 lg:w-100 w-50 h-50 rounded-3xl group">
      <div className="flex items-center justify-center gap-4 ">
        <Image
          width={50}
          height={57}
          src={image}
          alt="image"
          className="rounded-full object-cover"
        />
        <h1 className=" text-white/50 text-lg lg:text-base capitalize items-center justify-center flex group-hover:text-primary transition duration-300">{name}</h1>
      </div>
      <div className="border w-[90%] flex items-center justify-center" />
      <p className="flex items-center justify-center text-center text-white/50 group-hover:text-white transition duration-300 2xs:text-xs lg:text-base">{test}</p>
    </div>
  );
};

export default TestCard;
