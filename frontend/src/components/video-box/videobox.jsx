export default function Videobox() {
    return (
        <>
            { /* Video section */}
            <div className="container-fluid d-flex justify-content-center align-items-center my-5 p-0">
                <div className="ratio ratio-16x9" style={{ width: "75%" }}>
                    <iframe src="https://www.youtube-nocookie.com/embed/EfNyyZ4f1vU?si=3QPipMtTnS56wGAR&amp;start=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                </div>
            </div>
        </>
    );
}