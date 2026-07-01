import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import SEO from "../components/SEO";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CoCurricular() {
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
                title="Affordable Schools in Gurgaon with Quality Education "
                description="Looking for affordable schools in Gurgaon? Kualakubs World School provides strong academics, a safe campus, and all-around development for students. "
            />

            <PageHeader
                title="Co-Curricular Programs"
                backgroundImage={newBuildingImg}
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "Co-Curricular Programs", active: true }
                ]}
            />

            {/* Principal Quote / Philosophy Intro */}
            <section className="py-5 bg-white">
                <div className="container py-3">
                    <div className="row justify-content-center" data-aos="fade-up">
                        <div className="col-lg-10 text-center">
                            <div className="p-4 p-md-5 rounded-4 shadow-sm position-relative" style={{ backgroundColor: "#faf8f5", borderLeft: "5px solid #b3925c" }}>
                                <span className="text-uppercase fw-bold mb-3 d-inline-block" style={{ color: "#b3925c", letterSpacing: "2px", fontSize: "0.85rem" }}>
                                    Our Philosophy
                                </span>
                                <blockquote className="blockquote fs-4 fw-medium text-dark-emphasis mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: "italic", lineHeight: "1.6" }}>
                                    "At Kualakubs we don't think that the best education is the most expensive, we think the best education is the one that brings out the best."
                                </blockquote>
                                <cite className="blockquote-footer fs-6 fw-semibold text-muted">
                                    Principal, Kualakubs World School, Gurugram
                                </cite>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy pillars */}
            <section className="py-5" style={{ backgroundColor: "#faf8f5" }} id="philosophy">
                <div className="container py-3">
                    <div className="text-center mb-5" data-aos="fade-up">
                        <h2 className="fw-bold" style={{ fontFamily: "'Montserrat', sans-serif", color: "var(--accent-bg-color)" }}>
                            Why Co-Curricular is important at KWS
                        </h2>
                        <div className="mx-auto my-3" style={{ width: "50px", height: "3px", backgroundColor: "#b3925c" }}></div>
                        <p className="text-muted mx-auto mt-3" style={{ maxWidth: "800px", fontSize: "1.05rem" }}>
                            Being one of the top <strong>affordable schools in Gurgaon</strong>, we plan every activity with purpose and not as an add-on, but as a vital part of your kid's development.
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center" data-aos="fade-up">
                        {[
                            {
                                num: "01",
                                title: "Whole-Child Development",
                                desc: "College grades aren't the only indicators of readiness for life. Students who are able to cooperate, collaborate, and communicate have a distinct advantage — in college application, in the world of work, and in their relationships."
                            },
                            {
                                num: "02",
                                title: "Inclusive Access",
                                desc: "We strongly believe that the high quality of co-curricular programmes should not be confined to high profile schools. All children attending KWS are included – no additional charges for core activities."
                            },
                            {
                                num: "03",
                                title: "Expert-Led Instruction",
                                desc: "Our activity teachers are subject matter experts, trained musicians, certified coaches and experienced artists, who deliver quality on par with schools charging many times our rates."
                            }
                        ].map((pillar, idx) => (
                            <div className="col-lg-4 col-md-6" key={idx}>
                                <div className="card h-100 p-4 border-0 shadow-sm transition-all" style={{ backgroundColor: "#ffffff", borderRadius: "16px" }}>
                                    <span className="display-4 fw-bold mb-3 d-block" style={{ color: "rgba(179, 146, 92, 0.2)", fontFamily: "'Montserrat', sans-serif" }}>
                                        {pillar.num}
                                    </span>
                                    <h4 className="fw-bold mb-3" style={{ color: "var(--accent-bg-color)", fontFamily: "'Montserrat', sans-serif" }}>{pillar.title}</h4>
                                    <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Student Clubs Section */}
            <section className="py-5 bg-white" id="clubs">
                <div className="container py-3">
                    <div className="text-center mb-5" data-aos="fade-up">
                        <span className="text-uppercase fw-bold" style={{ color: "#b3925c", letterSpacing: "1px", fontSize: "0.9rem" }}>
                            Student Clubs
                        </span>
                        <h2 className="fw-bold mt-2" style={{ fontFamily: "'Montserrat', sans-serif", color: "var(--accent-bg-color)" }}>
                            Find Your Tribe
                        </h2>
                        <div className="mx-auto my-3" style={{ width: "50px", height: "3px", backgroundColor: "#b3925c" }}></div>
                        <p className="text-muted mx-auto mt-3" style={{ maxWidth: "800px", fontSize: "1.05rem" }}>
                            We have a number of clubs that all grades are invited to and which are led by students. Each club has a faculty adviser and is encouraged to attend events at the city level.
                        </p>
                    </div>

                    <div className="row g-4" data-aos="fade-up">
                        {[
                            { name: "Eco Warriors Club", icon: "bi-tree-fill", color: "#2ecc71" },
                            { name: "Science Explorers", icon: "bi-rocket-takeoff-fill", color: "#3498db" },
                            { name: "Literary Society", icon: "bi-journal-text", color: "#9b59b6" },
                            { name: "Debate & MUN Club", icon: "bi-megaphone-fill", color: "#e67e22" },
                            { name: "Robotics & Coding Club", icon: "bi-cpu-fill", color: "#34495e" },
                            { name: "Art & Design Studio", icon: "bi-palette-fill", color: "#e74c3c" },
                            { name: "Sports Leadership Council", icon: "bi-trophy-fill", color: "#f1c40f" },
                            { name: "Film & Photography", icon: "bi-camera-video-fill", color: "#1abc9c" },
                            { name: "Community Service Cell", icon: "bi-heart-fill", color: "#e84393" },
                            { name: "Wellness & Mindfulness", icon: "bi-person-heart", color: "#6c5ce7" },
                            { name: "Band & Choir", icon: "bi-music-note-beamed", color: "#ff7675" },
                            { name: "School Newsletter Team", icon: "bi-newspaper", color: "#00b894" }
                        ].map((club, idx) => (
                            <div className="col-md-6 col-lg-3" key={idx}>
                                <div className="p-3 d-flex align-items-center rounded-3 bg-white shadow-sm border-start border-4" style={{ borderStartColor: club.color, transition: "all 0.3s ease" }}>
                                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle me-3" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(25, 45, 69, 0.05)', color: club.color }}>
                                        <i className={`bi ${club.icon} fs-5`}></i>
                                    </div>
                                    <span className="fw-semibold text-dark-emphasis" style={{ fontSize: "0.95rem" }}>{club.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Concluding Editorial section */}
            <section className="py-5" style={{ backgroundColor: "#faf8f5", borderTop: "1px solid rgba(25, 45, 69, 0.05)" }}>
                <div className="container py-3">
                    <div className="row justify-content-center" data-aos="fade-up">
                        <div className="col-lg-10">
                            <h3 className="fw-bold text-center mb-4" style={{ fontFamily: "'Montserrat', sans-serif", color: "var(--accent-bg-color)" }}>
                                Why Kualakubs World School is Among the Top Affordable Schools in Gurgaon
                            </h3>
                            <div className="mx-auto mb-4" style={{ width: "50px", height: "3px", backgroundColor: "#b3925c" }}></div>

                            <div className="fs-6 text-muted" style={{ lineHeight: "1.8" }}>
                                <p className="mb-4">
                                    With so many schools in Gurugram, finding the right school for your child can be daunting, but Kualakubs World School is one of the <strong>top quality schools in Gurgaon</strong> without being costly.
                                </p>
                                <p className="mb-4">
                                    KWS, being one of the <strong>best affordable CBSE schools in Gurgaon</strong>, offers excellent academic programs and a comprehensive co-curricular program. Students experience a wholistic development outside the Four Corners that includes sport, clubs and competitions.
                                </p>
                                <p className="mb-4">
                                    Co-curricular activities are built into the normal learning process at KWS, where pupils are taught to be confident, creative and develop skills for life. From robotics to the arts to sports, each kid is given a chance to develop.
                                </p>
                                <p className="mb-0">
                                    If Parents are looking for the very <strong>best affordable CBSE School in Gurgaon</strong>, Kualakubs World School provides them with a blend of quality, safety and value.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}