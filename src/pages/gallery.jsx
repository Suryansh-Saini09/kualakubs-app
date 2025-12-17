
import PageHeader from "../components/PageHeader";

export default function Gallery() {
  return (
    <>
      <PageHeader
        title="Gallery"
        backgroundImage="https://kualakubsworldschool.com/assets/kualakubs%20home%20image%202-DokhlqL5.png"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Gallery", active: true },
        ]}
      />
        <h4 className="text-center"><i>Coming soon.....</i></h4>
      {/* <section className="py-5">
        <div className="container">
          <div className="row g-3">

            <div className="col-6 col-md-4 col-lg-3">
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt="Gallery"
                className="img-fluid rounded"
              />
            </div>

          
            <div className="col-6 col-md-4 col-lg-3">
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt="Gallery"
                className="img-fluid rounded"
              />
            </div>

           
            <div className="col-6 col-md-4 col-lg-3">
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt="Gallery"
                className="img-fluid rounded"
              />
            </div>

            
            <div className="col-6 col-md-4 col-lg-3">
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt="Gallery"
                className="img-fluid rounded"
              />
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt="Gallery"
                className="img-fluid rounded"
              />
            </div>

           
            <div className="col-6 col-md-4 col-lg-3">
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt="Gallery"
                className="img-fluid rounded"
              />
            </div>

          
            <div className="col-6 col-md-4 col-lg-3">
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt="Gallery"
                className="img-fluid rounded"
              />
            </div>

           
            <div className="col-6 col-md-4 col-lg-3">
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt="Gallery"
                className="img-fluid rounded"
              />
            </div>

          </div>
        </div>
      </section> */}

    </>
  );
}