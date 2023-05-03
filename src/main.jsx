import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "leaflet/dist/leaflet.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { ToastContainer, toast } from "react-toastify";
import ScrollTop from "./pages/Shared/ScrollTop/ScrollTop.jsx";
import AuthProvider from "./provider/AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
