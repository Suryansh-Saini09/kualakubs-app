
import logo from "../../assets/navbarlogo.png"; // adjust path to your logo
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="container-fluid">
      <nav className="navbar bg-transparent fixed-top">
        <div className="container-fluid">
          {/* Navbar Toggle Button */}
          <button
            className="navbar-toggler float-start opacity-50"
            data-bs-theme="light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas Menu */}
          <div
            className="offcanvas offcanvas-start w-100 pt-5 ps-lg-5 ps-md-3 ps-sm-1"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ backgroundColor: "var(--accent-bg-color)" }}
            
          >
            {/* Offcanvas Header */}
            <div className="offcanvas-header ms-md-3 ms-sm-2">
              
              {/* Offcanvas Header
               <span className="btn me-2 border rounded-0 custom-button-effect">
                TERM DATES {"\u2192"}
              </span> */}
             

              <button
                type="button"
                className="btn-close"
                style={{ width: "2rem", height: "2rem", backgroundSize: "2rem" }}
                data-bs-theme="dark"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            {/* Offcanvas Body */}
            <div className="offcanvas-body position-relative">
              {/* Logo */}
              <img src={logo} className="img-fluid custom-img" alt="Logo" />

              {/* Nav Links */}
              <ul className="navbar-nav justify-content-end d-inline-block pe-5 ps-md-3 ps-sm-2">
                <li className="nav-item">
                  <a className="nav-link custom-nav-link-color" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link custom-nav-link-color" href="/about">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link custom-nav-link-color"
                    href="/admissions">
                    ADMISSIONS
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link custom-nav-link-color" href="/campus-facilities">
                   Campus facilities
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link custom-nav-link-color" href="/why-kualakubs">
                    Why kualakubs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link custom-nav-link-color" href="/contact">
                    Contact US
                  </a>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="mt-5 ps-5 ps-md-3 ps-sm-2">
                <a href="https://www.facebook.com/profile.php?id=61588552164324" target="_blank" rel="noopener noreferrer" className="bi-color">
                  <i className="bi bi-facebook fs-5 me-2"></i>
                </a>
                <a href="#" className="bi-color">
                  <i className="bi bi-twitter-x fs-5 me-2"></i>
                </a>
                <a href="#" className="bi-color">
                  <i className="bi bi-instagram fs-5 me-2"></i>
                </a>
                <a href="#" className="bi-color">
                  <i className="bi bi-linkedin fs-5 me-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
