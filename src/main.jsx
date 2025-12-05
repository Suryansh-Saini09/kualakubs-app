import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
//import Navbar from "./components/navbar/Navbar.jsx";
import OffcanvasNavbar from "./components/navbar/offcanvas.jsx";
import * as Overlay from "./components/overlay-items/overlay.jsx";
import * as Links from "./config/links.js";
import Components from "./components/manage.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/**<Navbar /> */}
        <OffcanvasNavbar />
      <Overlay.Overlayheader headerlinks={Links.overlayheaderlink}/>
      <App />
    </BrowserRouter>
    {/* <Components.ContactBox /> */}

    <Components.Footer footerLinks={Links.footerLinks} />
  </StrictMode>
);
