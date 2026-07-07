import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg";
import SEO from "../components/SEO";
import { blogsData } from "../data/blogsData";

export default function Blogs() {
  const blogs = blogsData;

  return (
    <>
      <SEO
        title="Our Blogs | Kualakubs World School"
        description="Read the latest news, updates, and educational insights from Kualakubs World School."
      />
      <PageHeader
        title="Our Blogs"
        backgroundImage={newBuildingImg}
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Blogs", active: true },
        ]}
      />

      <section className="py-5" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "var(--accent-bg-color)", fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>Latest Insights & Updates</h2>
            <div className="mx-auto mt-3" style={{ width: "60px", height: "4px", backgroundColor: "#b3925c", borderRadius: "2px" }}></div>
            <p className="text-muted mt-4 mx-auto" style={{ maxWidth: "800px", fontSize: "1.1rem", lineHeight: "1.6" }}>
              Explore our collection of articles, insights, and updates about education, child development, and life at Kualakubs World School. Stay informed and inspired with our latest stories.
            </p>
          </div>

          <div className="row g-4">
            {blogs.map((blog) => (
              <div className="col-md-6 col-lg-4" key={blog.id}>
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: "16px", overflow: "hidden", transition: "transform 0.3s ease" }}>
                  <img src={blog.imageUrl} className="card-img-top p-2" alt={blog.title} style={{ height: "240px", objectFit: "contain", backgroundColor: "#f8f9fa" }} />
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="text-muted small mb-2 d-flex align-items-center">
                      <i className="bi bi-calendar-event me-2" style={{ color: "#b3925c" }}></i>
                      {blog.date}
                    </div>
                    <h4 className="card-title fw-bold mb-3" style={{ color: "var(--accent-bg-color)" }}>{blog.title}</h4>
                    <p className="card-text text-muted mb-4 flex-grow-1">{blog.summary}</p>
                    <Link to={`/blog-details/${blog.slug}`} className="btn mt-auto" style={{ backgroundColor: "var(--accent-bg-color)", color: "white", borderRadius: "8px", padding: "10px 20px", fontWeight: "600" }}>
                      Read More <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
