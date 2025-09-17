
// library imports 

import HeaderLogo from "../../assets/headerlogo.png";
import "./overlay.css";
import { Link } from "react-router-dom";
import React from "react";  // use later if needed.

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

    //
    return (
        <>

        </>
    );
}

export function Overlaylist() {
    return (
        <>

        </>
    );
}

export function Overlaybottomstrip() {
    return (
        <>

        </>
    );
}

export function Overlaymiddleheading() {
    return (
        <>

        </>
    );
}

