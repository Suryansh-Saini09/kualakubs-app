// src/pages/Admissions.jsx
import React, { useEffect, useState } from "react";
import "../styles/admissions.css";
import PageHeader from "../components/PageHeader.jsx";
// import EnquireForm from "../components/forms/forms.jsx";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg"

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../components/SEO.jsx";

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
      {
          question: "How can I apply for admission to your school?",
          answer: "An online form is available on our website for you to complete, or alternatively, you can come to the campus to register via a walk-in."
      },
      {
          question: "Are there any good and cheap CBSE schools in Gurgaon?",
          answer: "KWS, a premier name in providing top-class CBSE schools in Gurgaon, provides you with that luxury at affordable rates."
      },
      {
          question: "Do they have entrance exams for Primary?",
          answer: "A simple interaction and age-appropriate assessment to gain some understanding of the child's current level of learning."
      },
      {
          question: "What paperwork is needed to take part in the admission process?",
          answer: "The documents required are the child's birth certificate, Aadhaar card, school reports of the child (if any), and passport-size photographs."
      },
      {
          question: "Is a campus tour available prior to admission?",
          answer: "Absolutely, you can book a tour through our website or directly with the front desk to take a tour of our facilities."
      }
  ];

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
        description="Explore a simple admission process with guided support, campus tours, and easy enrollment for a smooth start at Admission Open Gurgaon School for your child’s learning journey."
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
              Enroll at Gurgaon School and experience high-quality education and holistic development at Kualakubs World School, Gurugram!
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
                      background: "linear-gradient(135deg, rgba(226, 220, 204, 0.3) 0%, rgba(226, 220, 204, 0) 100%)",
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
                          backgroundColor: "#e2dccc",
                          color: "#192d45",
                          fontSize: "0.9rem",
                          border: "1px solid #e2dccc"
                        }}
                      >
                        🌟 ADMISSIONS OPEN 2026–27
                      </span>
                      <h2 className="display-6 fw-bold mb-3" style={{ color: "#192d45", lineHeight: 1.2 }}>
                        Where Great Minds <br />
                        <span style={{ color: "#192d45", position: "relative" }}>
                          are Discovered.
                          <svg style={{ position: "absolute", bottom: "-8px", left: "0", width: "100%", height: "8px" }} viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="#e2dccc" strokeWidth="4" fill="transparent" />
                          </svg>
                        </span>
                      </h2>
                      <p className="lead mt-4 mb-4" style={{ color: "#495057", fontSize: "1.1rem", lineHeight: 1.7 }}>
                        Provide your child <span className="fw-bold" style={{ color: "#192d45" }}>with a future-ready education from an Admission Open Gurgaon School that values, cares, innovates and excels in developing young minds. For those looking for top-notch CBSE schools that are budget-friendly, Kualakubs World School presents an ideal mix of holistic development, academic excellence, and joyful learning.</span>
                      </p>
                    </div>

                    <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                      <a
                        href="#"
                        className="btn px-4 py-3 fw-bold rounded-pill"
                        style={{
                          fontSize: "1.05rem",
                          backgroundColor: "#192d45",
                          color: "#fff",
                          boxShadow: "0 10px 15px -3px rgba(25, 45, 69, 0.25)",
                          transition: "all 0.3s ease",
                          border: "none"
                        }}
                        onMouseOver={e => {
                          e.currentTarget.style.transform = "translateY(-3px)";
                          e.currentTarget.style.boxShadow = "0 15px 20px -3px rgba(25, 45, 69, 0.35)";
                        }}
                        onMouseOut={e => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(25, 45, 69, 0.25)";
                        }}
                      >
                        Apply for Admission
                      </a>
                      <a
                        href="#"
                        className="btn px-4 py-3 fw-bold rounded-pill"
                        style={{
                          fontSize: "1.05rem",
                          backgroundColor: "#ffffff",
                          color: "#192d45",
                          border: "2px solid #e2dccc",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                          transition: "all 0.3s ease",
                        }}
                        onMouseOver={e => {
                          e.currentTarget.style.transform = "translateY(-3px)";
                          e.currentTarget.style.borderColor = "#192d45";
                          e.currentTarget.style.backgroundColor = "#e2dccc";
                        }}
                        onMouseOut={e => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.borderColor = "#e2dccc";
                          e.currentTarget.style.backgroundColor = "#ffffff";
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
                            backgroundColor: "#ffffff",
                            color: "#192d45",
                            fontSize: "0.85rem",
                            border: "1px solid #e2dccc",
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
      <section className="admission-block py-5" style={{ backgroundColor: "#faf8f5" }}>
        <div className="container py-4">
          <div className="text-center mb-5" data-aos="fade-up">
            <span
              className="badge mb-3 px-3 py-2 rounded-pill fw-semibold"
              style={{
                letterSpacing: "1.5px",
                backgroundColor: "#e2dccc",
                color: "#192d45",
                fontSize: "0.85rem"
              }}
            >
              ADMISSION PROCESS
            </span>
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#192d45" }}>Your Journey Starts Here</h2>
            <p className="lead mx-auto" style={{ maxWidth: "800px", color: "#495057" }}>
              This is the beginning of your journey.

              We have structured our admission program to be transparent, welcoming and stress-free. So if you are thinking that you should look for an Admission Open Gurgaon School, here's what school admission in Gurgaon is like at Kualakubs, step-by-step.

            </p>
          </div>

          <div className="row g-4">
            {[
              {
                step: "01",
                title: "Enquiry Submission",
                desc: "Fill out our online enquiry form or walk in to our Admissions Office. We will contact you within 24 hours. Our process will be straightforward and supportive to parents looking for “affordable CBSE schools near me ”.",
                icon: "📝"
              },
              {
                step: "02",
                title: "Campus Tour",
                desc: "Find out what it's all about by visiting our school. Explore one of the top Admission Open Gurgaon School campuses, with our counsellor, and see classrooms, labs and playgrounds.",
                icon: "🏫"
              },
              {
                step: "03",
                title: "Counselling Session",
                desc: "Informal meeting with our academic staff to get to know your child's needs. We are happy to be included in the list of the best CBSE schools in the vicinity with special guidance.",
                icon: "💬"
              },
              {
                step: "04",
                title: "Registration & Document Submission",
                desc: "Fill out the application and submit the necessary paperwork. At our Admission Open Gurgaon School, our admissions team takes care of the hassle-free process for you.",
                icon: "📂"
              },
              {
                step: "05",
                title: "Interaction / Assessment",
                desc: "A session that is age-appropriate and child-friendly, not an exam. In this way, we are the best option for parents who are looking for **CBSE schools near me** that are affordable.",
                icon: "🤝"
              },
              {
                step: "06",
                title: "Admission Confirmation",
                desc: "Welcome to the Kualakubs family and an official letter of admission! Start your child's journey with a trusted Admission Open Gurgaon School that is committed towards excellence.",
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
                    borderTop: "4px solid #e2dccc",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.borderTopColor = "#192d45";
                    e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderTopColor = "#e2dccc";
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
                          backgroundColor: "#e2dccc",
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
                          color: "rgba(226, 220, 204, 0.4)",
                          letterSpacing: "-2px"
                        }}
                      >
                        {item.step}
                      </span>
                    </div>
                    <h4 className="card-title fw-bold mb-3" style={{ color: "#192d45", fontSize: "1.25rem" }}>{item.title}</h4>
                    <p className="card-text mb-0" style={{ color: "#495057", lineHeight: "1.6" }}>{item.desc}</p>
                  </div>
                  {/* Decorative gradient blob */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "-20px",
                      width: "120px",
                      height: "120px",
                      background: "linear-gradient(135deg, rgba(226, 220, 204, 0.3) 0%, rgba(226, 220, 204, 0) 100%)",
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

      {/* FAQ Section */}
      <section className="safety-highlights-section">
          <div className="container">
              <div className="text-center mb-5" data-aos="fade-up">
                  <span className="safety-subtitle">Got Questions?</span>
                  <h2 className="safety-title mt-2">Frequently Asked Questions</h2>
              </div>

              <div className="row justify-content-center" data-aos="fade-up">
                  <div className="col-lg-10">
                      {faqData.map((item, index) => (
                          <div className="faq-accordion-item" key={index}>
                              <div 
                                  className="faq-accordion-header" 
                                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                              >
                                  <h3 className="faq-accordion-title">{item.question}</h3>
                                  <div className="faq-accordion-icon">
                                      <i className={`bi ${openFaq === index ? 'bi-x-lg' : 'bi-plus-lg'}`}></i>
                                  </div>
                              </div>
                              {openFaq === index && (
                                  <div className="faq-accordion-body">
                                      <p className="mb-0">{item.answer}</p>
                                  </div>
                              )}
                          </div>
                      ))}
                  </div>
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
              <p>
                Searching for an 'Admission Open Gurgaon School' or ‘affordable CBSE schools near me'? Reach out to us now and help your child begin to make a brighter tomorrow.
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
