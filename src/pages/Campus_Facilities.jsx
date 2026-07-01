import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg"

export default function Campus_Facilities() {

    return (
        <>
            <SEO title="Best Preschool Near Me with Modern Campus Facilities"
                description="A thoughtfully designed campus that inspires creativity, innovation, and holistic growth through modern infrastructure and student-friendly spaces." />
            <PageHeader
                title="Campus Facilites"
                backgroundImage={newBuildingImg}
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "Campus Facilites", active: true }
                ]}
            />

            {/* <div className="container my-5">
                <div className="bg-light p-4 rounded shadow-sm">
                    <h2 className="fw-bold mb-3">A Modern, World-Class School Campus</h2>

                    <p className="mb-3">
                        Our school infrastructure is designed to support academic and
                        extracurricular excellence:
                    </p>

                    <ul className="list-unstyled">
                        <li>• Smart Classrooms</li>
                        <li>• Science Labs (Physics, Chemistry, Biology)</li>
                        <li>• Mathematics Lab</li>
                        <li>• Computer & ICT Lab</li>
                        <li>• Library & Reading Lounge</li>
                        <li>• Art & Music Studio</li>
                        <li>• Indoor & Outdoor Sports Arena</li>
                        <li>• Playgrounds, Courts & Multi-sport Facilities</li>
                        <li>• CCTV-enabled secure campus</li>
                        <li>• Transport facility</li>
                        <li>• Infirmary with trained medical staff</li>
                        <li>• Activity & Innovation Zones</li>
                        <li>• Language & Life Skills Lab</li>
                    </ul>

                    <p className="mt-3 fw-semibold">
                        A campus built to inspire learning and ensure safety.
                    </p>
                </div>
            </div> */}

            {/* <div className="container py-5">

                <div className="text-center mb-4">
                    <h3
                        className="fw-semibold"
                        style={{ color: "var(--accent-bg-color)" }}
                    >
                        Kualakubs World School Facilities
                    </h3>
                    <p
                        className="mt-3"
                        style={{
                            color: "var(--text-color)",
                            maxWidth: "700px",
                            margin: "0 auto",
                        }}
                    >
                        Where Potential Meets Purpose — Our campus is designed to inspire learning,
                        innovation, creativity, and holistic growth. Every space empowers students
                        to become future-ready.
                    </p>
                </div>

                <div className="row g-4 mt-4">
                    {[
                        {
                            title: "Interactive Learning Environments",
                            text: "Smart Classrooms with digital integration and ergonomic design for improved engagement and collaboration.",
                        },
                        {
                            title: "STEM & Innovation Hub",
                            text: "Dedicated Science Labs, Math Lab, and advanced STEM Lab (robotics, coding, engineering) for hands-on discovery.",
                        },
                        {
                            title: "Digital Literacy",
                            text: "A fully equipped ICT Lab helping students master tech skills including coding, digital tools, and responsible research.",
                        },
                        {
                            title: "Cultivating Curiosity",
                            text: "A warm Library & Reading Lounge promoting literacy and imagination through our DROP (Daily Reading of Pages) program.",
                        },
                        {
                            title: "Arts & Athletics",
                            text: "Art & Music Studios with Indoor–Outdoor Sports Arenas and multi-sport courts for creativity, fitness, and teamwork.",
                        },
                        {
                            title: "Essential Life Skills",
                            text: "Our Language & Life Skills Lab builds communication, public speaking, and emotional intelligence.",
                        },
                        {
                            title: "Safety & Well-being First",
                            text: "CCTV-enabled secure campus, trained security, full infirmary with certified professionals, and GPS-enabled transport.",
                        },
                    ].map((item, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <div
                                className="facility-card p-4 h-100"
                                style={{
                                    backgroundColor: "var(--bg-color)",
                                    borderRadius: "14px",
                                    border: "1px solid rgba(25,45,69,0.15)",
                                    transition: "all 0.35s ease",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                    cursor: "pointer",
                                }}
                            >
                                <h5
                                    className="fw-bold mb-2"
                                    style={{ color: "var(--accent-bg-color)" }}
                                >
                                    {item.title}
                                </h5>
                                <p style={{ color: "var(--text-color)" }}>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* <main className="position-relative py-5 facilities-section">

                {/* Background grid
                <div className="position-absolute top-0 start-0 w-100 h-100 facilities-bg-grid"></div>

                <div className="container position-relative z-1"> */}

            {/* Heading */}
            {/* <div
                        className="text-center mx-auto mb-5 facilities-float-slow"
                        style={{ maxWidth: "1080px" }}
                    >
                        <span
                            className="d-inline-block py-1 px-4 rounded-pill fw-bold text-primary border border-primary mb-3"
                            style={{ background: "rgba(84,23,207,0.1)" }}
                        >
                            Kualakubs World School Facilities
                        </span>

                        <h1 className="fw-extrabold display-5 mb-4">
                            Where Potential Meets <span className="text-primary">Purpose</span>
                        </h1>

                        <p className="fs-5 text-muted">
                            Our campus is designed to inspire learning, innovation, creativity, and holistic growth. Every space empowers students to become future-ready, making us a trusted choice for parents searching for the best preschool near me.
                        </p>
                    </div> */}

            {/* Cards */}
            {/* <div className="row g-4"> */}

            {/* <div className="col-md-6 col-lg-4 facilities-float-medium">
                            <div className="facilities-card">
                                <div className="facilities-icon facilities-g1">
                                    <span className="material-symbols-outlined fs-3">diversity_3</span>
                                </div>
                                <h4 className="fw-bold">Interactive Learning Environments</h4>
                                <p className="text-muted">
                                    Smart classrooms with digital integration and ergonomic design.
                                </p>
                            </div>
                        </div> */}
            {/* 
                        <div className="col-md-6 col-lg-4 facilities-float-slow">
                            <div className="facilities-card facilities-card-highlight">
                                <div className="facilities-icon facilities-g2">
                                    <span className="material-symbols-outlined fs-3">biotech</span>
                                </div>
                                <h4 className="fw-bold">STEM & Innovation Hub</h4>
                                <p>
                                    Dedicated Science Labs, Math Lab, and advanced STEM facilities.
                                </p>
                            </div>
                        </div> */}

            {/* <div className="col-md-6 col-lg-4 facilities-float-fast">
                            <div className="facilities-card">
                                <div className="facilities-icon facilities-g3 text-dark">
                                    <span className="material-symbols-outlined fs-3">laptop_chromebook</span>
                                </div>
                                <h4 className="fw-bold">Digital Literacy</h4>
                                <p className="text-muted">
                                    ICT Lab supporting coding, research, and digital responsibility.
                                </p>
                            </div>
                        </div> */}

            {/* <div className="col-md-6 col-lg-4 facilities-float-medium">
                            <div className="facilities-card">
                                <div className="facilities-icon facilities-g4">
                                    <span className="material-symbols-outlined fs-3">lightbulb</span>
                                </div>
                                <h4 className="fw-bold">Cultivating Curiosity</h4>
                                <p className="text-muted">
                                    Library & Reading Lounge with DROP reading program.
                                </p>
                            </div>
                        </div> */}
            {/* {/* 
                        <div className="col-md-6 col-lg-4 facilities-float-slow">
                            <div className="facilities-card">
                                <div className="facilities-icon facilities-g5">
                                    <span className="material-symbols-outlined fs-3">palette</span>
                                </div>
                                <h4 className="fw-bold">Arts & Athletics</h4>
                                <p className="text-muted">
                                    Art & Music studios with indoor and outdoor sports arenas.
                                </p>
                            </div> 
                        </div> */}

            {/* <div className="col-md-6 col-lg-4 facilities-float-fast">
                            <div className="facilities-card">
                                <div className="facilities-icon facilities-g6">
                                    <span className="material-symbols-outlined fs-3">volunteer_activism</span>
                                </div>
                                <h4 className="fw-bold">Essential Life Skills</h4>
                                <p className="text-muted">
                                    Language and Life Skills Lab for communication and leadership.
                                </p>
                            </div>
                        </div> */}

            {/* Wide card */}
            {/* <div className="col-12 d-flex justify-content-center mt-4">
                            <div className="facilities-card d-flex flex-column flex-md-row align-items-center col-lg-8 facilities-float-slow">
                                <div className="facilities-icon facilities-g7 me-md-4 mb-3 mb-md-0">
                                    <span className="material-symbols-outlined fs-2">
                                        health_and_safety
                                    </span>
                                </div>
                                <div>
                                    <h4 className="fw-bold">Safety & Well-being First</h4>
                                    <p className="text-muted mb-0">
                                        CCTV-enabled campus, trained security, infirmary, and GPS transport.
                                    </p>
                                </div>
                            </div>
                        </div> */}
            {/* </div>

                </div>
            </main> */}

            {/* Student Safety Section */}
            <section className="safety-section py-5" style={{ backgroundColor: "#faf8f5", borderTop: "1px solid rgba(25, 45, 69, 0.05)", borderBottom: "1px solid rgba(25, 45, 69, 0.05)" }}>
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        {/* Left Column: Content & Checkmarks */}
                        <div className="col-lg-7">
                            <div className="safety-content">
                                <span
                                    className="safety-tag text-uppercase fw-bold"
                                    style={{
                                        color: "var(--accent-bg-color)",
                                        fontSize: "0.9rem",
                                        letterSpacing: "2.5px",
                                        display: "block",
                                        marginBottom: "0.5rem"
                                    }}
                                >
                                    STUDENT SAFETY
                                </span>
                                <div
                                    className="safety-divider mb-4"
                                    style={{
                                        width: "60px",
                                        height: "4px",
                                        backgroundColor: "#b3925c",
                                        borderRadius: "2px"
                                    }}
                                />
                                <h2
                                    className="fw-bold mb-4"
                                    style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                                        color: "var(--accent-bg-color)",
                                        lineHeight: "1.2"
                                    }}
                                >
                                    A Safe & Secure Campus Environment
                                </h2>
                                <p
                                    className="fs-6 mb-4 text-muted"
                                    style={{ lineHeight: "1.75" }}
                                >
                                    Student safety and well-being are paramount at Kualakubs World School. Our campus is one of the best <strong>CBSE schools in Gurugram</strong>, well designed with all the latest security measures and child-friendly facilities, assuring the parents' utmost peace of mind.
                                </p>

                                {/* Checklist */}
                                <div className="row g-3">
                                    {[
                                        "CCTV Surveillance across all campus areas",
                                        "Secure Campus Monitoring at all times",
                                        "Trained Staff & Dedicated Support Team",
                                        "Safe & Reliable Transportation Facilities",
                                        "Hygienic Environment & Nutritious Cafeteria",
                                        "Medical & First Aid Support on campus"
                                    ].map((item, idx) => (
                                        <div className="col-md-6" key={idx}>
                                            <div className="d-flex align-items-start">
                                                <span
                                                    className="d-flex align-items-center justify-content-center rounded-circle text-white me-3 mt-1"
                                                    style={{
                                                        width: "24px",
                                                        height: "24px",
                                                        backgroundColor: "#b3925c",
                                                        fontSize: "12px",
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <i className="bi bi-check-lg"></i>
                                                </span>
                                                <span className="fw-semibold text-dark" style={{ fontSize: "0.95rem", lineHeight: "1.4" }}>
                                                    {item}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Highlight Card */}
                        <div className="col-lg-5">
                            <div
                                className="safety-card p-5 text-center text-white"
                                style={{
                                    backgroundColor: "var(--accent-bg-color)",
                                    borderRadius: "24px",
                                    boxShadow: "0 15px 35px rgba(25, 45, 69, 0.25)"
                                }}
                            >
                                <div className="d-flex justify-content-center mb-4">
                                    <div
                                        className="rounded-circle bg-white d-flex align-items-center justify-content-center shadow-sm"
                                        style={{ width: "70px", height: "70px" }}
                                    >
                                        <span
                                            className="material-symbols-outlined"
                                            style={{ fontSize: "36px", color: "var(--accent-bg-color)" }}
                                        >
                                            gpp_good
                                        </span>
                                    </div>
                                </div>
                                <h3
                                    className="fw-bold mb-3"
                                    style={{
                                        color: "#e2dccc",
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontSize: "1.5rem"
                                    }}
                                >
                                    Your Child's Safety is Our Priority
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.85)",
                                        fontSize: "0.98rem",
                                        lineHeight: "1.7"
                                    }}
                                >
                                    In the learning environment, we promote safety, security and sensitivity to ensure that every child is supported and comfortable, and is sure of their value, making us one of the best schools in Gurgaon to which parents can entrust their children.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Campus Services Section */}
            <section className="py-5 bg-white">
                <div className="container py-3">
                    <div className="row g-4 justify-content-center">
                        
                        {/* Safe Transportation */}
                        <div className="col-md-6 col-lg-4">
                            <div className="service-card shadow-sm">
                                <div className="service-icon-container">
                                    <span className="material-symbols-outlined fs-3 text-warning">directions_bus</span>
                                </div>
                                <h3 className="service-card-title">Safe Transportation</h3>
                                <p className="service-card-text">
                                    Our school offers reliable and secure transportation and has trained drivers and support staff. GPS tracking, time discipline and comfort are our driving priorities, and we make sure that pupils are safe when travelling throughout the city.
                                    <br /><br />
                                    It makes us a preferred choice among <strong>CBSE schools in Gurugram</strong> for families who look for convenience and safety.
                                </p>
                                <div className="service-badge-container">
                                    <span className="service-badge">GPS-tracked buses</span>
                                    <span className="service-badge">Trained drivers & attendants</span>
                                    <span className="service-badge">Reliable & punctual service</span>
                                </div>
                            </div>
                        </div>

                        {/* Cafeteria & Hygiene */}
                        <div className="col-md-6 col-lg-4">
                            <div className="service-card shadow-sm">
                                <div className="service-icon-container">
                                    <span className="material-symbols-outlined fs-3" style={{ color: "#2ecc71" }}>restaurant</span>
                                </div>
                                <h3 className="service-card-title">Cafeteria & Hygiene</h3>
                                <p className="service-card-text">
                                    High standards are maintained in terms of hygiene in the classrooms, washrooms and dining area. Our school will have a healthy and balanced lunch program that supports healthy eating and overall wellness.
                                    <br /><br />
                                    This commitment to cleanliness and health strengthens our stance to become one of the top schools in Gurgaon.
                                </p>
                                <div className="service-badge-container">
                                    <span className="service-badge">Nutritious food options</span>
                                    <span className="service-badge">Hygienic environment</span>
                                    <span className="service-badge">Emphasize student health and wellness</span>
                                </div>
                            </div>
                        </div>

                        {/* Green & Eco-Friendly Campus */}
                        <div className="col-md-6 col-lg-4">
                            <div className="service-card shadow-sm">
                                <div className="service-icon-container">
                                    <span className="material-symbols-outlined fs-3" style={{ color: "#2ecc71" }}>eco</span>
                                </div>
                                <h3 className="service-card-title">Green & Eco-Friendly Campus</h3>
                                <p className="service-card-text">
                                    The campus is equipped with the necessary infrastructure, which is well laid out and well planned, to create a conducive and sustainable learning environment with green spaces and greenery. Students remain connected with nature and experience a happy and refreshing environment.
                                </p>
                                <div className="service-badge-container">
                                    <span className="service-badge">Eco-friendly practices</span>
                                    <span className="service-badge">Open & green spaces</span>
                                    <span className="service-badge">Nature-inspired learning</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Editorial Overview Section */}
            <section className="py-5" style={{ backgroundColor: "#faf8f5", borderTop: "1px solid rgba(25, 45, 69, 0.05)", borderBottom: "1px solid rgba(25, 45, 69, 0.05)" }}>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="fw-bold mb-4 text-center" style={{
                                fontFamily: "'Montserrat', sans-serif",
                                color: "var(--accent-bg-color)",
                                fontSize: "clamp(1.8rem, 3vw, 2.3rem)",
                                lineHeight: "1.3"
                            }}>
                                Kualakubs World School is among the <strong>Best Schools in Gurgaon</strong>.
                            </h2>
                            
                            <div className="safety-divider mx-auto mb-4" style={{
                                width: "60px",
                                height: "4px",
                                backgroundColor: "#b3925c",
                                borderRadius: "2px"
                            }} />

                            <div className="fs-6 text-muted" style={{ lineHeight: "1.8", color: "var(--text-color)" }}>
                                <p className="mb-4">
                                    <strong>Top schools in Gurgaon</strong>, or Gurgaon schools, provide the finest education, holistic development and future-ready learning environment, and Kualakubs World School is one of these top schools.
                                </p>
                                <p className="mb-4">
                                    As one of the <strong>best CBSE schools in Gurgaon</strong>, we have an excellent balance of academics and co-curricular development. With world-class facilities such as smart classrooms, science labs, robotics lab, sports facilities and performing arts, students are guaranteed a well-rounded education.
                                </p>
                                <p className="mb-4">
                                    Kualakubs World School is a reliable partner for the child's journey to a progressive <strong>CBSE school in Gurugram</strong>. We create our campus to stimulate the exploration, creativity, collaboration and innovation.
                                </p>
                                <p className="mb-0">
                                    In advanced labs and in expansive green spaces, each of our school is constructed with one aim: to help our students realize their potential, to help them grow and prosper in a fast-changing world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="text-center facilities-float-medium px-3">
                        <div className="text-decoration-none d-inline-block w-100 w-sm-auto">
                            <div className="facilities-cta d-flex flex-column flex-sm-row align-items-center gap-3 gap-sm-4 justify-content-center">
                                <div>
                                    <small className="text-muted fw-bold d-block"><Link to="/admissions">READY TO JOIN?</Link></small>
                                    <div className="fw-bold fs-6 fs-sm-5 text-dark">
                                        Admissions Open – Schedule a Visit
                                    </div>
                                </div>
                                <div
                                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                                    style={{ width: "42px", height: "42px" }}
                                >
                                    <span className="material-symbols-outlined">
                                        calendar_month
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}