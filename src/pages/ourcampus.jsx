import PageHeader from "../components/PageHeader";
import React, { useEffect, useState } from "react";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg"
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../components/SEO";

export default function OurCampus() {
    const [openFaq, setOpenFaq] = useState(null);

    const faqData = [
        {
            question: "Does the campus appeal to the parents who want the best preschool near me?",
            answer: "Yes, our caring early years area will be a safe \"living lab,\" and this is why it's the best preschool near me."
        },
        {
            question: "What do the teachers do differently?",
            answer: "Our teachers are mentors and will guide each child to his/her potential individually."
        },
        {
            question: "How do the physical surroundings facilitate learning?",
            answer: "Collaborative learning areas and interactive learning spaces to take education out of the four walls of the classroom."
        },
        {
            question: "Are the campus facilities planned for student safety?",
            answer: "All campuses are designed to offer a safe, caring, and clear space for children to move and learn freely."
        },
        {
            question: "What is special about the campus?",
            answer: "We have integrated spaces into a \"living laboratory\" environment where students learn by exploring in an open and vibrant space"
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

    const timeline = [
        { year: "1998", title: "Geeta Vidya Mandir", place: "NHBC, Panipat", icon: "bi-mortarboard" },
        { year: "2001", title: "Geeta Vidya Mandir Public School", place: "Sanoli Road, Panipat", icon: "bi-building" },
        { year: "2006", title: "Geeta College of Education", place: "Sanoli Road, Panipat", icon: "bi-book" },
        { year: "2007", title: "Geeta Institute of Law", place: "GT Road, Panipat", icon: "bi-bank" },
        { year: "2007", title: "Lakshay College of Education", place: "Naultha, Panipat", icon: "bi-book-half" },
        { year: "2008", title: "Geeta Engineering College", place: "Panipat", subtitle: "(Later Geeta University)", icon: "bi-cpu" },
        { year: "2008", title: "Geeta Institute of Education", place: "GT Road, Panipat", icon: "bi-lightbulb" },
        { year: "2012", title: "Delhi Public School", place: "Jind", icon: "bi-buildings" },
        { year: "2016", title: "Lakshay International School", place: "Naultha, Panipat", icon: "bi-globe" },
        { year: "2019", title: "Geeta Institute of Pharmacy", place: "Panipat", icon: "bi-capsule" },
        { year: "2019", title: "Kualakubs (Pre-School Chain)", place: "Panipat, Jind & More", icon: "bi-emoji-smile" },
        { year: "2022", title: "Geeta University", place: "Panipat", icon: "bi-award" },
        { year: "2024", title: "Kualakubs Pre-School & Daycare", place: "Gurugram", icon: "bi-heart" },
        { year: "2026", title: "Kualakubs World School", place: "Gurugram", icon: "bi-stars" },
    ];

    return (
        <>
            <SEO
                title="Affordable CBSE Schools Near Me with Modern Campus Facilities"
                description="Explore Kualakubs World School campus with smart classrooms, modern labs, and safe spaces, making it a trusted choice for affordable CBSE schools near me. "
            />
            <PageHeader
                title="Our Campuses"
                backgroundImage={newBuildingImg}
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "Our Campuses", active: true }
                ]}
            />
            <section className="container-fluid p-0">
                {/* About our campus */}
                <div
                    className="w-100 min-vh-100 d-flex flex-column justify-content-center"
                    style={{
                        background: "linear-gradient(135deg, #f8fafc 60%, #e9f0fb 100%)",
                        padding: "6rem 5%",
                    }}
                >
                    <div className="w-100" data-aos="fade-up">
                        <h3
                            className="fw-bold mb-4 text-center"
                            style={{
                                color: "#192d45",
                                fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
                                fontWeight: 800,
                                letterSpacing: "1px",
                                fontSize: "2.8rem",

                            }}
                        >
                            ABOUT OUR CAMPUS
                        </h3>
                        <p className="mb-2 fs-5 text-center" style={{ color: "#5c7cfa" }}><strong>Child-centered.</strong></p>
                        <p className="mb-5 fs-5 text-center" style={{ color: "#5c7cfa" }}><strong style={{
                            fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
                            fontWeight: 800,
                            letterSpacing: "0.5px"
                        }}>Designed for Discovery.</strong></p>

                        <div className="fs-5" style={{ color: "#495057", lineHeight: "1.8" }}>
                            <p style={{ textAlign: "justify" }}>
                                In the Kualakubs World School, each square foot of the campus is purposeful. We didn't plan for a building, then fill it with children – we planned for a world based on the way children learn, play and grow.
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                When you enter the proper school, there's a feeling you get. The corridors are spacious. The classroom atmosphere is alive. The teachers seem as if they want to be there, and the children seem as if they want to be there. That's the kind of environment that we have created at Kualakubs World School, one of the most well-planned out among parents looking for Affordable CBSE Schools Near Me and among the best CBSE schools in Gurgaon.
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                Our campus philosophy starts with a basic premise: The learning environment influences the learning of a child. Bright, purposeful and child-friendly spaces help children to take risks, ask questions and engage deeply because they feel safe. Hence, families wishing to find Affordable CBSE Schools Near Me often prefer campuses that offer more than just infrastructure.
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                Academic spaces, creative areas, outdoor play areas and reflection corners are all integrated; each classroom is designed for visual, auditory, kinesthetic and collaborative learning styles. This is how a modern school feels: human, warm and purposeful.
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                Being a top school in Gurugram, we know that parents desire more than a pretty brochure. They desire a real world — one that enables their child to flourish in all aspects. If you are looking for Affordable CBSE Schools Near Me, Kualakubs World School is the right choice of school for you, which is well designed, safe and excellent in providing learning.
                            </p>
                            <div className="mt-5 p-4 rounded-3 shadow-sm" style={{ background: "#ffffff", borderLeft: "5px solid #5b7bf9ff" }}>
                                <p className="mb-0 fs-5 fw-medium text-dark" style={{ fontStyle: "italic" }}>
                                    "A school campus should be comfortable enough to be familiar but interesting enough to never be boring, A second home, as it were."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-5 position-relative">
                <div className="text-center mb-5" data-aos="fade-up">
                    <h2
                        className="fw-bold"
                        style={{
                            fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
                            fontWeight: 800,
                        }}
                    >
                        Our Journey
                    </h2>
                    <p className="text-muted">Multiplication Tables Rockstars</p>
                    <p className="mx-auto" style={{ maxWidth: "800px" }}>KWS Gurgaon provides a state-of-the-art, secure and stimulating learning environment. With the inclusion of smart classrooms, modern facilities, and providing a nurturing environment for holistic development, it is standing tall as one of the best CBSE schools in Gurgaon and providing the best affordable CBSE school near me for families.</p>
                </div>

                <div
                    className="position-absolute top-0 start-0 h-100 d-none d-md-block"
                    style={{
                        width: "4px",
                        background: "linear-gradient(to bottom, #192d45, #5c7cfa)",
                        left: "24px",
                    }}
                ></div>

                <div className="d-flex flex-column gap-4">
                    {timeline.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                            className="d-flex align-items-start"
                        >
                            {/* Icon Dot */}
                            <div
                                className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                style={{
                                    width: "42px",
                                    height: "42px",
                                    background: "#192d45",
                                    color: "#fff",
                                    marginLeft: "4px",
                                }}
                            >
                                <i className={`bi ${item.icon}`}></i>
                            </div>

                            {/* Content */}
                            <div
                                className="ms-3 p-3 p-md-4 rounded shadow-sm w-100"
                                style={{
                                    background: "linear-gradient(135deg, #ffffff, #f1f4f9)",
                                    borderLeft: "5px solid #5c7cfa",
                                }}
                            >
                                <span className="badge mb-2" style={{ background: "#192d45" }}>
                                    {item.year}
                                </span>
                                <h5
                                    className="fw-bold mb-1"
                                    style={{
                                        fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
                                        fontWeight: 800,
                                    }}
                                >
                                    {item.title}
                                </h5>
                                <p className="text-muted mb-0">{item.place}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <section className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
                        <h2
                            className="fw-bold mb-3"
                            style={{
                                fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
                                fontWeight: 800,
                                color: "#192d45"
                            }}
                        >
                            Direction & Map
                        </h2>
                        <h4 className="fw-semibold text-primary mb-3">Find Our Campus</h4>
                        <p className="text-muted fs-5 mb-4">
                            Kualakubs World School is located in Sector 86, Gurugram, where it is easily accessible to a number of families in and around New Gurgaon. KWS is indeed a to-be-visited school for admission in Gurgaon.
                        </p>
                        <a href="https://maps.google.com/?q=Sector+86+Gurugram" target="_blank" rel="noreferrer" className="btn btn-primary px-4 py-2 rounded-pill shadow-sm" style={{ background: "#5c7cfa", border: "none" }}>
                            <i className="bi bi-geo-alt-fill me-2"></i> Get Directions
                        </a>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <div className="rounded-4 overflow-hidden shadow">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14032.551608620857!2d76.92984954848316!3d28.399581970725354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d537f8846c9%3A0xcb1cc3372c3d528b!2sSector%2086%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="KWS Gurugram Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-5 mb-4">
                <div className="text-center mb-5" data-aos="fade-up">
                    <h2
                        className="fw-bold mb-3"
                        style={{
                            fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
                            fontWeight: 800,
                            color: "#192d45"
                        }}
                    >
                        Get in Touch with<br />Kualakubs World School
                    </h2>
                    <p className="fs-5 mx-auto text-muted" style={{ maxWidth: "800px" }}>
                        Whether you have queries regarding the School Admission in Gurgaon or want to visit the campus or give some academic advice, we are here to help you all the way.
                    </p>
                </div>

                <div className="row g-4 text-center justify-content-center" data-aos="fade-up">
                    <div className="col-md-4">
                        <div className="p-4 rounded-3 shadow-sm h-100" style={{ background: "#f8fafc", borderTop: "4px solid #5c7cfa" }}>
                            <i className="bi bi-geo-alt fs-1 text-primary mb-3 d-block"></i>
                            <h5 className="fw-bold">Visit Us</h5>
                            <p className="text-muted mb-0">Kualakubs World School (KWS)<br />Sector 86, Gurugram,<br />Haryana</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 rounded-3 shadow-sm h-100" style={{ background: "#f8fafc", borderTop: "4px solid #5c7cfa" }}>
                            <i className="bi bi-telephone fs-1 text-primary mb-3 d-block"></i>
                            <h5 className="fw-bold">Call Us</h5>
                            <p className="text-muted mb-0"><a href="tel:+919996648317" className="text-decoration-none text-muted">+91 9996648317</a></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 rounded-3 shadow-sm h-100" style={{ background: "#f8fafc", borderTop: "4px solid #5c7cfa" }}>
                            <i className="bi bi-envelope fs-1 text-primary mb-3 d-block"></i>
                            <h5 className="fw-bold">Email Us</h5>
                            <p className="text-muted mb-0"><a href="mailto:info@kualakubsworldschool.in" className="text-decoration-none text-muted">info@kualakubsworldschool.in</a></p>
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