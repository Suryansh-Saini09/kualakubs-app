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
            title="KWS Gurgaon – Explore Our Modern Campuses & Learning Spaces"
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
            <section className="container py-5 position-relative">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Our Journey</h2>
                    <p className="text-muted">Milestones of growth and excellence</p>
                </div>

                {/* Vertical Rail (desktop & tablet only) */}
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
                                <h5 className="fw-semibold mb-1">{item.title}</h5>
                                <p className="text-muted mb-0">{item.place}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}