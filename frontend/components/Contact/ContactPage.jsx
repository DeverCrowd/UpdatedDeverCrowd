import React from "react";
import Form from "./Form";
import Info from "./Info";

const ContactPage = () => {
  return (
    <section
      className="relative flex items-center justify-center w-full min-h-[100vh] py-10 px-5 bg-[#030613] z-40"
      id="contact"
    >
      <div className="flex lg:flex-row flex-col justify-center w-full xl:w-[90%] gap-2">
        <div className=" w-full lg:w-1/3 bg-[linear-gradient(150deg,_#030619_66%,_#030613_20%)] rounded-4xl border-t border-l border-primary shadow-[-9px_-9px_15px_#3B82F6]">
          <Info />
        </div>
        <div className="lg:w-1/2 bg-[linear-gradient(150deg,_#030619_35%,_#030613_30%)] rounded-4xl border-b border-r border-primary shadow-[9px_9px_15px_#3B82F6]">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
