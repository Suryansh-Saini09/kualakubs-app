import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/whyChoose.css";
import MagicCard from "../components/Magiccard.jsx";

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
                            // "Balanced Development of Academics & Personality",
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

            {/* LIFE SKILLS SECTION */}
            <div className="container py-5" style={{ backgroundColor: "var(--bg-color)" }}>
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">

                        {/* Heading */}
                        <h3 className="fw-bold mb-4" style={{ color: "var(--accent-bg-color)" }}>
                            Essential Life Skills We Teach
                        </h3>

                        {/* Intro Text */}
                        <p className="mb-4" style={{ color: "var(--text-color)" }}>
                            Kualakubs integrates WHO-recommended life skills into daily learning to build confident,
                            capable, and responsible individuals.
                        </p>

                        {/* Skills Grid */}
                        <div className="row g-3">

                            {[
                                "Critical & Creative Thinking",
                                "Decision Making",
                                "Problem-solving",
                                "Leadership & Responsibility",
                                "Effective Communication",
                                "Empathy & Emotional Intelligence",
                                "Digital Literacy",
                                "Time Management",
                                "Collaboration & Teamwork",
                                "Stress & Emotion Management",
                                "Goal Setting & Self-motivation",
                                "Social Behaviour & Etiquette"
                            ].map((skill, index) => (
                                <div key={index} className="col-6 col-md-4">
                                    <div
                                        className="border rounded-3 px-3 py-2 text-center h-100"
                                        style={{ color: "var(--text-color)" }}
                                    >
                                        {skill}
                                    </div>
                                </div>
                            ))}

                        </div>

                        {/* Footer Text */}
                        <p className="mt-4 fw-semibold" style={{ color: "var(--accent-bg-color)" }}>
                            We prepare students not just for exams — but to excel in life.
                        </p>

                    </div>
                </div>
            </div>


            {/* SCHOOL LIFE SECTION */}
            <section className="py-5" style={{ backgroundColor: "var(--bg-color)" }}>
                <div className="container">

                    {/* Header */}
                    <div className="text-center mb-5" data-aos="fade-down">
                        <h2 className="fw-bold" style={{ color: "var(--accent-bg-color)" }}>
                            School Life at Kualakubs
                        </h2>
                        <p style={{ color: "var(--text-color)", maxWidth: "800px" }} className="mx-auto">
                            School life at Kualakubs is thoughtfully designed to provide a balanced and enriching environment that supports the holistic development of every child. Our daily schedule integrates academic readiness, creative expression, physical activity, and value-based learning to ensure that students grow into confident, curious, and responsible individuals.
                        </p>
                    </div>

                    <div className="container py-5">
                        <div className="row g-4">

                            <div className="col-lg-6 col-md-12">
                                <MagicCard
                                    image="https://images.unsplash.com/photo-1588072432836-e10032774350"
                                    icon="bi bi-book-half"
                                    heading="Academic Foundation"
                                    paragraph="Our academic programme emphasizes conceptual understanding through activity-based and experiential learning. Early literacy and numeracy skills are developed through structured phonics sessions, thematic learning modules, and interactive classroom experiences. Each concept is introduced in a manner that engages young learners and fosters a genuine interest in learning."
                                />
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <MagicCard
                                    image="https://images.unsplash.com/photo-1513258496099-48168024aec0"
                                    icon="bi bi-lightbulb"
                                    heading="Creative & Cultural Engagement"
                                    paragraph="Creativity is an integral part of school life at Kualakubs. Students participate in art, craft, music, dance, and storytelling sessions that enhance imagination and self-expression. Cultural celebrations, special assemblies, and thematic events broaden their awareness and help them appreciate diversity and tradition."
                                />
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <MagicCard
                                    image="https://snworksceo.imgix.net/tms/e40bd6f7-c469-4575-89f8-3872715ca6d6.sized-1000x1000.jpg?w=1000"
                                    icon="bi bi-dribbble" 
                                    heading="Physical and Outdoor Activities"
                                    paragraph="Physical development is encouraged through age-appropriate sports, movement exercises, and outdoor play. These activities are designed to improve motor skills, coordination, and overall well-being, while also instilling healthy habits from an early age."
                                />
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <MagicCard
                                    image="https://images.unsplash.com/photo-1552664730-d307ca884978"
                                    icon="bi bi-heart-fill"
                                    heading="Social and Emotional Development"
                                    paragraph="Our environment supports the social and emotional growth of every child. Through collaborative activities and guided interactions, students learn the values of respect, empathy, teamwork, and responsibility. We work closely with children to help them build confidence, communication skills, and positive relationships."
                                />
                            </div>

                        </div>
                    </div>


                    {/* Footer */}
                    <div className="text-center mt-5" data-aos="fade-up">
                        <p style={{ color: "var(--text-color)", maxWidth: "850px" }} className="mx-auto">
                            At Kualakubs, school life is shaped by meaningful experiences that inspire learning, encourage creativity, and build strong character. We aim to provide a foundation that supports lifelong success and a love for learning.
                        </p>
                    </div>

                </div>
            </section>
        </main>


    );
}
