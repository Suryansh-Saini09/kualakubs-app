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
        description: "All classroom activity at Kualakubs is geared toward the child, rather than the syllabus. Hence, we are one of the most preferred amongst the top schools in Gurugram.",
        icon: "bi-tree"
    },
    {
        title: "Experiential Education",
        description: "Concepts are presented concretely, and not solely by reading. This hands-on approach makes us different from many of the top CBSE schools in Gurgaon.",
        icon: "bi-puzzle"
    },
    {
        title: "Smart Infrastructure",
        description: "Smart classrooms and a well-planned environment are available in our modern campus. Our setting promotes creativity and enquiry for parents who are seeking top CBSE schools near me.",
        icon: "bi-bank"
    },
    {
        title: "Trained & Caring Faculty",
        description: "Our teachers are mentors who give care to the growth of each child, one of the reasons why we are considered one of the top schools in Gurugram by parents.",
        icon: "bi-mortarboard"
    },
    {
        title: "Confidence & Communication",
        description: "Children's communication skills and confidence are extremely developed as they take part in the stage exposure and activities.",
        icon: "bi-mic"
    },
    {
        title: "Phonics-Based Early Learning",
        description: "Our systematic phonics programme develops early language skills, which is a priority for parents when looking for the best CBSE school nearby.",
        icon: "bi-alphabet"
    },
    {
        title: "Individual Attention",
        description: "Personalized guidance and support are provided to all children through small class sizes.",
        icon: "bi-bullseye"
    },
    {
        title: "Holistic Development",
        description: "We develop the whole child with respect to both academics and emotional, physical and creative development.",
        icon: "bi-globe2"
    },
    {
        title: "Value-Based Education",
        description: "Kindness, Integrity, empathy and responsibility are the qualities that are integrated into the daily learning; good students are good human beings. We are not just concerned about being one of the top schools in Gurugram; we want to set the standards for what it means to be a meaningful school.",
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
                title="Top Schools in Gurugram for Overall Student Growth"
                description="A balanced approach to education that blends academics, creativity, and life skills to nurture confident, future-ready learners at Top Schools in Gurugram."
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
                            <h2 className="intro-philosophy-title">A World Designed for Your Child.</h2>
                            <p className="intro-philosophy-lead">
                                Traditional schooling provides children with the information they should be thinking. We teach them how. Kualakubs World School is changing the definition of education in Gurugram — where learning is joyful and academic success is reached, where every child is known, valued and inspired. We are considered one of the top schools in Gurgaon, and our sole aim is to make thinkers, creators and confident persons.

                            </p>
                        </div>
                    </div>

                    <div className="row g-5 align-items-stretch">
                        {/* Narrative Column */}
                        <div className="col-lg-7 d-flex flex-column justify-content-between" data-aos="fade-right" data-aos-delay="100">
                            <div>
                                <p className="philosophy-text-p">
                                    With so many schools in Gurugram, it is simple to think that a building that has smart boards is a true modern school. It's not about what we have, it's about how we think about your child's growth — Kualakubs World School is different. When parents look for top CBSE schools near me, we offer an approach that is beyond infrastructure and meaningful learning.

                                </p>
                                <p className="philosophy-text-p">
                                    Strategically, we have a robust CBSE syllabus and activity-based and experiential learning, which helps students comprehend and remember the concepts not for exams but for their lives. This philosophy put, we are amongst the Top CBSE Schools in Gurgaon. In this, a child is not only memorising the water cycle, but they are also making a rain model. Not only do they read about fractions, but they bake!

                                </p>
                                <p className="philosophy-text-p">
                                    Our campus is created to be a second residence, secure, invigorating and promising. This is what families look for in the top schools in Gurgaon.
                                </p>
                            </div>
                            <div className="philosophy-quote-box">
                                <p className="philosophy-quote-text">
                                    Preparing children for a world that is not yet there is preparing them for a world they will make.
                                </p>
                            </div>
                        </div>

                        {/* At a Glance Grid Column */}
                        <div className="col-lg-5" data-aos="fade-left" data-aos-delay="200">
                            <div className="at-a-glance-container">
                                <span className="at-a-glance-badge">AT A GLANCE</span>
                                <h3 className="at-a-glance-title">A CBSE-Aligned Experiential Campus</h3>
                                <p className="at-a-glance-subtitle">
                                    An experiential campus that is aligned to the CBSE curriculum.
                                    A curriculum-driven campus of the CBSE curriculum based on experiential learning in Gurgaon, with Curiosity, Confidence and Character taking shape.
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
                            It's not only the academics that parents in Gurgaon and Gurugram opt for at Kualakubs, it's also the whole child experience. We are one of the top CBSE schools in Gurgaon that are focused on providing a balanced and future-oriented approach to learning.
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
