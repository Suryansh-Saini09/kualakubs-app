
import { Link } from "react-router-dom";
// import Components from "../components/manage.js";
// import * as Links from "../config/links.js";
import PageHeader from "../components/PageHeader.jsx";
import SEO from "../components/SEO.jsx";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg"


export default function Contact() {

    return (
        <>

            <SEO
                title="School Admission in Gurgaon | Contact Kualakubs"
                description="Reach out for admissions, queries, or campus visits. Connect with our team for guidance and support on your child’s learning journey."
            />

            <PageHeader
                title="Contact Us"
                backgroundImage={newBuildingImg}
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "Contact", active: true }
                ]}
            />

            {/* Hero / Details Section matching mockup */}
            <section className="contact-hero-section">
                <div className="contact-hero-circle-1"></div>
                <div className="contact-hero-circle-2"></div>
                <div className="container position-relative">
                    <span className="contact-admission-badge">ADMISSIONS OPEN 2025–26</span>
                    <h1 className="contact-hero-title">
                        Get in Touch with<br />
                        <span>Kualakubs World School</span>
                    </h1>
                    <p className="contact-hero-lead">
                        Whether you have questions about admissions, want to book a campus visit, or need academic guidance — our team is here to help you every step of the way.
                    </p>
                </div>
            </section>

            {/* Overlapping Info Cards Container */}
            <div className="container contact-cards-container">
                <div className="contact-cards-box">
                    <div className="row g-0">
                        {/* Visit Our Campus */}
                        <div className="col-lg-4 contact-info-col-border">
                            <div className="contact-info-col">
                                <div className="contact-icon-box">
                                    <i className="bi bi-geo-alt fs-4"></i>
                                </div>
                                <div className="contact-col-label">VISIT OUR CAMPUS</div>
                                <p className="contact-col-value">
                                    Kualakubs World School (KWS)<br />
                                    Sector 86, Gurugram,<br />
                                    Haryana
                                </p>
                            </div>
                        </div>

                        {/* Call Us */}
                        <div className="col-lg-4 contact-info-col-border">
                            <div className="contact-info-col">
                                <div className="contact-icon-box">
                                    <i className="bi bi-telephone fs-4"></i>
                                </div>
                                <div className="contact-col-label">CALL US</div>
                                <p className="contact-col-value">
                                    <a href="tel:+919996648317">+91 9996648317</a>
                                </p>
                            </div>
                        </div>

                        {/* Email Us */}
                        <div className="col-lg-4">
                            <div className="contact-info-col">
                                <div className="contact-icon-box">
                                    <i className="bi bi-envelope fs-4"></i>
                                </div>
                                <div className="contact-col-label">EMAIL US</div>
                                <p className="contact-col-value">
                                    <a href="mailto:info@kualakubsworldschool.in">info@kualakubsworldschool.in</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Visit Section */}
            <section className="py-5" style={{ backgroundColor: "#fcfaf6" }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif", color: "var(--accent-bg-color)", fontSize: "2.2rem" }}>
                            Why Visit KWS Gurugram?
                        </h2>
                        <p className="mx-auto" style={{ maxWidth: "800px", color: "var(--text-color)", fontSize: "1.1rem", lineHeight: "1.7" }}>
                            At Kualakubs World School, we believe parents should experience the learning environment before making a decision. A campus visit helps families understand our academic approach, safety practices, infrastructure, and student culture.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="row g-4 justify-content-center mb-5">
                        {/* Card 1 */}
                        <div className="col-md-6 col-lg-3">
                            <div className="card why-visit-card h-100 border-0 shadow-sm p-4 text-center" style={{ borderRadius: "16px", background: "#ffffff" }}>
                                <div className="d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "rgba(179, 146, 92, 0.1)", color: "#b3925c" }}>
                                    <i className="bi bi-book fs-3"></i>
                                </div>
                                <h4 className="fw-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.15rem", color: "var(--accent-bg-color)" }}>Academic Excellence</h4>
                                <p style={{ color: "var(--text-color)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                                    Experienced CBSE curriculum faculty with a focus on conceptual learning and board preparation from Playgroup to Grade XII.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-6 col-lg-3">
                            <div className="card why-visit-card h-100 border-0 shadow-sm p-4 text-center" style={{ borderRadius: "16px", background: "#ffffff" }}>
                                <div className="d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "rgba(179, 146, 92, 0.1)", color: "#b3925c" }}>
                                    <i className="bi bi-shield-check fs-3"></i>
                                </div>
                                <h4 className="fw-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.15rem", color: "var(--accent-bg-color)" }}>Safety & Infrastructure</h4>
                                <p style={{ color: "var(--text-color)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                                    Safe, secure campus with modern classrooms, labs, and child-friendly spaces designed for holistic development.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-6 col-lg-3">
                            <div className="card why-visit-card h-100 border-0 shadow-sm p-4 text-center" style={{ borderRadius: "16px", background: "#ffffff" }}>
                                <div className="d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "rgba(179, 146, 92, 0.1)", color: "#b3925c" }}>
                                    <i className="bi bi-people fs-3"></i>
                                </div>
                                <h4 className="fw-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.15rem", color: "var(--accent-bg-color)" }}>Vibrant Student Culture</h4>
                                <p style={{ color: "var(--text-color)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                                    A nurturing environment where every child's talent — academic, artistic, and athletic — is recognised and encouraged.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="col-md-6 col-lg-3">
                            <div className="card why-visit-card h-100 border-0 shadow-sm p-4 text-center" style={{ borderRadius: "16px", background: "#ffffff" }}>
                                <div className="d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "rgba(179, 146, 92, 0.1)", color: "#b3925c" }}>
                                    <i className="bi bi-geo fs-3"></i>
                                </div>
                                <h4 className="fw-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.15rem", color: "var(--accent-bg-color)" }}>Convenient Location</h4>
                                <p style={{ color: "var(--text-color)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                                    Easily accessible from across New Gurgaon residential communities with dedicated transport support.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Map & Location Details Section */}
            <section className="py-5 bg-white">
                <div className="container" style={{ maxWidth: "1140px" }}>
                    <div className="row g-4 align-items-center">
                        {/* Left Column: Campus Visit Details */}
                        <div className="col-lg-5">
                            <span className="text-uppercase fw-bold text-uppercase" style={{ color: "#b3925c", fontSize: "0.85rem", letterSpacing: "2px", display: "inline-block", marginBottom: "0.5rem" }}>
                                Direction & Map
                            </span>
                            <h2 className="fw-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif", color: "var(--accent-bg-color)", fontSize: "2rem" }}>
                                Find Our Campus
                            </h2>
                            <p style={{ color: "var(--text-color)", fontSize: "1.05rem", lineHeight: "1.6" }}>
                                Conveniently located in Sector 86, Gurugram, Kualakubs World School offers easy accessibility for families across New Gurgaon and nearby residential communities.
                            </p>

                            <hr className="my-4" style={{ borderColor: "rgba(25, 45, 69, 0.1)" }} />

                            {/* Visiting Info */}
                            <div className="d-flex align-items-start gap-3 mb-3">
                                <div className="d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(25, 45, 69, 0.05)", color: "var(--accent-bg-color)", flexShrink: 0 }}>
                                    <i className="bi bi-clock fs-5"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1" style={{ fontSize: "1rem", color: "var(--accent-bg-color)" }}>Visiting Hours</h5>
                                    <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>Monday – Saturday: 8:00 AM – 4:00 PM</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start gap-3">
                                <div className="d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(25, 45, 69, 0.05)", color: "var(--accent-bg-color)", flexShrink: 0 }}>
                                    <i className="bi bi-geo-alt fs-5"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1" style={{ fontSize: "1rem", color: "var(--accent-bg-color)" }}>Campus Location</h5>
                                    <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>DLF New Town Heights, Sector 86, Gurugram, Haryana - 122505</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Styled Map */}
                        <div className="col-lg-7">
                            <div className="position-relative p-2 bg-light shadow-sm" style={{ borderRadius: "20px", border: "1px solid rgba(25, 45, 69, 0.05)" }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3509.539620242402!2d76.9358258754924!3d28.402969975790963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI0JzEwLjciTiA3NsKwNTYnMTguMiJF!5e0!3m2!1sen!2sin!4v1766471425028!5m2!1sen!2sin"
                                    width="100%"
                                    height="350"
                                    style={{ border: "0", borderRadius: "16px", display: "block" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Kualakubs World School Location Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* divider */}
            <div className="divider container-fluid d-flex justify-content-center align-items-center p-3 p-sm-1 p-md-2"
                style={{ color: "var(--accent-text-color)", backgroundColor: "var(--accent-bg-color)" }}>
                <Link to={"/"} className=" text-decoration-none" style={{ color: "var(--accent-text-color)" }}><i
                    className="bi bi-arrow-left me-1"></i>back to home</Link>
            </div>

        </>
    );
}