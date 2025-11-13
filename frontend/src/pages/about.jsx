// import Navbar from "../components/navbar/Navbar";
// import * as Overlay from "../components/overlay-items/overlay";
// import * as Links from "../config/links.js";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
        {/**<Navbar/> */}
        {/**  <Overlay.Overlayheader headerlinks={Links.overlayheaderlink}/> */}
       
       <div className=" min-vh-100 d-flex flex-column justify-content-center align-items-center">
         <h1 className="text-center mb-2 text-decoration-underline">About Page</h1>
         <h5 className="mb-2">Comming soon .....</h5>
         <Link to={'/'} >⬅️ Back to home</Link>
       </div>
        </>
    );
}