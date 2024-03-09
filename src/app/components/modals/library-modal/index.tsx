"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

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
    setClientData({ email: "", name: "", phoneNumber: "", location: "" });
  }

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
                id="phone number"
                type="tel"
                value={clientData.phoneNumber}
                onChange={(e) =>
                  setClientData({ ...clientData, phoneNumber: e.target.value })
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

            {/* <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Lost Password?
              </a>
            </div> */}
            <div className="w-full">
              <Button className="bg-[#4b5563] text-white rounded-md border-none transition-none">
                Reach out, even now
              </Button>
            </div>
            {/* <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a
                href="#"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Create account
              </a>
            </div> */}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LibraryFormModal;
