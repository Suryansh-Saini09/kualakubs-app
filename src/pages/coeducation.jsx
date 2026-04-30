import PageHeader from "../components/PageHeader";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../components/SEO";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg"

export default function CoEducation() {
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
        });
    }, []);
    return (
        <>
        <SEO
            title="Kualakubs World School – One of the Best Schools in Gurgaon for Co-Education"
            description="A balanced co-educational environment where students grow with confidence, respect, and collaboration, building strong social and life skills."/>
            <PageHeader
                title="Co-Education"
                backgroundImage={newBuildingImg}
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "Co-Education", active: true }
                ]}
            />
            <section className="py-5 bg-light">
                <div className="container">

                    {/* Co-Education Section */}
                    <div className="mb-5">
                        <h2 className="fw-bold text-center mb-3">🌟 Co-Education</h2>
                        <h5 className="text-center text-muted">
                            A Balanced, Inclusive & Progressive Learning Environment
                        </h5>

                        <div className="row mt-4">
                            <div className="col-md-10 offset-md-1">
                                <p className="lead text-center">
                                    At Kualakubs World School, our co-educational environment encourages students to grow together with confidence, respect, and understanding. We believe boys and girls learn best when they learn with each other—developing social awareness, empathy, and collaborative thinking, making us one of the best schools in Gurgaon.
                                </p>

                                <div className="p-4 border rounded bg-white shadow-sm mt-4" data-aos="fade-right">
                                    <h4 className="fw-semibold mb-3">Why Co-Education at KWS?</h4>
                                    <ul className="mb-0">
                                        <li><strong>Equal Opportunities for All</strong> – Every child receives equal space to explore academics, sports, arts, and leadership.</li>
                                        <li><strong>Healthy Social Development</strong> – Builds communication skills, respect, and positive peer relationships.</li>
                                        <li><strong>Real-World Preparation</strong> – Mirrors real-life environments where diversity and teamwork matter.</li>
                                        <li><strong>Holistic Personality Growth</strong> – Enhances emotional balance, adaptability, and confidence.</li>
                                    </ul>
                                    <p className="mt-3 mb-0">
                                        Our aim is to create a safe, supportive, and gender-inclusive atmosphere
                                        where every child feels valued and empowered.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pre-Primary Section */}
                    <div>
                        <h2 className="fw-bold text-center mb-3" >🌟 Pre-Primary (Pre-Prep)</h2>
                        <h5 className="text-center text-muted">Where Early Learning Begins with Joy</h5>

                        <div className="row mt-4">
                            <div className="col-md-10 offset-md-1">
                                <p className="lead text-center">
                                    The Pre-Primary wing of Kualakubs World School is thoughtfully designed
                                    to provide a warm, engaging, and nurturing start for young learners.
                                    Our curriculum blends play, exploration, creativity, and structured
                                    learning to lay a strong foundation for the years ahead.
                                </p>

                                <div className="p-4 border rounded bg-white shadow-sm mt-4" data-aos="fade-left">
                                    <h4 className="fw-semibold mb-3">Highlights of Our Pre-Prep Program</h4>
                                    <ul className="mb-0">
                                        <li><strong>Play-Based Learning</strong> – Hands-on activities, imagination, guided play.</li>
                                        <li><strong>Early Literacy & Numeracy</strong> – Phonics, storytelling, picture talk, number concepts, and patterns.</li>
                                        <li><strong>Life Skills & Social Confidence</strong> – Sharing, helping, communication, emotional understanding.</li>
                                        <li><strong>Motor Skill Development</strong> – Art, craft, music, dance, and outdoor play.</li>
                                        <li><strong>Safe & Stimulating Environment</strong> – Child-friendly classrooms, bright learning corners, caring educators.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </>
    );
}