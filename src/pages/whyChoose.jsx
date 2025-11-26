import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/whyChoose.css";

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
              "Balanced Development of Academics & Personality",
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
          </div>
        </div>
      </section>

    </main>
  );
}
