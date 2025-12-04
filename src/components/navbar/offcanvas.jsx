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
                    About
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
                    Contact US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-nav-link-color" to="/career" onClick={handleClose}>
                    Career
                  </Link>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="mt-5 ps-5 ps-md-3 ps-sm-2">
                <a href="#" className="bi-color">
                  <i className="bi bi-facebook fs-5 me-2"></i>
                </a>
                <a href="#" className="bi-color">
                  <i className="bi bi-twitter-x fs-5 me-2"></i>
                </a>
                <a href="#" className="bi-color">
                  <i className="bi bi-instagram fs-5 me-2"></i>
                </a>
                <a href="#" className="bi-color">
                  <i className="bi bi-linkedin fs-5 me-2"></i>
                </a>
              </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffcanvasNavbar;