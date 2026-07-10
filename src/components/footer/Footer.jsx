
import "./Footer.css";
import { Link } from "react-router-dom";


const Footer = ({ footerLinks }) => {
    return (
        <footer
            className="container-fluid py-4"
            style={{ backgroundColor: "#ffffff", color: "var(--accent-bg-color)" }}
        >
            {/* Row 1: Links */}
            <div className="row justify-content-center mb-3">
                <div className="row justify-content-center">
                    {footerLinks.map((section, index) => (
                        <div key={index} className="col d-flex justify-content-center">
                            <ul className="list-unstyled text-start">
                                <li className="mb-2 fw-semibold">{section.category}</li>
                                {section.links.map((link, i) => {
                                    // console.log("Link item:", link);   // 👈 console log added here

                                    return (
                                        <li key={i}>
                                            <Link
                                                to={link?.path ?? null}
                                                className="footer-link text-decoration-none"
                                            >
                                                {link.pathname}
                                            </Link>
                                        </li>
                                    );
                                })}

                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2: Social icons */}
            <div className="container row align-items-center mb-3 ms-lg-5">
                <div className="col">
                    <h6 className="mb-2 fw-semibold">Social</h6>
                    <a href="https://www.facebook.com/share/1YqgzBQTGu/" target="_blank" rel="noopener noreferrer" className="footer-link me-3"><i className="bi bi-facebook"></i></a>
                    {/* <a href="#" className="footer-link me-3"><i className="bi bi-twitter"></i></a> */}
                    <a href="https://www.instagram.com/kualakubsworldschool/?hl=en" target="_blank" rel="noopener noreferrer" className="footer-link me-3"><i className="bi bi-instagram"></i></a>
                    {/* <a href="#" className="footer-link"><i className="bi bi-linkedin"></i></a> */}
                </div>
            </div>

            {/* Row 3: Copyright  2026-27*/}
            <div className="row">
                <div className="col text-center small">
                    Copyright © 2026-27 Kualakubs World School, Gurugram.

                </div>
            </div>
        </footer>
    );
};

export default Footer;
