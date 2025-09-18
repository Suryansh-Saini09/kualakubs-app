import "./contentlayout.css";
import aboutlogo from "../../assets/logowhite.png";
import { Link } from "react-router-dom";

export function AboutContentLayout() {
    return (
        <>
            { /* About section */}

            <div className="position-relative d-flex flex-column justify-content-center align-items-center text-center p-4"
                style={{ background: "var(--accent-bg-color)", minHeight: "500px" }}>

                <img src={aboutlogo} className="about-section-img img-fluid" alt="" />

                <p className="about-text" style={{ fontSize: "medium" }}>
                    Westminster School’s reputation as one of the world’s foremost centres of academic
                    excellence is built upon our pupils’ genuine enjoyment of open-minded enquiry,
                    rigorous discussion and the search for explanation well beyond any examination syllabus.
                    Westminster is a safe, stimulating and supportive environment: pupils enhance their intellectual,
                    physical, spiritual and social development by taking full advantage of the many opportunities
                    available to them in art, drama, music, sport and volunteering in the community.
                </p>

                <Link to="/about" className="d-block z-2 text-decoration-none" style={{ color: "var(--accent-text-color)", fontSize: "large" }}>
                    Read More {"\u2192"}
                </Link>
            </div>
        </>
    );
}


export default {
    AboutContentLayout
}