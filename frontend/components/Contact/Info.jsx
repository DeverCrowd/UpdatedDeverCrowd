import React from "react";
import H1 from "../ui/H1";
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

const infos = [
  {
    icon: <FaPhone />,
    key: "Phone",
    value: "0101010101",
  },
  {
    icon: <MdMail />,
    key: "Email",
    value: "devercrowd@gmail.com",
  },
  {
    icon: <FaMapLocationDot />,
    key: "Location",
    value: "Egypt",
  },
];
const socials = [
  {
    icon: <IoLogoWhatsapp />,
    link: "0101010101",
  },
  {
    icon: <FaFacebookF />,
    link: "devercrowd@gmail.com",
  },
  {
    icon: <AiFillTikTok />,
    link: "Egypt",
  },
  {
    icon: <AiFillInstagram />,
    link: "Egypt",
  },
  {
    icon: <FaLinkedinIn />,
    link: "Egypt",
  },
  {
    icon: <FaSquareXTwitter />,
    link: "Egypt",
  },
];
const Info = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <H1 title="contact info" />
      <div className=" w-[90%] flex items-center justify-center flex-col py-9">
        <div className="flex flex-col w-[90%]">
          {infos.map((info, i) => {
            return (
              <div
                className="w-full flex p-4 gap-2 items-center border-t border-l border-primary-foreground rounded-full m-3 hover:border-primary duration-200"
                key={i}
              >
                <div className="text-2xl">{info.icon}</div>
                <div>{info.value}</div>
              </div>
            );
          })}
        </div>
        <div className="border m-4 w-[70%]" />
        <div className="flex items-center justify-center w-[90%]">
          {socials.map((social, i) => {
            return (
              <div className="flex p-1 items-center rounded-2xl" key={i}>
                <Link href={social.link} className="text-3xl">
                  {social.icon}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;
