"use client";

import { clientCallbackDetails } from "@/firebase-services/firestore/firestore";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";

interface IClientData {
  email: string;
  name: string;
  phoneNumber: string;
  location: string;
}

function LibraryFormModal() {
  const [openModal, setOpenModal] = useState(false);

  const [clientData, setClientData] = useState<IClientData>({
    email: "",
    name: "",
    phoneNumber: "",
    location: "",
  });

  function onCloseModal() {
    setOpenModal(false);
  }

  const submitFormData = async (formData: IClientData) => {
    console.log("Form submitted");

    try {
      const contactInfo: IClientData = {
        email: formData.email,
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        location: formData.location,
      };

      await clientCallbackDetails(contactInfo);

      console.log("Front-end client data captured");
    } catch (error: any) {
      console.log("A front-end error occurred: ", error);
    }
  };

  const handleSubmitContactInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitFormData(clientData);
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
  //     const location = refFormData.get("location")?.toString() || "";

  //     try {
  //       const refUserCredentials: IClientData = {
  //         email,
  //         name,
  //         phoneNumber,
  //         location,
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
              className="flex flex-col gap-8"
              onSubmit={handleSubmitContactInfo}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
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
                  <Label htmlFor="" value="Phone number" />
                </div>
                <TextInput
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
                  <Label htmlFor="location" value="Location" />
                </div>
                <TextInput
                  id="location"
                  type="text"
                  value={clientData.location}
                  onChange={(e) =>
                    setClientData({ ...clientData, location: e.target.value })
                  }
                  required
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

        {/* <div className="w-full md:w-96 md:max-w-full mx-auto">
          <div className="p-6 border border-gray-300 sm:rounded-md">
            <form method="POST" action="https://herotofu.com/start">
              <label className="block mb-6">
                <span className="text-gray-700">Your name</span>
                <input
                  type="text"
                  name="name"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Joe Bloggs"
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="joe.bloggs@example.com"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Message</span>
                <textarea
                  name="message"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  rows={3}
                  placeholder="Tell us what you're thinking about..."
                ></textarea>
              </label>
              <div className="mb-6">
                <button
                  type="submit"
                  className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                >
                  Contact Us
                </button>
              </div>
              <div>
                <div className="mt-2 text-gray-700 text-right text-xs">
                  by
                  <a
                    href="https://herotofu.com"
                    className="hover:underline"
                    target="_blank"
                  >
                    HeroTofu
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div> */}
      </Modal>
    </>
  );
}

export default LibraryFormModal;
