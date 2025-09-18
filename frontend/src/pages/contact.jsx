import Navbar from "../components/navbar/Navbar";
import * as Links from "../config/links.js";
import * as Overlay from "../components/overlay-items/overlay";

export default function Home() {
    return (
        <>
        <Navbar/>
        <Overlay.Overlayheader headerlinks={Links.overlayheaderlink}/>
        <h1 className="text-center">Contact page</h1>
        </>
    );
}