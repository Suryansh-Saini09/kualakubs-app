import Navbar from "../components/navbar/Navbar";
import * as Overlay from "../components/overlay-items/overlay";
import * as Links from "../config/links.js";

export default function About() {
    return (
        <>
        <Navbar/>
        <Overlay.Overlayheader headerlinks={Links.overlayheaderlink}/>
        <h1 className="text-center">about page</h1>
        </>
    );
}