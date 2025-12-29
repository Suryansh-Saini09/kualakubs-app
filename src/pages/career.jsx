
import PageHeader from "../components/PageHeader";
import React from "react";

export default function Career() {

    return (
        <>
            <PageHeader
                title="Career"
                backgroundImage="https://kualakubsworldschool.com/assets/kualakubs%20home%20image%202-DokhlqL5.png"
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "career", active: true },
                ]} />

            <section className="py-5 bg-light">
                <div className="container">

                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Career Application Form</h2>
                        <p className="text-muted">Please fill all required details carefully</p>
                    </div>

                    <form className="row g-4">

                        {/* ================= PERSONAL INFORMATION ================= */}
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                <div className="card-header bg-white fw-bold">
                                    <i className="bi bi-person-badge text-primary me-2"></i>
                                    Personal Information
                                </div>

                                <div className="card-body row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Applicant Name *</label>
                                        <input type="text" className="form-control" required />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Father Name *</label>
                                        <input type="text" className="form-control" required />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Contact Number *</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="bi bi-telephone"></i></span>
                                            <input type="tel" className="form-control" required />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Email</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                                            <input type="email" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <label className="form-label">Gender *</label>
                                        <select className="form-select" required>
                                            <option value="">Select Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Transgender</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ================= ADDRESS DETAILS ================= */}
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                <div className="card-header bg-white fw-bold">
                                    <i className="bi bi-geo-alt-fill text-success me-2"></i>
                                    Address Details
                                </div>

                                <div className="card-body row g-3">
                                    <div className="col-md-12">
                                        <label className="form-label">Address</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col-md-3">
                                        <label className="form-label">Current City</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col-md-3">
                                        <label className="form-label">Current State</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col-md-3">
                                        <label className="form-label">Home City</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col-md-3">
                                        <label className="form-label">Home State</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col-md-4">
                                        <label className="form-label">Country</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ================= EMPLOYMENT DETAILS ================= */}
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                <div className="card-header bg-white fw-bold">
                                    <i className="bi bi-briefcase-fill text-warning me-2"></i>
                                    Employment Details
                                </div>

                                <div className="card-body row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Department *</label>
                                        <select className="form-select" required>
                                            <option value="">Select Department</option>
                                            <option>Teaching</option>
                                            <option>Non-Teaching</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Post Applied For</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Previous Employer</label>
                                        <input type="text" className="form-control" placeholder="Write N/A if not applicable" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Designation</label>
                                        <input type="text" className="form-control" placeholder="Write N/A if not applicable" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Current Employer</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Notice Period</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Key Skills</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Qualifications *</label>
                                        <input type="text" className="form-control" required />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Total Experience</label>
                                        <input type="text" className="form-control" placeholder="Fresher / Years" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ================= SALARY DETAILS ================= */}
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                <div className="card-header bg-white fw-bold">
                                    <i className="bi bi-currency-rupee text-danger me-2"></i>
                                    Salary Details
                                </div>

                                <div className="card-body row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Current CTC</label>
                                        <input type="text" className="form-control" placeholder="N/A if not applicable" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Expected CTC</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ================= REFERENCE & CV ================= */}
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                <div className="card-body row g-3 align-items-center">
                                    <div className="col-md-6">
                                        <label className="form-label">Reference</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">
                                            <i className="bi bi-upload me-2"></i>Upload CV *
                                        </label>
                                        <input type="file" className="form-control" required />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ================= SUBMIT ================= */}
                        <div className="col-12 text-center mt-4">
                            <button className="btn btn-primary btn-lg px-5 shadow">
                                <i className="bi bi-send me-2"></i>Apply Now
                            </button>
                        </div>

                    </form>
                </div>
            </section>
        </>
    );
}