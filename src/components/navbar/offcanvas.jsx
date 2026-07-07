import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function OffcanvasNavbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                onClick={handleShow}
                style={{
                    position: "fixed",   // floats over everything
                    top: "2%",
                    left: "2%",
                    zIndex: "3",
                    backgroundColor: "var(--accent-text-color)",
                    border: "none",
                    borderRadius: "10px",
                    width: "3rem",
                    height: "3rem",
                    opacity: "0.8",
                    fontSize: "1.5rem",

                }}
            >
                <i className="bi bi-list"></i>
            </button>

            <Offcanvas show={show} onHide={handleClose}
            style={{ backgroundColor: "var(--accent-bg-color)", width: "300px" }}
            scroll={true}
            
            >
                <Offcanvas.Header closeButton style={{color: "var(--accent-text-color)"}}>
                    <Offcanvas.Title>Kualakubs World School</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                                  {/* Nav Links */}
              <ul className="navbar-nav justify-content-end d-inline-block pe-5 ps-md-3 ps-sm-2">
                <li className="nav-item">
                  <a className="nav-link custom-nav-link-color" href="/" onClick={handleClose}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-nav-link-color" to="/about" onClick={handleClose}>
                    About Us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link custom-nav-link-color"
                    to="/admissions" onClick={handleClose}>
                    Admissions
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link custom-nav-link-color" to="/campus-facilities" onClick={handleClose}>
                   Campus facilities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-nav-link-color" to="/why-kualakubs" onClick={handleClose}>
                    Why kualakubs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-nav-link-color" to="/contact" onClick={handleClose}>
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-nav-link-color" to="/career" onClick={handleClose}>
                    Career
                  </Link>
                </li>
                  <li className="nav-item">
                  <Link className="nav-link custom-nav-link-color" to="/gallery" onClick={handleClose}>
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-nav-link-color" to="/blogs" onClick={handleClose}>
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-nav-link-color" to="/our-partnerships" onClick={handleClose}>
                    Our Partnerships
                  </Link>
                </li>
              </ul>

              <hr style={{color: "var(--accent-text-color)"}} />

              <div>
                 <Link to="https://eflow.kualakubsgurugram.in/ " target="_blank" rel="noopener noreferrer" className="btn me-2 border rounded-0 custom-button-effect" onClick={handleClose}>
                ERP LOGIN {"\u2192"}
              </Link>
              </div>

              {/* Social Icons */}
              <div className="mt-5 ps-5 ps-md-3 ps-sm-2">
                <a href="https://www.facebook.com/share/1YqgzBQTGu/" target="_blank" rel="noopener noreferrer" className="bi-color">
                  <i className="bi bi-facebook fs-5 me-2"></i>
                </a>
                {/* <a href="#" className="bi-color">
                  <i className="bi bi-twitter-x fs-5 me-2"></i>
                </a> */}
                <a href="https://www.instagram.com/kualakubsworldschool?igsh=dTlmYWZ4ZHVuaTI1" target="_blank" rel="noopener noreferrer" className="bi-color">
                  <i className="bi bi-instagram fs-5 me-2"></i>
                </a>
                {/* <a href="#" className="bi-color">
                  <i className="bi bi-linkedin fs-5 me-2"></i>
                </a> */}
              </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffcanvasNavbar;