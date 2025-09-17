// import './App.css'
// import Navbar from "./components/Navbar"
// import Footer from "./components/footer"

import {Overlayheader} from "./components/overlay-items/overlay.jsx"

// Import Router helpers
// import { Routes, Route } from "react-router-dom";
// import { Suspense } from "react";   // <--- important
// import routes from "./urls";      // (I think you meant ./routes, not ./urls)

function App() {

  const links = [];
  return (
    <>
   
     <Overlayheader headerlinks={links}/>
     
    </>
  );
}

export default App;
