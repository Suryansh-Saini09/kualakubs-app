import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import SEO from "../components/SEO";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/privacy.css";

export default function Privacy() {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", label: "1. Introduction" },
    { id: "collect", label: "2. Info We Collect" },
    { id: "use", label: "3. How We Use It" },
    { id: "cookies", label: "4. Cookies & Analytics" },
    { id: "children", label: "5. Children's Privacy" },
    { id: "security", label: "6. Data Security" },
    { id: "thirdparty", label: "7. Third-Party Links" },
    { id: "rights", label: "8. Your Rights" },
    { id: "updates", label: "9. Policy Updates" },
    { id: "contact", label: "10. Contact Us" }
  ];

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <>
      <SEO
        title="Privacy Policy | Kualakubs World School"
        description="Learn how we collect, use, and protect your personal information to ensure a safe and secure experience on our website."
      />

      <PageHeader
        title="Privacy Policy"
        backgroundImage={newBuildingImg}
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Privacy Policy", active: true },
        ]}
      />

      <section className="privacy-section">
        <div className="container">
          <div className="privacy-content-wrapper">
            <div className="row">
              {/* Sticky Sidebar Navigation Widget */}
              <div className="col-lg-3">
                <div className="privacy-sidebar" data-aos="fade-right">
                  <div className="privacy-sidebar-header">
                    <span>Policy Index</span>
                  </div>
                  <div className="privacy-sidebar-body">
                    <nav className="privacy-nav-list">
                      {sections.map((sec) => (
                        <a
                          key={sec.id}
                          href={`#${sec.id}`}
                          onClick={(e) => scrollToSection(e, sec.id)}
                          className={`privacy-nav-link ${
                            activeSection === sec.id ? "active" : ""
                          }`}
                        >
                          {sec.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>

              {/* Main Policy Content Blocks */}
              <div className="col-lg-9 mt-4 mt-lg-0">
                {/* Intro Callout Box */}
                <div className="privacy-intro-callout" data-aos="fade-up">
                  <i className="bi bi-info-circle-fill"></i>
                  <div>
                    <strong>Effective Date: May 25, 2026</strong>. Kualakubs World School holds data privacy and security in high regard. This policy outlines our complete protocols regarding the management of personal information for students, parents, and visitors.
                  </div>
                </div>

                {/* 1. Introduction */}
                <div id="intro" className="privacy-card card-navy" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">1.</span> Introduction
                  </h3>
                  <p className="privacy-text">
                    <strong>Kualakubs World School</strong>, a trusted <strong>CBSE School in Gurugram</strong>, is committed to protecting the privacy and security of personal information shared by parents, guardians, students, and website visitors. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information.
                  </p>
                </div>

                {/* 2. Information We Collect */}
                <div id="collect" className="privacy-card card-gold" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">2.</span> Information We Collect
                  </h3>
                  <p className="privacy-text">
                    We may collect the following categories of personal information:
                  </p>
                  <ul className="list-unstyled my-3 ps-2">
                    <li className="d-flex align-items-start gap-3 mb-3 privacy-text">
                      <i className="bi bi-check-circle-fill mt-1" style={{ color: "#b3925c" }}></i>
                      <span><strong>Contact information</strong> (name, phone number, email address, residential address)</span>
                    </li>
                    <li className="d-flex align-items-start gap-3 mb-3 privacy-text">
                      <i className="bi bi-check-circle-fill mt-1" style={{ color: "#b3925c" }}></i>
                      <span><strong>Child’s information</strong> (name, date of birth, grade, academic records) provided during admissions</span>
                    </li>
                    <li className="d-flex align-items-start gap-3 mb-3 privacy-text">
                      <i className="bi bi-check-circle-fill mt-1" style={{ color: "#b3925c" }}></i>
                      <span><strong>Website usage data</strong> (browser type, pages visited, time spent) collected via cookies and analytics tools</span>
                    </li>
                    <li className="d-flex align-items-start gap-3 mb-3 privacy-text">
                      <i className="bi bi-check-circle-fill mt-1" style={{ color: "#b3925c" }}></i>
                      <span><strong>Communication records</strong> from enquiry forms, emails, and phone interactions</span>
                    </li>
                  </ul>
                  <p className="privacy-text">
                    Being a <span className="privacy-highlight-gold">CBSE School in Gurugram</span>, we ensure that all collected data is handled responsibly and only for legitimate educational purposes.
                  </p>
                </div>

                {/* 3. How We Use Your Information */}
                <div id="use" className="privacy-card card-navy" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">3.</span> How We Use Your Information
                  </h3>
                  <p className="privacy-text">
                    We use collected information to respond to admissions and general enquiries; process registration and enrolment; communicate school updates, events, and newsletters; improve our website and digital services; and comply with applicable legal and regulatory requirements. We do not sell, rent, or trade your personal information to third parties for marketing purposes — reflecting the transparency and trust expected from <span className="privacy-highlight-gold">good schools in Gurgaon</span>.
                  </p>
                </div>

                {/* 4. Cookies & Website Analytics */}
                <div id="cookies" className="privacy-card card-gold" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">4.</span> Cookies & Website Analytics
                  </h3>
                  <p className="privacy-text">
                    Our website uses cookies — small text files stored on your device — to improve the browsing experience and analyze website usage. We may use third-party analytics tools to understand how visitors interact with our site. You can control cookie preferences through your browser settings. Disabling cookies may affect some website functionality.
                  </p>
                </div>

                {/* 5. Children's Privacy */}
                <div id="children" className="privacy-card card-navy" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">5.</span> Children's Privacy
                  </h3>
                  <p className="privacy-text">
                    We take children’s privacy seriously. Information is collected only for educational and administrative purposes with parental consent. As a responsible <span className="privacy-highlight-gold">CBSE School in Gurugram</span>, we ensure student data is accessible only to authorized staff and never misused or publicly shared without approval.
                  </p>
                </div>

                {/* 6. Data Security */}
                <div id="security" className="privacy-card card-gold" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">6.</span> Data Security
                  </h3>
                  <p className="privacy-text">
                    We implement strong technical and organizational measures to protect personal data. While no system is 100% secure, <strong>Kualakubs World School</strong>, as a trusted <span className="privacy-highlight-gold">CBSE School in Gurugram</span>, follows strict safeguards to ensure maximum data protection.
                  </p>
                </div>

                {/* 7. Third-Party Services */}
                <div id="thirdparty" className="privacy-card card-navy" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">7.</span> Third-Party Services
                  </h3>
                  <p className="privacy-text">
                    Our website may contain links to third-party websites or services (such as social media platforms). KWS is not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third-party platforms you visit.
                  </p>
                </div>

                {/* 8. Your Rights */}
                <div id="rights" className="privacy-card card-gold" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">8.</span> Your Rights
                  </h3>
                  <p className="privacy-text">
                    You have the right to access, correct, or request deletion of personal information we hold about you. To exercise these rights, please contact us at <a href="mailto:info@kualakubsworldschool.in" className="privacy-link">info@kualakubsworldschool.in</a>. We will respond to verified requests within a reasonable timeframe, in line with the responsible practices followed by every <span className="privacy-highlight-gold">leading school in Gurugram</span>.
                  </p>
                </div>

                {/* 9. Policy Updates */}
                <div id="updates" className="privacy-card card-navy" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">9.</span> Policy Updates
                  </h3>
                  <p className="privacy-text">
                    We may update this Privacy Policy periodically. Changes will be posted on this page with a revised effective date. We encourage you to review this policy from time to time.
                  </p>
                </div>

                {/* 10. Contact Us Regarding Privacy */}
                <div id="contact" className="privacy-card card-gold" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">10.</span> Contact Us Regarding Privacy
                  </h3>
                  <p className="privacy-text">
                    For any privacy-related questions or concerns, please contact us directly. Our administrative team is here to assist you and address any questions regarding your data safety.
                  </p>
                  
                  <div className="privacy-contact-card">
                    <h4 className="privacy-contact-title">
                      <i className="bi bi-shield-lock-fill"></i>
                      <span>Kualakubs World School Privacy Office</span>
                    </h4>
                    <p className="mb-0 privacy-contact-text">
                      As Gurugram's trusted educational institution, we maintain the highest standards of transparency and trust.
                    </p>
                    <div className="privacy-contact-divider"></div>
                    <div className="privacy-contact-info">
                      <div className="privacy-contact-item">
                        <i className="bi bi-telephone-fill"></i>
                        <div>
                          <span className="d-block text-white-50 small">Phone Number</span>
                          <a href="tel:+919996648317">+91 9996648317</a>
                        </div>
                      </div>
                      <div className="privacy-contact-item">
                        <i className="bi bi-envelope-fill"></i>
                        <div>
                          <span className="d-block text-white-50 small">Email Address</span>
                          <a href="mailto:info@kualakubsworldschool.in">info@kualakubsworldschool.in</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
