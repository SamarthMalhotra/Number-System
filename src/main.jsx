import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Head from "./Head.jsx";
import DecimalToBinary from "./DecimalToBinary.jsx";
import DecimalToOctal from "./DecimalToOctal.jsx";
import DecimalToHex from "./DecimalToHex.jsx";
import Docs from "./Docs.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Head /> },
      { path: "/binary", element: <DecimalToBinary /> },
      { path: "/octal", element: <DecimalToOctal /> },
      { path: "/hexadecimal", element: <DecimalToHex /> },
      { path: "/docs", element: <Docs /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
