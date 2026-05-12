// components/SEO.jsx
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Default Title",
  description = "Default description",
  keywords = "react, website",
  url = window.location.href,
  image = "/default-image.png",
  schemaMarkup = null,
}) => {
  // Default Educational Organization Schema for Kualakubs World School
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Kualakubs World School",
    "url": "https://kualakubsworldschool.com",
    "logo": "https://kualakubsworldschool.com/webicon.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    },
    "telephone": "+91-9996648317",
    "sameAs": [
      "https://www.facebook.com/kualakubsworldschool",
      "https://www.instagram.com/kualakubsworldschool"
    ]
  };

  const finalSchema = schemaMarkup || defaultSchema;

  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph (for social sharing) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* JSON-LD Structured Data Schema */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
