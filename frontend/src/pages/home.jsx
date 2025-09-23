import Components from "../components/manage.js";
import * as Links from "../config/links.js";

export default function Home() {

    const galleryItems = [
        {
            img: "https://www.westminster.org.uk/wp-content/uploads/2025/03/Yard-scaled.jpg",
            text: "ABOUT KUALACUBS",
            link: "#",
        },
        {
            img: "https://www.westminster.org.uk/wp-content/uploads/2025/03/Greaze-2025-EH-81-scaled.jpg",
            text: "ADMISSIONS",
            link: "#",
        },
        {
            img: "https://www.westminster.org.uk/wp-content/uploads/2025/02/MicaelaKarina_WestminsterSchool-385.jpg",
            text: "ACADEMIC LIFE",
            link: "#",
        },
        {
            img: "https://www.westminster.org.uk/wp-content/uploads/2025/02/IMG_1086-v2-scaled.jpg",
            text: "SCHOOL LIFE",
            link: "#",
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
                <Components.Navbar />
                <div className="container-fluid position-relative p-0">
                    <Components.Carousel />
                    <Components.Overlay.Overlayheader headerlinks={Links.overlayheaderlink} />
                    <Components.Overlay.Overlaymiddleheading />
                    <div className="bottom-strip position-absolute d-flex justify-content-center">
                        <a href="/co-education" className="mt-2 mb-2 m-md-2 m-sm-1">Co-Education and Pre-Prep from 2026 &#8594;</a>
                    </div>
                </div>
                { /* Divider section */}
                <div className="divider container-fluid d-flex justify-content-center align-items-center p-3 p-sm-1 p-md-2" id="slidedown" >
                    A progressive school on an ancient site in the heart of the world's most vibrant city
                </div>

                <Components.Contentlayout.AboutContentLayout />

                <Components.Videobox />

                <Components.Contentlayout.LatestNewsSection />
                <div className="container " style={{ width: "75%" }} >
                    <Components.Cardslider />
                </div>
                <Components.Gallery
                 galleryItems={galleryItems}
                 h={"DISCOVER MORE"}
                 p={"Find out about life at Westminster School, both inside and outside the classroom"} />
                <Components.ContactBox />
                <Components.Footer footerLinks={Links.footerLinks} />
            </main>
        </>
    );
}