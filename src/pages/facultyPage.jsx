import aboutlogo from "../assets/logowhite.png";
import PageHeader from "../components/PageHeader.jsx";

export default function FacultyPage() {
  return (
    <>
      <PageHeader
        title="Our Educators"
        backgroundImage="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Faculty", active: true },
        ]}
      />

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
    </>
  );
}
