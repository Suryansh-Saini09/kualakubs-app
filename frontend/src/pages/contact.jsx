import Navbar from "../components/navbar/Navbar";
import * as Overlay from "../components/overlay-items/overlay";
import { Link } from "react-router-dom";
import Components from "../components/manage.js";
import * as Links from "../config/links.js";


export default function Contact() {
    const overlayListLinks = [
        { path: "#", pathname: "Link 1" },
        { path: "#", pathname: "Link 2" },
        { path: "#", pathname: "Link 3" },
        { path: "#", pathname: "Link 4" },
        { path: "#", pathname: "Link 5" },
        { path: "#", pathname: "Link 6" },
        { path: "#", pathname: "Link 7" },
        { path: "#", pathname: "Link 8" }

    ]
    return (
        <>
            <Navbar />

            <div className="container-fluid header-container d-flex">
                <Overlay.Overlaylogo />
                <Overlay.Overlaylist Overlaylistlinks={overlayListLinks} />
                <div className="round-top-right bg-white d-none p-4 d-lg-block position-absolute bottom-0 start-0"
                    style={{width: "35%"}}>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/" className=" text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/about" className=" text-decoration-none">About Kualakubs</Link></li>
                        </ol>
                    </nav>
                    <h1 style={{color: "rgb(82, 82, 82)" }}>Contact Us</h1>
                </div>
            </div>


            <h1 className="text-center">Contact page</h1>
            <Components.Footer footerLinks={Links.footerLinks}/>
            
        </>
    );
}