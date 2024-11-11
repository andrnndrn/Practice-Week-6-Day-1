import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NavbarTop from "./containers/NavbarTop.jsx";
import NavbarBot from "./containers/NavbarBot.jsx";
import Footer from "./containers/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavbarTop />
    <NavbarBot />
    <App />
    <Footer />
  </StrictMode>
);
