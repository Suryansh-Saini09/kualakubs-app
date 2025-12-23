export default function EnquireForm() {
    return (

        <>
            <form className="modal-body row g-3">
                <div className="col-md-6">
                    <label className="form-label">Name *</label>
                    <input type="text" className="form-control" required />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Email *</label>
                    <input type="email" className="form-control" required />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Contact *</label>
                    <input type="tel" className="form-control" required />
                </div>

                <div className="col-md-6">
                    <label className="form-label">City *</label>
                    <input type="text" className="form-control" required />
                </div>

                <div className="col-md-12">
                    <label className="form-label">Class Applying For *</label>
                    <select className="form-select" required>
                        <option value="">Select</option>
                        <option>Pre Nursery</option>
                        <option>Nursery</option>
                        <option>LKG</option>
                        <option>UKG</option>
                        {[...Array(12)].map((_, i) => (
                            <option key={i}>Grade {i + 1}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" required />
                        <label className="form-check-label">
                            I agree to receive information regarding my submitted enquiry on Kualakubs World School*
                        </label>
                    </div>
                </div>
            </form>
        </>
    );
}