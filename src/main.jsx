import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import { BrowserRouter } from "react-router-dom";
import { HashRouter  } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

//import Navbar from "./components/navbar/Navbar.jsx";
import OffcanvasNavbar from "./components/navbar/offcanvas.jsx";
import * as Overlay from "./components/overlay-items/overlay.jsx";
import * as Links from "./config/links.js";
import Components from "./components/manage.js";
import ScrollToTop from "./components/scoller.jsx";



createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <BrowserRouter>
     
  //   <ScrollToTop />
  //     {/**<Navbar /> */}
  //     <OffcanvasNavbar />
      
  //     <Overlay.Overlayheader headerlinks={Links.overlayheaderlink} />
  //     <App />
  //     <Components.Footer footerLinks={Links.footerLinks} />
  //      <Components.Overlay.EnquireNowButton/>
  //   </BrowserRouter>
  //   {/* <Components.ContactBox /> */}

  // </StrictMode>

   <StrictMode>
    <HashRouter>
     
    <ScrollToTop />
      {/**<Navbar /> */}
      <OffcanvasNavbar />
      
      <Overlay.Overlayheader headerlinks={Links.overlayheaderlink} />
      <App />
      <Components.Footer footerLinks={Links.footerLinks} />
       <Components.Overlay.EnquireNowButton/>
       <Components.Overlay.WhatsappIcon/>
       {/* <Components.chatBot /> */}
    </HashRouter>
    {/* <Components.ContactBox /> */}

  </StrictMode>
);
