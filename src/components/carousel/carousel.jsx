import newBuildingImg from "../../assets/kualakubs_new_building_img.jpeg"
// import slide2 from "../../assets/library-869061_1280.jpg";
// import slide3 from "../../assets/building-8259184_1280.jpg";
import { Carousel } from "react-bootstrap";


export default function carousel() {
    return (
        <>
            {/* Carousel slides */}
            <Carousel controls={false} indicators={false} pause={true} className="p-0 m-0">
                <Carousel.Item>
                    <img
                        src={newBuildingImg}
                        className="d-block w-100 vh-100 object-fit-cover"
                        alt="Slide 1"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
}