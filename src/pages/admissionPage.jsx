// src/pages/Admissions.jsx
import React, { useEffect } from "react";
import "../styles/admissions.css";
import PageHeader from "../components/PageHeader.jsx";
// import EnquireForm from "../components/forms/forms.jsx";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg"

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../components/SEO.jsx";

export default function Admissions() {
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
        title="Admission Open Gurgaon School | 2026–27 Admissions"
        description="Explore a simple admission process with guided support, campus tours, and easy enrollment for a smooth start to your child’s learning journey."
      />


      <PageHeader
        title="Admissions"
        backgroundImage={newBuildingImg}
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Admissions", active: true },
        ]}
      />

      {/* OVERLAY HERO */}
      <div
        className="admissions-hero-overlay position-absolute top-50 start-50 translate-middle text-center"
        data-aos="zoom-in"
      >
        <h5 className="hero-small-title mb-1">
          <i>Admissions Open</i>
        </h5>

        <h2 className="hero-title mb-2">Admissions 2026–27</h2>

        <p className="lead mb-4">Playgroup to Class 12</p>

        <a
          href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        document
                            .getElementById("process")
                            ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  className="btn btn-outline-light rounded-0 px-4 py-2 fw-semibold"
                  >
                  View Process →
                  </a>
                  </div>

                  {/* Parallel Admission Section and Form */}
                  <div className="admissions-wrapper" id="process">
                  <section className="admission-block">
                    <div className="container">
                    <h2 className="text-center fs-4 mb-5 fw-bold fst-italic">
                      Admission Open in Gurgaon School – Discover quality education and holistic development at Kualakubs World School, Gurugram.
                    </h2>
                    <div className="row align-items-start justify-content-center">
                      {/* Admission Section */}
                      <div className="col-lg-7 mb-4 mb-lg-0 d-flex align-items-stretch" data-aos="fade-right">
                        <div 
                          className="admission-highlight-box p-4 p-md-5 position-relative overflow-hidden w-100 d-flex flex-column justify-content-center" 
                          style={{ 
                            height: "100%",
                            borderRadius: "24px",
                            backgroundColor: "#ffffff",
                            boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)",
                            border: "1px solid rgba(0,0,0,0.04)"
                          }}
                        >
                          {/* Decorative Background Element */}
                          <div 
                            style={{
                              position: "absolute",
                              top: "-50px",
                              left: "-50px",
                              width: "200px",
                              height: "200px",
                              background: "linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(14, 165, 233, 0) 100%)",
                              borderRadius: "50%",
                              zIndex: 0,
                              pointerEvents: "none"
                            }}
                          ></div>

                          <div className="position-relative z-1">
                            <div className="text-center mb-4">
                              <span 
                                className="badge mb-3 px-4 py-2 rounded-pill fw-bold shadow-sm" 
                                style={{ 
                                  letterSpacing: "1.5px", 
                                  backgroundColor: "#e0f2fe", 
                                  color: "#0369a1",
                                  fontSize: "0.9rem",
                                  border: "1px solid #bae6fd"
                                }}
                              >
                                🌟 ADMISSIONS OPEN 2026–27
                              </span>
                              <h2 className="display-6 fw-bold mb-3" style={{ color: "#0f172a", lineHeight: 1.2 }}>
                                Where Young Minds <br />
                                <span style={{ color: "#0284c7", position: "relative" }}>
                                  Discover Their Greatness
                                  <svg style={{ position: "absolute", bottom: "-8px", left: "0", width: "100%", height: "8px" }} viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="#bae6fd" strokeWidth="4" fill="transparent" />
                                  </svg>
                                </span>
                              </h2>
                              <p className="lead mt-4 mb-4" style={{ color: "#475569", fontSize: "1.1rem", lineHeight: 1.7 }}>
                                Give your child a <span className="fw-bold" style={{ color: "#0ea5e9" }}>future-ready education</span> at one of Gurgaon's most nurturing CBSE schools — where holistic growth, academic excellence, and joyful learning come together.
                              </p>
                            </div>

                            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                              <a
                                href="#"
                                className="btn px-4 py-3 fw-bold rounded-pill"
                                style={{
                                  fontSize: "1.05rem",
                                  backgroundColor: "#0ea5e9",
                                  color: "#fff",
                                  boxShadow: "0 10px 15px -3px rgba(14, 165, 233, 0.3)",
                                  transition: "all 0.3s ease",
                                  border: "none"
                                }}
                                onMouseOver={e => {
                                  e.currentTarget.style.transform = "translateY(-3px)";
                                  e.currentTarget.style.boxShadow = "0 15px 20px -3px rgba(14, 165, 233, 0.4)";
                                }}
                                onMouseOut={e => {
                                  e.currentTarget.style.transform = "translateY(0)";
                                  e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(14, 165, 233, 0.3)";
                                }}
                              >
                                Apply for Admission
                              </a>
                              <a
                                href="#"
                                className="btn px-4 py-3 fw-bold rounded-pill"
                                style={{
                                  fontSize: "1.05rem",
                                  backgroundColor: "#f8fafc",
                                  color: "#0f172a",
                                  border: "2px solid #e2e8f0",
                                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                                  transition: "all 0.3s ease",
                                }}
                                onMouseOver={e => {
                                  e.currentTarget.style.transform = "translateY(-3px)";
                                  e.currentTarget.style.borderColor = "#cbd5e1";
                                  e.currentTarget.style.backgroundColor = "#f1f5f9";
                                }}
                                onMouseOut={e => {
                                  e.currentTarget.style.transform = "translateY(0)";
                                  e.currentTarget.style.borderColor = "#e2e8f0";
                                  e.currentTarget.style.backgroundColor = "#f8fafc";
                                }}
                              >
                                <span role="img" aria-label="tour">🏫</span> Book a Campus Tour
                              </a>
                            </div>

                            {/* Key Highlights */}
                            <div className="d-flex flex-wrap justify-content-center gap-2 mt-2">
                              {[
                                "Pre-Nursery to Grade XII",
                                "CBSE Affiliated",
                                "1:20 Teacher–Student Ratio",
                                "Safe & Secure Campus"
                              ].map((text, idx) => (
                                <span 
                                  key={idx}
                                  className="badge px-3 py-2 fw-medium" 
                                  style={{ 
                                    backgroundColor: "#f1f5f9", 
                                    color: "#475569",
                                    fontSize: "0.85rem",
                                    border: "1px solid #e2e8f0",
                                    borderRadius: "12px"
                                  }}
                                >
                                  ✓ {text}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
        {/* Admission Form Section */}
        <div className="col-lg-5" data-aos="fade-left">
          <div className="admission-form-box p-3 p-md-4 rounded-4 shadow bg-white">
            <iframe
              src="https://form.edmissioncrm.com/form-preview/7ab0060d-c4d1-4c23-bc52-b9f35527847e"
              width="100%"
              height="500"
              style={{ border: "none", borderRadius: "8px", overflow: "hidden" }}
              allowFullScreen
              loading="lazy"
              title="Admission Enquiry Form"
            ></iframe>
            {/* <EnquireForm /> */}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

        {/* Admission Process Section */}
        <section className="admission-block py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container py-4">
            <div className="text-center mb-5" data-aos="fade-up">
              <span 
                className="badge mb-3 px-3 py-2 rounded-pill fw-semibold" 
                style={{ 
                  letterSpacing: "1.5px", 
                  backgroundColor: "#e0f2fe", 
                  color: "#0284c7",
                  fontSize: "0.85rem"
                }}
              >
                ADMISSION PROCESS
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: "#0f172a" }}>Your Journey Starts Here</h2>
              <p className="lead mx-auto" style={{ maxWidth: "800px", color: "#64748b" }}>
                We've designed our admission process to be transparent, welcoming, and stress-free. Here's how school admission in Gurgaon works at Kualakubs — step by simple step.
              </p>
            </div>

            <div className="row g-4">
              {[
                {
                  step: "01",
                  title: "Enquiry Submission",
                  desc: "Fill out our online enquiry form or walk in to our Admissions Office. Our team will reach out within 24 hours to guide you through the next steps.",
                  icon: "📝"
                },
                {
                  step: "02",
                  title: "Campus Tour",
                  desc: "Experience our school firsthand. Walk through our classrooms, playgrounds, labs, and facilities with a dedicated admission counsellor who answers every question.",
                  icon: "🏫"
                },
                {
                  step: "03",
                  title: "Counselling Session",
                  desc: "A warm, informal session with our academic team to understand your child's learning style, interests, and any specific requirements — no pressure, just a conversation.",
                  icon: "💬"
                },
                {
                  step: "04",
                  title: "Registration & Document Submission",
                  desc: "Complete the registration form and submit the required documents. Our team is available to assist you throughout this process.",
                  icon: "📂"
                },
                {
                  step: "05",
                  title: "Interaction / Assessment",
                  desc: "A child-friendly, age-appropriate interaction session — not an examination. It simply helps us understand your child better so we can serve them well from day one.",
                  icon: "🤝"
                },
                {
                  step: "06",
                  title: "Admission Confirmation",
                  desc: "Upon successful completion, you'll receive your official admission confirmation and a warm welcome to the Kualakubs family. Your child's extraordinary journey begins here.",
                  icon: "🎉"
                }
              ].map((item, index) => (
                <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                  <div 
                    className="card h-100 border-0 position-relative overflow-hidden" 
                    style={{ 
                      borderRadius: "20px", 
                      transition: "all 0.3s ease",
                      background: "#ffffff",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)";
                    }}
                  >
                    <div className="card-body p-4 p-xl-5 position-relative z-1">
                      <div className="d-flex justify-content-between align-items-start mb-4">
                        <div 
                          className="d-flex align-items-center justify-content-center rounded-circle"
                          style={{ 
                            width: "60px", 
                            height: "60px", 
                            backgroundColor: "#f1f5f9", 
                            fontSize: "1.75rem",
                            boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02)"
                          }}
                        >
                          {item.icon}
                        </div>
                        <span 
                          className="fw-bold" 
                          style={{ 
                            fontSize: "3.5rem", 
                            lineHeight: 1, 
                            color: "#f1f5f9",
                            letterSpacing: "-2px"
                          }}
                        >
                          {item.step}
                        </span>
                      </div>
                      <h4 className="card-title fw-bold mb-3" style={{ color: "#1e293b", fontSize: "1.25rem" }}>{item.title}</h4>
                      <p className="card-text mb-0" style={{ color: "#64748b", lineHeight: "1.6" }}>{item.desc}</p>
                    </div>
                    {/* Decorative gradient blob */}
                    <div 
                      style={{
                        position: "absolute",
                        top: "-20px",
                        right: "-20px",
                        width: "120px",
                        height: "120px",
                        background: "linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(14, 165, 233, 0) 100%)",
                        borderRadius: "50%",
                        zIndex: 0,
                        pointerEvents: "none"
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="admission-block">
          <div className="container">
            <div className="row align-items-center">
              {/* Text */}
              <div className="col-lg-6" data-aos="fade-right">
                <h3 className="admission-title">Contact Us</h3>
                <p className="mb-0">
                  📍 Kualakubs World School,
                  <br />
                  DLF New Town Heights, Sec–86, <br />
                  +91 9996648317
                </p>
              </div>

              {/* Image */}
              <div className="col-lg-6 text-center" data-aos="fade-left">
                <img
                  src="https://www.westminster.org.uk/wp-content/uploads/2025/06/250522-Library-03-scaled.jpg"
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
