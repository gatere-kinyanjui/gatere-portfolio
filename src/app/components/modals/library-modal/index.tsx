"use client";

import { clientCallbackDetails } from "@/firebase-services/firestore/firestore";
import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

import MessageSuccess from "../../feedback-toasts/message-success";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IClientData {
  email: string;
  name: string;
  phoneNumber: string;
  message: string;
}

function LibraryFormModal() {
  const [openModal, setOpenModal] = useState(false);

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
    success: "bg-blue-50 text-black",
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
            // publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          (res: EmailJSResponseStatus) => {
            console.log("SUCCESS! ", res);
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
            console.log("FAILED...", error.text);
            toast.error("Ngori!");
            toast.success("Message sent successfully!");
          }
        );
    }
  };

  // const formRef = useRef<HTMLFormElement>(null);

  // const refSubmitClientFormData = async (
  //   e: React.FormEvent<HTMLFormElement>
  // ) => {
  //   e.preventDefault();
  //   // e.stopPropagation();

  //   console.log("Form submitted");

  //   if (formRef.current) {
  //     console.log("formRef.current is not null");

  //     const refFormData = new FormData(formRef.current);

  //     const email = refFormData.get("email")?.toString() || "";
  //     const name = refFormData.get("name")?.toString() || "";
  //     const phoneNumber = refFormData.get("phoneNumber")?.toString() || "";
  //     const message = refFormData.get("message")?.toString() || "";

  //     try {
  //       const refUserCredentials: IClientData = {
  //         email,
  //         name,
  //         phoneNumber,
  //         message,
  //       };

  //       await clientCallbackDetails(refUserCredentials);
  //       formRef.current.reset();
  //       console.log("Front-end client data captured");
  //     } catch (error: any) {
  //       console.log("A front-end error occurred: ", error);
  //     }
  //   } else {
  //     console.log("formRef.current is null");
  //   }
  // };

  return (
    <>
      <Button
        className="flex justify-center bg-[#4b5563] text-white mx-24 rounded-md border-none mt-16 transition-none"
        onClick={() => setOpenModal(true)}
      >
        Get in touch, anyway
      </Button>

      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />

        <Modal.Body>
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
                <TextInput
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
                <TextInput
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
                <TextInput
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
                    setClientData({ ...clientData, message: e.target.value })
                  }
                  required
                  rows={4}
                />
              </div>

              <div className="w-full">
                <Button
                  type="submit"
                  className="bg-[#4b5563] text-white rounded-md border-none transition-none"
                >
                  Reach out, even now
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <ToastContainer
        toastClassName={(context) =>
          contextClass[context?.type || "default"] +
          " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "text-sm font-white font-med block p-3"}
        position="top-center"
        autoClose={3000}
      />
    </>
  );
}

export default LibraryFormModal;
