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
        title="Privacy Policy – CBSE School in Gurugram"
        description="Learn how we collect, use, and protect your personal information to ensure a safe and secure experience on our website services."
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
                          className={`privacy-nav-link ${activeSection === sec.id ? "active" : ""
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
                    Kualakubs World School, a reputable CBSE School in Gurugram, takes its responsibilities towards the privacy and security of personal information that is provided by parents, guardians, students, and website visitors seriously. This Privacy Policy offers an explanation of information we collect, the use of such information and your rights in relation to it.
                  </p>
                </div>

                {/* 2. Information We Collect */}
                <div id="collect" className="privacy-card card-gold" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">2.</span> Information We Collect
                  </h3>
                  <p className="privacy-text">
                    The information which we may gather is one of the following types of personal information:
                  </p>
                  <ul className="list-unstyled my-3 ps-2">
                    <li className="d-flex align-items-start gap-3 mb-3 privacy-text">
                      <i className="bi bi-check-circle-fill mt-1" style={{ color: "#b3925c" }}></i>
                      <span>Title of the website or newsletter. Website or newsletter name.</span>
                    </li>
                    <li className="d-flex align-items-start gap-3 mb-3 privacy-text">
                      <i className="bi bi-check-circle-fill mt-1" style={{ color: "#b3925c" }}></i>
                      <span>The child's information (name, date of birth, grade, and academic records) was given at admission time.</span>
                    </li>
                    <li className="d-flex align-items-start gap-3 mb-3 privacy-text">
                      <i className="bi bi-check-circle-fill mt-1" style={{ color: "#b3925c" }}></i>
                      <span>Information about the use of the website, such as the type of browser, the pages visited and the time spent on the website, is gathered through the use of cookies and analytics tools.</span>
                    </li>
                    <li className="d-flex align-items-start gap-3 mb-3 privacy-text">
                      <i className="bi bi-check-circle-fill mt-1" style={{ color: "#b3925c" }}></i>
                      <span>Meeting minutes and notes from phone calls and emails</span>
                    </li>
                  </ul>
                  <p className="privacy-text">
                    We have a duty to ensure that all information gathered is used for educational purposes, and within the law, it is kept confidential. This is a responsible CBSE school in Gurgaon, and we ensure the information that is picked up is used for educational purposes only and kept confidential within legal boundaries.
                  </p>
                </div>

                {/* 3. How We Use Your Information */}
                <div id="use" className="privacy-card card-navy" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">3.</span> How We Use Your Information
                  </h3>
                  <p className="privacy-text">
                    Collected information is used to consider applications to study at the school, to process applications for registration and enrolment; to inform the school of updates, events and newsletters; to enhance the school's website and digital services; and for compliance with legal and regulatory requirements.
                  </p>
                  <p className="privacy-text mt-3">
                    We never sell, rent or trade on your personal information for marketing purposes, a trait that is expected from a trustworthy CBSE School in Gurgaon.
                  </p>
                </div>

                {/* 4. Cookies & Website Analytics */}
                <div id="cookies" className="privacy-card card-gold" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">4.</span> Cookies & Website Analytics
                  </h3>
                  <p className="privacy-text">
                    The purpose of our website is to use cookies, small text files which are stored on your device, to enhance the user experience and to help us understand how our website is used. We may deploy third-party tools to learn about how you use our website.
                  </p>
                  <p className="privacy-text mt-3">
                    At the CBSE School in Gurugram, we believe in the responsible and responsible use of such tools and only for the users' benefit. The preferences for cookies can be set in browser settings. Some parts of the website may not work properly if you disable cookies.
                  </p>
                </div>

                {/* 5. Children's Privacy */}
                <div id="children" className="privacy-card card-navy" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">5.</span> Children's Privacy
                  </h3>
                  <p className="privacy-text">
                    Children's privacy is respected. Only with parents' consent will information be collected for educational and administrative use. We are a reliable and trusted CBSE School in Gurugram and ensure that the information of our students is given to only authorized faculty and isn't misused or shared with any outside parties without the consent of the parents.
                  </p>
                </div>

                {/* 6. Data Security */}
                <div id="security" className="privacy-card card-gold" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">6.</span> Data Security
                  </h3>
                  <p className="privacy-text">
                    We have robust technical and organizational security to safeguard personal data. No system is entirely foolproof, but Kualakubs World School, being a premier CBSE School in Gurugram, takes utmost care in ensuring that the data they hold is as safe as possible.
                  </p>
                </div>

                {/* 7. Third-Party Services */}
                <div id="thirdparty" className="privacy-card card-navy" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">7.</span> Third-Party Services
                  </h3>
                  <p className="privacy-text">
                    We may have links to third-party websites or services (including social media accounts). KWS has no control over the privacy policies of the websites. It's recommended that you check the privacy policies of any third-party platforms you visit.
                  </p>
                </div>

                {/* 8. Your Rights */}
                <div id="rights" className="privacy-card card-gold" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">8.</span> Your Rights
                  </h3>
                  <p className="privacy-text">
                    You can request access to or correction of your personal data or request its deletion. You can exercise these rights by writing us at <a href="mailto:info@kualakubsworldschool.in" className="privacy-link">info@kualakubsworldschool.in</a>.
                  </p>
                  <p className="privacy-text mt-3">
                    In case there is any verified demand, we will respond in a reasonable time frame. This is the standard practice followed by all the Leading CBSE schools in Gurgaon.
                  </p>
                </div>

                {/* 9. Policy Updates */}
                <div id="updates" className="privacy-card card-navy" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">9.</span> Policy Updates
                  </h3>
                  <p className="privacy-text">
                    We may update this Privacy Policy periodically. Any changes will be listed here along with the new effective date. This policy is subject to regular review and we are asking you to do so.
                  </p>
                </div>

                {/* 10. Contact Us Regarding Privacy */}
                <div id="contact" className="privacy-card card-gold" data-aos="fade-up">
                  <h3 className="privacy-section-title">
                    <span className="privacy-section-num">10.</span> Contact Us - Privacy
                  </h3>
                  <p className="privacy-text">
                    For any privacy-related questions or concerns, please contact us directly. We have an administration team here to help you and answer any questions about data security.
                  </p>

                  <div className="privacy-contact-card">
                    <h4 className="privacy-contact-title">
                      <i className="bi bi-shield-lock-fill"></i>
                      <span>Kualakubs World School Privacy Office</span>
                    </h4>
                    <p className="mb-0 privacy-contact-text">
                      Being a CBSE School in Gurugram, we ensure the utmost transparency, trust, and responsibility.
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
