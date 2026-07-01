import PageHeader from "../components/PageHeader";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../components/SEO";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg";
import "../styles/ourfuture.css";
import "../styles/coeducation.css";

export default function FutureSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const careerPoints = [
    "One-on-one counselling sessions for stream and subject selection",
    "Awareness of undergraduate entrance examinations and preparation timelines",
    "Exposure to a range of career fields through guest interactions and orientation programmes",
    "Support with application processes for leading colleges and universities",
    "Emotional and academic mentorship through the pressures of board years"
  ];

  return (
    <>
      <SEO
        title="Top-Rated Schools in Gurgaon for Future-Ready Learning."
        description="A forward-thinking school fostering innovation, resilience, and lifelong learning through thoughtfully designed programs at Top-Rated Schools in Gurgaon."
      />
      <PageHeader
        title="Our Future"
        backgroundImage={newBuildingImg}
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Our Future", active: true },
        ]}
      />

      {/* Hero Intro Section */}
      <section className="future-section pb-0">
        <div className="container">
          {/* Main Intro Card */}
          <div className="future-content-wrapper text-center" data-aos="fade-up">
            <h3 className="future-matters-title text-center">Preparing Students for a World That Is Changing Fast</h3>
            <p className="future-matters-para mb-0">
              The world our students will enter is fundamentally different from the one previous generations navigated.
              <span className="highlight-gold"> Artificial intelligence, rapid technological change, global interconnection</span>, and
              <span className="highlight-gold"> evolving career pathways</span> demand skills beyond fixed answers—the ability to
              <strong> think, adapt, create, and lead with integrity</strong>. At Kualakubs World School,
              <strong> “Our Future”</strong> is not just a concept but the lens through which we design every learning experience,
              positioning us among the <span className="highlight-gold">Top Rated Schools in Gurgaon</span> as a truly forward-thinking institution.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Clubs Section (Styled like Campus & Safety Highlights Section - Dark Blue background) */}
      <section className="safety-highlights-section mt-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h3 className="fw-bold fs-3" style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>
              Innovation Clubs & Interest-Based Learning
            </h3>
            <p className="mx-auto mt-2 text-white-50" style={{ maxWidth: "800px", fontSize: "1.1rem" }}>
              KWS runs a range of student-led clubs and interest groups that cultivate curiosity beyond the classroom.
              Counted among the <span className="highlight-gold" style={{ color: "#e2dccc", fontWeight: "700" }}>Top Rated Schools in Gurgaon</span>, these platforms empower student-driven learning.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-6 col-md-12" data-aos="fade-up">
              <div className="safety-card">
                <div className="d-flex flex-column flex-sm-row gap-4 align-items-start">
                  <div className="safety-icon-container">
                    <i className="bi bi-robot"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h4 className="safety-card-title">STEM Exploration</h4>
                    <p className="safety-card-text">Nurturing interest in coding, robotics, and scientific inquiry through hands-on projects and interactive learning modules.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-delay="100">
              <div className="safety-card">
                <div className="d-flex flex-column flex-sm-row gap-4 align-items-start">
                  <div className="safety-icon-container">
                    <i className="bi bi-book-half"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h4 className="safety-card-title">Reading & Writing Circles</h4>
                    <p className="safety-card-text">Encouraging literature appreciation, creative writing prompts, and discussion circles to enhance literacy and verbal expression.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-delay="200">
              <div className="safety-card">
                <div className="d-flex flex-column flex-sm-row gap-4 align-items-start">
                  <div className="safety-icon-container">
                    <i className="bi bi-tree-fill"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h4 className="safety-card-title">Environment & Sustainability</h4>
                    <p className="safety-card-text">Raising ecological consciousness, executing waste management audits, and fostering a deep respect for our natural environment.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-delay="300">
              <div className="safety-card">
                <div className="d-flex flex-column flex-sm-row gap-4 align-items-start">
                  <div className="safety-icon-container">
                    <i className="bi bi-megaphone-fill"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h4 className="safety-card-title">Public Speaking</h4>
                    <p className="safety-card-text">Developing key communication skills, debate methodologies, and presentation confidence through safe stage exposure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Leadership Section */}
      <section className="future-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="highlight-gold" style={{ color: "#b3925c", fontFamily: "'Montserrat', sans-serif", fontWeight: "700", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "1.5px" }}>The Foundation</span>
              <h3 className="fw-bold fs-2 mt-2 mb-3" style={{ color: "var(--accent-bg-color)", fontFamily: "'Montserrat', sans-serif" }}>
                Values + Leadership
              </h3>
              <p className="fs-5" style={{ color: "var(--text-color)", lineHeight: "1.8", textAlign: "justify" }}>
                Technical skills without character are incomplete. At KWS, future-readiness is built on strong values—<strong>integrity, empathy, and responsibility</strong>—alongside real leadership opportunities.
                As one of the <span className="highlight-gold" style={{ color: "#b3925c", fontWeight: "700" }}>Top Rated Schools in Gurgaon</span>, student councils, house leadership, and service projects build purposeful leaders.
              </p>
            </div>
            <div className="col-lg-5" data-aos="fade-left" data-aos-delay="100">
              <div className="coedu-quote-card">
                <p className="coedu-quote-card-text">
                  "True leadership lies in guiding others with values. We do not just teach success; we nurture character that inspires trust."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Guidance Section (Styled exactly like Co-Education Framework Section with blue background) */}
      <section className="safety-highlights-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5" data-aos="fade-right">
              <h2 className="framework-title" style={{ color: "#ffffff" }}>Career Guidance for Senior Students (Class XI–XII)</h2>
              <p className="framework-para" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
                For students in the senior secondary years, the future is not abstract—it is imminent.
                <strong style={{ color: "#ffffff" }}> KWS provides structured career orientation support</strong> to help Class XI and XII students navigate
                stream choices, higher education options, and emerging career pathways with clarity and confidence,
                positioning it among the <span className="highlight-gold" style={{ color: "#e2dccc", fontWeight: "700" }}>Top Rated Schools in Gurgaon</span>.
              </p>
            </div>
            <div className="col-lg-7" data-aos="fade-left" data-aos-delay="100">
              <div className="d-flex flex-column gap-3">
                {careerPoints.map((point, index) => (
                  <div className="framework-capsule-item d-flex align-items-center gap-3" key={index}>
                    <div className="framework-capsule-icon">
                      <i className="bi bi-shield-fill-check"></i>
                    </div>
                    <span className="framework-capsule-text">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

