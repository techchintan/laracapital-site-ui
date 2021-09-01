import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function ToastBanner() {
  return (
    <ToastContainer
      hideProgressBar
      closeOnClick
      pauseOnHover={false}
      position="top-center"
      autoClose={2000}
    />
  );
}
