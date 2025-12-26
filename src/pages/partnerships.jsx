import PageHeader from "../components/PageHeader";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Partnerships() {

    useEffect(() => {
        AOS.init({ once: true, duration: 800, offset: 80 });
    }, []);

    return (
        <>

            <PageHeader
                title="Our Partnerships"
                backgroundImage="https://kualakubsworldschool.com/assets/kualakubs%20home%20image%202-DokhlqL5.png"
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "Our Partnerships", active: true }
                ]}
            />
            {/* <section className="py-5">
                <div className="container">

         
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Our Partnerships</h2>
                        <p className="text-muted mt-2">
                            At Kualakubs World School, our collaborations with leading educational
                            organisations, industry experts, and community groups help broaden
                            learning opportunities and bring global exposure to our students.
                        </p>
                    </div>

                    <div className="row g-4">

                        <div className="col-md-6">
                            <div className="p-4 border rounded bg-white shadow-sm h-100">
                                <h4 className="fw-semibold mb-3">Academic & Educational Collaborations</h4>
                                <ul className="mb-0">
                                    <li>Expert-led workshops and training</li>
                                    <li>Enrichment programmes in STEM, literacy, and life skills</li>
                                    <li>Access to updated learning resources and digital tools</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="p-4 border rounded bg-white shadow-sm h-100">
                                <h4 className="fw-semibold mb-3">Technology & Innovation Partners</h4>
                                <ul className="mb-0">
                                    <li>Robotics and coding programmes</li>
                                    <li>Digital learning solutions</li>
                                    <li>Smart classroom infrastructure</li>
                                    <li>Future-ready skill development</li>
                                </ul>
                            </div>
                        </div>

                  
                        <div className="col-md-6">
                            <div className="p-4 border rounded bg-white shadow-sm h-100">
                                <h4 className="fw-semibold mb-3">Sports & Wellness Associations</h4>
                                <ul className="mb-0">
                                    <li>Professional sports training</li>
                                    <li>Fitness and yoga sessions</li>
                                    <li>Health and wellness programmes</li>
                                    <li>Inter-school competitions and sporting events</li>
                                </ul>
                            </div>
                        </div>

                
                        <div className="col-md-6">
                            <div className="p-4 border rounded bg-white shadow-sm h-100">
                                <h4 className="fw-semibold mb-3">Arts, Culture & Creative Collaborations</h4>
                                <ul className="mb-0">
                                    <li>Art, music & dance workshops</li>
                                    <li>Theatre and performance training</li>
                                    <li>Cultural events and exhibition opportunities</li>
                                </ul>
                            </div>
                        </div>

            
                        <div className="col-md-6">
                            <div className="p-4 border rounded bg-white shadow-sm h-100">
                                <h4 className="fw-semibold mb-3">Community & Outreach Partners</h4>
                                <ul className="mb-0">
                                    <li>Social awareness campaigns</li>
                                    <li>Environmental initiatives</li>
                                    <li>Community service and outreach programmes</li>
                                </ul>
                            </div>
                        </div>

                 
                        <div className="col-md-6">
                            <div className="p-4 border rounded bg-white shadow-sm h-100">
                                <h4 className="fw-semibold mb-3">Commitment to Quality Through Collaboration</h4>
                                <p className="mb-0">
                                    Every partnership at KWS is carefully selected to support our mission
                                    of providing holistic, future-ready education. These collaborations
                                    strengthen our academic ecosystem and prepare students to thrive in
                                    an interconnected world.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}
            <section className="py-5 bg-light partnership-section">
                <div className="container">

                    {/* Heading */}
                    <div className="text-center mb-5">
                        <h2 className="display-6 fw-bold" style={{color: 'var(--accent-bg-color)'}}>Our Partnerships</h2>
                        
                        <p className="text-muted mx-auto col-lg-8">
                            At Kualakubs World School, our collaborations with leading educational
                            organisations, industry experts, and community groups help broaden
                            learning opportunities and bring global exposure to our students.
                        </p>
                    </div>

                    <div className="row g-4">

                        {/* CARD */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <div className="partner-card" style={{ "--accent": "#06b6d4" }}>
                                <i className="bi bi-mortarboard-fill bg-icon"></i>

                                <div className="icon-circle">
                                    <i className="bi bi-mortarboard"></i>
                                </div>

                                <h5>Academic & Educational Collaborations</h5>

                                <ul>
                                    <li>Expert-led workshops and training</li>
                                    <li>STEM, literacy and life skills</li>
                                    <li>Updated learning resources & tools</li>
                                </ul>
                            </div>
                        </div>

                        {/* CARD */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="partner-card" style={{ "--accent": "#f59e0b" }}>
                                <i className="bi bi-cpu-fill bg-icon"></i>

                                <div className="icon-circle">
                                    <i className="bi bi-cpu"></i>
                                </div>

                                <h5>Technology & Innovation Partners</h5>

                                <ul>
                                    <li>Robotics and coding programmes</li>
                                    <li>Digital learning solutions</li>
                                    <li>Smart classroom infrastructure</li>
                                    <li>Future-ready skills</li>
                                </ul>
                            </div>
                        </div>

                        {/* CARD */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="partner-card" style={{ "--accent": "#16a34a" }}>
                                <i className="bi bi-heart-pulse-fill bg-icon"></i>

                                <div className="icon-circle">
                                    <i className="bi bi-heart-pulse"></i>
                                </div>

                                <h5>Sports & Wellness Associations</h5>

                                <ul>
                                    <li>Professional sports training</li>
                                    <li>Fitness and yoga sessions</li>
                                    <li>Health & wellness programmes</li>
                                    <li>Inter-school competitions</li>
                                </ul>
                            </div>
                        </div>

                        {/* ARTS */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <div className="partner-card" style={{ "--accent": "#6366f1" }}>
                                <i className="bi bi-palette-fill bg-icon"></i>

                                <div className="icon-circle">
                                    <i className="bi bi-palette"></i>
                                </div>

                                <h5>Arts, Culture & Creative Collaborations</h5>

                                <ul>
                                    <li>Art, music & dance workshops</li>
                                    <li>Theatre & performance training</li>
                                    <li>Cultural exhibitions</li>
                                </ul>
                            </div>
                        </div>

                        {/* COMMUNITY */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="partner-card" style={{ "--accent": "#ef4444" }}>
                                <i className="bi bi-people-fill bg-icon"></i>

                                <div className="icon-circle">
                                    <i className="bi bi-people"></i>
                                </div>

                                <h5>Community & Outreach Partners</h5>

                                <ul>
                                    <li>Social awareness campaigns</li>
                                    <li>Environmental initiatives</li>
                                    <li>Community service programmes</li>
                                </ul>
                            </div>
                        </div>

                        {/* HIGHLIGHT */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="partner-card highlight">
                                <i className="bi bi-patch-check-fill bg-icon"></i>

                                <div className="icon-circle">
                                    <i className="bi bi-patch-check"></i>
                                </div>

                                <h5>Commitment to Quality Through Collaboration</h5>

                                <p>
                                    Every partnership at KWS is carefully selected to support holistic,
                                    future-ready education.
                                </p>

                                <p>
                                    These collaborations prepare students to thrive in an interconnected world.
                                </p>

                                <Link to="/about">LEARN MORE →</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}