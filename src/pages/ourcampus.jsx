import PageHeader from "../components/PageHeader";
import React, { useEffect } from "react";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg"
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../components/SEO";

export default function OurCampus() {
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
            title="KWS Gurgaon – Modern Campuses & Learning Spaces"
            description="Discover well-designed campuses with modern infrastructure, safe environments, and spaces that support learning, creativity, and growth."
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
                        <p className="mb-2 fs-5 text-center" style={{ color: "#5c7cfa" }}><strong>Built Around the Child.</strong></p>
                        <p className="mb-5 fs-5 text-center" style={{ color: "#5c7cfa" }}><strong style={{
                            fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
                            fontWeight: 800,
                            letterSpacing: "0.5px"
                        }}>Designed for Discovery.</strong></p>

                        <div className="fs-5" style={{ color: "#495057", lineHeight: "1.8" }}>
                            <p style={{ textAlign: "justify" }}>
                                At Kualakubs World School, every square foot of the campus is intentional. We didn't design a building and then fill it with children — we designed a world around how children actually learn, play, and grow.
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                There's a feeling you get when you walk into the right school. The corridors feel open. The classrooms feel alive. Teachers look like they genuinely want to be there, and children look like they do too. That is the environment we have built at Kualakubs World School — one of the most thoughtfully planned school campuses among the <strong>top CBSE schools in Gurgaon.</strong>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                Our campus philosophy begins with a simple belief: a child's environment shapes their learning. When spaces are bright, purposeful, and child-friendly, children feel safe enough to take risks, ask questions, and engage deeply. We have created a campus that supports exactly that kind of freedom-within-structure.
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                Academic spaces blend seamlessly into creative zones, outdoor play areas connect with reflection corners, and every classroom has been designed to accommodate different learning styles — visual, auditory, kinesthetic, and collaborative. This is what modern school infrastructure should feel like: human, warm, and purpose-driven.
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                As a leading <strong>school in Gurugram</strong>, we understand that parents want more than a good-looking brochure. They want to see a real environment — one that will nurture their child's growth in every dimension. Our campus is that environment, and we welcome every parent to come and experience it for themselves.
                            </p>
                            <div className="mt-5 p-4 rounded-3 shadow-sm" style={{ background: "#ffffff", borderLeft: "5px solid #5b7bf9ff" }}>
                                <p className="mb-0 fs-5 fw-medium text-dark" style={{ fontStyle: "italic" }}>
                                    "A school campus should feel like a second home — familiar enough to be comforting, rich enough to be endlessly interesting."
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
                    <p className="text-muted">Milestones of growth and excellence</p>
                    <p className="mx-auto" style={{ maxWidth: "800px" }}>KWS Gurgaon offers a modern, safe, and engaging learning campus. As a leading CBSE school in Gurgaon, it provides smart classrooms, advanced facilities, and a nurturing environment for holistic growth.</p>
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

        </>
    );
}