import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import aboutlogo from "../assets/logowhite.png";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg"
import SEO from "../components/SEO";
export default function About() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      question: "What is the school's greatest aim with respect to its pupils?",
      answer: "We ensure the safety, wellbeing, and dignity of all learners is paramount in all we do."
    },
    {
      question: "What is the school's Mission Statement about the environment?",
      answer: "Children will be provided with a setting to grow in which there will be no harm or discrimination, if possible."
    },
    {
      question: "Is there a child safety-specific training for staff?",
      answer: "Yes, we train all our staff and teachers daily in safety."
    },
    {
      question: "Is the community being involved in Kualakubs school's security campaign?",
      answer: "Yes, we do work with families and local authorities and ensure that our campus is safe."
    },
    {
      question: "When it comes to thinking about getting admission to a school in Gurgaon, what should it be?",
      answer: "It is important that they are committed to International standards of child protection, like KWS, for admission to Gurgaon's Schools."
    }
  ];

  return (
    <>
      <SEO
        title="Strong Foundations at a Trusted CBSE School in Gurugram "
        description="A trusted learning space blending tradition and innovation, backed by 40+ years of educational excellence, at a leading CBSE School in Gurugram."
      />
      <PageHeader
        title="About Us"
        backgroundImage={newBuildingImg}
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "About Us", active: true },
        ]}
      />

      {/* About us */}
      <section
        className="py-5"
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
        }}
      >
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "var(--accent-bg-color)" }}>
              About Us
            </h2>
            <p className="mt-2" style={{ color: "var(--text-color)" }}>
              A legacy of 40 years meets the future of learning
            </p>
          </div>

          <div className="row g-4">
            {/* Column 1 */}
            <div className="col-lg-6">
              <div
                className="p-4 h-100 rounded-3 shadow-sm"
                style={{
                  backgroundColor: "var(--accent-bg-color)",
                  color: "var(--accent-text-color)",
                }}
              >
                <h4 className="fw-semibold mb-3">
                  <i className="bi bi-award-fill me-2"></i>A Legacy of 40 Years
                </h4>
                <p>
                  Welcome to Kualakubs World School, a visionary learning space with a strong educational foundation, proudly serving the community for a little more than 40 years. In the same spirit, Kualakubs, a trusted CBSE School in Gurugram, continues this tradition by merging tradition with innovation in order to create meaningful learning experiences.
                </p>

                <h5 className="fw-semibold mt-4 mb-2">
                  <i className="bi bi-stars me-2"></i>
                  Our Beginning in Gurugram
                </h5>
                <p>
                  It started with our beloved Kualakubs Preschool – a place truly chosen to be the best early childhood learning setting based on creativity, warmth, and experiential learning. This strong base has put us in the list of affordable schools in Gurgaon that value education from the beginning.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-lg-6">
              <div
                className="p-4 h-100 rounded-3 shadow-sm"
                style={{ backgroundColor: "var(--bg-color)" }}
              >
                <h4
                  className="fw-semibold mb-3"
                  style={{ color: "var(--accent-bg-color)" }}
                >
                  <i className="bi bi-building me-2"></i>
                  When a school is looking to expand and become a formal CBSE school
                </h4>
                <p>
                  After the success of our preschool, we are delighted to announce the commencement of the CBSE Formal School at Kualakubs, starting from Playgroup to Grade 12. We are a rapidly expanding CBSE School in Gurugram, where we provide a smooth learning experience from foundation to senior secondary level.
                </p>

                <h5
                  className="fw-semibold mt-4 mb-2"
                  style={{ color: "var(--accent-bg-color)" }}
                >
                  <i className="bi bi-lightbulb-fill me-2"></i>
                  Built to Meet the Needs of the Future
                </h5>
                <p>
                  We are one of the affordable schools in Gurgaon and have a curriculum that incorporates the 21st century skills like critical thinking, creativity, collaboration, digital literacy and socio-emotional learning.
                </p>

                <h5
                  className="fw-semibold mt-4 mb-2"
                  style={{ color: "var(--accent-bg-color)" }}
                >
                  <i className="bi bi-mortarboard-fill me-2"></i>A Learning Inspiring Space

                </h5>
                <p>
                  Our classrooms are interactive, our labs are well-equipped, our outdoor play areas are ready, our activity rooms are prepared, and learning is joyful, engaging, and all-inclusive—a hallmark of a top-notch CBSE School in Gurugram.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Vision Box */}
          <div
            className="mt-5 p-4 rounded-3 shadow-sm text-center"
            style={{
              backgroundColor: "var(--accent-bg-color)",
              color: "var(--accent-text-color)",
            }}
          >
            <h4 className="fw-semibold mb-3">
              <i className="bi bi-compass-fill me-2"></i>
              Our Vision
            </h4>
            <p className="mb-0">
              To ensure that each child is an independent thinker, a caring human being and a confident world citizen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="container">
          {/* Who We Are */}
          <div className="text-center mb-5">
            {/* <h2 className="fw-bold" style={{ color: "var(--accent-bg-color)" }}>
              Who We Are
            </h2> */}
            <p className="mt-3" style={{ color: "var(--text-color)" }}>

              Kualakubs World School is a progressive CBSE School in Gurugram that offers a structured, holistic and future-ready education from Playgroup till Class 12. We have a strong academic programme that promotes life skills, sports, technology and values education to help us grow all-round, making us one of the most trusted affordable schools in Gurgaon.
            </p>
          </div>

          {/* Our Approach */}
          <div className="row mb-5">
            <div className="col-lg-6">
              <h3
                className="fw-semibold mb-3"
                style={{ color: "var(--accent-bg-color)" }}
              >
                Our Promise
              </h3>
              <ul
                className="list-unstyled"
                style={{ color: "var(--text-color)" }}
              >
                <li>• Holistic 360° growth — academics, skills and values</li>
                <li>• The basics of multilingualism and bilingualism</li>
                <li>• Experiential, project-based learning</li>
                <li>
                  • For students to fully engage in the curriculum, the arts, sports, and vocational skills are integrated in the core curriculum.
                </li>
              </ul>
            </div>

            <div className="col-lg-6 d-flex align-items-center">
              <p className="fst-italic" style={{ color: "var(--text-color)" }}>
                We are shaping confident, curious and compassionate learners at Kualakubs.
              </p>
            </div>
          </div>

          <hr className="my-5" />
          <div
            className="row align-items-center py-4"
            style={{ background: "#f5f4ef", borderRadius: "24px" }}
          >
            <div className="col-lg-6 p-4">
              <i
                className="bi bi-chat-left-quote-fill fs-2 mb-3"
                style={{ color: "var(--accent-bg-color)" }}
              ></i>
              <h2 className="mb-1 fw-bold text-start">Our Legacy & Vision</h2>
              <h2 className="mb-4 text-start fw-light">
                Learning Designed for the Future
              </h2>
              <p
                className="mb-3"
                style={{
                  textAlign: "justify",
                }}
              >
                Kualakub’s onward journey in the sector drives us here — our
                preschools set new benchmarks in early childhood education.
                <br />
                Our preschools are already setting new standards in early childhood learning which is Kualakubs' next step in education. From this trust, we have now begun to grow into a world-class K–12 institution that fosters innovation, wellness and values to help build confidence in learning, creating and leading in every child.
              </p>

              <p
                className="text-center fw-bold"
                style={{
                  textAlign: "justify",
                }}
              >
                The Management's Message
                Headed by Managing Director, Lakshay Gupta.

              </p>
            </div>
            <div className="col-lg-6 p-4">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350"
                className="img-fluid rounded-4 shadow-sm"
                alt=""
              />
            </div>
          </div>

          <hr className="my-5" />
          <div
            className="row align-items-center py-4 mt-4"
            style={{ background: "#ede9e0", borderRadius: "24px" }}
          >
            <div className="col-lg-6 order-lg-2 p-4">
              <i className="bi bi-chat-text-fill fs-2 mb-3"></i>
              <h2 className="mb-4 fw-bold">Dear Parents and Students,</h2>
              <p
                className="mb-3"
                style={{
                  textAlign: "justify",
                }}
              >
                At Kualakubs World School, we want to be a school where all students can be encouraged to discover what they are capable of and make informed decisions. Our passionate staff is committed to academic achievement, character building and overall growth, to ensure that our students will make a difference in society.

                The Principal's message

                My Dear Parents & Students,
                At Kualakubs World School, we understand the importance of building a good partnership with the school, parents and students. We work together to develop a safe and secure setting in which children become responsible, confident and competent adults for the future.

              </p>
              <p
                className="mt-4"
                style={{
                  textAlign: "justify",
                }}
              >
                <strong>Warm regards,</strong>
                <br />
                <strong>Principal</strong>
                <br />
                <strong>Kualakubs World School</strong>
              </p>
            </div>
            <div className="col-lg-6 order-lg-1 p-4">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                className="img-fluid rounded-4 shadow-sm"
                alt=""
              />
            </div>
          </div>

          <hr className="my-5" />
          <div
            className="row align-items-center py-4"
            style={{ background: "#f5f4ef", borderRadius: "24px" }}
          >
            <div className="col-lg-6 p-4">
              <i
                className="bi bi-people-fill fs-2 mb-3"
                style={{ color: "var(--accent-bg-color)" }}
              ></i>
              <h2 className="mb-4 fw-bold text-start">
                Our teachers are trained, certified and passionate educators
                with expertise in:
              </h2>

              <ul
                className="mb-4"
                style={{
                  textAlign: "left",
                  lineHeight: "1.8",
                }}
              >
                <li>CBSE Pedagogy</li>
                <li>Subject-specific mastery</li>
                <li>Child psychology & classroom management</li>
                <li>NEP 2020 aligned teaching</li>
                <li>Technology-enabled instruction</li>
                <li>Project-based learning</li>
              </ul>

              <p
                className="text-center fw-semibold"
                style={{
                  textAlign: "justify",
                }}
              >
                We have a vision that great teachers make great futures.
              </p>
            </div>
            <div className="col-lg-6 p-4">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350"
                className="img-fluid rounded-4 shadow-sm"
                alt=""
              />
            </div>
          </div>

          <hr className="my-5" />
          {/* Core Values */}
          <div className="container py-5">
            <h3
              className="fw-semibold text-center mb-5"
              style={{ color: "var(--accent-bg-color)" }}
            >
              Our Foundational Values
            </h3>

            <div
              className="row g-4 justify-content-center"
              style={{ color: "var(--text-color)" }}
            >
              {[
                {
                  title: "Integrity",
                  text: "Maintaining integrity and ethical practices, and fostering trust by being transparent.",
                },
                {
                  title: "Curiosity",
                  text: "Fostering a love of learning and discovery, promoting students to question and think critically.",
                },
                {
                  title: "Respect",
                  text: "Respecting dignity, diversity and individual views to develop an inclusive environment.",
                },
                {
                  title: "Empathy",
                  text: "Recognising and respecting the feelings of others to develop more personal relationships.",
                },
                {
                  title: "Discipline",
                  text: "To build responsibility, concentration and resilience to ensure future success.",
                },
                {
                  title: "Excellence",
                  text: "Seeking to continually improve in academics, character and contributions to society. ",
                },
              ].map((item, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div
                    className="value-card p-4 h-100"
                    style={{
                      backgroundColor: "var(--accent-text-color)",
                      borderRadius: "12px",
                      borderLeft: "6px solid var(--accent-bg-color)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    <h5
                      className="fw-bold mb-2"
                      style={{ color: "var(--accent-bg-color)" }}
                    >
                      {item.title}
                    </h5>
                    <p className="mb-0">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
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
    </>
  );
}
