// src/components/CardCarousel.jsx
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const CardCarousel = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3, // show 3 cards at once
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };
    return (
        <div className="container my-5 p-0 mx-0">
            <Carousel
                responsive={responsive}
                infinite={true}
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={false}
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {/* Card 1 */}
                <div className="card m-2 position-relative rounded-0 border-0">
                    <a href="#">
                        <img
                            src="https://www.westminster.org.uk/wp-content/uploads/2024/01/Girl-microscope-2-scaled.jpg"
                            className="card-img-top rounded-0 " style={{ height: "250px" }}
                            alt="Card 2"
                        />
                    </a>
                    <h6 className="position-absolute top-0 p-2 m-0 opacity-75" style={{ backgroundColor: "var(--accent-text-color)" }}>Co-Education</h6>
                    <div className="card-body position-absolute bottom-0 opacity-75 w-100"
                        style={{ backgroundColor: "var(--accent-bg-color)" }}>
                        <p className="card-text text-center text-white">Co-Education and Pre-Prep</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card m-2 position-relative rounded-0 border-0">
                    <a href="#">
                        <img
                            src="https://www.westminster.org.uk/wp-content/uploads/2025/06/250522-Library-03-scaled.jpg"
                            className="card-img-top rounded-0 " style={{ height: "250px" }}
                            alt="Card 2"
                        />
                    </a>
                    <h6 className="position-absolute top-0 p-2 m-0 opacity-75" style={{ backgroundColor: "var(--accent-text-color)" }}>Our Future</h6>
                    <div className="card-body position-absolute bottom-0 opacity-75 w-100"
                        style={{ backgroundColor: "var(--accent-bg-color)" }}>
                        <p className="card-text text-center text-white">Building for the Future</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card m-2 position-relative rounded-0 border-0">
                    <a href="#">
                        <img
                            src="https://www.westminster.org.uk/wp-content/uploads/2025/03/Greaze-2025-EH-81-scaled.jpg"
                            className="card-img-top rounded-0 " style={{ height: "250px" }}
                            alt="Card 2"
                        />
                    </a>
                    <h6 className="position-absolute top-0 p-2 m-0 opacity-75" style={{ backgroundColor: "var(--accent-text-color)" }}>Admission</h6>
                    <div className="card-body position-absolute bottom-0 opacity-75 w-100"
                        style={{ backgroundColor: "var(--accent-bg-color)" }}>
                        <p className="card-text text-center text-white">Admissions</p>
                    </div>
                </div>

            </Carousel>
        </div>
    );
};

export default CardCarousel;
