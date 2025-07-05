import React from "react";
import Form from "./Form";

const ContactPage = () => {
  return (
    <section
      className="relative flex flex-col justify-center w-full min-h-[100vh] pt-10 bg-black z-40"
      id="contact"
    >
      <div className="flex-col">
        <h2 className="text-3xl md:text-4xl pb-5 h-[15vh] flex flex-col justify-end items-center gap-3">
          Get In Touch
          <div className="border w-70 md:w-100 bg-primary"></div>
        </h2>
        <Form />
      </div>
    </section>
  );
};

export default ContactPage;
