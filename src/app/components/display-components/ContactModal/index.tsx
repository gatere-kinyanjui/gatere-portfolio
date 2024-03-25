import React from "react";

const ContactModal = () => {
  return (
    <>
      <div id="contact me" className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-cyan-600"></span>
          <span className="bg-cyan-600 w-fit text-white p-2 px-5 sm:text-xl text-l rounded-md">
            Contact Me
          </span>
          <span className="w-24 h-[2px] bg-cyan-600"></span>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
