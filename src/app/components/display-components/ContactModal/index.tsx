"use client";

import React from "react";
import { clientCallbackDetails } from "@/firebase-services/firestore/firestore";
import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IClientData {
  email: string;
  name: string;
  phoneNumber: string;
  message: string;
}

const ContactModal = () => {
  const [openModal, setOpenModal] = useState(true);

  const [clientData, setClientData] = useState<IClientData>({
    email: "",
    name: "",
    phoneNumber: "",
    message: "",
  });

  function onCloseModal() {
    setOpenModal(false);
  }

  const contextClass = {
    success: "bg-cyan-100 text-black w-[70%]",
    error: "bg-red-50 text-black",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  const submitFormData = async (formData: IClientData) => {
    try {
      const contactInfo: IClientData = {
        email: formData.email,
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
      };

      await clientCallbackDetails(contactInfo);
    } catch (error: any) {
      console.log("A front-end error occurred: ", error);
    }
  };

  const handleSubmitContactInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitFormData(clientData);
    setClientData({
      email: "",
      name: "",
      phoneNumber: "",
      message: "",
    });
    setOpenModal(false);
  };

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY &&
      formRef.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          formRef.current,

          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          (res: EmailJSResponseStatus) => {
            formRef.current?.reset;
            e.target.removeEventListener;
            setOpenModal(false);
            setClientData({
              email: "",
              name: "",
              phoneNumber: "",
              message: "",
            });
            toast.success("Message sent successfully!");
          },
          (error: { text: any }) => {
            toast.error("Oops...message not sent.");
          }
        );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="flex items-center">
        <span className="w-24 h-[2px] bg-cyan-600"></span>
        <span className="bg-cyan-600 w-fit text-white p-2 px-5 sm:text-xl text-l rounded-md">
          Contact Me
        </span>
        <span className="w-24 h-[2px] bg-cyan-600"></span>
      </div>

      <div id="contact me" className="flex justify-center my-5 lg:py-5">
        <div>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Message us and we&apos;ll get in touch
            </h3>

            <form
              ref={formRef}
              className="flex flex-col gap-8"
              onSubmit={sendEmail}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <input
                  className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                  name="email"
                  id="email"
                  placeholder="name@provider.com"
                  value={clientData.email}
                  onChange={(e) =>
                    setClientData({ ...clientData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Name" />
                </div>
                <input
                  className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                  name="name"
                  id="name"
                  type="text"
                  value={clientData.name}
                  onChange={(e) =>
                    setClientData({ ...clientData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="phone_number" value="Phone number" />
                </div>
                <input
                  className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                  name="phone_number"
                  id="phoneNumber"
                  type="tel"
                  value={clientData.phoneNumber}
                  onChange={(e) =>
                    setClientData({
                      ...clientData,
                      phoneNumber: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="message" value="Message" />
                </div>
                <Textarea
                  name="message"
                  id="message"
                  value={clientData.message}
                  onChange={(e) =>
                    setClientData({
                      ...clientData,
                      message: e.target.value,
                    })
                  }
                  required
                  rows={4}
                />
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className="bg-cyan-500 text-gray-900 hover:text-white text-sm w-full rounded-md border-none transition-none flex items-center justify-center p-2.5 text-center font-medium focus:z-10 focus:outline-none border border-transparent enabled:hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Reach out
                </button>
              </div>
            </form>
          </div>

          <ToastContainer
            toastClassName={(context) =>
              contextClass[context?.type || "default"] +
              " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer w-[70%] items-center self-center"
            }
            bodyClassName={() => "text-sm font-white font-med block p-3"}
            position="top-center"
            autoClose={3000}
            className="flex flex-col justify-center w-[-100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
