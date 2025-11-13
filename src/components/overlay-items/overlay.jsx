
// library imports 
import HeaderLogo from "../../assets/headerlogo.png";
import "./overlay.css";
import { Link } from "react-router-dom";
// import React from "react";  // use later if needed.


function toggle_name() {

    const btn = document.getElementById('overlay-btn-toggler');

    if (btn.innerText === "Open") {
        btn.innerHTML = "Close";
    }
    else {
        btn.innerText = "Open";
    }

}

export function Overlayheader({ headerlinks }) {

    const hasLinks = Array.isArray(headerlinks) && headerlinks.length > 0;

    if (!hasLinks) {
        return (
            <>
                <div className="overlay overlay-container position-absolute text-white">
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

        <div className="overlay overlay-container position-absolute text-white">
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
                <h1 className="hero-heading-h6 text-white">KUALAKUBS SCHOOL</h1>
                <a href="#slidedown" className="btn rounded-circle text-dark" style={{backgroundColor: "white"}}>
                    <i className="bi d-inline-block bi-chevron-double-down arrow-animation" style={{fontSize: "larger"}}></i>
                </a>
            </div>
        </>
    );
}


export default {
    Overlayheader,
    Overlaylist,
    Overlaylogo,
    Overlaymiddleheading,
}

