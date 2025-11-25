import "./contentlayout.css";
import aboutlogo from "../../assets/logowhite.png";
import { Link } from "react-router-dom";
import slide1 from "../../assets/latest_news_KK.jpg"


export function AboutContentLayout() {
    return (
        <>
            { /* About section */}

            <div className="position-relative d-flex flex-column justify-content-center align-items-center text-center p-4 mb-4"
                style={{ background: "var(--accent-bg-color)", minHeight: "500px" }}>

                <img src={aboutlogo} className="about-section-img img-fluid" alt="" />

                <p className="about-text" style={{ fontSize: "medium", textAlign: "justify" }}>
                    Welcome to Kualakubs World School, a CBSE formal school committed to building strong academic foundations, essential life skills, and a future-ready mindset in every child.
                    With a blend of modern pedagogy, global teaching standards, and a safe, nurturing environment, Kualakubs empowers learners from Playgroup to Grade 8 to excel academically and grow holistically.
                </p>

                <Link to="/about" className="d-block z-2 text-decoration-none d-none" style={{ color: "var(--accent-text-color)", fontSize: "large" }}>
                    Read More {"\u2192"}
                </Link>
            </div>
        </>
    );
}


export function LatestNewsSection() {
    return (
        <>
            { /* News section */}
            <div className="container card mb-3  border-0" style={{ width: "75%" }}>
                <div className="row" style={{ backgroundColor: "var(--accent-bg-color)" }}>
                    <div className="col-lg-6 col-md-12 p-0 position-relative">
                        <div className="triangle position-absolute"><span className="triangle-text">Latests <br /> News</span></div>
                        <img src={slide1} className="img-fluid h-100 w-100 object-fit-cover" alt="..." />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="card-body">
                            <h2 className="card-title mt-3 text-center" style={{ color: "var(--accent-text-color)" }}>
                                Latest News
                            </h2>

                            <p style={{ color: "var(--accent-text-color)" }} className="mt-3"><b>15 October 2025</b></p>
                            <p className="card-text mb-2" style={{ color: "var(--accent-text-color)" }}>
                                Team CodeKubs from Grade VIII brought laurels by winning First Prize at the National Robotics Championship 2025 held in Delhi NCR.</p>
                            {/** <span className="btn btn-sm me-2 mb-2 border rounded-0 custom-button-effect">READ NEWS ITEM
                                {"\u2192"}</span>
                            <span className="btn btn-sm mb-2 border rounded-0 custom-button-effect">READ ALL REWS
                                {"\u2192"}</span> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default {
    AboutContentLayout,
    LatestNewsSection
}