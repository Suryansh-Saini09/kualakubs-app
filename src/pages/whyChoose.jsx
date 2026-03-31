import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/whyChoose.css";
import SEO from "../components/SEO.jsx";


export default function WhyChoose() {
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
        });
    }, []);

    return (
        <main>
            <SEO
            title="Why Choose Us for Holistic Education"
            description="A balanced approach to education that blends academics, creativity, and life skills to nurture confident, future-ready learners."/>
            {/* TOP HEADER SECTION */}
            <PageHeader
                title="Why Choose Kualakubs?"
                backgroundImage="https://kualakubsworldschool.com/assets/kualakubs%20home%20image%202-DokhlqL5.png"
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "Why Kualakubs?", active: true },
                ]}
            />


            {/* MAIN USP SECTION */}
            <section className="usp-section">
                <div className="container">
                    <h1 className="usp-hero-title text-center mb-5">Parents choose us because we provide:</h1>

                    <div className="row g-4 justify-content-center">
                        {[

                            "CBSE Academic Excellence",
                            "Strong Focus on Life Skills & Values",
                            "Experienced & Trained Faculty",
                            "Safe, Secure & Child-friendly Campus",
                            "Smart Classrooms & Digital Learning Tools",
                            "Sports, Arts & Co-Curricular Exposure",
                            "Leadership, Competitions & Olympiads",
                            "Future-ready Skills: ICT, Communication, Creativity",
                            // "Balanced Development of Academics & Personality",
                            "D.E.A.R. (Drop Everything & Read) Period",

                        ].map((item, index) => (
                            <div
                                className="col-lg-4 col-md-6"
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 80}
                            >
                                <div className="usp-card">
                                    <span className="usp-icon">✔</span>
                                    <p className="usp-text">{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Statement */}
                    <div className="text-center mt-5" data-aos="fade-up">
                        <h3 className="usp-endline">Kualakubs is where potential becomes success.</h3>
                        <p>Recognized among the top schools in Gurgaon, Kualakubs nurtures every child with a perfect blend of academic excellence, creativity, and life skills, shaping confident and future-ready learners.</p>
                    </div>
                </div>
            </section>

            {/* LIFE SKILLS SECTION */}
            {/* <div className="container py-5" style={{ backgroundColor: "var(--bg-color)" }}>
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">

                      
                        <h3 className="fw-bold mb-4" style={{ color: "var(--accent-bg-color)" }}>
                            Essential Life Skills We Teach
                        </h3>

                       
                        <p className="mb-4" style={{ color: "var(--text-color)" }}>
                            Kualakubs integrates WHO-recommended life skills into daily learning to build confident,
                            capable, and responsible individuals.
                        </p>

                       
                        <div className="row g-3">

                            {[
                                "Critical & Creative Thinking",
                                "Decision Making",
                                "Problem-solving",
                                "Leadership & Responsibility",
                                "Effective Communication",
                                "Empathy & Emotional Intelligence",
                                "Digital Literacy",
                                "Time Management",
                                "Collaboration & Teamwork",
                                "Stress & Emotion Management",
                                "Goal Setting & Self-motivation",
                                "Social Behaviour & Etiquette"
                            ].map((skill, index) => (
                                <div key={index} className="col-6 col-md-4">
                                    <div
                                        className="border rounded-3 px-3 py-2 text-center h-100"
                                        style={{ color: "var(--text-color)" }}
                                    >
                                        {skill}
                                    </div>
                                </div>
                            ))}

                        </div>

                      
                        <p className="mt-4 fw-semibold" style={{ color: "var(--accent-bg-color)" }}>
                            We prepare students not just for exams — but to excel in life.
                        </p>

                    </div>
                </div>
            </div> */}
            {/* LIFE SKILLS SECTION */}
            <section className="py-5" style={{ backgroundColor: "#f8fbff" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">

                            {/* Heading */}
                            <h2 className="fw-bold mb-3 text-primary">
                                Essential Life Skills We Teach
                            </h2>

                            {/* Intro */}
                            <p className="text-muted mb-4">
                                Kualakubs integrates WHO-recommended life skills into daily learning to build
                                confident, capable, and responsible individuals.
                            </p>

                            {/* Divider */}
                            <div className="d-flex justify-content-center mb-4">
                                <span
                                    style={{
                                        width: "60px",
                                        height: "4px",
                                        backgroundColor: "#4f7cff",
                                        borderRadius: "10px"
                                    }}
                                />
                            </div>

                            {/* Skills Grid */}
                            <div className="row g-4">

                                {[
                                    { title: "Critical & Creative Thinking", icon: "bi-lightbulb" },
                                    { title: "Decision Making", icon: "bi-check2-circle" },
                                    { title: "Problem-solving", icon: "bi-wrench-adjustable" },
                                    { title: "Leadership & Responsibility", icon: "bi-people" },
                                    { title: "Effective Communication", icon: "bi-chat-dots" },
                                    { title: "Empathy & Emotional EQ", icon: "bi-heart" },
                                    { title: "Digital Literacy", icon: "bi-laptop" },
                                    { title: "Time Management", icon: "bi-clock" },
                                    { title: "Collaboration & Teamwork", icon: "bi-diagram-3" },
                                    { title: "Stress & Emotion Management", icon: "bi-emoji-smile" },
                                    { title: "Goal Setting & Motivation", icon: "bi-flag" },
                                    { title: "Social Behavior & Etiquette", icon: "bi-hand-thumbs-up" }
                                ].map((item, index) => (
                                    <div key={index} className="col-12 col-sm-6 col-md-4">
                                        <div className="skill-card h-100 d-flex align-items-center gap-3">
                                            <div className="icon-wrap">
                                                <i className={`bi ${item.icon}`} />
                                            </div>
                                            <span className="fw-semibold">{item.title}</span>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            {/* Footer Text */}
                            <p className="mt-5 fw-semibold text-primary">
                                We prepare students not just for exams — <span className="highlight">but to excel in life.</span>
                            </p>
                            <p>As one of the top-rated schools in Gurgaon, we focus on holistic development, empowering students with skills, confidence, and values for lifelong success.</p>

                        </div>
                    </div>
                </div>
            </section>



            
        </main>


    );
}
