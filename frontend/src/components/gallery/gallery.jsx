import "./gallery.css";

export default function Gallery() {
    return (
        <>
            {/* album section */}
            <div className="album py-5">
                <h5 className="text-center">
                    Discover More
                </h5>
                <p className="text-center">
                    Find out about life at Westminster School, both inside and outside the
                    classroom
                </p>

                <div className="container mt-4" style={{ width: "75%" }}>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow position-relative gallery-card-bg rounded-0">
                                <a href="#">
                                    <img
                                        src="https://www.westminster.org.uk/wp-content/uploads/2025/03/Yard-scaled.jpg"
                                        className="img-fluid object-fit-cover h-100 w-100"
                                        alt=""
                                    />
                                    <span className="gallery-img-text position-absolute">
                                        ABOUT KUALACUBS
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow position-relative gallery-card-bg rounded-0">
                                <a href="#">
                                    <img
                                        src="https://www.westminster.org.uk/wp-content/uploads/2025/03/Greaze-2025-EH-81-scaled.jpg"
                                        className="img-fluid object-fit-cover h-100 w-100"
                                        alt=""
                                    />
                                    <span className="gallery-img-text position-absolute">
                                        ADMISSIONS
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow position-relative gallery-card-bg rounded-0">
                                <a href="#">
                                    <img
                                        src="https://www.westminster.org.uk/wp-content/uploads/2025/02/MicaelaKarina_WestminsterSchool-385.jpg"
                                        className="img-fluid object-fit-cover h-100 w-100"
                                        alt=""
                                    />
                                    <span className="gallery-img-text position-absolute">
                                        ACADEMIC LIFE
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow position-relative gallery-card-bg rounded-0">
                                <a href="#">
                                    <img
                                        src="https://www.westminster.org.uk/wp-content/uploads/2025/02/IMG_1086-v2-scaled.jpg"
                                        className="img-fluid object-fit-cover h-100 w-100"
                                        alt=""
                                    />
                                    <span className="gallery-img-text position-absolute">
                                        SCHOOL LIFE
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow position-relative gallery-card-bg rounded-0">
                                <a href="#">
                                    <img
                                        src="https://www.westminster.org.uk/wp-content/uploads/2024/10/GEORGINA01889-scaled.jpg"
                                        className="img-fluid object-fit-cover h-100 w-100"
                                        alt=""
                                    />
                                    <span className="gallery-img-text position-absolute">
                                        CO-CURRICULUM
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow position-relative gallery-card-bg rounded-0">
                                <a href="#">
                                    <img
                                        src="https://www.westminster.org.uk/wp-content/uploads/2024/11/IMG_20240709_202243-1-scaled-e1731671780116.jpg"
                                        className="img-fluid object-fit-cover h-100 w-100"
                                        alt=""
                                    />
                                    <span className="gallery-img-text position-absolute">
                                        PARTNERSHIPS
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}