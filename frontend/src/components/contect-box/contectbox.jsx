

export default function ContactBox() {
    return (
        <>
            {/* join us section */}
            <div className="container-fluid d-flex justify-content-center align-items-center py-5"
                style={{ backgroundColor: "var(--accent-text-color)" }}>
                <div className="row w-75 text-center text-md-start">


                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="d-flex align-items-center border-bottom border-dark mb-3">
                            <span
                                className="d-inline-flex justify-content-center align-items-center border-bottom-0 border border-dark me-3"
                                style={{ width: "60px", height: "60px" }}>
                                <i className="bi bi-person-check fs-3"></i>
                            </span>
                            <h3 className="mb-0 fw-bold">JOIN US</h3>
                        </div>
                        <p className="mb-2">
                            Find out when your child is able to join the School using the personalised age checker and timeline.
                        </p>
                        <a href="#" className="text-decoration-none fw-semibold">Read More {"\u2192"}</a>
                    </div>


                    <div className="col-md-6">
                        <div className="d-flex align-items-center border-bottom border-dark mb-3">
                            <span
                                className="d-inline-flex justify-content-center align-items-center border-bottom-0 border border-dark  me-3"
                                style={{ width: "60px", height: "60px" }}>
                                <i className="bi bi-person-raised-hand fs-3"></i>
                            </span>
                            <h3 className="mb-0 fw-bold">SUPPORT US</h3>
                        </div>
                        <p className="mb-2">
                            Kualacubs School gratefully welcomes donations to support fundraising efforts across the School
                            community.
                        </p>
                        <a href="#" className="text-decoration-none fw-semibold">Read More {"\u2192"}</a>
                    </div>
                </div>
            </div>
        </>
    );
}