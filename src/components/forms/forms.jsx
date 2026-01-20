export default function EnquireForm() {

      const handleSubmit = async (e) => {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const payload = new FormData();
            
            // api key
            payload.append("api_key", "school@3534dfjh3245dfgjhgdfjgh!dfgjhk89452kdskjg");
            
            for(let [key, value] of formData.entries()){
                payload.append(key, value);
            }
            console.log(payload);
            // const success = await SubmitEnquiry(payload);

            // if (success) {
            //    form.reset();
            //  }
        };


        async function SubmitEnquiry(payload) {
            
        };
    return (

    
        <>
            <form className="modal-body row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label className="form-label">Name *</label>
                    <input type="text" className="form-control" required />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Applicant Father Name *</label>
                    <input type="text" className="form-control" required />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Contact *</label>
                    <input type="tel" className="form-control" required />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Email *</label>
                    <input type="email" className="form-control" required />
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