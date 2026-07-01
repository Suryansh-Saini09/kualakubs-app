import PageHeader from "../components/PageHeader";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../components/SEO";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg";
import "../styles/partnerships.css";


export default function Partnerships() {

    useEffect(() => {
        AOS.init({ once: true, duration: 800, offset: 80 });
    }, []);

    return (
        <>
            <SEO
                title="
Academic Partnerships at a Leading School in Gurugram 
"
                description="Discover a top school in Gurugram offering quality education, experienced teachers, and a nurturing environment for holistic growth. 
"
            />
            <PageHeader
                title="Our Partnerships"
                backgroundImage={newBuildingImg}
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "Our Partnerships", active: true }
                ]}
            />
            {/* <section className="py-5">
                <div className="container">

         
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Our Partnerships</h2>
                        <p className="text-muted mt-2">
                            At Kualakubs World School, our collaborations with leading educational
                            organisations, industry experts, and community groups help broaden
                            learning opportunities and bring global exposure to our students.
                        </p>
                    </div>

                    <div className="row g-4">

                        <div className="col-md-6">
                            <div className="p-4 border rounded bg-white shadow-sm h-100">
                                <h4 className="fw-semibold mb-3">Academic & Educational Collaborations</h4>
                                <ul className="mb-0">
                                    <li>Expert-led workshops and training</li>
                                    <li>Enrichment programmes in STEM, literacy, and life skills</li>
                                    <li>Access to updated learning resources and digital tools</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="p-4 border rounded bg-white shadow-sm h-100">
                                <h4 className="fw-semibold mb-3">Technology & Innovation Partners</h4>
                                <ul className="mb-0">
                                    <li>Robotics and coding programmes</li>
                                    <li>Digital learning solutions</li>
                                    <li>Smart classroom infrastructure</li>
                                    <li>Future-ready skill development</li>
                                </ul>
                            </div>
                        </div>

                  
                        <div className="col-md-6">
                            <div className="p-4 border rounded bg-white shadow-sm h-100">
                                <h4 className="fw-semibold mb-3">Sports & Wellness Associations</h4>
                                <ul className="mb-0">
                                    <li>Professional sports training</li>
                                    <li>Fitness and yoga sessions</li>
                                    <li>Health and wellness programmes</li>
                                    <li>Inter-school competitions and sporting events</li>
                                </ul>
                            </div>
                        </div>

                
                        <div className="col-md-6">
                            <div className="p-4 border rounded bg-white shadow-sm h-100">
                                <h4 className="fw-semibold mb-3">Arts, Culture & Creative Collaborations</h4>
                                <ul className="mb-0">
                                    <li>Art, music & dance workshops</li>
                                    <li>Theatre and performance training</li>
                                    <li>Cultural events and exhibition opportunities</li>
                                </ul>
                            </div>
                        </div>

            
                        <div className="col-md-6">
                            <div className="p-4 border rounded bg-white shadow-sm h-100">
                                <h4 className="fw-semibold mb-3">Community & Outreach Partners</h4>
                                <ul className="mb-0">
                                    <li>Social awareness campaigns</li>
                                    <li>Environmental initiatives</li>
                                    <li>Community service and outreach programmes</li>
                                </ul>
                            </div>
                        </div>

                 
                        <div className="col-md-6">
                            <div className="p-4 border rounded bg-white shadow-sm h-100">
                                <h4 className="fw-semibold mb-3">Commitment to Quality Through Collaboration</h4>
                                <p className="mb-0">
                                    Every partnership at KWS is carefully selected to support our mission
                                    of providing holistic, future-ready education. These collaborations
                                    strengthen our academic ecosystem and prepare students to thrive in
                                    an interconnected world.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}
            {/* <section className="py-5 bg-light partnership-section">
                <div className="container">

                   
                    <div className="text-center mb-5">
                        <h2 className="display-6 fw-bold" style={{color: 'var(--accent-bg-color)'}}>Our Partnerships</h2>
                        
                        <p className="text-muted mx-auto col-lg-8">
                            At Kualakubs World School, our collaborations with leading educational
                            organisations, industry experts, and community groups help broaden
                            learning opportunities and bring global exposure to our students.
                        </p>
                    </div>

                    <div className="row g-4">

                      
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <div className="partner-card" style={{ "--accent": "#06b6d4" }}>
                                <i className="bi bi-mortarboard-fill bg-icon"></i>

                                <div className="icon-circle">
                                    <i className="bi bi-mortarboard"></i>
                                </div>

                                <h5>Academic & Educational Collaborations</h5>

                                <ul>
                                    <li>Expert-led workshops and training</li>
                                    <li>STEM, literacy and life skills</li>
                                    <li>Updated learning resources & tools</li>
                                </ul>
                            </div>
                        </div>

                      
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="partner-card" style={{ "--accent": "#f59e0b" }}>
                                <i className="bi bi-cpu-fill bg-icon"></i>

                                <div className="icon-circle">
                                    <i className="bi bi-cpu"></i>
                                </div>

                                <h5>Technology & Innovation Partners</h5>

                                <ul>
                                    <li>Robotics and coding programmes</li>
                                    <li>Digital learning solutions</li>
                                    <li>Smart classroom infrastructure</li>
                                    <li>Future-ready skills</li>
                                </ul>
                            </div>
                        </div>

                      
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="partner-card" style={{ "--accent": "#16a34a" }}>
                                <i className="bi bi-heart-pulse-fill bg-icon"></i>

                                <div className="icon-circle">
                                    <i className="bi bi-heart-pulse"></i>
                                </div>

                                <h5>Sports & Wellness Associations</h5>

                                <ul>
                                    <li>Professional sports training</li>
                                    <li>Fitness and yoga sessions</li>
                                    <li>Health & wellness programmes</li>
                                    <li>Inter-school competitions</li>
                                </ul>
                            </div>
                        </div>

                
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <div className="partner-card" style={{ "--accent": "#6366f1" }}>
                                <i className="bi bi-palette-fill bg-icon"></i>

                                <div className="icon-circle">
                                    <i className="bi bi-palette"></i>
                                </div>

                                <h5>Arts, Culture & Creative Collaborations</h5>

                                <ul>
                                    <li>Art, music & dance workshops</li>
                                    <li>Theatre & performance training</li>
                                    <li>Cultural exhibitions</li>
                                </ul>
                            </div>
                        </div>

           
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="partner-card" style={{ "--accent": "#ef4444" }}>
                                <i className="bi bi-people-fill bg-icon"></i>

                                <div className="icon-circle">
                                    <i className="bi bi-people"></i>
                                </div>

                                <h5>Community & Outreach Partners</h5>

                                <ul>
                                    <li>Social awareness campaigns</li>
                                    <li>Environmental initiatives</li>
                                    <li>Community service programmes</li>
                                </ul>
                            </div>
                        </div>

                  
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="partner-card highlight">
                                <i className="bi bi-patch-check-fill bg-icon"></i>

                                <div className="icon-circle">
                                    <i className="bi bi-patch-check"></i>
                                </div>

                                <h5>Commitment to Quality Through Collaboration</h5>

                                <p>
                                    Every partnership at KWS is carefully selected to support holistic,
                                    future-ready education.
                                </p>

                                <p>
                                    These collaborations prepare students to thrive in an interconnected world.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section> */}
            <section className="py-5 bg-light partnership-section pb-0">
                <div className="container">

                    {/* Heading */}
                    <div className="text-center mb-5" data-aos="fade-up">
                        <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--accent-bg-color)', fontFamily: "'Montserrat', sans-serif" }}>
                            Why Partnership Matters
                        </h2>

                        <div className="mx-auto col-lg-9">
                            <p className="fs-5 mb-3" style={{ color: "var(--text-color)", lineHeight: "1.8", textAlign: "justify" }}>
                                The most effective education is given when school and home collaborate. We have a partnership approach at <strong>Kualakubs World School</strong>, a top <strong>School in Gurugram</strong>, and parents are not just observers but partners in learning!
                            </p>
                            <p className="fs-5 mb-0" style={{ color: "var(--text-color)", lineHeight: "1.8", textAlign: "justify" }}>
                                Together, teachers can help students achieve more and together, families can help students achieve more. This is what parents want from a trusted <strong>School in Gurugram</strong> – partnership, clarity and sustainability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Service & Social Responsibility Section */}
            <section className="safety-highlights-section">
                <div className="container">
                    <div className="row align-items-center g-5 mb-5">
                        <div className="col-lg-12 text-center" data-aos="fade-up">
                            <span className="safety-subtitle mb-2">Social Impact</span>
                            <h2 className="safety-title text-white">Community Service & Social Responsibility</h2>
                            <div className="mx-auto col-lg-9 mt-4 text-white-50">
                                <p className="fs-5 mb-3" style={{ lineHeight: "1.8", textAlign: "justify" }}>
                                    The Subject Leader will arrange for a series of parent-teacher meetings. The Subject Leader will plan a series of Parent-Teacher Meetings.
                                </p>
                                <p className="fs-5 mb-3" style={{ lineHeight: "1.8", textAlign: "justify" }}>
                                    Learning goes beyond the schoolroom at KWS into real life and community engagement. Pupils engage in environmental campaigns, awareness raising and social action projects which foster empathy and responsibility.
                                </p>
                                <p className="fs-5 mb-0" style={{ lineHeight: "1.8", textAlign: "justify" }}>
                                    We are a progressive <strong>School in Gurugram</strong> and opportune parents to join us too, so that community service becomes a family value, not a school value only. This is what sets a modern <strong>School in Gurugram</strong> apart from traditional learning spaces.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-delay="100">
                            <div className="safety-card h-100">
                                <div className="d-flex flex-column flex-sm-row gap-4 align-items-start">
                                    <div className="safety-icon-container" style={{ backgroundColor: "rgba(226, 220, 204, 0.15)", color: "#e2dccc", minWidth: "54px", height: "54px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                                        <i className="bi bi-globe-americas"></i>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h4 className="text-white fw-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.25rem" }}>Student Initiatives</h4>
                                        <p className="text-white-50 mb-0" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                                            Students lead the tree plantation drives, waste management audit and literacy drives; developing leadership, responsibility, and civic awareness. The efforts are indicative of how a responsible <strong>School in Gurugram</strong> brings out the holistic personality of the student.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-delay="200">
                            <div className="safety-card h-100">
                                <div className="d-flex flex-column flex-sm-row gap-4 align-items-start">
                                    <div className="safety-icon-container" style={{ backgroundColor: "rgba(226, 220, 204, 0.15)", color: "#e2dccc", minWidth: "54px", height: "54px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                                        <i className="bi bi-people-fill"></i>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h4 className="text-white fw-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.25rem" }}>Family Engagement</h4>
                                        <p className="text-white-50 mb-0" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                                            Schools that are driven by the community create opportunities for parents and students to work together in service activities to reinforce values at school and home. A community-driven school in Gurugram.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="partnership-section-white">
                <div className="container">

                    {/* Sub-heading for card grid */}
                    <div className="text-center mb-5" data-aos="fade-up">
                        <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--accent-bg-color)', fontFamily: "'Montserrat', sans-serif" }}>
                            Institutional Collaborations
                        </h2>

                        <div className="mx-auto col-lg-9 mb-5 pb-4">
                            <p className="fs-5 mb-3" style={{ color: "var(--text-color)", lineHeight: "1.8", textAlign: "justify" }}>
                                KWS is actively engaged in collaboration with educators, professional groups and community organizations to improve students' learning. Students develop extra-curricular learning opportunities in workshops, guest lecturers and co-operative programmes.
                            </p>
                            <p className="fs-5 mb-3" style={{ color: "var(--text-color)", lineHeight: "1.8", textAlign: "justify" }}>
                                This ecosystem represents a vision of a future-ready <strong>School in Gurugram</strong>, where learning in the real world is as impactful as learning in a classroom.
                            </p>
                            <p className="fs-6 mb-0 text-muted" style={{ fontStyle: "italic" }}>
                                We value your participation and feedback. Your input and comments are appreciated.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">

                        {/* CARD */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" >
                            <div className="partner-card-light">
                                <i className="bi bi-mortarboard-fill bg-icon"></i>

                                <div className="icon-float">
                                    <div className="icon-circle">
                                        <i className="bi bi-mortarboard"></i>
                                    </div>
                                </div>

                                <h5>Academic & Educational Collaborations</h5>
                                <ul>
                                    <li>Expert-led workshops/training.</li>
                                    <li>In addition to STEM programmes, there are also literacy and life skills programmes.</li>
                                    <li>New learning materials and learning resources</li>
                                </ul>
                            </div>
                        </div>

                        {/* CARD */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="partner-card-light">
                                <i className="bi bi-cpu-fill bg-icon"></i>

                                <div className="icon-float">
                                    <div className="icon-circle">
                                        <i className="bi bi-cpu"></i>
                                    </div>
                                </div>

                                <h5>Technology & Innovation Partners</h5>
                                <ul>
                                    <li>The robotics and coding programmes have been incorporated into the curriculum.</li>
                                    <li>Digital learning solutions</li>
                                    <li>Smart classroom infrastructure</li>
                                    <li>Future-ready skills development</li>
                                </ul>
                            </div>
                        </div>

                        {/* CARD */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="partner-card-light">
                                <i className="bi bi-heart-pulse-fill bg-icon"></i>

                                <div className="icon-float">
                                    <div className="icon-circle">
                                        <i className="bi bi-heart-pulse"></i>
                                    </div>
                                </div>

                                <h5>Sports & Wellness Associations</h5>
                                <ul>
                                    <li>Professional sports coaching</li>
                                    <li>Fitness and yoga classes</li>
                                    <li>Health and wellness programmes</li>
                                    <li>Inter-school competitions</li>
                                </ul>
                            </div>
                        </div>

                        {/* ARTS */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <div className="partner-card-light">
                                <i className="bi bi-palette-fill bg-icon"></i>

                                <div className="icon-float">
                                    <div className="icon-circle">
                                        <i className="bi bi-palette"></i>
                                    </div>
                                </div>

                                <h5>Arts, Culture & Creative Collaborations</h5>
                                <ul>
                                    <li>Art, Music and Dance Workshops</li>
                                    <li>Theatre and performance training</li>
                                    <li>Cultural exhibitions</li>
                                </ul>
                            </div>
                        </div>

                        {/* COMMUNITY */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="partner-card-light">
                                <i className="bi bi-people-fill bg-icon"></i>

                                <div className="icon-float">
                                    <div className="icon-circle">
                                        <i className="bi bi-people"></i>
                                    </div>
                                </div>

                                <h5>Community & Outreach Partners</h5>
                                <ul>
                                    <li>Social awareness campaigns</li>
                                    <li>Environmental initiatives</li>
                                    <li>Community service programmes</li>
                                </ul>
                            </div>
                        </div>

                        {/* HIGHLIGHT */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="partner-card-light highlight">
                                <i className="bi bi-patch-check-fill bg-icon"></i>

                                <div className="icon-float">
                                    <div className="icon-circle">
                                        <i className="bi bi-patch-check"></i>
                                    </div>
                                </div>

                                <h5>Commitment to Quality Through Collaboration</h5>
                                <p>
                                    All partnerships are carefully selected to deliver whole-school futures-ready learning. A reputable <strong>School in Gurugram</strong>, KWS, ensures the students are equipped to excel in an interdependent world with confidence and competence.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}