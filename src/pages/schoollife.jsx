import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../components/SEO.jsx";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg";

export default function SchoolLife() {
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
        });
    }, []);

    return (
        <>
            <SEO
                title="Top CBSE Schools Near Me in Gurgaon | Kualakubs World School"
                description="Kualakubs World School is a top CBSE K-12 school in Sector 86, Gurugram. Explore our safe, nurturing campus, concept-first CBSE curriculum, and modern programs."
            />

            {/* Premium Hero Section */}
            <section
                className="position-relative d-flex align-items-center justify-content-center text-center text-white py-5"
                style={{
                    backgroundImage: `linear-gradient(rgba(25, 45, 69, 0.88), rgba(25, 45, 69, 0.88)), url(${newBuildingImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '480px',
                    overflow: 'hidden'
                }}
            >
                {/* Background decorative circles */}
                <div style={{
                    position: "absolute",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "50%",
                    width: "600px",
                    height: "600px",
                    top: "-200px",
                    right: "-150px",
                    pointerEvents: "none"
                }}></div>
                <div style={{
                    position: "absolute",
                    border: "1px solid rgba(255, 255, 255, 0.03)",
                    borderRadius: "50%",
                    width: "800px",
                    height: "800px",
                    bottom: "-300px",
                    left: "-200px",
                    pointerEvents: "none"
                }}></div>

                <div className="container position-relative py-5" style={{ zIndex: 2 }} data-aos="fade-up">
                    <span className="text-uppercase fw-bold mb-3 d-inline-block px-3 py-1 rounded-pill" style={{ backgroundColor: '#b3925c', fontSize: '0.85rem', letterSpacing: '2px', color: '#192d45' }}>
                        Every Child's Future Takes Shape
                    </span>
                    <h1 className="fw-bold mb-4 display-4" style={{ fontFamily: "'Montserrat', sans-serif", lineHeight: "1.2" }}>
                        Top CBSE Schools Near Me <br className="d-none d-md-block" /> in Gurgaon, Gurgaon
                    </h1>
                    <p className="fs-5 mx-auto mb-4" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.75' }}>
                        Kualakubs World School is a new-age K–12 CBSE school in Sector 86, Gurugram. Every stage of the school path from Playgroup to Grade XII is complexly integrated with real life skills in a secure and monitored campus that you can trust.
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                        <Link to="/admissions" className="btn btn-lg text-decoration-none px-4 py-3 fw-bold" style={{ backgroundColor: '#b3925c', color: '#192d45', borderRadius: '4px', transition: 'all 0.3s ease' }}>
                            Admissions Open 2026–27
                        </Link>
                        <a href="#why-kws" className="btn btn-lg btn-outline-light px-4 py-3 fw-bold" style={{ borderRadius: '4px', transition: 'all 0.3s ease' }}>
                            Explore School Life
                        </a>
                    </div>
                </div>
            </section>

            {/* School at a Glance Section */}
            <section className="py-5" style={{ backgroundColor: "#faf8f5" }} id="glance">
                <div className="container py-3">
                    <div className="text-center mb-5" data-aos="fade-up">
                        <h2 className="fw-bold" style={{ fontFamily: "'Montserrat', sans-serif", color: "var(--accent-bg-color)" }}>
                            School at a Glance
                        </h2>
                        <div className="mx-auto" style={{ width: "50px", height: "3px", backgroundColor: "#b3925c", margin: "15px auto" }}></div>
                    </div>

                    <div className="row g-4 justify-content-center" data-aos="fade-up">
                        {[
                            { title: "PG–XII", desc: "Complete K–12 school journey", icon: "bi-mortarboard" },
                            { title: "S86", desc: "Sector 86, Gurugram", icon: "bi-geo-alt" },
                            { title: "GPS", desc: "The routes serve tracked buses that are on each route.", icon: "bi-bus-front" },
                            { title: "1985", desc: "Geeta Group legacy", icon: "bi-clock-history" },
                            { title: "CBSE", desc: "Affiliated to CBSE", icon: "bi-shield-check" }
                        ].map((stat, idx) => (
                            <div className="col-6 col-md-4 col-lg" key={idx}>
                                <div className="text-center p-3 h-100 rounded-3 bg-white shadow-sm border-top border-3" style={{ borderTopColor: "#b3925c" }}>
                                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '50px', height: '50px', backgroundColor: 'rgba(179, 146, 92, 0.1)', color: '#b3925c' }}>
                                        <i className={`bi ${stat.icon} fs-4`}></i>
                                    </div>
                                    <h3 className="fw-bold mb-1" style={{ color: "var(--accent-bg-color)", fontFamily: "'Montserrat', sans-serif" }}>{stat.title}</h3>
                                    <p className="text-muted small mb-0" style={{ lineHeight: "1.4" }}>{stat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Subtitle/Footer & Callout */}
                    <div className="text-center mt-5" data-aos="fade-up">
                        <span className="fw-semibold px-3 py-2 rounded-2" style={{ backgroundColor: "#e2dccc", color: "#192d45", fontSize: "0.95rem" }}>
                            Pedagogy of the modern era · International norms
                        </span>
                        <div className="mt-4 mx-auto p-4 rounded-3 text-white" style={{ maxWidth: "850px", backgroundColor: "var(--accent-bg-color)", boxShadow: "0 10px 30px rgba(25, 45, 69, 0.15)" }}>
                            <p className="mb-0 fs-6" style={{ lineHeight: "1.7" }}>
                                If you are looking for the <strong>best CBSE schools in Gurgaon</strong>, your nearby area, this is where you can find the best options. You've discovered a reliable K–12 learning location — <Link to="/contact" className="text-warning text-decoration-underline fw-bold">schedule a campus visit now</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Kualakubs Section */}
            <section className="py-5 bg-white" id="why-kws">
                <div className="container py-3">
                    <div className="row align-items-center mb-5" data-aos="fade-up">
                        <div className="col-lg-5">
                            <span className="text-uppercase fw-bold" style={{ color: "#b3925c", letterSpacing: "1px", fontSize: "0.9rem" }}>
                                Why Kualakubs World School?
                            </span>
                            <h2 className="fw-bold mt-2 mb-4" style={{ fontFamily: "'Montserrat', sans-serif", color: "var(--accent-bg-color)", fontSize: "clamp(2rem, 3.5vw, 2.6rem)" }}>
                                A School For Tomorrow's World
                            </h2>
                            <div style={{ width: "60px", height: "4px", backgroundColor: "#b3925c", borderRadius: "2px" }}></div>
                        </div>
                        <div className="col-lg-7">
                            <p className="fs-6 text-muted mb-0" style={{ lineHeight: "1.8" }}>
                                Established in 1985, Kualakubs World School is a part of the Geeta Group of Institutions, a name that has made it to the list of the <strong>best K–12 CBSE schools</strong> in the city of Gurugram since 1985 and is committed to taking modern pedagogy and high international standards to every classroom.
                            </p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="row g-4 mb-5" data-aos="fade-up">
                        {[
                            { icon: "🎯", title: "Concept-First CBSE Curriculum", desc: "It is aligned with CBSE but based on the concepts so students get knowledge, not marks." },
                            { icon: "🌐", title: "Global Teaching Standards", desc: "Internationally tested teaching methods that ensure your child is in competition on any stage." },
                            { icon: "🛡️", title: "Safe, Nurturing Campus", desc: "GPS-monitored buses and trained staff, clean sanitation and a healthy cafeteria, every day without exception." }
                        ].map((item, idx) => (
                            <div className="col-md-4" key={idx}>
                                <div className="card h-100 p-4 border-0 shadow-sm transition-all" style={{ backgroundColor: "#faf8f5", borderRadius: "12px", borderTop: "4px solid #b3925c" }}>
                                    <div className="fs-1 mb-3">{item.icon}</div>
                                    <h4 className="fw-bold mb-3" style={{ color: "var(--accent-bg-color)", fontFamily: "'Montserrat', sans-serif" }}>{item.title}</h4>
                                    <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Detailed Key Reasons Grid */}
                    <div className="p-5 rounded-4" style={{ backgroundColor: "#faf8f5", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }} data-aos="fade-up">
                        <h3 className="fw-bold text-center mb-5" style={{ fontFamily: "'Montserrat', sans-serif", color: "var(--accent-bg-color)" }}>
                            KWS is a top CBSE school near me in Gurugram for the following reasons:
                        </h3>

                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="d-flex flex-column gap-3">
                                    {[
                                        "The prime location in Sector 86, DLF New Town Heights.",
                                        "The full integration of the school structure into a single campus (K–12 school structure under one campus).",
                                        "Exclusive Pearl Learning System for phonics & concepts.",
                                        "Arts, Science and Computer labs with dedicated staff members.",
                                        "Environmental groups: REHAS and various others."
                                    ].map((reason, idx) => (
                                        <div className="d-flex align-items-start" key={idx}>
                                            <span className="d-flex align-items-center justify-content-center rounded-circle text-white me-3 mt-1" style={{ width: "24px", height: "24px", backgroundColor: "#b3925c", flexShrink: 0 }}>
                                                <i className="bi bi-check-lg" style={{ fontSize: "0.85rem" }}></i>
                                            </span>
                                            <p className="mb-0 fs-6 text-muted" style={{ lineHeight: "1.6" }}>{reason}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="d-flex flex-column gap-3">
                                    {[
                                        "Social groups: hikers, debaters, musicians, drama troop, etc.",
                                        "Regular parent feedback & transparent reporting.",
                                        "Communication skills consolidated throughout all lesson plans and activities.",
                                        "Good interpersonal skills & the ability to work as part of a team.",
                                        "Character & values in the heart of all programmes."
                                    ].map((reason, idx) => (
                                        <div className="d-flex align-items-start" key={idx}>
                                            <span className="d-flex align-items-center justify-content-center rounded-circle text-white me-3 mt-1" style={{ width: "24px", height: "24px", backgroundColor: "#b3925c", flexShrink: 0 }}>
                                                <i className="bi bi-check-lg" style={{ fontSize: "0.85rem" }}></i>
                                            </span>
                                            <p className="mb-0 fs-6 text-muted" style={{ lineHeight: "1.6" }}>{reason}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programmes Section */}
            <section className="py-5" style={{ backgroundColor: "#faf8f5" }} id="programmes">
                <div className="container py-3">
                    <div className="text-center mb-5" data-aos="fade-up">
                        <span className="text-uppercase fw-bold" style={{ color: "#b3925c", letterSpacing: "1px", fontSize: "0.9rem" }}>
                            Programmes
                        </span>
                        <h2 className="fw-bold mt-2" style={{ fontFamily: "'Montserrat', sans-serif", color: "var(--accent-bg-color)" }}>
                            One School Every Stage
                        </h2>
                        <div className="mx-auto my-3" style={{ width: "50px", height: "3px", backgroundColor: "#b3925c" }}></div>
                        <p className="text-muted mx-auto mt-3" style={{ maxWidth: "800px", fontSize: "1.05rem" }}>
                            Your child's smooth K–12 CBSE journey starts from the day he/she joins school till the day of the Board exams, and continues even after that.
                        </p>
                    </div>

                    <div className="row g-4" data-aos="fade-up">
                        {[
                            {
                                icon: "🌱",
                                name: "Early Years",
                                sub: "Playgroup – UKG",
                                desc: "Curiosity, language and social confidence are stimulated through play-based learning."
                            },
                            {
                                icon: "📚",
                                name: "Primary School",
                                sub: "Grade I – V",
                                desc: "A solid base in literacy, numeracy and creative expression based on the Pearl Learning System."
                            },
                            {
                                icon: "🔬",
                                name: "Middle School",
                                sub: "Grade VI – VIII",
                                desc: "In-depth study, science lab, and critical thinking for academic readiness."
                            },
                            {
                                icon: "🎓",
                                name: "Secondary & Senior",
                                sub: "Grade IX – XII",
                                desc: "CBSE Grades IX-XII with Board Preparation, Career Counselling, Mentoring by the stream."
                            }
                        ].map((prog, idx) => (
                            <div className="col-md-6 col-lg-3" key={idx}>
                                <div className="card h-100 p-4 border-0 shadow-sm transition-all" style={{ backgroundColor: "#ffffff", borderRadius: "16px" }}>
                                    <div className="fs-1 mb-3">{prog.icon}</div>
                                    <h4 className="fw-bold mb-1" style={{ color: "var(--accent-bg-color)", fontFamily: "'Montserrat', sans-serif" }}>{prog.name}</h4>
                                    <span className="d-inline-block px-3 py-1 rounded-pill fw-semibold mb-3" style={{ backgroundColor: "rgba(179, 146, 92, 0.1)", color: "#b3925c", fontSize: "0.8rem" }}>
                                        {prog.sub}
                                    </span>
                                    <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{prog.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}