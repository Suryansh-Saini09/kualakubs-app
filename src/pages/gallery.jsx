
import PageHeader from "../components/PageHeader";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg"

const allImages = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

export default function Gallery({ folder = "gallery" }) {
    const images = Object.entries(allImages)
    .filter(([path]) => path.includes(`/assets/${folder}/`))
    .map(([, src]) => src);

  return (
    <>
      <PageHeader
        title="Gallery"
        backgroundImage={newBuildingImg}
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Gallery", active: true },
        ]}
      />
        {/* <h4 className="text-center"><i>Coming soon.....</i></h4> */}
        <div className="container">
      <div className="row g-3 my-5">

        {images.map((src, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <div className="gallery-item">
              <img src={src} className="img-fluid rounded" alt={`img-${index}`} />
            </div>
          </div>
        ))}

      </div>
    </div>

    </>
  );
}