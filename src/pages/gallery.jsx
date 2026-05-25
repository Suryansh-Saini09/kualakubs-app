import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg";
import { galleryImages } from "../config/galleryImages";

const allImages = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

// Categories list
const CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "campus", label: "Campus & Infrastructure" },
  { id: "academic", label: "Academics & Labs" },
  { id: "sports", label: "Sports & Playgrounds" },
  { id: "events", label: "Events & Celebrations" },
];

export default function Gallery({ folder = "gallery" }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState({ isOpen: false, currentIndex: 0 });

  // Map images using static config matching with glob imports
  const mappedImages = galleryImages.map((img) => {
    const globKey = Object.keys(allImages).find((key) => key.endsWith(`/${img.filename}`));
    const src = globKey ? allImages[globKey] : "";
    return {
      src,
      category: img.category,
      title: img.title,
      alt: img.alt || img.title,
    };
  });

  // Filter images based on selected tag
  const filteredImages = mappedImages.filter(
    (img) => activeFilter === "all" || img.category === activeFilter
  );

  const openLightbox = (index) => {
    setLightbox({ isOpen: true, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, currentIndex: 0 });
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % filteredImages.length,
    }));
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + filteredImages.length) % filteredImages.length,
    }));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox.isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox.isOpen, lightbox.currentIndex, filteredImages]);

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

      <section className="gallery-section py-5">
        <div className="container">
          
          {/* Section Heading */}
          <div className="text-center mb-5">
            <h2 className="gallery-main-title">CAMPUS LIFE</h2>
            <p className="gallery-lead">
              Every photograph in the KWS gallery tells a story — of curiosity sparked in a science lab, friendships formed on the sports ground, confidence discovered on the annual day stage, and learning that happens in every corner of our campus every single day. It is this vibrant everyday experience that places Kualakubs World School among the best schools in Gurgaon. Browse through our gallery and see for yourself what makes KWS a truly special place to grow up.
            </p>
            <h4 className="gallery-subtitle">A Glimpse Into the KWS World</h4>
            <div className="gallery-divider mt-3"></div>
          </div>

          {/* Filter Categories Tabs */}
          <div className="gallery-filters mb-5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`gallery-filter-btn ${activeFilter === cat.id ? "active" : ""}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="row g-4 gallery-grid">
            {filteredImages.map((img, index) => (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                <div className="gallery-card" onClick={() => openLightbox(index)}>
                  <div className="gallery-img-wrapper">
                    <img src={img.src} className="gallery-img" alt={img.alt} />
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-icon">
                        <i className="bi bi-zoom-in"></i>
                      </div>
                      <span className="gallery-item-category">
                        {CATEGORIES.find((c) => c.id === img.category)?.label}
                      </span>
                      <h4 className="gallery-item-title">{img.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* If no images found */}
          {filteredImages.length === 0 && (
            <div className="text-center py-5">
              <i className="bi bi-images text-muted fs-1 mb-3 d-block"></i>
              <p className="text-muted">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <i className="bi bi-x-lg"></i>
          </button>
          
          <button className="lightbox-nav prev" onClick={prevImage}>
            <i className="bi bi-chevron-left"></i>
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[lightbox.currentIndex].src}
              className="lightbox-img"
              alt={filteredImages[lightbox.currentIndex].alt}
            />
            <div className="lightbox-caption">
              <span className="badge bg-gold mb-2 d-inline-block">
                {CATEGORIES.find((c) => c.id === filteredImages[lightbox.currentIndex].category)?.label}
              </span>
              <h5 className="mb-0 text-white">{filteredImages[lightbox.currentIndex].title}</h5>
            </div>
          </div>

          <button className="lightbox-nav next" onClick={nextImage}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      )}
    </>
  );
}