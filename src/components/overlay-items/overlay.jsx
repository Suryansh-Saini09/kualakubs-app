
// library imports 
import HeaderLogo from "../../assets/kulakubs_new_logo.png";
import PopUpimg from "../../assets/kbws_popup.png";
import "./overlay.css";
import { Link } from "react-router-dom";
// import React from "react";  // use later if needed.
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import EnquireForms from "../forms/forms";



function toggle_name() {

    const btn = document.getElementById('overlay-btn-toggler');

    if (btn.innerText === "Open") {
        btn.innerHTML = "Close";
    }
    else {
        btn.innerText = "Open";
    }

}

export function HomePopup() {
    const [show, setShow] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/") return;

        const timer = setTimeout(() => {
            setShow(true);
        }, 600);

        return () => clearTimeout(timer);
    }, [location.pathname]);


    if (!show) return null;

    return (

        <>
            {show && (
                <div className="popup-overlay">
                    <div className="popup-box shadow-lg">

                        {/* <button
                            className="btn-close popup-close"
                            onClick={() => setShow(false)}
                            aria-label="Close"
                        /> */}

                        <img
                            src={PopUpimg}
                            alt="Popup"
                            className="popup-image"
                        />

                        <div className="d-flex justify-content-end mt-3 gap-2">

                            <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => setShow(false)}
                            >
                                Close
                            </button>

                            <Link
                                to="/admissions"
                                onClick={() => setShow(false)}
                                className="btn btn-primary btn-sm"
                            >
                                Enquire Now
                            </Link>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export function Overlayheader({ headerlinks }) {

    const hasLinks = Array.isArray(headerlinks) && headerlinks.length > 0;

    if (!hasLinks) {
        return (
            <>
                <div className="overlay overlay-container position-absolute text-white"
                >
                    <div className="row pe-2">
                        <div
                            className="col-12 mb-1 d-flex justify-content-center align-content-center"
                            style={{ backgroundColor: "var(--accent-text-color)", opacity: 0.75 }}
                        >
                            <img
                                src={HeaderLogo}
                                alt="Header Logo"
                                className="mt-4 mt-md-3 mb-4 mb-md-3 img-fluid"
                            />
                        </div>
                    </div>
                </div>


            </>
        );
    }

    return (

        <div className="overlay overlay-container position-absolute text-white"
        >
            <div className="row pe-2">
                <div
                    className="col-12 mb-1 d-flex justify-content-center align-content-center"
                    style={{ backgroundColor: "var(--accent-text-color)", opacity: 0.75 }}
                >
                    <Link to="/">
                        <img
                            src={HeaderLogo}
                            alt="Header Logo"
                            className="mt-4 mt-md-3 mb-4 mb-md-3 img-fluid"
                        />
                    </Link>
                </div>

                {/* Dynamic Links */}
                {headerlinks.map((section, index) => (
                    <Link
                        key={index}
                        to={section?.path || "#"}
                        style={{ textDecoration: "none", color: "inherit", padding: "0" }}
                    >
                        <div className="col-12 mb-1 overlay-row-bg p-2 d-flex justify-content-between align-content-center">
                            <span className="overlay-row-element">
                                {section?.pathname || "Disabled"}
                            </span>
                            <span>
                                <i className="bi bi-arrow-right-square overlay-row-element"></i>
                            </span>
                        </div>
                    </Link>

                ))}
            </div>
        </div>

    );
}

export function Overlaylogo() {

    return (
        <>
            <div className="overlay overlay-container position-absolute text-white">
                <div className="row pe-2">
                    <div className="col-12 mb-1 d-flex justify-content-center align-content-center"
                        style={{ backgroundColor: "var(--accent-text-color)", opacity: "0.75" }}>
                        <img src={HeaderLogo} alt="" className="mt-4 mt-md-3 mb-4 mb-md-3 img-fluid" />
                    </div>
                </div>
            </div>
        </>
    );
}

export function Overlaylist({ Overlaylistlinks }) {

    const hasLinks = Array.isArray(Overlaylistlinks) && Overlaylistlinks.length > 0;

    if (!hasLinks) {
        return;
    }
    return (
        <>
            <button className="btn position-absolute rounded-0 overlay d-lg-none w-100 bottom-0" type="button"
                data-bs-toggle="collapse" data-bs-target="#overlayList" aria-expanded="false" aria-controls="overlayList"
                style={{ backgroundColor: "var(--accent-bg-color)", color: "var(--accent-text-color)" }} id="overlay-btn-toggler"
                onClick={() => toggle_name()}>
                Open
            </button>

            <div className="overlay overlay-list collapse d-lg-block position-absolute text-white" id="overlayList">
                <div className="list-group list-group-flush">


                    {Overlaylistlinks.map((section, index) => (
                        <Link
                            to={section.path}
                            key={index}
                            className="list-group-item overlay-row-bg d-flex justify-content-between align-items-center text-white text-decoration-none"
                        >
                            {section.pathname}
                            <i className="bi bi-arrow-right-square"></i>
                        </Link>
                    ))}

                </div>
            </div>


        </>
    );
}

export function Overlaymiddleheading() {
    return (
        <>
            <div className="position-absolute overlay overlay-hero">
                <h4 className="hero-heading-h4 text-white"><i>Welcome to</i></h4>
                <h1 className="hero-heading-h6 text-white">KUALAKUBS</h1>
                <h1 className="hero-heading-h5 text-white">WORLD SCHOOL</h1>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        document
                            .getElementById("slidedown")
                            ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="btn rounded-circle text-dark"
                    style={{ backgroundColor: "white" }}
                >
                    <i className="bi bi-chevron-double-down arrow-animation"></i>
                </a>

            </div>
        </>
    );
}


export function EnquireNowButton() {
    const [show, setShow] = useState(false);

    return (
        <>
            {/* ================= LEFT VERTICAL CTA ================= */}
            <div
                className="position-fixed d-flex flex-column gap-2"
                style={{
                    top: "50%",
                    left: "0",
                    transform: "translateY(-50%)",
                    zIndex: 999
                }}
            >
                {/* Enquire Now */}
                <button
                    onClick={() => setShow(true)}
                    className="btn btn-sm btn-success px-1 py-3"
                    style={{
                        borderRadius: "0 6px 6px 0",
                        writingMode: "vertical-rl"
                    }}
                >
                    <span
                        style={{
                            display: "inline-block",
                            transform: "rotate(180deg)",
                            fontSize: "0.8rem",
                            fontWeight: 600
                        }}
                    >

                        Enquire Now
                    </span>
                </button>

                {/* Get in Touch */}
                <Link
                    to="/contact"
                    className="btn btn-sm btn-primary px-1 py-3"
                    style={{
                        borderRadius: "0 6px 6px 0",
                        writingMode: "vertical-rl"
                    }}
                >
                    <span
                        style={{
                            display: "inline-block",
                            transform: "rotate(180deg)",
                            fontSize: "0.8rem",
                            fontWeight: 600
                        }}
                    >

                        Get in Touch
                    </span>
                </Link>
            </div>

            {/* ================= MODAL ================= */}
            {show && (
                <>
                    <div className="modal fade show d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered modal-md">
                            <div className="modal-content border-0 shadow">

                                <div
                                    className="modal-header"
                                    style={{
                                        background: "var(--accent-text-color)",
                                        color: "var(--accent-bg-color)",
                                    }}
                                >
                                    <h5 className="modal-title">
                                        <i className="bi bi-info-circle-fill me-2"></i>
                                        Enquiry Form
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close btn-close-black"
                                        onClick={() => setShow(false)}
                                    ></button>
                                </div>

                                <form className="modal-body row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Name *</label>
                                        <input type="text" className="form-control" required />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Email *</label>
                                        <input type="email" className="form-control" required />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Contact *</label>
                                        <input type="tel" className="form-control" required />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">City *</label>
                                        <input type="text" className="form-control" required />
                                    </div>

                                    <div className="col-md-12">
                                        <label className="form-label">Class Applying For *</label>
                                        <select className="form-select" required>
                                            <option value="">Select</option>
                                            <option>Seedling</option>
                                            <option>Budding</option>
                                            <option>Blooming</option>
                                            <option>Exceeding</option>
                                            {[...Array(12)].map((_, i) => (
                                                <option key={i}>Grade {i + 1}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" required />
                                            <label className="form-check-label">
                                                I agree to receive information regarding my submitted enquiry on Kualakubs World School*
                                            </label>
                                        </div>
                                    </div>
                                </form>

                                

                                <div className="modal-footer">
                                    <button
                                        className="btn btn-outline-secondary"
                                        onClick={() => setShow(false)}
                                    >
                                        Close
                                    </button>
                                    <button className="btn btn-success">
                                        <i className="bi bi-send me-2"></i>
                                        Submit
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="modal-backdrop fade show"></div>
                </>
            )}
        </>
    );
}


export default {
    Overlayheader,
    Overlaylist,
    Overlaylogo,
    Overlaymiddleheading,
    EnquireNowButton,
    HomePopup
}

