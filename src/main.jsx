import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

//import Navbar from "./components/navbar/Navbar.jsx";
import OffcanvasNavbar from "./components/navbar/offcanvas.jsx";
import * as Overlay from "./components/overlay-items/overlay.jsx";
import * as Links from "./config/links.js";
import Components from "./components/manage.js";
import ScrollToTop from "./components/scoller.jsx";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root");
const appElement = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        {/**<Navbar /> */}
        <OffcanvasNavbar />

        <Overlay.Overlayheader headerlinks={Links.overlayheaderlink} />
        <App />
        <Components.Footer footerLinks={Links.footerLinks} />
        <Components.Overlay.EnquireNowButton />
        <Components.Overlay.WhatsappIcon />
        {/* <Components.chatBot /> */}
      </BrowserRouter>
      {/* <Components.ContactBox /> */}
    </HelmetProvider>
  </StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, appElement);
} else {
  createRoot(container).render(appElement);
}
