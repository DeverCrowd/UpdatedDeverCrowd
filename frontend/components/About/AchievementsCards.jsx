import React, { useState, useEffect } from "react";

const FlipCard = ({ icon, title, num }) => {
  return (
    <div className="flex items-center gap-4 p-10 flex-col rounded-2xl border border-primary text-2xl transform-3d group hover:rotate-y-180 transition-all duration-500 bg-black text-primary">
      <div className="translate-z-2 text-5xl transition-all duration-500">
        {icon}
      </div>
      <div className="translate-z-2 transition-all duration-500">
        {title}
      </div>
      <div className="-translate-z-2 rotate-y-180 text-5xl absolute">
        {icon}
      </div>
      <div className="-translate-z-2 rotate-y-180 absolute bottom-[30%]">
        {title}
      </div>
      <div className="-translate-z-1 rotate-y-180 absolute text-3xl bottom-[10%]">{num}</div>
    </div>
  );
};

export default FlipCard;
