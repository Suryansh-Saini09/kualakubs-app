
import PageHeader from "../components/PageHeader";

export default function About() {
    return (
        <>
            <PageHeader
                title="About Us"
                backgroundImage="https://kualakubsworldschool.com/assets/kualakubs%20home%20image%202-DokhlqL5.png"
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "About Us", active: true },
                ]}
            />

             <section className="py-5" style={{ backgroundColor: "var(--bg-color)" }}>
      <div className="container">

        {/* Who We Are */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "var(--accent-bg-color)" }}>
            Who We Are
          </h2>
          <p className="mt-3" style={{ color: "var(--text-color)" }}>
            Kualakubs World School is a progressive CBSE school offering a structured,
            holistic and future-ready education for students from Playgroup to Class 8.
            We combine strong academics with life skills, sports, technology, and values
            education to ensure well-rounded development.
          </p>
        </div>

        {/* Our Approach */}
        <div className="row mb-5">
          <div className="col-lg-6">
            <h3 className="fw-semibold mb-3" style={{ color: "var(--accent-bg-color)" }}>
              Our Approach
            </h3>
            <ul className="list-unstyled" style={{ color: "var(--text-color)" }}>
              <li>• Student-centered learning</li>
              <li>• CBSE-guided academic excellence</li>
              <li>• Life skills & experiential learning</li>
              <li>• Global exposure & modern methods</li>
              <li>• Balanced growth of mind, body, emotions and character</li>
            </ul>
          </div>

          <div className="col-lg-6 d-flex align-items-center">
            <p className="fst-italic" style={{ color: "var(--text-color)" }}>
              At Kualakubs, we shape learners who are confident, curious, and compassionate.
            </p>
          </div>
        </div>

        <hr className="my-5" />

        {/* Our Curriculum */}
        <div className="mb-5">
          <h3
            className="fw-semibold text-center mb-4"
            style={{ color: "var(--accent-bg-color)" }}
          >
            📘 Our Curriculum
          </h3>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="p-4 h-100 border rounded-3">
                <h5 className="fw-bold" style={{ color: "var(--accent-bg-color)" }}>
                  Cognitive Development
                </h5>
                <p style={{ color: "var(--text-color)" }}>
                  Hands-on activities, inquiry-based learning, logical thinking and early problem-solving.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="p-4 h-100 border rounded-3">
                <h5 className="fw-bold" style={{ color: "var(--accent-bg-color)" }}>
                  Communication & Language
                </h5>
                <p style={{ color: "var(--text-color)" }}>
                  Stories, rhymes, conversation circles, phonics, and expressive communication.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="p-4 h-100 border rounded-3">
                <h5 className="fw-bold" style={{ color: "var(--accent-bg-color)" }}>
                  Creative Arts & Imagination
                </h5>
                <p style={{ color: "var(--text-color)" }}>
                  Art, music, role-play, STEAM activities and theme-based exploration.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-6 col-lg-4">
              <div className="p-4 h-100 border rounded-3">
                <h5 className="fw-bold" style={{ color: "var(--accent-bg-color)" }}>
                  Physical Development
                </h5>
                <p style={{ color: "var(--text-color)" }}>
                  Gross and fine motor skill programs, outdoor play, yoga and movement-based learning.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-md-6 col-lg-4">
              <div className="p-4 h-100 border rounded-3">
                <h5 className="fw-bold" style={{ color: "var(--accent-bg-color)" }}>
                  Emotional & Social Growth
                </h5>
                <p style={{ color: "var(--text-color)" }}>
                  Empathy, teamwork, sharing, respect and positive peer relationships.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* Core Values */}
        <div className="text-center">
          <h3 className="fw-semibold mb-4" style={{ color: "var(--accent-bg-color)" }}>
            Core Values
          </h3>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            {["Integrity", "Curiosity", "Respect", "Empathy", "Discipline", "Excellence"].map(
              (value, index) => (
                <span
                  key={index}
                  className="badge px-4 py-2"
                  style={{
                    backgroundColor: "var(--accent-bg-color)",
                    color: "var(--accent-text-color)",
                  }}
                >
                  {value}
                </span>
              )
            )}
          </div>
        </div>

      </div>
    </section>


                </>
        );
}