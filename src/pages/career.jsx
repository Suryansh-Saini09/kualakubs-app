import React, { useState } from "react";
import { Link } from "react-router-dom";
import CareerForm from "../components/forms/careerForms";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader.jsx";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg";

export default function Career() {
    const [openFaq, setOpenFaq] = useState(null);
    const faqData = [
        {
            question: "What kind of professionals is the school looking to hire?",
            answer: "We seek talent that fosters enthusiasm and innovation within staffing and teaching methods and is focused on student learning."
        },
        {
            question: "Are opportunities for professional development available in the school?",
            answer: "Yes, we provide ongoing training and development for our team to keep them up to date with world-class teaching standards."
        },
        {
            question: "Is the indoor staff of schools in the New Gurgaon area supported by the school?",
            answer: "Our campus is strategically situated and easy to access, making it a convenient workplace for professionals."
        },
        {
            question: "What is the time required for review of my application?",
            answer: "All applications are analysed by our HR team and shortlisted candidates are contacted for further interviews and demonstrations."
        },
        {
            question: "Do academic positions have certain skills or qualifications?",
            answer: "Relevant educational qualifications are required, and candidates should have a mindset that reflects our \"Education for Life\" approach."
        }
    ];

    const [loading, setLoading] = useState(false);

    const handleCareerSubmit = async (formData) => {
        setLoading(true);

        try {
            const response = await fetch(
                "https://kkws.gabis.in/API/tp/careers",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Submission failed");
            }

            alert("✅ Application submitted successfully!");
            return true;

        } catch (error) {
            console.error("Career API Error:", error);
            alert(`❌ ${error.message}`);
            return false;

        } finally {
            setLoading(false);
        }
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const openPositions = [
        {
            id: 1,
            department: "Teaching",
            title: "PGT English Teacher",
            experience: "3+ Years",
            type: "Full-Time",
            description: "We are looking for an experienced PGT English Teacher to lead high school literature and language lessons, prepare students for CBSE board exams, and inspire a love for communication."
        },
        {
            id: 2,
            department: "Teaching",
            title: "TGT Mathematics Teacher",
            experience: "2+ Years",
            type: "Full-Time",
            description: "Seeking a passionate Mathematics educator for middle school classes. Strong conceptual understanding of arithmetic, algebra, and geometry is required, along with engaging pedagogy."
        },
        {
            id: 3,
            department: "Teaching",
            title: "Primary School Educator (PRT)",
            experience: "1-3 Years",
            type: "Full-Time",
            description: "Looking for an energetic primary school teacher to nurture early learners. Creative teaching methodology, story-telling, and interactive activity-based learning are highly valued."
        },
        {
            id: 4,
            department: "Non-Teaching",
            title: "Front Office Executive",
            experience: "2+ Years",
            type: "Full-Time",
            description: "Seeking a warm, professional individual to manage front desk operations, handle parent inquiries, coordinate visitor meetings, and assist with general administrative duties."
        }
    ];

    return (
        <>
            <SEO
                title="Kualakubs World School Careers | Join Our Team"
                description="Kualakubs World School is one of the good schools in Gurgaon, offering quality education, modern facilities, and holistic student development. "
            />

            <PageHeader
                title="Career"
                backgroundImage={newBuildingImg}
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "Career", active: true }
                ]}
            />


            {/* Why Work at Kualakubs Section in warm beige */}
            <section className="why-work-section">
                <div className="why-work-section-circle"></div>
                <div className="container position-relative z-index-10">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5">
                            <h2 className="why-work-title">
                                Why Work at <br />
                                <span>Kualakubs World School?</span>
                            </h2>
                            <div className="why-work-divider mb-4"></div>
                        </div>
                        <div className="col-lg-7 border-start-desktop">
                            <p className="why-work-lead-text">
                                Teaching at Kualakubs World School is more than a job — it is a vocation.
                            </p>
                            <p className="why-work-body-text">
                                We are a school that genuinely values its people: the educators, the support staff,
                                and every individual who contributes to the daily experience of our students.
                                At KWS, you will find a professional environment that respects your expertise,
                                invests in your growth, and gives you the freedom to teach with creativity,
                                purpose, and joy — making it one of the top CBSE schools near me for passionate educators.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Hero Section under page header */}
            <section className="career-hero-section">
                <div className="career-hero-circle-1"></div>
                <div className="career-hero-circle-2"></div>
                <div className="container position-relative z-index-10">
                    <div className="career-badge">NOW HIRING · GURGAON / GURUGRAM</div>
                    <h1 className="career-hero-title">
                        Teaching Jobs in Gurgaon <br />
                        for Educators Who Want to <span>Make a Difference</span>
                    </h1>
                    <p className="career-hero-lead">
                        Join Kuala Kubs World School — one of Gurgaon's premier CBSE institutions — where passionate educators are celebrated, developed, and empowered to shape the next generation.
                    </p>
                    <div className="career-hero-actions">
                        <button
                            className="career-btn-gold border-0"
                            onClick={() => scrollToSection("positions")}
                        >
                            View Open Positions ↓
                        </button>
                        <button
                            className="career-btn-outline"
                            onClick={() => scrollToSection("apply-form")}
                        >
                            Send Your Resume
                        </button>
                    </div>
                </div>
            </section>

            {/* Statistics Bar overlaying below hero */}
            <section className="career-stats-section">
                <div className="career-stats-grid">
                    <div className="career-stat-item">
                        <span className="career-stat-number">500+</span>
                        <span className="career-stat-label">Happy Students</span>
                    </div>
                    <div className="career-stat-item">
                        <span className="career-stat-number">95%</span>
                        <span className="career-stat-label">Success Rate</span>
                    </div>
                    <div className="career-stat-item">
                        <span className="career-stat-number">CBSE</span>
                        <span className="career-stat-label">Affiliated</span>
                    </div>
                    <div className="career-stat-item">
                        <span className="career-stat-number">15+</span>
                        <span className="career-stat-label">Years of Excellence</span>
                    </div>
                </div>
            </section>


            {/* WHAT WE OFFER / Employee Benefits Section */}
            <section className="benefits-section">
                <div className="container">
                    <div className="text-start mb-5">
                        <span className="benefits-badge">WHAT WE OFFER</span>
                        <h2 className="benefits-title">Employee Benefits at Kuala Kubs World School</h2>
                        <p className="benefits-lead">
                            We invest in our people. Here's what you can expect when you join our CBSE academic team in Gurugram.
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="benefit-card">
                                <div className="benefit-icon-container">
                                    <span style={{ color: "#e67e22", fontWeight: "700" }}>₹</span>
                                </div>
                                <h3 className="benefit-card-title">Competitive Salary</h3>
                                <p className="benefit-card-text">
                                    Industry-aligned compensation with annual increments tied to performance, loyalty, and market benchmarks.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="benefit-card">
                                <div className="benefit-icon-container">
                                    <i className="bi bi-graph-up text-danger"></i>
                                </div>
                                <h3 className="benefit-card-title">Professional Development</h3>
                                <p className="benefit-card-text">
                                    Sponsored certifications, CBSE training workshops, and access to national educator conferences.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="benefit-card">
                                <div className="benefit-icon-container">
                                    <i className="bi bi-heart-pulse-fill text-danger"></i>
                                </div>
                                <h3 className="benefit-card-title">Health & Wellness</h3>
                                <p className="benefit-card-text">
                                    Group health insurance coverage for teaching staff and their immediate family members.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="benefit-card">
                                <div className="benefit-icon-container">
                                    <i className="bi bi-building text-primary"></i>
                                </div>
                                <h3 className="benefit-card-title">Modern Infrastructure</h3>
                                <p className="benefit-card-text">
                                    Teach in smart classrooms with digital boards, high-speed internet, and well-equipped subject labs.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="benefit-card">
                                <div className="benefit-icon-container">
                                    <i className="bi bi-calendar3 text-danger"></i>
                                </div>
                                <h3 className="benefit-card-title">Leave Benefits</h3>
                                <p className="benefit-card-text">
                                    Earned leave, sick leave, casual leave, and school holiday calendars aligned with CBSE academic sessions.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="benefit-card">
                                <div className="benefit-icon-container">
                                    <i className="bi bi-emoji-smile-fill text-warning"></i>
                                </div>
                                <h3 className="benefit-card-title">Fee Concession</h3>
                                <p className="benefit-card-text">
                                    Children of permanent staff members receive tuition fee concessions as per school policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions Grid */}
            {/* <section id="positions" className="positions-section">
                <div className="container">
                    <div className="positions-header">
                        <h2 className="positions-header-title">Current Openings</h2>
                        <p className="positions-header-subtitle">
                            Explore our current career opportunities and find a role that matches your skills, passion, and ambition.
                        </p>
                    </div>
                    <div className="positions-grid">
                        {openPositions.map((pos) => (
                            <div className="position-card" key={pos.id}>
                                <span className="position-department">{pos.department}</span>
                                <h3 className="position-title">{pos.title}</h3>
                                <div className="position-meta">
                                    <div className="position-meta-item">
                                        <i className="bi bi-briefcase"></i>
                                        <span>{pos.experience}</span>
                                    </div>
                                    <div className="position-meta-item">
                                        <i className="bi bi-clock"></i>
                                        <span>{pos.type}</span>
                                    </div>
                                </div>
                                <p className="position-description">{pos.description}</p>
                                <button
                                    className="position-btn"
                                    onClick={() => {
                                        scrollToSection("apply-form");
                                        // Auto-fill the "Post Applied For" field if possible
                                        const field = document.querySelector('input[name="post_applied"]');
                                        if (field) {
                                            field.value = pos.title;
                                        }
                                        const deptField = document.querySelector('select[name="department"]');
                                        if (deptField) {
                                            deptField.value = pos.department;
                                        }
                                    }}
                                >
                                    Apply Now <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Simple 4-Step Application Process Section */}
            <section className="app-process-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="app-process-badge">HOW TO APPLY</span>
                        <h2 className="app-process-title">Simple 4-Step Application Process</h2>
                        <p className="app-process-lead">
                            We've kept our hiring process straightforward and respectful of your time. From application to offer, expect transparency at every step.
                        </p>
                    </div>

                    <div className="app-process-steps-container">
                        <div className="row g-4 justify-content-center align-items-start position-relative">
                            
                            {/* Step 1 */}
                            <div className="col-lg-3 col-md-6 text-center app-process-step">
                                <div className="app-step-circle-wrapper">
                                    <div className="app-step-circle">01</div>
                                    <div className="app-step-arrow">→</div>
                                </div>
                                <h3 className="app-step-title">Apply Online</h3>
                                <p className="app-step-text">
                                    Submit your resume and cover letter via the form below or email HR directly.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="col-lg-3 col-md-6 text-center app-process-step">
                                <div className="app-step-circle-wrapper">
                                    <div className="app-step-circle">02</div>
                                    <div className="app-step-arrow">→</div>
                                </div>
                                <h3 className="app-step-title">Profile Review</h3>
                                <p className="app-step-text">
                                    Our HR team reviews all applications within 5–7 working days and contacts shortlisted candidates.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="col-lg-3 col-md-6 text-center app-process-step">
                                <div className="app-step-circle-wrapper">
                                    <div className="app-step-circle">03</div>
                                    <div className="app-step-arrow">→</div>
                                </div>
                                <h3 className="app-step-title">Interview & Demo</h3>
                                <p className="app-step-text">
                                    Shortlisted candidates attend a telephonic interview followed by an in-person demo class or skill assessment.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="col-lg-3 col-md-6 text-center app-process-step">
                                <div className="app-step-circle-wrapper">
                                    <div className="app-step-circle">04</div>
                                </div>
                                <h3 className="app-step-title">Offer & Onboarding</h3>
                                <p className="app-step-text">
                                    Selected candidates receive a formal offer letter. Our team guides you through a smooth, structured onboarding.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <button 
                            className="career-btn-gold border-0"
                            onClick={() => scrollToSection("apply-form")}
                        >
                            Apply Now — It Takes 5 Minutes
                        </button>
                    </div>
                </div>
            </section>

            {/* Career Application Form Section */}
            <section id="apply-form" className="career-apply-section">
                <div className="container">
                    <div className="career-apply-header">
                        <h2 className="career-apply-title">Send Your Resume</h2>
                        <p className="career-apply-subtitle">
                            Submit your details using the form below, and we'll contact you for upcoming openings that match your profile.
                        </p>
                    </div>
                    <CareerForm
                        onSubmit={handleCareerSubmit}
                        loading={loading}
                    />
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
