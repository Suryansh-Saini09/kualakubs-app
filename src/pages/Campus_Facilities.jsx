import PageHeader from "../components/PageHeader";

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
            <div className="container py-5">

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
                            text: "Studios for Art & Music, plus Outdoor & Indoor Sports Arenas and multi-sport courts for fitness and teamwork.",
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
            </div>

        </>
    );
}