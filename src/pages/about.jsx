
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

          {/* Principal's Message */}
          <div
            className="position-relative d-flex flex-column justify-content-center align-items-center text-center"
            style={{ background: "var(--accent-bg-color)", minHeight: "500px" }}
          >
            <img src={aboutlogo} className="about-section-img img-fluid" alt="" />

            {/* Black Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0, 0, 0, 0.58)",
                zIndex: "2",
              }}
            ></div>

            {/* Text Content */}
            <div
              className="about-text"
              style={{
                fontSize: "medium",
                textAlign: "start",
                zIndex: "3",
                color: "white",
                maxWidth: "700px",
              }}
            >
              <h2 className="mb-3">Dear Parents and Students,</h2>

              <p style={{ textAlign: "justify" }}>
                At Kulakubs World School, we are committed to providing a nurturing environment where every student is encouraged to explore their potential and make thoughtful choices. Our dedicated team is devoted to promoting academic excellence, personal growth, and character development, ensuring students are equipped with the skills and values needed to make a positive impact on society. We value the strong partnership between our school, parents, and students in this shared journey of learning and growth.
              </p>

              <p className="mt-4" style={{ textAlign: "justify" }}>
                <strong>Warm regards,</strong>
                <br />
                <strong>Principal</strong>
                <br />
                <strong>Kualakubs World School</strong>
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

          {/* Faculty message */}
          <div
            className="position-relative d-flex flex-column justify-content-center align-items-center text-center"
            style={{ background: "var(--accent-bg-color)", minHeight: "500px" }}
          >
            <img src={aboutlogo} className="about-section-img img-fluid " alt="" />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0, 0, 0, 0.58)", // black overlay
                zIndex: "2",
              }}
            ></div>

            <div
              className="about-text"
              style={{
                fontSize: "medium",
                textAlign: "start",
              }}
            >
              <h2>
                Our teachers are trained, certified and passionate educators with
                expertise in:
              </h2>

              <ul
                style={{
                  textAlign: "left",
                  margin: "1rem auto",
                  maxWidth: "600px",
                  lineHeight: "1.8",
                }}
              >
                <li>CBSE Pedagogy</li>
                <li>Subject-specific mastery</li>
                <li>Child psychology & classroom management</li>
                <li>NEP 2020 aligned teaching</li>
                <li>Technology-enabled instruction</li>
                <li>Project-based learning</li>
              </ul>

              <p style={{ marginTop: "1.5rem", textAlign: "justify" }}>
                We believe great teachers create great futures.
              </p>
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