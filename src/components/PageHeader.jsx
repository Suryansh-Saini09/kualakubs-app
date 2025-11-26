import { Link } from "react-router-dom";

const PageHeader = ({ title, backgroundImage, breadcrumb }) => {
  return (
    <>
      {/* Banner Section */}
      <div
        className="container-fluid header-container d-flex position-relative"
        style={{
          background: `url(${backgroundImage}) center / cover no-repeat`,
        }}
      >
        <div
          className="round-top-right bg-white d-none p-4 d-lg-block position-absolute bottom-0 start-0"
          style={{ width: "35%" }}
        >
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none">
                  Home
                </Link>
              </li>
            </ol>
          </nav>

          <h1 className="text-dark-emphasis">{title}</h1>
        </div>
      </div>

      {/* Breadcrumb below banner */}
      <div className="mt-3 d-flex justify-content-center">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            {breadcrumb.map((item, index) => (
              <li
                key={index}
                className={`breadcrumb-item ${item.active ? "active" : ""}`}
                aria-current={item.active ? "page" : undefined}
              >
                {item.link ? (
                  <Link to={item.link} className="text-decoration-none">
                    {item.label}
                  </Link>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </>
  );
};

export default PageHeader;
