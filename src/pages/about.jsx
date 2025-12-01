
import PageHeader from "../components/PageHeader";
import aboutlogo from "../assets/logowhite.png";
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

      {/* About us */}
      <section
        className="py-5"
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)"
        }}
      >
        <div className="container">

          {/* Heading */}
          <div className="text-center mb-5">
            <h2
              className="fw-bold"
              style={{ color: "var(--accent-bg-color)" }}
            >
              About Us
            </h2>
            <p className="mt-2" style={{ color: "var(--text-color)" }}>
              Where a 40-Year Legacy Meets the Future of Learning
            </p>
          </div>

          <div className="row g-4">

            {/* Column 1 */}
            <div className="col-lg-6">
              <div className="p-4 h-100 rounded-3 shadow-sm"
                style={{ backgroundColor: "var(--accent-bg-color)", color: "var(--accent-text-color)" }}
              >
                <h4 className="fw-semibold mb-3">
                  <i className="bi bi-award-fill me-2"></i>
                  A Legacy of 40+ Years
                </h4>
                <p>
                  Welcome to Kualakubs World School, a visionary learning space built on the strong educational foundation of the Geeta Group of Institutions that has proudly served the community for over 40 years. Kualakubs continues this legacy, blending tradition with innovation.
                </p>

                <h5 className="fw-semibold mt-4 mb-2">
                  <i className="bi bi-stars me-2"></i>
                  Our Beginning in Gurugram
                </h5>
                <p>
                  Our journey began with the much-loved Kualakubs Preschool—now a preferred choice for early childhood education rooted in creativity, warmth, and experiential learning.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-lg-6">
              <div className="p-4 h-100 rounded-3 shadow-sm" style={{ backgroundColor: "var(--bg-color)" }}>
                <h4 className="fw-semibold mb-3" style={{ color: "var(--accent-bg-color)" }}>
                  <i className="bi bi-building me-2"></i>
                  Expanding Into a CBSE Formal School
                </h4>
                <p>
                  Building on our preschool’s success, we proudly introduce the Kualakubs CBSE Formal School, offering classes from Playgroup to Grade 12—ensuring a seamless educational journey from foundational to formative years.
                </p>

                <h5 className="fw-semibold mt-4 mb-2" style={{ color: "var(--accent-bg-color)" }}>
                  <i className="bi bi-lightbulb-fill me-2"></i>
                  Designed for the Future
                </h5>
                <p>
                  Our curriculum integrates 21st-century skills such as critical thinking, creativity, collaboration, digital literacy, and socio-emotional learning.
                </p>

                <h5 className="fw-semibold mt-4 mb-2" style={{ color: "var(--accent-bg-color)" }}>
                  <i className="bi bi-mortarboard-fill me-2"></i>
                  A Space That Inspires Learning
                </h5>
                <p>
                  With interactive classrooms, well-equipped labs, outdoor play zones, and activity areas, we create an environment where learning is joyful, engaging, and holistic.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Vision Box */}
          <div className="mt-5 p-4 rounded-3 shadow-sm text-center"
            style={{ backgroundColor: "var(--accent-bg-color)", color: "var(--accent-text-color)" }}
          >
            <h4 className="fw-semibold mb-3">
              <i className="bi bi-compass-fill me-2"></i>
              Our Vision
            </h4>
            <p className="mb-0">
              To empower every child to become an independent thinker,
              a compassionate human being, and a confident global citizen.
            </p>
          </div>

        </div>
      </section>


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
          {/* <div
            className="container-fluid d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#e2dccc",
              minHeight: "500px",
              width: "100%",
            }}
          >
            <div
              className="text-center w-100 px-3"
              style={{
                maxWidth: "700px",
              }}
            >
              <h2 className="mb-4 fw-bold">Dear Parents and Students,</h2>

              <p
                className="mb-3"
                style={{
                  textAlign: "justify",
                }}
              >
                At Kulakubs World School, we are committed to providing a nurturing
                environment where every student is encouraged to explore their potential
                and make thoughtful choices. Our dedicated team is devoted to promoting
                academic excellence, personal growth, and character development, ensuring
                students are equipped with the skills and values needed to make a positive
                impact on society. We value the strong partnership between our school,
                parents, and students in this shared journey of learning and growth.
              </p>

              <p
                className="mt-4"
                style={{
                  textAlign: "justify",
                }}
              >
                <strong>Warm regards,</strong>
                <br />
                <strong>Principal</strong>
                <br />
                <strong>Kualakubs World School</strong>
              </p>
            </div>
          </div> */}

          <div className="row align-items-center py-4 mt-4" style={{ background: "#ede9e0", borderRadius: "24px" }}>
            <div className="col-lg-6 order-lg-2 p-4">
              <i className="bi bi-chat-text-fill fs-2 mb-3"></i>
              <h2 className="mb-4 fw-bold">Dear Parents and Students,</h2>
              <p
                className="mb-3"
                style={{
                  textAlign: "justify",
                }}
              >
                At Kulakubs World School, we are committed to providing a nurturing
                environment where every student is encouraged to explore their potential
                and make thoughtful choices. Our dedicated team is devoted to promoting
                academic excellence, personal growth, and character development, ensuring
                students are equipped with the skills and values needed to make a positive
                impact on society. We value the strong partnership between our school,
                parents, and students in this shared journey of learning and growth.
              </p>
              <p
                className="mt-4"
                style={{
                  textAlign: "justify",
                }}
              >
                <strong>Warm regards,</strong>
                <br />
                <strong>Principal</strong>
                <br />
                <strong>Kualakubs World School</strong>
              </p>
            </div>
            <div className="col-lg-6 order-lg-1 p-4">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                className="img-fluid rounded-4 shadow-sm"
                alt=""
              />
            </div>
          </div>

          <hr className="my-5" style={{ display: "none" }} />
          {/* Our Curriculum */}
          <div className="mb-5" style={{ display: "none" }}    >
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

          {/* Faculty Message */}
          {/* <div
            className="container-fluid d-flex align-items-center justify-content-center py-5"
            style={{
              backgroundColor: "#e2dccc",
              minHeight: "500px",
            }}
          >
            <div
              className="w-100 px-3"
              style={{
                maxWidth: "700px",
              }}
            >
              <h2 className="mb-4 fw-bold text-center">
                Our teachers are trained, certified and passionate educators with expertise in:
              </h2>

              <ul
                className="mb-4"
                style={{
                  textAlign: "left",
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

              <p
                className="text-center fw-semibold"
                style={{
                  textAlign: "justify",
                }}
              >
                We believe great teachers create great futures.
              </p>
            </div>
          </div> */}

          <div className="row align-items-center py-4" style={{ background: "#f5f4ef", borderRadius: "24px" }}>
            <div className="col-lg-6 p-4">
              <i className="bi bi-people-fill fs-2 mb-3" style={{ color: "var(--accent-bg-color)" }}></i>
              <h2 className="mb-4 fw-bold text-start">
                Our teachers are trained, certified and passionate educators with expertise in:
              </h2>

              <ul
                className="mb-4"
                style={{
                  textAlign: "left",
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

              <p
                className="text-center fw-semibold"
                style={{
                  textAlign: "justify",
                }}
              >
                We believe great teachers create great futures.
              </p>
            </div>
            <div className="col-lg-6 p-4">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350"
                className="img-fluid rounded-4 shadow-sm"
                alt=""
              />
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