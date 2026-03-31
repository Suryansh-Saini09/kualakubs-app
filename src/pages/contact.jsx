
import { Link } from "react-router-dom";
// import Components from "../components/manage.js";
// import * as Links from "../config/links.js";
import PageHeader from "../components/PageHeader.jsx";
import SEO from "../components/SEO.jsx";


export default function Contact() {

    return (
        <>

        <SEO
            title="School Admission in Gurgaon | Contact Kualakubs"
            description="Reach out for admissions, queries, or campus visits. Connect with our team for guidance and support on your child’s learning journey."
        />

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

                                <h2 className="fw-bold text-center mb-2">Contact Us</h2>
                                <p className="text-center">Searching for a school in Gurugram?<br/> Get in touch with us for admissions details, campus visits, or any help</p>

                                {/* Phone & Email - Same Row */}
                                <div className="row g-4 my-4">

                                    {/* Phone */}
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center gap-3">
                                            <i className="bi bi-telephone-fill fs-3 text-primary"></i>
                                            <div>
                                                <div className="fw-semibold">Phone</div>
                                                <div className="text-muted">+91 9996648317</div>
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
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3509.539620242402!2d76.9358258754924!3d28.402969975790963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI0JzEwLjciTiA3NsKwNTYnMTguMiJF!5e0!3m2!1sen!2sin!4v1766471425028!5m2!1sen!2sin"
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