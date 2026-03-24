import "./gallery.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/section_img_1.png";
import img2 from "../../assets/section_img_2.png";
import img3 from "../../assets/section_img_3.png";
import img4 from "../../assets/section_img_4.png";
import React, { useEffect } from "react";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

export function Gallery({ galleryItems, h, p }) {
    return (
        <>
            {/* Gallery */}
            <div className="album py-5">
                <h5 className="text-center">{h}</h5>
                <p className="text-center">
                    {p}
                    {/* Find out more about School Life at Kualakubs */}
                </p>

                <div className="container mt-4" style={{ width: "75%" }}>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {galleryItems.map((item, index) => (
                            <div className="col" key={index} >
                                <div className="card shadow position-relative gallery-card-bg rounded-0">
                                    <Link to={item.link}>
                                        <img
                                            src={item.img}
                                            className="img-fluid object-fit-cover h-100 w-100"
                                            alt={item.text}
                                            style={{minHeight: "226px", height: "226px"}}
                                        />
                                        <span className="gallery-img-text position-absolute">
                                            {item.text}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export function GalleryWithImg() {
      useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease-out-cubic",
          once: true,
          offset: 90,
        });
      }, []);
    return (
        <>
            {/** section part 1 */}
            <div className="container-fluid" style={{ background: "#f5f4ef" }}>
                <div className="container py-5" style={{ maxWidth: "75%" }}>
                    <div className="row featurette">
                        <div className="col-md-7 " data-aos="fade-right">
                            <h2 className="fw-semibold  lh-1">Our Legacy &amp; Vision</h2>
                            <h3 className=" fw-normal lh-1">Leaming Designed for the Future</h3>
                            <p className="lead">Kualakub’s onward journey in the sector drives us here — our preschools set new benchmarks in early childhood education.</p>
                            <p className="lead">Building on this trust, we are now expanding into a world-class K–12 institution dedicated to nurturing real innovation, wellness, and values — empowering every child to learn, create, and lead with confidence.</p>
                            <h5 className=" fw-semibold">– Er. Lakshay Gupta, Managing Director</h5>
                        </div>
                        <div className="col-md-5" data-aos="fade-left">
                            <img src={img1} alt="student image" className=" img-fluid object-fit-cover" width="400" height='400' />
                        </div>
                    </div>
                </div>
            </div>

            {/** section part 2 */}
            <div className=" container-fluid" style={{ background: "#ede9e0" }}>
                <div className="container py-5" style={{ maxWidth: "75%" }}>
                    <div className="row featurette">
                        <div className="col-md-5" data-aos="fade-right">
                            <img src={img2} alt="student image" className=" img-fluid object-fit-cover" width="400" height='400' />
                        </div>

                        <div className="col-md-7" data-aos="fade-left">
                            <h2 className="fw-semibold  lh-1">Innovation & Learning Spaces</h2>
                            <h3 className=" fw-normal lh-1">State-of-theArt Infrastructure</h3>
                            <p className="lead">“Our NEP-aligned campus is designed to nurture future zest.”</p>
                            <ul className="mt-2">
                                <li>Smart Classrooms with digital panels</li>
                                <li>Makers & Innovation Lab for robotics</li>
                                <li>STEAM & Arts Hubs</li>
                                <li>SEL Homerooms to foster empathy, resilience, and an anti-bullying culture</li>
                                <li>Environmental stewardship & sustainability projects</li>
                                <li>Community service integrated</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/** section part 3 */}
            <div className=" container-fluid" style={{ background: "#f5f4ef" }}>
                <div className="container  py-5" style={{ maxWidth: "75%" }}>
                    <div className="row ">
                        <div className="col-md-7" data-aos="fade-right">
                            <h2 className="fw-semibold  lh-1">Safety, Wellness & Values</h2>
                            <h3 className=" fw-normal lh-1">A Safe, Caring, and Value-Based Campus</h3>
                            <ul className="mt-2">
                                <li>HD CCTV and visitor management systems</li>
                                <li>GPS-enabled transport with verified staff</li>
                                <li>Regular health check-ups</li>
                                <li>SEL Homerooms to foster empathy, resilience, and an anti-bullying culture</li>
                                <li>Environmental stewardship and sustainability projects promoting agriculture, literacy, and technology</li>
                                <li>Indian values and ethics embedded in learning</li>
                            </ul>
                        </div>
                        <div className="col-md-5" data-aos="fade-left">
                            <img src={img3} alt="student image" className=" img-fluid object-fit-cover" width="400" height='400' />
                        </div>
                    </div>
                </div>
            </div>

            {/** section part 4 */}


            <div className=" container-fluid mb-3" style={{ background: "#edeae1" }}>
                <div className="container py-5" style={{ maxWidth: "75%" }}>
                    <div className="row featurette">
                        <div className="col-md-5"   data-aos="fade-right">
                            <img src={img4} alt="student image" className=" img-fluid object-fit-cover" width="400" height='400' />
                        </div>

                        <div className="col-md-7" data-aos="fade-left">
                            <h2 className=" fw-semibold lh-1">Our Promise</h2>

                            <ul className="mt-2">
                                <li>Holistic 360° growth — academics, skills, and values</li>
                                <li>Multilingual and bilingual learning foundations</li>
                                <li>Experiential, project-based learning</li>
                                <li>Integration of arts, sports, and vocational skills in the core curriculum</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default {
    Gallery,
    GalleryWithImg
}