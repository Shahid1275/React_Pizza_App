import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Menu from "./Menu.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="conatiner">
      <Header />
      <Menu />
      <Footer />
    </div>
  </StrictMode>
);
