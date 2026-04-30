import PageHeader from "../components/PageHeader.jsx";
import aboutlogo from "../assets/logowhite.png";
import headImg from "../assets/kualakubs home image 2.png";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg"

export default function Principal() {
  return (
    <>
      <PageHeader
        title="Principal’s Message "
        backgroundImage={newBuildingImg}
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
    </>
  );
}
