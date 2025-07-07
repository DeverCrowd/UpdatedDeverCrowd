import React from "react";

const H1 = ({title}) => {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl pb-5 min-h-[20vh] text-transparent bg-primary bg-clip-text flex flex-col justify-center items-center text-center gap-3 capitalize">
        {title}
        <div className="w-4/5 sm:w-3/5 md:w-2/3 lg:w-1/2 xl:w-[40%] h-1 bg-primary mx-auto mt-2 rounded-full" />
      </h2>
    </div>
  );
};

export default H1;
