import { Link } from "react-router-dom";
import Components from "../components/manage.js";
import * as Links from "../config/links.js";
import PageHeader from "../components/PageHeader.jsx";


// school life page

export default function SchoolLife() {

    console.log(Components.Overlay);
    console.log("Navbar:", Components.Navbar);
    console.log("Gallery:", Components.Gallery);
    console.log("ContactBox:", Components.ContactBox);
    console.log("Footer:", Components.Footer);


    const galleryItems = [
        {
            img: "https://www.westminster.org.uk/wp-content/uploads/2025/01/27NovemberAccidentalDeathofanAnarchistimages1105-2048x1370.jpg",
            text: "WATCH KUALAKUBS",
            link: "#",
        },
        {
            img: "https://www.westminster.org.uk/wp-content/uploads/2025/03/IMG_5424-2048x1365.jpg",
            text: "PUPIL WELFARE",
            link: "#",
        },
        {
            img: "https://www.westminster.org.uk/wp-content/uploads/2025/03/580A3848-2048x1365.jpg",
            text: "THE SIXTH FORM",
            link: "#",
        },
        {
            img: "https://www.westminster.org.uk/wp-content/uploads/2022/11/GWL_4116_gwl-scaled-e1669392893306.jpg",
            text: "THE ABBEY",
            link: "#",
        },
        {
            img: "https://www.westminster.org.uk/wp-content/uploads/2024/10/GEORGINA01889-2048x1365.jpg",
            text: "CO-CURRICULUM",
            link: "#",
        },
        {
            img: "https://www.westminster.org.uk/wp-content/uploads/2025/01/MicaelaKarina_WestminsterSchool-202-e1741696569873.jpg",
            text: "BOAR",
            link: "#",
        },
    ];

    return (

        <>


            <PageHeader
                title="School Life"
                backgroundImage="https://www.westminster.org.uk/wp-content/uploads/2025/02/IMG_1086-v2-scaled.jpg"
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "School Life", active: true }
                ]}
            />
            {/* Co-Education */}

            <div className="container-fluid mt-3 py-5" style={{ backgroundColor: "var(--accent-text-color)" }}>

                <div className="container d-flex flex-column justify-content-center" style={{ color: "var(--accent-bg-color)" }}>

                    <p>Westminster offers a vibrant and holistic education, where pupils are challenged and engaged in a range
                        of intellectual, social, ethical and philosophical ways. While academic and cultural attainments are
                        highly prized, we are fully committed to nurturing each pupil’s moral, emotional and physical wellbeing.
                        Our goal is to prepare our pupils for fulfilling private and public lives wherever and however they go
                        on to exercise their strengths on leaving the School.</p>
                </div>
            </div>

            {/* Our History */}
            <div className="container-fluid py-5">
                <h3 className="my-2 text-dark-emphasis">
                    <center>OUR HISTORY</center>
                </h3>
                <div className="content-layout text-warning-emphasis">

                    <p>Westminster is an ancient boarding and day school with a unique sense of place. It is, in fact, the only
                        long-established school to remain on its original site in the centre of London. The School’s origins can be
                        traced to a charity school established by the Benedictine monks of Westminster Abbey. Its continuous existence
                        is certain from the early fourteenth century. After the dissolution of the monasteries in 1540, Henry VIII
                        personally ensured the School’s survival by statute. Elizabeth I, confirmed royal patronage in 1560 and is
                        celebrated as the School’s Foundress.</p>
                    <p>For several hundred years the School continued to be joined with Westminster Abbey, forming one collegiate
                        foundation, until the 1868 Public Schools Act established the school as an independent body. The School still
                        enjoys a close relationship with the Abbey and the Dean of Westminster is an ex officio member of the School’s
                        Governing Body.</p>
                    <p>In 1943 the School expanded its educational scope by forming Westminster Under School, educating boys from the
                        age of 7. Initially both sections of the School shared a site, until 1951 when the Under School secured its own
                        premises. Then in 1973 the School expanded its scope once again, admitting girls as full members of the school
                        at 16+. Today the School proudly educates boys and girls in the Sixth Form and approximately 70 girls join the
                        school each year.</p>
                    <Link to={'/'}><button className="btn border rounded-0 border-dark-subtle text-warning-emphasis custom-button-effect">Archives
                        &amp; Collections →</button></Link>
                </div>
            </div>

            {/* Gallery */}
            <Components.Gallery.Gallery galleryItems={galleryItems} h={"DISCOVER MORE"} p={"Find out more about School Life at Westminster"} />

            <Components.ContactBox />
            <Components.Footer footerLinks={Links.footerLinks} />

        </>
    );
}