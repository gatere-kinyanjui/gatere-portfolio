"use client";
import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MessageSuccess() {
  return (
    <div className="toast toast-center toast-middle">
      <div className="alert alert-success">
        <span>Message sent successfully.</span>
      </div>
      <ToastContainer />
    </div>
  );
}
