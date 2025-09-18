import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Carousel from "../components/carousel/carousel";
import * as Overlay from "../components/overlay-items/overlay";
import Cardslider from "../components/card-slider/cardslider";
import ContactBox from "../components/contect-box/contectbox";
import Videobox from "../components/video-box/videobox";
import * as Contentlayout from "../components/content-layout/contentlayout"
// import links 
import * as Links from "../config/links.js";

export default function Home() {
    return (
        <>
            <main>
                <Navbar />
                <div className="container-fluid position-relative p-0">
                    <Carousel />
                    <Overlay.Overlayheader headerlinks={Links.overlayheaderlink} />
                    <Overlay.Overlaymiddleheading />
                    <div className="bottom-strip position-absolute d-flex justify-content-center">
                        <a href="/co-education" className="mt-2 mb-2 m-md-2 m-sm-1">Co-Education and Pre-Prep from 2026 &#8594</a>
                    </div>
                </div>
                { /* Divider section */}
                <div className="divider container-fluid d-flex justify-content-center align-items-center p-3 p-sm-1 p-md-2" id="slidedown" >
                    A progressive school on an ancient site in the heart of the world's most vibrant city
                </div>

                <Contentlayout.AboutContentLayout/>
            
                <Videobox />
                <div className="container " style={{ width: "75%" }} >
                    <Cardslider />
                </div>
                <ContactBox />
                <Footer footerLinks={Links.footerLinks} />
            </main>
        </>
    );
}