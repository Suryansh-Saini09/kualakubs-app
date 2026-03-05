import Components from "../components/manage.js";
import * as Links from "../config/links.js";
import CoCurriculum from "../assets/childs_playing.png";
import Schoolife from "../assets/classroom_activity.png";
import Partnership from "../assets/partnership_image.png";
import Acadmiclife from "../assets/adacimiclife_image.png";
import Admissions from "../assets/Admission_image.png";
import Building from "../assets/latest_news_KK.jpg"

export default function Home() {

    const galleryItems = [
        {
            img: Building, 
            text: "ABOUT KUALAKUBS",
            link: "/about",
        },
        {
            img: Admissions,
            text: "ADMISSIONS",
            link: "/admissions",
        },
        {
            img: Acadmiclife,
            text: "ACADEMIC LIFE",
            link: "/campus-facilities",
        },
        {
            img: Schoolife,
            text: "SCHOOL LIFE",
            link: "/school-life",
        },
        {
            img: CoCurriculum,
            text: "CO-CURRICULUM",
            link: "/Co-Curricular",
        },
        {
            img: Partnership,
            text: "PARTNERSHIPS",
            link: "our-partnerships",
        },
    ];
    return (
        <>
        { /* Main section  */}
            <main>
                <Components.Overlay.HomePopup />
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
                    A new-age school built on timeless values nurturing intellect, creativity, and character in the heart of DLF New Town Heights,Sector 86, Gurugram.
                </div>

                <Components.Contentlayout.AboutContentLayout />

                { /** <Components.Videobox /> */}

                {/* <Components.Contentlayout.LatestNewsSection /> */}
                {/* <div className="container py-2 my-2">
                    <div className="scroll-wrapper bg-primary text-white py-2 rounded">
                        <p className="scroll-text m-0">
                            Latest updates: A new formal CBSE school is coming soon, and admissions
                            will open for the academic year 2026–27, from Playgroup to Grade 12.
                            For more details, please contact us at +91-9996648317
                        </p>
                    </div>
                </div> */}
                <div
                    className="d-flex align-items-center"
                    style={{ backgroundColor: "#e2dccc", color: "#192d45", maxWidth: "100%" }}
                >
                    <h4 className="me-3 p-2 mb-0 fw-semibold" style={{ whiteSpace: "nowrap" }}>Latest News:</h4>
                    <marquee width="100%" className="p-2" direction="left" height="50px" style={{ color: "#192d45" }}>
                        🎓 Kualakubs World School Welcomes You! Admissions Open with Limited Period Inaugural Concessions for Early Registrations.
                    </marquee>
                </div>




                <div className="container " style={{ width: "75%" }} >
                    <Components.Cardslider />
                </div>

                {/* <Components.Gallery.GalleryWithImg/> */}
                <Components.Gallery.Gallery
                    galleryItems={galleryItems}
                    h={"DISCOVER MORE"}
                    p={"Find out about life at KualaKubs School, both inside and outside the classroom"} />
            </main>
        </>
    );
}