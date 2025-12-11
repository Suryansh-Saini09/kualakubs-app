
import "./Footer.css";
import {Link} from "react-router-dom";


const Footer = ({footerLinks}) => {
    return (
        <footer
            className="container-fluid py-4"
            style={{ backgroundColor: "var(--accent-bg-color)", color: "var(--accent-text-color)" }}
        >
            {/* Row 1: Links */}
            <div className="row justify-content-center mb-3">
                <div className="row justify-content-center">
                    {footerLinks.map((section, index) => (
                        <div key={index} className="col d-flex justify-content-center">
                            <ul className="list-unstyled text-start">
                                <li className="mb-2">{section.category}</li>
                                {section.links.map((link, i) => (
                                     
                                    <li key={i}>
                                        <a herf={link.path} className="footer-link text-decoration-none">{link.pathname}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2: Social icons */}
            <div className="container row align-items-center mb-3 ms-lg-5">
                <div className="col">
                    <h6 className="mb-2">Social</h6>
                    <a href="#" className="bi-color me-2"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="bi-color me-2"><i className="bi bi-twitter"></i></a>
                    <a href="https://www.instagram.com/kualakubsworldschool?igsh=MTRocGJla2x6ZjhyOA==" className="bi-color me-2"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="bi-color"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>

            {/* Row 3: Copyright */}
            <div className="row">
                <div className="col text-center small">
                    Copyright © 2025 Kualakubs World School
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;
