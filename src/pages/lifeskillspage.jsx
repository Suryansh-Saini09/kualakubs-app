import PageHeader from "../components/PageHeader";

export default function Life_Skills_Page() {
    return (
        <>

            <PageHeader
                title="Life Skills"
                backgroundImage="https://kualakubsworldschool.com/assets/kualakubs%20home%20image%202-DokhlqL5.png"
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "Life Skills", active: true }
                ]}
            />

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

        </>
    );
}


