// src/pages/Admissions.jsx
import React, { useEffect } from "react";
import "../styles/admissions.css";
import PageHeader from "../components/PageHeader.jsx";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

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
      <PageHeader
        title="Admissions"
        backgroundImage="https://kualakubsworldschool.com/assets/kualakubs%20home%20image%202-DokhlqL5.png"
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

        <h1 className="hero-title mb-2">Admissions 2026–27</h1>

        <p className="lead mb-4">Playgroup to Class 10</p>

        <a
          href="#process"
          className="btn btn-outline-light rounded-0 px-4 py-2 fw-semibold"
        >
          View Process →
        </a>
      </div>

      {/* MAIN CONTENT */}
      <div className="admissions-wrapper">
        {/* Admission Process */}
        <section className="admission-block">
          <div className="container">
            <div className="row align-items-center">
              {/* Text */}
              <div className="col-lg-6" data-aos="fade-right" id="process">
                <h3 className="admission-title">Admission Process</h3>

                <ol className="admission-list">
                  <li>Fill the enquiry form</li>
                  <li>School tour & interaction with academic team</li>
                  <li>Entrance assessment (Primary & Middle)</li>
                  <li>Registration & document verification</li>
                </ol>
              </div>

              {/* Image */}
              <div className="col-lg-6 text-center" data-aos="fade-left">
                <img
                  src="https://www.westminster.org.uk/wp-content/uploads/2025/03/Yard-scaled.jpg"
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Documents Required */}
        <section className="admission-block bg-light-alt">
          <div className="container">
            <div className="row align-items-center">
              {/* Image */}
              <div className="col-lg-6 text-center" data-aos="fade-right">
                <img
                  src="https://www.westminster.org.uk/wp-content/uploads/2025/02/MicaelaKarina_WestminsterSchool-385.jpg"
                  alt=""
                  className="img-fluid rounded"
                />
              </div>

              {/* Text */}
              <div className="col-lg-6" data-aos="fade-left">
                <h3 className="admission-title">Documents Required</h3>

                <ul className="admission-list">
                  <li>Birth Certificate</li>
                  <li>Transfer Certificate (Class 1 onwards)</li>
                  <li>Passport-size photographs</li>
                  <li>Address proof</li>
                  <li>Previous school report card</li>
                </ul>
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
                  New Town Heights, Sector–86
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
      </div>
    </main>
  );
}
