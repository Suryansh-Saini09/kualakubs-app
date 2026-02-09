// src/pages/Admissions.jsx
import React, { useEffect } from "react";
import "../styles/admissions.css";
import PageHeader from "../components/PageHeader.jsx";
// import EnquireForm from "../components/forms/forms.jsx";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function Admissions() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <main>
      <PageHeader
        title="Admissions"
        backgroundImage="https://kualakubsworldschool.com/assets/kualakubs%20home%20image%202-DokhlqL5.png"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Admissions", active: true },
        ]}
      />

      {/* OVERLAY HERO */}
      <div
        className="admissions-hero-overlay position-absolute top-50 start-50 translate-middle text-center"
        data-aos="zoom-in"
      >
        <h5 className="hero-small-title mb-1">
          <i>Admissions Open</i>
        </h5>

        <h1 className="hero-title mb-2">Admissions 2026–27</h1>

        <p className="lead mb-4">Playgroup to Class 12</p>

        <a
          href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        document
                            .getElementById("process")
                            ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
          className="btn btn-outline-light rounded-0 px-4 py-2 fw-semibold"
        >
          View Process →
        </a>
      </div>


      {/* <section className="py-5 bg-light">
        <div className="container">

          <h2 className="fw-bold mb-4 text-center">Enquiry Form</h2>

          <form className="p-4 border rounded bg-white shadow-sm">

           
            <h4 className="fw-semibold mb-3">Student Details</h4>
            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">Child’s Name</label>
                <input type="text" className="form-control" required />
              </div>

              <div className="col-md-3">
                <label className="form-label">Date of Birth</label>
                <input type="date" className="form-control" required />
              </div>

              <div className="col-md-3">
                <label className="form-label">Age</label>
                <input type="number" className="form-control" min={3} required />
              </div>

              <div className="col-md-12">
                <label className="form-label d-block">Gender</label>
                <div className="d-flex gap-4">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" />
                    <label className="form-check-label">Female</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" />
                    <label className="form-check-label">Other</label>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Class Seeking Admission</label>
                <input type="text" className="form-control" required />
              </div>
            </div>

            <hr className="my-4" />

           
            <h4 className="fw-semibold mb-3">Parents’ Details</h4>
            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">Father’s Name</label>
                <input type="text" className="form-control" required />
              </div>

              <div className="col-md-3">
                <label className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" required />
              </div>

              <div className="col-md-3">
                <label className="form-label">Email ID</label>
                <input type="email" className="form-control" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Profession / Workplace</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Mother’s Name</label>
                <input type="text" className="form-control" required />
              </div>

              <div className="col-md-3">
                <label className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" />
              </div>

              <div className="col-md-3">
                <label className="form-label">Email ID</label>
                <input type="email" className="form-control" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Profession / Workplace</label>
                <input type="text" className="form-control" />
              </div>

            </div>

            <hr className="my-4" />

           
            <h4 className="fw-semibold mb-3">Residential Address</h4>
            <div className="row g-3">

              <div className="col-md-12">
                <textarea className="form-control" rows="2" placeholder="Address Line 1" required></textarea>
              </div>

              <div className="col-md-12">
                <textarea className="form-control" rows="2" placeholder="Address Line 2"></textarea>
              </div>

              <div className="col-md-3">
                <label className="form-label">Pin Code</label>
                <input type="tel" className="form-control" />
              </div>
            </div>

            <hr className="my-4" />

            
            <h4 className="fw-semibold mb-3">Previous School</h4>
            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">School Name</label>
                <input type="text" className="form-control" required />
              </div>

              <div className="col-md-6">
                <label className="form-label">Class Attended</label>
                <input type="text" className="form-control" required />
              </div>

              <div className="col-md-12">
                <label className="form-label">Reason for Leaving / Change</label>
                <textarea className="form-control" rows="2"></textarea>
              </div>

            </div>

            <hr className="my-4" />

           
            <h4 className="fw-semibold mb-3">How Did You Hear About Us?</h4>
            <div className="row g-2">

              <div className="col-md-12 d-flex flex-wrap gap-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Social Media</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Pamphlet / Brochure</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Hoarding</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Reference</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Walk-in</label>
                </div>
              </div>

              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Other (specify)" />
              </div>

            </div>

            <hr className="my-4" />

           
            <h4 className="fw-semibold mb-3">Area of Interest / Queries</h4>
            <div className="row g-3">

              <div className="col-md-12 d-flex flex-wrap gap-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Admissions</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">School Tour</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Fee Structure</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Transport Facility</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Curriculum / Activities</label>
                </div>
              </div>

              <div className="col-md-8">
                <input type="text" className="form-control" placeholder="Others (specify)" />
              </div>

            </div>

            <div className="text-center mt-5">
              <button type="submit" className="btn btn-primary px-5 py-2">Submit</button>
            </div>

          </form>
        </div>
      </section> */}


      <div className="admissions-wrapper" id="process">

        <section className="admission-block">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-lg-6" data-aos="fade-right" >
                <h3 className="admission-title">Admission Process</h3>

                <ol className="admission-list">
                  <li>Fill the enquiry form</li>
                  <li>School tour & interaction with academic team</li>
                  <li>Entrance assessment (Primary & Middle)</li>
                  <li>Registration & document verification</li>
                </ol>
              </div>


              <div className="col-lg-6 text-center" data-aos="fade-left">
                {/* <img
                  src="https://www.westminster.org.uk/wp-content/uploads/2025/03/Yard-scaled.jpg"
                  alt=""
                  className="img-fluid rounded"
                /> */}
                <iframe

                  src="https://form.edmissioncrm.com/form-preview/7ab0060d-c4d1-4c23-bc52-b9f35527847e"

                  width="100%"

                  height="500"

                  style={{ border: "none", borderRadius: "8px", overflow: "hidden" }}

                  allowFullScreen

                  loading="lazy"

                ></iframe>
                {/* <EnquireForm /> */}

              </div>
            </div>
          </div>
        </section>

        {/* Documents Required */}
        <section className="admission-block bg-light-alt">
          <div className="container">
            <div className="row align-items-center">
              {/* Image */}
              <div className="col-lg-6 text-center" data-aos="fade-right">
                <img
                  src="https://www.westminster.org.uk/wp-content/uploads/2025/02/MicaelaKarina_WestminsterSchool-385.jpg"
                  alt=""
                  className="img-fluid rounded"
                />
              </div>

              {/* Text */}
              <div className="col-lg-6" data-aos="fade-left">
                <h3 className="admission-title">Documents Required</h3>

                <ul className="admission-list">
                  <li>Birth Certificate</li>
                  <li>Transfer Certificate (Class 1 onwards)</li>
                  <li>Passport-size photographs</li>
                  <li>Address proof</li>
                  <li>Previous school report card</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="admission-block">
          <div className="container">
            <div className="row align-items-center">
              {/* Text */}
              <div className="col-lg-6" data-aos="fade-right">
                <h3 className="admission-title">Contact Us</h3>
                <p className="mb-0">
                  📍 Kualakubs World School,
                  <br />
                  DLF New Town Heights, Sec–86, <br />
                  +91 9996648317
                </p>
              </div>

              {/* Image */}
              <div className="col-lg-6 text-center" data-aos="fade-left">
                <img
                  src="https://www.westminster.org.uk/wp-content/uploads/2025/06/250522-Library-03-scaled.jpg"
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

    </main>
  );
}
