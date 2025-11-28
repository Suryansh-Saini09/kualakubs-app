import Components from "../components/manage.js";
import * as Links from "../config/links.js";
import Example from "../components/navbar/offcanvas.jsx";

export default function Home() {

    const galleryItems = [
        {
            img: "https://www.westminster.org.uk/wp-content/uploads/2025/03/Yard-scaled.jpg",
            text: "ABOUT KUALAKUBS",
            link: "/about",
        },
        {
            img: "https://www.westminster.org.uk/wp-content/uploads/2025/03/Greaze-2025-EH-81-scaled.jpg",
            text: "ADMISSIONS",
            link: "/admissions",
        },
        {
            img: "https://www.westminster.org.uk/wp-content/uploads/2025/02/MicaelaKarina_WestminsterSchool-385.jpg",
            text: "ACADEMIC LIFE",
            link: "/campus-facilities",
        },
        {
            img: "https://www.westminster.org.uk/wp-content/uploads/2025/02/IMG_1086-v2-scaled.jpg",
            text: "SCHOOL LIFE",
            link: "/school-life",
        },
        {
            img: "https://www.westminster.org.uk/wp-content/uploads/2024/10/GEORGINA01889-scaled.jpg",
            text: "CO-CURRICULUM",
            link: "#",
        },
        {
            img: "https://www.westminster.org.uk/wp-content/uploads/2024/11/IMG_20240709_202243-1-scaled-e1731671780116.jpg",
            text: "PARTNERSHIPS",
            link: "#",
        },
    ];
    return (
        <>
            <main>
                <div className="container-fluid position-relative p-0">
                    <Components.Carousel />
                    <Components.Overlay.Overlayheader headerlinks={Links.overlayheaderlink} />
                    <Components.Overlay.Overlaymiddleheading />
                    <div className="bottom-strip position-absolute d-flex justify-content-center">
                        <a href="/co-education" className="mt-2 mb-2 m-md-2 m-sm-1">Co-Education and Pre-Prep from 2026 &#8594;</a>
                    </div>
                </div>
                { /* Dividersection */}
                <div className="divider container-fluid d-flex justify-content-center align-items-center p-3 p-sm-1 p-md-2" id="slidedown" >
                    A new-age school built on timeless values nurturing intellect, creativity, and character in the heart of Gurugram.
                </div>

                <Components.Contentlayout.AboutContentLayout />

                { /** <Components.Videobox /> */}

                <Components.Contentlayout.LatestNewsSection />
                <div className="container " style={{ width: "75%" }} >
                    <Components.Cardslider />
                </div>

                <Components.Gallery.GalleryWithImg/>
                <Components.Gallery.Gallery
                 galleryItems={galleryItems}
                 h={"DISCOVER MORE"}
                 p={"Find out about life at KualaKubs School, both inside and outside the classroom"} />
            </main>
        </>
    );
}