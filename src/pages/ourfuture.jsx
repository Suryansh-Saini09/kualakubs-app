import PageHeader from "../components/PageHeader";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../components/SEO";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg"

export default function FutureSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);
  return (
    <>
      <SEO
        title="Kualakubs World School – Top Rated Schools in Gurgaon for Future-Ready Learning"
        description="A forward-thinking school fostering innovation, resilience, and lifelong learning through thoughtfully designed programs and future-focused education."
      />
      <PageHeader
        title="Our Future"
        backgroundImage={newBuildingImg}
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Our Future", active: true },
        ]}
      />
      <section className="py-5 bg-light">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <h2 className="fw-bold">🌟 Our Future – Building for the Future</h2>
            <h5 className="text-muted mt-2">
              Shaping Learners Today, Leaders Tomorrow
            </h5>
          </div>

          {/* Intro Paragraph */}
          <div className="row mb-5">
            <div className="col-md-10 offset-md-1">
              <p className="lead text-center">
                At Kualakubs World School, we believe the future belongs to
                those who are prepared for it — emotionally, academically,
                socially, and creatively. Our vision is not just to educate
                children for today, but to empower them for a rapidly changing
                tomorrow.
              </p>

            </div>
          </div>

          {/* Vision Beyond Traditional Learning */}
          <div className="row g-4 mb-5" data-aos="fade-up">
            <div className="col-md-12">
              <div className="p-4 border rounded bg-white shadow-sm">
                <h4 className="fw-semibold">
                  ⭐ A Vision Beyond Traditional Learning
                </h4>
                <p>
                  We prepare our students with skills that matter for the world
                  ahead:
                </p>
                <ul className="mb-0">
                  <li>Critical thinking & problem-solving</li>
                  <li>Digital readiness & tech confidence</li>
                  <li>Creativity, imagination & innovation</li>
                  <li>Global awareness & responsible citizenship</li>
                  <li>Strong communication & collaboration skills</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Future-Ready Infrastructure */}
          <div className="row g-4 mb-5" data-aos="fade-up">
            <div className="col-md-12">
              <div className="p-4 border rounded bg-white shadow-sm">
                <h4 className="fw-semibold">⭐ Future-Ready Infrastructure</h4>
                <p>
                  Our upcoming expansions and enhancements are planned to give
                  students access to:
                </p>
                <ul className="mb-0">
                  <li>Modern smart classrooms</li>
                  <li>Scientific & innovation labs</li>
                  <li>Advanced sports facilities</li>
                  <li>Performing & visual arts studios</li>
                  <li>Safe, eco-friendly campus design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Preparing Children for a Changing World */}
          <div className="row g-4 mb-5" data-aos="fade-up">
            <div className="col-md-12">
              <div className="p-4 border rounded bg-white shadow-sm">
                <h4 className="fw-semibold">
                  ⭐ Preparing Children for a Changing World
                </h4>
                <p>
                  The world is evolving—and so is education. At Kualakubs, we
                  focus on:
                </p>
                <ul className="mb-0">
                  <li>Adaptability and resilience</li>
                  <li>Life skills for real-life challenges</li>
                  <li>Holistic development through academics, arts & sports</li>
                  <li>Values that build character, empathy & responsibility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Growing With Purpose */}
          <div className="row g-4" data-aos="fade-up">
            <div className="col-md-12">
              <div className="p-4 border rounded bg-white shadow-sm">
                <h4 className="fw-semibold">⭐ Growing With Purpose</h4>
                <p>As we expand, our commitment remains clear:</p>
                <p className="mb-0">
                  To create a school where children are excited to learn,
                  confident to express, inspired to explore, and prepared to
                  excel in any path they choose.
                </p>
                <p className="mt-2 mb-0">
                  Together, we are building a future where every child becomes
                  the best version of themselves.
                </p>
              </div>
            </div>
          </div>
              <p className="text-center mt-4">
                We are committed to building a school environment that nurtures innovation, resilience, and lifelong learning. Every initiative, every classroom, and every program is thoughtfully designed with the future in mind, positioning us among the top-rated schools in Gurgaon.
              </p>
        </div>
      </section>
    </>
  );
}
