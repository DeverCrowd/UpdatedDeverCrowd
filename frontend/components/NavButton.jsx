import React from "react";
import {MdLanguage} from 'react-icons/md'
import { MdDarkMode } from "react-icons/md";
import { BsEnvelopeAtFill } from "react-icons/bs";


const buttons = [
  {
    name: "lang",
    icon: <MdLanguage/>,
  },
  {
    name: "mode",
    icon: <MdDarkMode/>,
  },
  {
    name: "contact",
    icon: <BsEnvelopeAtFill/>,
  },
];

const NavButton = () => {
  return (
    <ul className="flex items-center justify-between gap-1">
      {buttons.map((button, index) => {
        return <li key={index} className="text-2xl">{button.icon}</li>;
      })}
    </ul>
  );
};

export default NavButton;
