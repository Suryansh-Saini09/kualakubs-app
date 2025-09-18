import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Carousel from "../components/carousel/carousel";
import * as Overlay from "../components/overlay-items/overlay";
import Cardslider from "../components/card-slider/cardslider"
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
                <h1 className="text-center">Home page</h1>
                <div className="container " style={{ width: "75%" }} >
                <Cardslider/>
                </div>
                <Footer footerLinks={Links.footerLinks} />
            </main>
        </>
    );
}