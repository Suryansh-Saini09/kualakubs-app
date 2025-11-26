import PageHeader from "../components/PageHeader.jsx";
import aboutlogo from "../assets/logowhite.png";
import headImg from "../assets/kualakubs home image 2.png";


export default function Principal() {
  return (
    <>
      <PageHeader
        title="Principal’s Message "
        backgroundImage={headImg}
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Principal’s Message", active: true },
        ]}
      />

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
            It gives me immense pleasure to welcome you to Kualakubs World
            School, where we believe education must empower, inspire and
            transform.
          </p>

          <p style={{ textAlign: "justify" }}>
            Our school focuses on strong academics aligned with CBSE guidelines,
            combined with life skills, values, sports, technology and
            creativity.
          </p>

          <p style={{ textAlign: "justify" }}>
            We aim to create confident, disciplined and responsible individuals
            who excel in every sphere of life.
          </p>

          <p style={{ textAlign: "justify" }}>
            At Kualakubs, learning is meaningful, joyful and future-oriented.
            Together, let us shape strong futures.
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
    </>
  );
}
