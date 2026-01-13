import React, { useState } from "react";

export default function CareerForm() {

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const contact = formData.get("contact");
        const cv = formData.get("cv");

        // ===== VALIDATIONS =====
        if (!/^\d{10}$/.test(contact)) {
            alert("📞 Contact number must be exactly 10 digits");
            return;
        }

        if (!cv || cv.type !== "application/pdf") {
            alert("📄 CV must be uploaded in PDF format only");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                "https://school.hachetech.com/API/tp/careers",
                {
                    method: "POST",
                    headers: {
                        "x-api-key": "school@3534dfjh3245dfgjhgdfjgh!dfgjhk89452kdskjg",
                        // ❗ DO NOT set Content-Type for FormData
                    },
                    body: formData,
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Submission failed");
            }

            alert("✅ Application submitted successfully!");
            form.reset();

        } catch (error) {
            console.error("Career API Error:", error);
            alert(`❌ ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form className="row g-4" onSubmit={handleSubmit}>

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
                                <input type="text" name="applicant_name" className="form-control" required />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Father Name *</label>
                                <input type="text" name="father_name" className="form-control" required />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Contact Number *</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="bi bi-telephone"></i>
                                    </span>
                                    <input type="tel" name="contact" className="form-control" required />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Email</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="bi bi-envelope"></i>
                                    </span>
                                    <input type="email" name="email" className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Gender *</label>
                                <select name="gender" className="form-select" required>
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
                                <input type="text" name="address" className="form-control" />
                            </div>

                            <div className="col-md-3">
                                <label className="form-label">Current City</label>
                                <input type="text" name="current_city" className="form-control" />
                            </div>

                            <div className="col-md-3">
                                <label className="form-label">Current State</label>
                                <input type="text" name="current_state" className="form-control" />
                            </div>

                            <div className="col-md-3">
                                <label className="form-label">Home City</label>
                                <input type="text" name="home_city" className="form-control" />
                            </div>

                            <div className="col-md-3">
                                <label className="form-label">Home State</label>
                                <input type="text" name="home_state" className="form-control" />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Country</label>
                                <input type="text" name="country" className="form-control" />
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
                                <select name="department" className="form-select" required>
                                    <option value="">Select Department</option>
                                    <option>Teaching</option>
                                    <option>Non-Teaching</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Post Applied For</label>
                                <input type="text" name="post_applied" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Previous Employer</label>
                                <input type="text" name="previous_employer" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Designation</label>
                                <input type="text" name="designation" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Current Employer</label>
                                <input type="text" name="current_employer" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Notice Period</label>
                                <input type="text" name="notice_period" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Key Skills</label>
                                <input type="text" name="skills" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Qualifications *</label>
                                <input type="text" name="qualification" className="form-control" required />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Total Experience</label>
                                <input type="text" name="experience" className="form-control" />
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
                                <input type="text" name="current_ctc" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Expected CTC</label>
                                <input type="text" name="expected_ctc" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= REFERENCE & CV ================= */}
                <div className="col-12">
                    <div className="card shadow-sm border-0">
                        <div className="card-body row g-3">
                            <div className="col-md-6">
                                <label className="form-label">Reference</label>
                                <input type="text" name="reference" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    <i className="bi bi-upload me-2"></i>Upload CV *
                                </label>
                                <input type="file" name="cv" className="form-control" required />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= SUBMIT ================= */}
                <div className="col-12 text-center mt-4">
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg px-5 shadow"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Apply Now"}
                    </button>
                </div>

            </form>
        </>
    );
}
