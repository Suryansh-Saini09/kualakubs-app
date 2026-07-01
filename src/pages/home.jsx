// test commit again
import Components from "../components/manage.js";
import * as Links from "../config/links.js";
import CoCurriculum from "../assets/childs_playing.png";
import Schoolife from "../assets/classroom_activity.png";
import Partnership from "../assets/partnership_image.png";
import Acadmiclife from "../assets/adacimiclife_image.png";
import Admissions from "../assets/Admission_image.png";
import Building from "../assets/about_image.jpeg"
import SEO from "../components/SEO.jsx";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {


    const whyChooseKWS = [
        {
            title: "Child-centric approach",
            desc: "Each learning experience is planned for the needs, strengths and speed of learning of all children—no two children are the same.",
            icon: "bi-person-heart"
        },
        {
            title: "Experienced, dedicated faculty",
            desc: "Well-qualified teachers with knowledge and a love of all children's development. It's between a good school and a great one, and between KWS and the most trusted school in Gurgaon.",
            icon: "bi-mortarboard"
        },
        {
            title: "Smart, technology-enabled classrooms",
            desc: "Interactive panels, digital tools and blended learning to make concepts come alive. The best-in-class standard of infrastructure that is to be expected from the best CBSE school in Gurgaon.",
            icon: "bi-display"
        },
        {
            title: "Safe and secure campus",
            desc: "Safety is not a deal breaker – CCTV monitoring, controlled entry, GPS tracked transport and trained medical room. This is a lot for parents who are looking for trustworthy schools in Gurgaon.",
            icon: "bi-shield-check"
        },
        {
            title: "Rich co-curricular programme",
            desc: "You are a performer, sports enthusiast, debater, athlete, robot builder or something else – there's a platform for you at KWS. Holistic growth is at the heart of what we do.",
            icon: "bi-palette"
        },
        {
            title: "Values at the core",
            desc: "Integrity, respect and responsibility are part of everyday life in the school and are not taught as a subject but as a culture. This really is the essence of one of the best CBSE schools in Gurgaon.",
            icon: "bi-compass"
        }
    ];

    const safetyHighlights = [
        {
            title: "24×7 CCTV Surveillance",
            desc: "A CCTV system provides 24-hour monitoring of all areas of the campus, assuring safety at all times.",
            icon: "bi-camera-video"
        },
        {
            title: "Controlled Entry & Exit",
            desc: "Authorised entry/exit system — only authorised persons and validated guardians are allowed to enter/exit the campus. A standard that you would expect from the very best CBSE schools in Gurgaon.",
            icon: "bi-shield-lock"
        },
        {
            title: "Medical Care Facility",
            desc: "Medical room staff are trained and available during the school day for all health concerns (large or small).",
            icon: "bi-heart-pulse"
        },
        {
            title: "GPS-Tracked School Buses",
            desc: "Fixed, GPS-enabled school bus and trained staff on every route, with a focus on the critical areas of Gurugram. Another reason why KWS is one of the most trusted schools in Gurgaon for working parents.",
            icon: "bi-bus-front"
        },
        {
            title: "Hygienic & Clean Environment",
            desc: "Maintained and cleaned the campus, sanitary toilets and a good food environment in the campus canteen. A healthy child is a happy learner, and that's what the best CBSE schools in Gurgaon never have to compromise.",
            icon: "bi-stars"
        }
    ];

    const testimonialsData = [
        {
            quote: "Kualakubs World School has been a second home for my daughter. The child-centric approach and loving environment have helped her transition from a shy kid to an expressive, confident young leader. The teachers are exceptionally warm and dedicated.",
            name: "Priya Sharma",
            role: "Mother of Aarav (Grade II)",
            initials: "PS",
            stars: 5
        },
        {
            quote: "What stood out for us is their focus on values alongside academics. Smart classrooms and technology are used beautifully, but the emphasis on respect, responsibility, and empathy is what makes KWS truly outstanding in Gurugram.",
            name: "Amit Verma",
            role: "Father of Riya (Grade V)",
            initials: "AV",
            stars: 5
        },
        {
            quote: "We were very concerned about safety and transport, but KWS's GPS-tracked buses, controlled campus entry, and proactive communication completely put our minds at ease. We're very happy with our choice.",
            name: "Sonal Goel",
            role: "Mother of Kabir (Playgroup)",
            initials: "SG",
            stars: 5
        },
        {
            quote: "The rich co-curricular programme here is exceptional. From robotics to classical dance, my children are encouraged to explore everything. It's a wonderful, balanced education that truly nurtures potential.",
            name: "Rajesh Malhotra",
            role: "Father of Anya (Grade VIII)",
            initials: "RM",
            stars: 5
        }
    ];

    const testimonialResponsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <>
            <SEO
                title="Best CBSE Schools in Gurgaon for Future-Ready Learning"
                description="A nurturing school focused on academic excellence, life skills, and holistic growth with modern teaching and a safe environment, among the Best CBSE Schools in Gurgaon."
            />
            { /* Main section  */}
            <main>
                {/* <Components.Overlay.HomePopup /> */}
                <div className="container-fluid position-relative p-0">
                    <Components.Carousel />
                    <Components.Overlay.Overlayheader headerlinks={Links.overlayheaderlink} />
                    <Components.Overlay.Overlaymiddleheading />
                    <div className="bottom-strip position-absolute d-flex justify-content-center">
                        <a href="/co-education" className="mt-2 mb-2 m-md-2 m-sm-1">Co-Education and Pre-Prep from 2026 &#8594;</a>
                    </div>
                </div>
                { /* Dividersection */}
                <div className="divider container-fluid d-flex justify-content-center align-items-center p-3 p-sm-1 p-md-2" id="slidedown" >
                    A new-age school built on timeless values nurturing intellect, creativity, and character in the heart of DLF New Town Heights,Sector 86, Gurugram.
                </div>

                <Components.Contentlayout.AboutContentLayout />

                { /** <Components.Videobox /> */}

                {/* <Components.Contentlayout.LatestNewsSection /> */}
                {/* <div className="container py-2 my-2">
                    <div className="scroll-wrapper bg-primary text-white py-2 rounded">
                        <p className="scroll-text m-0">
                            Latest updates: A new formal CBSE school is coming soon, and admissions
                            will open for the academic year 2026–27, from Playgroup to Grade 12.
                            For more details, please contact us at +91-9996648317
                        </p>
                    </div>
                </div> */}
                <div
                    className="d-flex align-items-center"
                    style={{ backgroundColor: "#e2dccc", color: "#192d45", maxWidth: "100%" }}
                >
                    <h4 className="me-3 p-2 mb-0 fw-semibold" style={{ whiteSpace: "nowrap" }}>Latest News:</h4>
                    <marquee width="100%" className="p-2" direction="left" height="50px" style={{ color: "#192d45" }}>
                        Admissions Open for Session 2026–27 – Enroll now for a future-ready learning experience at Kualakubs World School, Sec-86.
                    </marquee>
                </div>

                {/* Why Parents Choose KWS Section */}
                <section className="why-kws-section">
                    <div className="container">
                        <div className="text-center mb-5">
                            <span className="why-kws-subtitle">Thousands of Gurugram families choose KWS every year</span>
                            <h2 className="why-kws-title mt-2">— and here's why</h2>
                            <p className="why-kws-intro mx-auto mt-3 text-muted" style={{ maxWidth: "700px" }}>
                                We aim to provide a solid academic base, life skills and a mind for the future in each of our children. Kualakubs World School is the <strong>top CBSE School in Gurgaon</strong> for your child's schooling for the following reasons:
                            </p>
                        </div>

                        <div className="row g-4">
                            {whyChooseKWS.map((item, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="why-kws-card">
                                        <div className="why-kws-icon-container">
                                            <i className={`bi ${item.icon}`}></i>
                                        </div>
                                        <h3 className="why-kws-card-title">{item.title}</h3>
                                        <p className="why-kws-card-text">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Campus & Safety Highlights Section */}
                <section className="safety-highlights-section">
                    <div className="container">
                        <div className="text-center mb-5">
                            <span className="safety-subtitle">Safety First</span>
                            <h2 className="safety-title mt-2">Campus & Safety Highlights</h2>
                            <p className="safety-intro mx-auto mt-3 text-white-50" style={{ maxWidth: "700px" }}>
                                Your child's safety, security, and well-being are at the heart of everything we do. We maintain a highly monitored, secure, and clean environment across our campus.
                            </p>
                        </div>

                        <div className="row g-4 justify-content-center">
                            {safetyHighlights.map((item, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="safety-card">
                                        <div className="safety-icon-container">
                                            <i className={`bi ${item.icon}`}></i>
                                        </div>
                                        <h3 className="safety-card-title">{item.title}</h3>
                                        <p className="safety-card-text">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Parent Testimonials Section */}
                {/* <section className="testimonials-section">
                    <div className="container">
                        <div className="text-center mb-5">
                            <span className="testimonials-subtitle">Voices of Our Community</span>
                            <h2 className="testimonials-title mt-2">What Parents Say</h2>
                            <p className="testimonials-intro mx-auto mt-3 text-muted" style={{ maxWidth: "700px" }}>
                                Hear from the parents of Kualakubs World School. Discover why families trust us with their children's education, safety, and holistic growth.
                            </p>
                        </div>

                        <div className="px-3 position-relative">
                            <Carousel
                                responsive={testimonialResponsive}
                                infinite={true}
                                arrows={false}
                                showDots={true}
                                autoPlay={true}
                                autoPlaySpeed={4000}
                                keyBoardControl={true}
                                customTransition="transform 500ms ease-in-out"
                                transitionDuration={500}
                                containerClass="carousel-container pb-4"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="px-2 pb-3"
                            >
                                {testimonialsData.map((item, index) => (
                                    <div className="h-100" key={index}>
                                        <div className="testimonial-card">
                                            <div className="testimonial-quote-icon">
                                                <i className="bi bi-quote"></i>
                                            </div>
                                            <div>
                                                <div className="testimonial-stars">
                                                    {Array.from({ length: item.stars }).map((_, i) => (
                                                        <i className="bi bi-star-fill me-1" key={i}></i>
                                                    ))}
                                                </div>
                                                <p className="testimonial-text">
                                                    "{item.quote}"
                                                </p>
                                            </div>
                                            <div className="testimonial-profile">
                                                <div className="testimonial-avatar">
                                                    {item.initials}
                                                </div>
                                                <div className="testimonial-info">
                                                    <h4>{item.name}</h4>
                                                    <p>{item.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </section> */}

                <div className="container " style={{ width: "75%" }} >
                    <Components.Cardslider />
                </div>

                {/* About Kualakubs Teaser Section */}
                <section className="co-curricular-teaser-section">
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6">
                                <div className="teaser-image-wrapper">
                                    <img src={newBuildingImg} className="teaser-image img-fluid" alt="About Kualakubs World School" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <span className="teaser-subtitle">About Us</span>
                                <h2 className="teaser-title">Welcome to Kualakubs World School — One of the Best CBSE Schools in Gurgaon</h2>
                                <p className="teaser-text">
                                    We strive to nurture learners' academic achievement, critical thinking, and character development in a warm, supportive setting at Kualakubs World School. We are one of the most trusted <strong>schools in Gurugram</strong>, which imparts education in a balanced manner, along with rich values, so our students can lead and inspire the world in the future.
                                    Find out more about us →  </p>
                                <a href="/about" className="teaser-btn">
                                    Learn More About Us →
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Admissions Teaser Section */}
                <section className="co-curricular-teaser-section" style={{ backgroundColor: "#faf8f5" }}>
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 order-lg-2">
                                <div className="teaser-image-wrapper">
                                    <img src={Admissions} className="teaser-image img-fluid" alt="KWS Admissions Open" />
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <span className="teaser-subtitle">Join Our Family</span>
                                <h2 className="teaser-title">Admissions Open 2026–27</h2>
                                <p className="teaser-text">
                                    This is where you can lay the foundations for your child's future. To find the <strong>best CBSE Schools in Gurgaon</strong>, families can find all the information they need at KWS, which is a hassle-free and supportive process for admission to playgroup to class XII 2026-27. Read our entry rules, fees and come and experience KWS for yourself by booking a tour of the campus. <br />
                                    <strong>Enquire Now →</strong> </p>
                                <a href="/admissions" className="teaser-btn">
                                    Enquire Now →
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Campus Facilities Teaser Section */}
                <section className="co-curricular-teaser-section">
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6">
                                <div className="teaser-image-wrapper">
                                    <img src={Acadmiclife} className="teaser-image img-fluid" alt="World-Class Facilities" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <span className="teaser-subtitle">Our Infrastructure</span>
                                <h2 className="teaser-title">World-Class Campus Facilities</h2>
                                <p className="teaser-text">
                                    Our campus is smartly designed to awaken the curiosity and promote all-around development of a child, and has a modern science lab and computer lab, a library with extensive playgrounds to promote outdoor learning and physical education. This is the kind of infrastructure that makes a CBSE <strong>School in Gurgaon</strong> the best, which is meaningful, modern and kid-friendly.
                                </p>
                                <a href="/campus-facilities" className="teaser-btn">
                                    Explore Our Campus →
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* School Life Teaser Section */}
                <section className="co-curricular-teaser-section" style={{ backgroundColor: "#faf8f5" }}>
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 order-lg-2">
                                <div className="teaser-image-wrapper">
                                    <img src={Schoolife} className="teaser-image img-fluid" alt="Student Experience at KWS" />
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <span className="teaser-subtitle">Student Experience</span>
                                <h2 className="teaser-title">Vibrant School Life at Kualakubs — The Best CBSE School in Gurgaon </h2>
                                <p className="teaser-text">
                                    Each day at Kualakubs World School is a new adventure. We feel that school should be a happy environment where pupils have the freedom to investigate their interests, develop meaningful friendships and enjoy a wide and varied school life through the school's clubs and assemblies, and through the house activities. It is a type of school life that makes KWS one of the most cherished <strong>schools in Gurugram</strong> by students and parents. <br />
                                    <strong>Discover School Life →</strong>
                                </p>
                                <a href="/school-life" className="teaser-btn">
                                    Discover School Life →
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Co-Curricular Teaser Section */}
                <section className="co-curricular-teaser-section">
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6">
                                <div className="teaser-image-wrapper">
                                    <img src={CoCurriculum} className="teaser-image img-fluid" alt="Co-Curricular activities at KWS" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <span className="teaser-subtitle">Beyond the Classroom</span>
                                <h2 className="teaser-title">Co-Curricular</h2>
                                <p className="teaser-text">
                                    At Kualakubs World School, the classroom is just the beginning. Our students sing, dance, debate, code, paint and play because we know and understand that the whole child can be realised when we nurture and celebrate all parts of their being. Whether it's an annual day event or an inter-school competition, life at KWS is rich, vibrant and always full of possibility — a feature of the best CBSE Schools in Gurgaon and forward-thinking schools in Gurugram. <br />
                                    <strong>Explore Co-Curriculars →</strong>
                                </p>
                                <a href="/Co-Curricular" className="teaser-btn">
                                    Explore Co-Curriculars →
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partnerships Teaser Section */}
                <section className="co-curricular-teaser-section" style={{ backgroundColor: "#faf8f5" }}>
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 order-lg-2">
                                <div className="teaser-image-wrapper">
                                    <img src={Partnership} className="teaser-image img-fluid" alt="KWS Partnerships" />
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <span className="teaser-subtitle">Collaborations</span>
                                <h2 className="teaser-title">Our Strategic Partnerships</h2>
                                <p className="teaser-text">
                                    Our key partners in the education sector, technology providers and local organisations are important stakeholders in the development of our curriculum, and we work closely with them to continually improve our curriculum and ensure that our students are offered a range of learning opportunities. These strategic linkages are a wonderful way of introducing the world into the classroom and real-life experiences into the school, and that's the reason why we are one of the most progressive <strong>schools in Gurugram.</strong>
                                </p>
                                <a href="/our-partnerships" className="teaser-btn">
                                    Our Partnerships →
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}