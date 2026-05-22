import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/whyChoose.css";
import SEO from "../components/SEO.jsx";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg";

const trustReasons = [
    {
        title: "Child-Centric Learning",
        description: "Every classroom experience at Kualakubs is designed around the child — not the syllabus. We begin with the child's curiosity, pace, and strengths. When a child feels seen, learning becomes unstoppable.",
        icon: "bi-tree"
    },
    {
        title: "Experiential Education",
        description: "Concepts are introduced through doing — not just reading. From science experiments to project-based tasks, our experiential learning model ensures that what children learn in class stays with them long after the school bell rings.",
        icon: "bi-puzzle"
    },
    {
        title: "Smart Infrastructure",
        description: "Our modern campus features smart classrooms, dedicated activity spaces, and thoughtfully designed learning environments. Among the top CBSE schools in Gurgaon, our infrastructure is built to inspire — not just facilitate.",
        icon: "bi-bank"
    },
    {
        title: "Trained & Caring Faculty",
        description: "Our teachers are more than subject experts — they are mentors, observers, and encouragers. Each educator is trained in child psychology, modern pedagogy, and the art of building confidence one conversation at a time.",
        icon: "bi-mortarboard"
    },
    {
        title: "Confidence & Communication",
        description: "Through stage exposure, public speaking, presentations, and group activities, children at Kualakubs develop a voice — and the courage to use it. We shape communicators, not just students.",
        icon: "bi-mic"
    },
    {
        title: "Phonics-Based Early Learning",
        description: "Language foundations are built with structured phonics programmes that make reading and writing a joyful experience. Early literacy confidence shapes everything that follows — and we get this right from day one.",
        icon: "bi-alphabet"
    },
    {
        title: "Individual Attention",
        description: "No child is average. At Kualakubs, we keep class sizes intentional so every student receives the guidance they need. Teachers know each child's learning style, strengths, and areas of growth.",
        icon: "bi-bullseye"
    },
    {
        title: "Holistic Development",
        description: "Academic excellence is one dimension. We also nurture emotional intelligence, physical wellness, artistic expression, and social skills — creating children who are well-rounded and genuinely ready for the world.",
        icon: "bi-globe2"
    },
    {
        title: "Value-Based Education",
        description: "Kindness, integrity, empathy, and responsibility are not optional extras at Kualakubs — they are woven into daily life. We believe good values are the true foundation of every great future.",
        icon: "bi-heart"
    }
];

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
            <SEO
                title="Why Choose Us for Holistic Education"
                description="A balanced approach to education that blends academics, creativity, and life skills to nurture confident, future-ready learners."
            />
            {/* TOP HEADER SECTION */}
            <PageHeader
                title="Why Choose Kualakubs?"
                backgroundImage={newBuildingImg}
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "Why Kualakubs?", active: true },
                ]}
            />

            {/* PHILOSOPHY & AT A GLANCE INTRO */}
            <section className="intro-philosophy-section">
                <div className="container">
                    <div className="row justify-content-center" data-aos="fade-up">
                        <div className="col-12">
                            <span className="intro-philosophy-tag">Not Just a School.</span>
                            <h2 className="intro-philosophy-title">A World Built for Your Child.</h2>
                            <p className="intro-philosophy-lead">
                                Traditional schooling tells children what to think. We teach them how. Kualakubs World School is redefining education in Gurugram — where joyful learning meets academic excellence, and every child is known, valued, and inspired.
                            </p>
                        </div>
                    </div>

                    <div className="row g-5 align-items-stretch">
                        {/* Narrative Column */}
                        <div className="col-lg-7 d-flex flex-column justify-content-between" data-aos="fade-right" data-aos-delay="100">
                            <div>
                                <p className="philosophy-text-p">
                                    In Gurugram's crowded school landscape, it is easy to mistake a building with smart boards for a truly modern school. Kualakubs World School is different — not because of what we have, but because of how we think about your child's growth.
                                </p>
                                <p className="philosophy-text-p">
                                    We combine a rigorous CBSE curriculum with activity-based, experiential learning that makes concepts click — not just for exams, but for life. Here, a child doesn't just memorize the water cycle — they create a rain model. They don't just read about fractions — they bake.
                                </p>
                                <p className="philosophy-text-p">
                                    Our campus is designed to feel like a second home — safe, stimulating, and full of possibility. This is what the best schools in Gurgaon should feel like.
                                </p>
                            </div>
                            <div className="philosophy-quote-box">
                                <p className="philosophy-quote-text">
                                    “We don't prepare children for a world that already exists — we prepare them for the one they will create.”
                                </p>
                            </div>
                        </div>

                        {/* At a Glance Grid Column */}
                        <div className="col-lg-5" data-aos="fade-left" data-aos-delay="200">
                            <div className="at-a-glance-container">
                                <span className="at-a-glance-badge">AT A GLANCE</span>
                                <h3 className="at-a-glance-title">A CBSE-Aligned Experiential Campus</h3>
                                <p className="at-a-glance-subtitle">
                                    A CBSE-aligned, experiential learning campus in Gurgaon where curiosity, confidence, and character grow together.
                                </p>

                                <div className="stat-cards-grid">
                                    <div className="stat-card">
                                        <span className="stat-value">CBSE</span>
                                        <span className="stat-label">Aligned Curriculum</span>
                                    </div>
                                    <div className="stat-card">
                                        <span className="stat-value">360°</span>
                                        <span className="stat-label">Holistic Development</span>
                                    </div>
                                    <div className="stat-card">
                                        <span className="stat-value">100%</span>
                                        <span className="stat-label">Safe Campus</span>
                                    </div>
                                    <div className="stat-card">
                                        <span className="stat-value">1:1</span>
                                        <span className="stat-label">Individual Attention</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* REASONS FAMILIES TRUST SECTION */}
            <section className="reasons-section">
                <div className="container">
                    <div className="reasons-header-container" data-aos="fade-up">
                        <h2 className="reasons-heading-main">Reasons Families Trust</h2>
                        <h3 className="reasons-heading-sub">Kualakubs World School</h3>
                        <p className="reasons-intro">
                            Parents across Gurgaon and Gurugram choose Kualakubs not just for its academics — but for the whole child experience. Here's what makes us stand apart from other CBSE schools in Gurugram.
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {trustReasons.map((item, index) => (
                            <div
                                className="col-lg-4 col-md-6"
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 80}
                            >
                                <div className="reasons-card">
                                    <div className="reasons-icon-container">
                                        <i className={`bi ${item.icon}`} />
                                    </div>
                                    <h4 className="reasons-card-title">{item.title}</h4>
                                    <p className="reasons-card-text">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LIFE SKILLS SECTION */}
            {/* <section className="py-5" style={{ backgroundColor: "#f8fbff" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">

                            {/* Heading 
                            <h2 className="fw-bold mb-3 text-primary">
                                Essential Life Skills We Teach
                            </h2>

                            {/* Intro 
                            <p className="text-muted mb-4">
                                Kualakubs integrates WHO-recommended life skills into daily learning to build
                                confident, capable, and responsible individuals.
                            </p>

                            {/* Divider 
                            <div className="d-flex justify-content-center mb-4">
                                <span
                                    style={{
                                        width: "60px",
                                        height: "4px",
                                        backgroundColor: "#4f7cff",
                                        borderRadius: "10px"
                                    }}
                                />
                            </div>

                            {/* Skills Grid 
                            <div className="row g-4">

                                {[
                                    { title: "Critical & Creative Thinking", icon: "bi-lightbulb" },
                                    { title: "Decision Making", icon: "bi-check2-circle" },
                                    { title: "Problem-solving", icon: "bi-wrench-adjustable" },
                                    { title: "Leadership & Responsibility", icon: "bi-people" },
                                    { title: "Effective Communication", icon: "bi-chat-dots" },
                                    { title: "Empathy & Emotional EQ", icon: "bi-heart" },
                                    { title: "Digital Literacy", icon: "bi-laptop" },
                                    { title: "Time Management", icon: "bi-clock" },
                                    { title: "Collaboration & Teamwork", icon: "bi-diagram-3" },
                                    { title: "Stress & Emotion Management", icon: "bi-emoji-smile" },
                                    { title: "Goal Setting & Motivation", icon: "bi-flag" },
                                    { title: "Social Behavior & Etiquette", icon: "bi-hand-thumbs-up" }
                                ].map((item, index) => (
                                    <div key={index} className="col-12 col-sm-6 col-md-4">
                                        <div className="skill-card h-100 d-flex align-items-center gap-3">
                                            <div className="icon-wrap">
                                                <i className={`bi ${item.icon}`} />
                                            </div>
                                            <span className="fw-semibold">{item.title}</span>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            {/* Footer Text 
                            <p className="mt-5 fw-semibold text-primary">
                                We prepare students not just for exams — <span className="highlight">but to excel in life.</span>
                            </p>
                            <p>As one of the top-rated schools in Gurgaon, we focus on holistic development, empowering students with skills, confidence, and values for lifelong success.</p>

                        </div>
                    </div>
                </div>
            </section> */}
        </main>
    );
}
