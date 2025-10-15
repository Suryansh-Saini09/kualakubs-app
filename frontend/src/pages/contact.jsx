
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
            <Components.Navbar />

            <div className="container-fluid header-container d-flex"
             style={{background: "url('https://www.westminster.org.uk/wp-content/uploads/2024/10/IMG_1172-scaled.jpg') no-repeat center center"}}>
                <Components.Overlay.Overlaylogo />
                <Components.Overlay.Overlaylist Overlaylistlinks={overlayListLinks} />
                <div className="round-top-right bg-white d-none p-4 d-lg-block position-absolute bottom-0 start-0"
                    style={{ width: "35%" }}>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/" className=" text-decoration-none">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/about" className=" text-decoration-none">About Kualakubs</Link></li>
                        </ol>
                    </nav>
                    <h1 style={{ color: "rgb(82, 82, 82)" }}>Contact Us</h1>
                </div>
            </div>


            {/* breadcrumb */}
            <div className="mt-3 d-flex justify-content-center">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={"/"} className=" text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item"><Link to={"/about"} className=" text-decoration-none">About Kualakubs</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                </nav>
            </div>

            <div className="container my-5" style={{ maxWidth: "75%" }}>
                <p className="text-center">
                    Westminster School <br />
                    17 Dean's Yard <br />
                    London SW1P 3PF</p>

                <Components.TableComponent />  
                 

                <div className=" container mt-4 p-0">
                    <p className="text-center">Direction & Map</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1724.7607985169643!2d76.89428252742518!3d29.301069890874597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dc3b5533b6d9f%3A0x1b563db61bcc0195!2sGEETA%20UNIVERSITY%2C%20NAULTHA%2C%20PANIPAT!5e0!3m2!1sen!2sin!4v1758009601722!5m2!1sen!2sin"
                        width="100%" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

            {/* divider */}
            <div className="divider container-fluid d-flex justify-content-center align-items-center p-3 p-sm-1 p-md-2"
                style={{ color: "var(--accent-text-color)", backgroundColor: "var(--accent-bg-color)" }}>
                <Link to={"/about"} className=" text-decoration-none" style={{ color: "var(--accent-text-color)" }}><i
                    className="bi bi-arrow-left me-1"></i>back to About Westminster</Link>
            </div>
            <Components.ContactBox />
            <Components.Footer footerLinks={Links.footerLinks} />

        </>
    );
}