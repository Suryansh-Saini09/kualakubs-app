import PageHeader from "../components/PageHeader";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../components/SEO";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg";
import "../styles/coeducation.css";

export default function CoEducation() {
    const [openFaq, setOpenFaq] = useState(null);

    const faqData = [
        {
            question: "What are the social value(s) for a child of a co-educational K-12 school?",
            answer: "Confidence and respect among students are nurtured from an early age when they are able to study in a co-educational KWS Gurgaon campus."
        },
        {
            question: "Why is it so significant that students should be taught in a mixed gender setting?",
            answer: "It reflects real-life society and workplaces, educating students to communicate and lead."
        },
        {
            question: "How is the school working for all pupils to ensure that they have equal access?",
            answer: "There are equal opportunities for boys and girls for all academic, sporting, and leadership opportunities."
        },
        {
            question: "How is this school's approach to safety in a co-educational setting?",
            answer: "We are a trusted school in Gurgaon and strictly follow safety guidelines, with all the students having a respectful environment in school."
        },
        {
            question: "Is this one of the top schools in Gurgaon for the development of true and social skills?",
            answer: "We are a co-educational school, reflecting the real world at KWS School, Gurgaon, and preparing our students to work with others in any profession."
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

    const advantages = [
        {
            title: "Mutual Respect from the Start",
            text: "When children grow up learning alongside peers of all genders, respect becomes a natural part of everyday life. It is shaped through shared experiences—classroom discussions, group activities, and collective achievements—rather than taught in isolation. Over time, students develop a genuine understanding of equality and collaboration, a quality parents often look for when comparing affordable schools in Gurgaon for holistic development.",
            icon: "bi-people-fill"
        },
        {
            title: "Better Communication Skills",
            text: "A learning environment like ours, similar to what you would expect from the affordable schools in Gurgaon, encourages students to express themselves clearly and confidently. Whether presenting ideas, participating in debates, or working in teams, they build communication skills that extend far beyond academics.",
            icon: "bi-chat-left-text-fill"
        },
        {
            title: "Healthy, Positive Competition",
            text: "Competition here is designed to inspire growth, not pressure. Students are encouraged to strive for their personal best while respecting and celebrating others. This balanced approach is one of the reasons families exploring affordable schools in Gurgaon consider KWS a strong choice for value-based education.",
            icon: "bi-trophy-fill"
        },
        {
            title: "Real-World Readiness",
            text: "Because the world outside school is naturally diverse, students studying in environments like the affordable schools in Gurgaon category develop confidence and emotional intelligence needed to adapt easily. At KWS, this readiness comes from everyday collaboration, shared learning, and meaningful interactions.",
            icon: "bi-shield-fill-check"
        }
    ];

    const frameworkPoints = [
        "A clearly defined code of conduct that promotes dignity and mutual respect",
        "Trained and attentive staff who guide and model positive interactions",
        "Secure and monitored campus spaces, including transport and activity areas",
        "Age-appropriate social and emotional learning woven into daily experiences",
        "A confidential and supportive system for addressing student concerns"
    ];

    return (
        <>
            <SEO
                title="One of the Best Schools in Gurgaon for Co-Education."
                description="A balanced co-educational environment where students grow with confidence, respect, and collaboration, building strong skills at Best Schools in Gurgaon."
            />
            <PageHeader
                title="Co-Education"
                backgroundImage={newBuildingImg}
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "Co-Education", active: true }
                ]}
            />

            {/* Co-Education Section */}
            <section className="coedu-section">
                <div className="container">
                    <div className="coedu-content-wrapper mb-5" data-aos="fade-up">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 text-center">
                                <h3 className="coedu-matters-title text-center">Why Coeducation Matters</h3>
                                <p className="coedu-matters-para mb-0">
                                    At <strong>Kualakubs World School</strong>, boys and girls learn together—and that is not simply a logistical choice but a <span className="highlight-gold">deeply considered educational one</span>. As one of the affordable schools in Gurgaon, we believe that a thoughtfully designed coeducational environment nurtures <span className="highlight-gold">confidence, empathy, and mutual understanding</span> from an early age. It reflects the kind of world students will grow into, preparing them to <strong>build meaningful relationships</strong> and <strong>succeed in diverse environments</strong>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The KWS Coeducation Advantage Title */}
                    <div className="text-center mt-5 pt-4 mb-4" data-aos="fade-up">
                        <h3 className="fw-bold fs-3" style={{ color: "var(--accent-bg-color)", fontFamily: "'Montserrat', sans-serif" }}>The KWS Coeducation Advantage</h3>
                    </div>

                    {/* Cards Grid */}
                    <div className="row g-4 justify-content-center">
                        {advantages.map((item, index) => (
                            <div className="col-lg-6 col-md-12" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="coedu-advantage-card h-100">
                                    <div className="d-flex flex-column flex-sm-row gap-4 align-items-start">
                                        <div className="coedu-advantage-icon-container">
                                            <i className={`bi ${item.icon}`}></i>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h4 className="coedu-advantage-card-title">{item.title}</h4>
                                            <p className="coedu-advantage-card-text">{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section className="coedu-framework-section">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5" data-aos="fade-right">
                            <h2 className="framework-title">A Safe, Structured, and Inclusive Environment</h2>
                            <p className="framework-para">
                                As one of the affordable schools in Gurgaon, Kualakubs World School ensures that coeducation is supported by a strong, well-defined framework that prioritizes safety, respect, and inclusivity at every level.
                            </p>
                        </div>
                        <div className="col-lg-7" data-aos="fade-left" data-aos-delay="100">
                            <div className="d-flex flex-column gap-3">
                                {frameworkPoints.map((point, index) => (
                                    <div className="framework-capsule-item d-flex align-items-center gap-3" key={index}>
                                        <div className="framework-capsule-icon">
                                            <i className="bi bi-shield-fill-check"></i>
                                        </div>
                                        <span className="framework-capsule-text">{point}</span>
                                    </div>
                                ))}
                            </div>
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