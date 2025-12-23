
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

            <section className="py-5">
                <div className="container">
                    <form
                        action="#"
                        method="post"
                        encType="multipart/form-data"
                        className="bg-light p-4 rounded shadow-sm"
                    >
                        <h3 className="mb-4 text-center fw-bold">Career Application Form</h3>

                        <div className="row g-4">

                            {/* Applicant Name */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Applicant Name</label>
                                    <input type="text" name="applicant_name" className="form-control" required />
                                </div>
                            </div>

                            {/* Father Name */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Father Name</label>
                                    <input type="text" name="father_name" className="form-control" required />
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Contact Number</label>
                                    <input type="tel" name="contact_no" className="form-control" required />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Email</label>
                                    <input type="email" name="email" className="form-control" />
                                </div>
                            </div>

                            {/* Gender */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Gender</label>
                                    <select name="gender" className="form-control" required>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Transgender">Transgender</option>
                                    </select>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Address</label>
                                    <input type="text" name="address" className="form-control" required />
                                </div>
                            </div>

                            {/* City */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Current City</label>
                                    <input type="text" name="current_city" className="form-control"  />
                                </div>
                            </div>

                            {/* State */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Current State</label>
                                    <input type="text" name="current_state" className="form-control"  />
                                </div>
                            </div>

                            {/* Home City */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Home City</label>
                                    <input type="text" name="home_city" className="form-control"  />
                                </div>
                            </div>

                            {/* Home State */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Home State</label>
                                    <input type="text" name="home_state" className="form-control"  />
                                </div>
                            </div>


                            {/* Country */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Country</label>
                                    <input type="text" name="country" className="form-control" />
                                </div>
                            </div>

                            {/* Department */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Department</label>
                                    <select name="department" className="form-control" required>
                                        <option value="">Select Department</option>
                                        <option value="Teaching">Teaching</option>
                                        <option value="Non-Teaching">Non-Teaching</option>
                                    </select>
                                </div>
                            </div>

                            {/* Previous Employer */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Previous Employer</label>
                                    <input type="text" name="previous_employer" className="form-control" required
                                        placeholder="Write N/A if not aplicable" />
                                </div>
                            </div>

                            {/* Designation */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Designation</label>
                                    <input type="text" name="designation" className="form-control" required
                                        placeholder="Write N/A if not aplicable" />

                                </div>
                            </div>

                            {/* Key Skills */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Key Skills</label>
                                    <input type="text" name="key_skills" className="form-control" />
                                </div>
                            </div>

                            {/* Current Employer */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Current Employer</label>
                                    <input type="text" name="current_employer" className="form-control" />
                                    {/* <select name="current_employer" className="form-control" required>
                                        <option value="">Select</option>
                                        <option value="Corporate Job">Corporate Job</option>
                                        <option value="Public Sector/Govt. Job">Govt Job</option>
                                        <option value="Banking Job">Banking Job</option>
                                        <option value="Defence Job">Defence Job</option>
                                        <option value="Pursuing Higher Studies">Higher Studies</option>
                                        <option value="Self Employed">Self Employed</option>
                                        <option value="Freelancer">Freelancer</option>
                                        <option value="not-working">Not Working</option>
                                    </select> */}
                                </div>
                            </div>

                            {/* Notice Period */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Notice Period</label>
                                    <input type="text" name="notice_period" className="form-control"  />
                                </div>
                            </div>

                            {/* Qualification */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Qualification</label>
                                    <input type="text" name="qualification" className="form-control" required />
                                </div>
                            </div>

                            {/* Total Experience */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Total Experience</label>
                                    <input type="text" name="total_experience" className="form-control" 
                                        placeholder="Write fresher if not working" />

                                </div>
                            </div>

                            {/* Expected CTC */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Expected CTC</label>
                                    <input type="text" name="expected_ctc" className="form-control"  />
                                </div>
                            </div>

                            {/* Current CTC */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Current CTC</label>
                                    <input type="text" name="current_ctc" className="form-control" 
                                        placeholder="Write N/A if not applicable" />
                                </div>
                            </div>
                            {/* Post Applied for */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mb-1">Post Applied for</label>
                                    <input type="text" name="post_applied_for" className="form-control" 
                                    />
                                </div>
                            </div>

                            {/* Reference */}
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="mb-1">Reference</label>
                                    <input
                                        type="text"
                                        name="reference"
                                        className="form-control"
                                    />
                                </div>
                            </div>
 
                            {/* CV Upload */}
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="mb-1">Upload CV</label>
                                    <input type="file" name="cv" className="form-control" required />
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="col-md-12 text-center mt-3">
                                <button type="submit" className="btn btn-primary px-4 py-2">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}