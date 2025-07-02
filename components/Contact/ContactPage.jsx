import React from "react";
import Info from "./Info";
import Form from "./Form";

const ContactPage = () => {
  return (
    <section
      className="relative flex flex-col justify-center w-full min-h-[100vh] bg-black z-40"
      id="contact"
    >
      <div className="flex">
        <Info />
        <Form />
      </div>
    </section>
  );
};

export default ContactPage;
