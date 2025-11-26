
import { Link } from "react-router-dom";
// import Components from "../components/manage.js";
// import * as Links from "../config/links.js";
import PageHeader from "../components/PageHeader.jsx";


export default function Contact() {

    return (
        <>


            <PageHeader
                title="Contact Us"
                backgroundImage="https://kualakubsworldschool.com/assets/kualakubs%20home%20image%202-DokhlqL5.png"
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "Contact", active: true }
                ]}
            />

            <section className="py-5" style={{background: "#e2dccc"}}>
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-8">

                            <div className="bg-white shadow rounded-4 p-5">

                                <h2 className="fw-bold text-center mb-4">Contact Us</h2>

                                {/* Phone & Email - Same Row */}
                                <div className="row g-4 mb-4">

                                    {/* Phone */}
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center gap-3">
                                            <i className="bi bi-telephone-fill fs-3 text-primary"></i>
                                            <div>
                                                <div className="fw-semibold">Phone</div>
                                                <div className="text-muted">9996648317</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center gap-3">
                                            <i className="bi bi-envelope-fill fs-3 text-primary"></i>
                                            <div>
                                                <div className="fw-semibold">Email</div>
                                                <div className="text-muted">
                                                    info@kualakubsworldschool.in
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Address - Full Width */}
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex align-items-start gap-3">
                                            <i className="bi bi-geo-alt-fill fs-3 text-primary"></i>
                                            <div>
                                                <div className="fw-semibold">Address</div>
                                                <div className="text-muted">
                                                    Kualakubs World School,<br />
                                                    DLF New Town Heights,<br />
                                                    Sector 86, Gurugram,<br />
                                                    Pin Code: 122505
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <div className="container my-5" style={{ maxWidth: "75%" }}>



                <div className=" container mt-4 p-0">
                    <p className="text-center">Direction & Map</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1724.7607985169643!2d76.89428252742518!3d29.301069890874597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dc3b5533b6d9f%3A0x1b563db61bcc0195!2sGEETA%20UNIVERSITY%2C%20NAULTHA%2C%20PANIPAT!5e0!3m2!1sen!2sin!4v1758009601722!5m2!1sen!2sin"
                        width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

            {/* divider */}
            <div className="divider container-fluid d-flex justify-content-center align-items-center p-3 p-sm-1 p-md-2"
                style={{ color: "var(--accent-text-color)", backgroundColor: "var(--accent-bg-color)" }}>
                <Link to={"/"} className=" text-decoration-none" style={{ color: "var(--accent-text-color)" }}><i
                    className="bi bi-arrow-left me-1"></i>back to home</Link>
            </div>

        </>
    );
}