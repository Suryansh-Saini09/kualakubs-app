import "./gallery.css";

export default function Gallery({ galleryItems, h, p}) {
    return (
        <>
            {/* Gallery */}
            <div className="album py-5">
                <h5 className="text-center">{h}</h5>
                <p className="text-center">
                    {p}
                    Find out more about School Life at Kualakubs
                </p>

                <div className="container mt-4" style={{ width: "75%" }}>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {galleryItems.map((item, index) => (
                            <div className="col" key={index}>
                                <div className="card shadow position-relative gallery-card-bg rounded-0">
                                    <Link to={item.link}>
                                        <img
                                            src={item.img}
                                            className="img-fluid object-fit-cover h-100 w-100"
                                            alt={item.text}
                                        />
                                        <span className="gallery-img-text position-absolute">
                                            {item.text}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}