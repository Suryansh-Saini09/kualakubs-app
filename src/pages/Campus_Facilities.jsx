import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

export default function Campus_Facilities() {

    return (
        <>

            <PageHeader
                title="Campus Facilites"
                backgroundImage="https://kualakubsworldschool.com/assets/kualakubs%20home%20image%202-DokhlqL5.png"
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

            <main className="position-relative py-5 facilities-section">

                {/* Background grid */}
                <div className="position-absolute top-0 start-0 w-100 h-100 facilities-bg-grid"></div>

                <div className="container position-relative z-1">

                    {/* Heading */}
                    <div
                        className="text-center mx-auto mb-5 facilities-float-slow"
                        style={{ maxWidth: "720px" }}
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
                            Our campus is designed to inspire learning, innovation, creativity,
                            and holistic growth. Every space empowers students to become future-ready.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="row g-4">

                        <div className="col-md-6 col-lg-4 facilities-float-medium">
                            <div className="facilities-card">
                                <div className="facilities-icon facilities-g1">
                                    <span className="material-symbols-outlined fs-3">diversity_3</span>
                                </div>
                                <h4 className="fw-bold">Interactive Learning Environments</h4>
                                <p className="text-muted">
                                    Smart classrooms with digital integration and ergonomic design.
                                </p>
                            </div>
                        </div>

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
                        </div>

                        <div className="col-md-6 col-lg-4 facilities-float-fast">
                            <div className="facilities-card">
                                <div className="facilities-icon facilities-g3 text-dark">
                                    <span className="material-symbols-outlined fs-3">laptop_chromebook</span>
                                </div>
                                <h4 className="fw-bold">Digital Literacy</h4>
                                <p className="text-muted">
                                    ICT Lab supporting coding, research, and digital responsibility.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 facilities-float-medium">
                            <div className="facilities-card">
                                <div className="facilities-icon facilities-g4">
                                    <span className="material-symbols-outlined fs-3">lightbulb</span>
                                </div>
                                <h4 className="fw-bold">Cultivating Curiosity</h4>
                                <p className="text-muted">
                                    Library & Reading Lounge with DROP reading program.
                                </p>
                            </div>
                        </div>

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
                        </div>

                        <div className="col-md-6 col-lg-4 facilities-float-fast">
                            <div className="facilities-card">
                                <div className="facilities-icon facilities-g6">
                                    <span className="material-symbols-outlined fs-3">volunteer_activism</span>
                                </div>
                                <h4 className="fw-bold">Essential Life Skills</h4>
                                <p className="text-muted">
                                    Language and Life Skills Lab for communication and leadership.
                                </p>
                            </div>
                        </div>

                        {/* Wide card */}
                        <div className="col-12 d-flex justify-content-center mt-4">
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
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-5 facilities-float-medium px-3">
                        <div  className="text-decoration-none d-inline-block w-100 w-sm-auto">
                            <div className="facilities-cta d-flex flex-column flex-sm-row align-items-center gap-3 gap-sm-4">
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
            </main>



        </>
    );
}