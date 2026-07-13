import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg";
import SEO from "../components/SEO";
import { blogsData } from "../data/blogsData";
import { absoluteUrl, SITE_NAME, SITE_URL } from "../config/site";

function toIsoDate(dateValue) {
  const date = new Date(dateValue);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString().slice(0, 10);
}

export default function BlogDetails() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  const blogData = blogsData.find((blog) => blog.slug === slug || blog.id === slug);

  if (!blogData) {
    return <Navigate to="/blogs" replace />;
  }

  const blogUrl = `${SITE_URL}/blog-details/${blogData.slug}`;
  const blogImage = absoluteUrl(blogData.imageUrl);
  const publishedDate = toIsoDate(blogData.date);
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: blogData.title.trim(),
      description: blogData.summary,
      image: blogImage,
      datePublished: publishedDate,
      dateModified: publishedDate,
      author: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      publisher: {
        "@id": `${SITE_URL}/#school`,
      },
      mainEntityOfPage: blogUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blogs",
          item: `${SITE_URL}/blogs`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: blogData.title.trim(),
          item: blogUrl,
        },
      ],
    },
  ];

  if (blogData.faq?.length) {
    schemaMarkup.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: blogData.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return (
    <>
      <SEO
        title={`${blogData.title} | Kualakubs World School`}
        description={blogData.summary}
        url={blogUrl}
        image={blogData.imageUrl}
        schemaMarkup={schemaMarkup}
      />
      <PageHeader
        title="Blog Details"
        backgroundImage={newBuildingImg}
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Blogs", link: "/blogs" },
          { label: blogData.title, active: true },
        ]}
      />

      <section className="py-5" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              
              {/* Back Button */}
              <Link to="/blogs" className="btn btn-link text-decoration-none p-0 mb-4 d-inline-flex align-items-center" style={{ color: "var(--accent-bg-color)", fontWeight: "600" }}>
                <i className="bi bi-arrow-left me-2"></i> Back to Blogs
              </Link>

              {/* Blog Title */}
              <h1 className="fw-bold mb-4" style={{ color: "var(--accent-bg-color)", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
                {blogData.title}
              </h1>

              {/* Blog Meta */}
              <div className="d-flex align-items-center mb-4 text-muted small">
                <div className="me-4 d-flex align-items-center">
                  <i className="bi bi-calendar-event me-2" style={{ color: "#b3925c" }}></i>
                  {blogData.date}
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-person me-2" style={{ color: "#b3925c" }}></i>
                  {blogData.author}
                </div>
              </div>

              {/* Blog Content */}
              <div 
                className="blog-content" 
                style={{ color: "var(--text-color)", lineHeight: "1.8", fontSize: "1.1rem" }}
                dangerouslySetInnerHTML={{ __html: blogData.content }}
              >
              </div>

              {/* FAQ Section */}
              {blogData.faq && blogData.faq.length > 0 && (
                <div className="mt-5 pt-4 border-top">
                  <div className="mb-4">
                    <h2 className="fw-bold" style={{ color: "var(--accent-bg-color)", fontSize: "clamp(1.8rem, 3vw, 2.2rem)" }}>
                      Frequently Asked Questions
                    </h2>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      {blogData.faq.map((item, index) => (
                        <div className="faq-accordion-item" key={index}>
                          <div 
                            className="faq-accordion-header" 
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                          >
                            <h3 className="faq-accordion-title">{item.question}</h3>
                            <div className="faq-accordion-icon">
                              <i className={`bi ${openFaq === index ? 'bi-x-lg' : 'bi-plus-lg'}`}></i>
                            </div>
                          </div>
                          {openFaq === index && (
                            <div className="faq-accordion-body">
                              <p className="mb-0">{item.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
