import { Link } from "react-router-dom";
import Components from "../components/manage.js";
import PageHeader from "../components/PageHeader.jsx";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MagicCard from "../components/Magiccard.jsx";
import SEO from "../components/SEO.jsx";

// school life page

export default function SchoolLife() {
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
        });
    }, []);

    // const galleryItems = [
    //     {
    //         img: "https://www.westminster.org.uk/wp-content/uploads/2025/01/27NovemberAccidentalDeathofanAnarchistimages1105-2048x1370.jpg",
    //         text: "WATCH KUALAKUBS",
    //         link: "#",
    //     },
    //     {
    //         img: "https://www.westminster.org.uk/wp-content/uploads/2025/03/IMG_5424-2048x1365.jpg",
    //         text: "PUPIL WELFARE",
    //         link: "#",
    //     },
    //     {
    //         img: "https://www.westminster.org.uk/wp-content/uploads/2025/03/580A3848-2048x1365.jpg",
    //         text: "THE SIXTH FORM",
    //         link: "#",
    //     },
    //     {
    //         img: "https://www.westminster.org.uk/wp-content/uploads/2022/11/GWL_4116_gwl-scaled-e1669392893306.jpg",
    //         text: "THE ABBEY",
    //         link: "#",
    //     },
    //     {
    //         img: "https://www.westminster.org.uk/wp-content/uploads/2024/10/GEORGINA01889-2048x1365.jpg",
    //         text: "CO-CURRICULUM",
    //         link: "#",
    //     },
    //     {
    //         img: "https://www.westminster.org.uk/wp-content/uploads/2025/01/MicaelaKarina_WestminsterSchool-202-e1741696569873.jpg",
    //         text: "BOAR",
    //         link: "#",
    //     },
    // ];

    return (

        <>
            <SEO
                title="Top CBSE School in Gurgaon for Student Life"
                description="A vibrant school life with meaningful experiences that inspire creativity, build character, and support lifelong learning and overall growth."
            />
            
            <PageHeader
                title="School Life"
                backgroundImage="https://kualakubsworldschool.com/assets/kualakubs%20home%20image%202-DokhlqL5.png"
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "School Life", active: true }
                ]}
            />

            {/* SCHOOL LIFE SECTION */}
            <section className="py-5" style={{ backgroundColor: "var(--bg-color)" }}>
                <div className="container">

                    {/* Header */}
                    <div className="text-center mb-5" data-aos="fade-down">
                        <h2 className="fw-bold" style={{ color: "var(--accent-bg-color)" }}>
                            School Life at Kualakubs
                        </h2>
                        <p style={{ color: "var(--text-color)", maxWidth: "800px" }} className="mx-auto">
                            School life at Kualakubs is thoughtfully designed to provide a balanced and enriching environment that supports the holistic development of every child. Our daily schedule integrates academic readiness, creative expression, physical activity, and value-based learning to ensure that students grow into confident, curious, and responsible individuals.
                        </p>
                    </div>

                    <div className="container py-5">
                        <div className="row g-4">

                            <div className="col-lg-6 col-md-12">
                                <MagicCard
                                    image="https://images.unsplash.com/photo-1588072432836-e10032774350"
                                    icon="bi bi-book-half"
                                    heading="Academic Foundation"
                                    paragraph="Our academic programme emphasizes conceptual understanding through activity-based and experiential learning. Early literacy and numeracy skills are developed through structured phonics sessions, thematic learning modules, and interactive classroom experiences. Each concept is introduced in a manner that engages young learners and fosters a genuine interest in learning."
                                />
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <MagicCard
                                    image="https://images.unsplash.com/photo-1513258496099-48168024aec0"
                                    icon="bi bi-lightbulb"
                                    heading="Creative & Cultural Engagement"
                                    paragraph="Creativity is an integral part of school life at Kualakubs. Students participate in art, craft, music, dance, and storytelling sessions that enhance imagination and self-expression. Cultural celebrations, special assemblies, and thematic events broaden their awareness and help them appreciate diversity and tradition."
                                />
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <MagicCard
                                    image="https://snworksceo.imgix.net/tms/e40bd6f7-c469-4575-89f8-3872715ca6d6.sized-1000x1000.jpg?w=1000"
                                    icon="bi bi-dribbble"
                                    heading="Physical and Outdoor Activities"
                                    paragraph="Physical development is encouraged through age-appropriate sports, movement exercises, and outdoor play. These activities are designed to improve motor skills, coordination, and overall well-being, while also instilling healthy habits from an early age."
                                />
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <MagicCard
                                    image="https://images.unsplash.com/photo-1552664730-d307ca884978"
                                    icon="bi bi-heart-fill"
                                    heading="Social and Emotional Development"
                                    paragraph="Our environment supports the social and emotional growth of every child. Through collaborative activities and guided interactions, students learn the values of respect, empathy, teamwork, and responsibility. We work closely with children to help them build confidence, communication skills, and positive relationships."
                                />
                            </div>

                        </div>
                    </div>


                    {/* Footer */}
                    <div className="text-center mt-5" data-aos="fade-up">
                        <p style={{ color: "var(--text-color)", maxWidth: "850px" }} className="mx-auto">
                            At Kualakubs, school life is shaped by meaningful experiences that inspire learning, encourage creativity, and build strong character. We aim to provide a foundation that supports lifelong success and a love for learning, placing us among the top CBSE schools in Gurgaon.
                        </p>
                    </div>

                </div>
            </section>
            {/* <section className="py-5" style={{ backgroundColor: "var(--bg-color)" }}>
                <div className="container">

               
                    <div className="text-center mb-5" data-aos="fade-down">
                        <h2 className="fw-bold" style={{ color: "var(--accent-bg-color)" }}>
                            School Life at Kualakubs
                        </h2>
                        <p style={{ color: "var(--text-color)",  maxWidth: "800px" }} className="mx-auto">
                            School life at Kualakubs is thoughtfully designed to provide a balanced and enriching environment that supports the holistic development of every child. Our daily schedule integrates academic readiness, creative expression, physical activity, and value-based learning to ensure that students grow into confident, curious, and responsible individuals.
                        </p>
                    </div>

                    <div className="row align-items-center py-4" style={{ background: "#f5f4ef", borderRadius: "24px" }} data-aos="fade-up">
                        <div className="col-lg-6 p-4">
                            <i className="bi bi-book-half fs-2 mb-3" style={{ color: "var(--accent-bg-color)" }}></i>
                            <h4 style={{ color: "var(--accent-bg-color)" }}>Academic Foundation</h4>
                            <p style={{ color: "var(--text-color)" }}>
                                Our academic programme emphasizes conceptual understanding through activity-based and experiential learning. Early literacy and numeracy skills are developed through structured phonics sessions, thematic learning modules, and interactive classroom experiences. Each concept is introduced in a manner that engages young learners and fosters a genuine interest in learning.
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

                 
                    <div className="row align-items-center py-4 mt-4" style={{ background: "#ede9e0", borderRadius: "24px" }} data-aos="fade-up">
                        <div className="col-lg-6 order-lg-2 p-4">
                            <i className="bi bi-palette fs-2 mb-3" style={{ color: "var(--accent-bg-color)" }}></i>
                            <h4 style={{ color: "var(--accent-bg-color)" }}>Creative and Cultural Engagement</h4>
                            <p style={{ color: "var(--text-color)" }}>
                                Creativity is an integral part of school life at Kualakubs. Students participate in art, craft, music, dance, and storytelling sessions that enhance imagination and self-expression. Cultural celebrations, special assemblies, and thematic events broaden their awareness and help them appreciate diversity and tradition.
                            </p>
                        </div>
                        <div className="col-lg-6 order-lg-1 p-4">
                            <img
                                src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
                                className="img-fluid rounded-4 shadow-sm"
                                alt=""
                            />
                        </div>
                    </div>

            
                    <div className="row align-items-center py-4 mt-4" style={{ background: "#f5f4ef", borderRadius: "24px" }} data-aos="fade-up">
                        <div className="col-lg-6 p-4">
                            <i className="bi bi-activity fs-2 mb-3" style={{ color: "var(--accent-bg-color)" }}></i>
                            <h4 style={{ color: "var(--accent-bg-color)" }}>Physical and Outdoor Activities</h4>
                            <p style={{ color: "var(--text-color)" }}>
                                Physical development is encouraged through age-appropriate sports, movement exercises, and outdoor play. These activities are designed to improve motor skills, coordination, and overall well-being, while also instilling healthy habits from an early age.
                            </p>
                        </div>
                        <div className="col-lg-6 p-4">
                            <img
                                src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d"
                                className="img-fluid rounded-4 shadow-sm"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="row align-items-center py-4 mt-4" style={{ background: "#ede9e0", borderRadius: "24px" }} data-aos="fade-up">
                        <div className="col-lg-6 order-lg-2 p-4">
                            <i className="bi bi-heart-fill fs-2 mb-3" style={{ color: "var(--accent-bg-color)" }}></i>
                            <h4 style={{ color: "var(--accent-bg-color)" }}>Social and Emotional Development</h4>
                            <p style={{ color: "var(--text-color)" }}>
                                Our environment supports the social and emotional growth of every child. Through collaborative activities and guided interactions, students learn the values of respect, empathy, teamwork, and responsibility. We work closely with children to help them build confidence, communication skills, and positive relationships.
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

           
                    <div className="row align-items-center py-4 mt-4" style={{ background: "#f5f4ef", borderRadius: "24px" }} data-aos="fade-up">
                        <div className="col-lg-6 p-4">
                            <i className="bi bi-shield-check fs-2 mb-3" style={{ color: "var(--accent-bg-color)" }}></i>
                            <h4 style={{ color: "var(--accent-bg-color)" }}>A Safe and Nurturing Environment</h4>
                            <p style={{ color: "var(--text-color)" }}>
                                Safety and care are central to our school philosophy. Our infrastructure, supervision practices, and hygiene standards ensure that children learn in a secure, comfortable, and welcoming atmosphere. Each child receives individual attention from trained educators committed to their growth and well-being.
                            </p>
                        </div>
                        <div className="col-lg-6 p-4">
                            <img
                                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                                className="img-fluid rounded-4 shadow-sm"
                                alt=""
                            />
                        </div>
                    </div>

        
                    <div className="text-center mt-5" data-aos="fade-up">
                        <p style={{ color: "var(--text-color)", maxWidth: "850px" }} className="mx-auto">
                            At Kualakubs, school life is shaped by meaningful experiences that inspire learning, encourage creativity, and build strong character. We aim to provide a foundation that supports lifelong success and a love for learning, placing us among the top CBSE schools in Gurgaon.
                        </p>
                    </div>

                </div>
            </section> */}
            {/* Gallery */}
            {/* < Components.Gallery.Gallery galleryItems={galleryItems} h={"DISCOVER MORE"} p={"Find out more about School Life at Westminster"} /> */}
        </>
    );
}