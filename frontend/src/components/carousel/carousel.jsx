import slide1 from "../../assets/college-5757815_1280.jpg";
import slide2 from "../../assets/library-869061_1280.jpg";
import slide3 from "../../assets/building-8259184_1280.jpg";
import { Carousel } from "react-bootstrap";


export default function carousel() {
    return (
        <>
            {/* Carousel slides */}
            <Carousel controls={false} indicators={false} fade interval={4000} pause={false} className="p-0 m-0">
                <Carousel.Item>
                    <img
                        src={slide1}
                        className="d-block w-100 vh-100 object-fit-cover"
                        alt="Slide 1"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src={slide2}
                        className="d-block w-100 vh-100 object-fit-cover"
                        alt="Slide 2"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src={slide3}
                        className="d-block w-100 vh-100 object-fit-cover"
                        alt="Slide 3"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
}