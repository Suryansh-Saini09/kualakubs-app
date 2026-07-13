// components/SEO.jsx
import { Helmet } from "react-helmet-async";
import { absoluteUrl, schoolInfo, SITE_NAME, SITE_URL } from "../config/site";

const SEO = ({
  title = "Default Title",
  description = "Default description",
  keywords = "",
  url,
  image = "/webicon.png",
  schemaMarkup = null,
  noindex = false,
}) => {
  const currentUrl = url || (typeof window !== "undefined" ? window.location.href : SITE_URL);
  const absoluteImage = absoluteUrl(image);

  const schoolSchema = {
    "@context": "https://schema.org",
    "@type": ["School", "EducationalOrganization"],
    "@id": `${SITE_URL}/#school`,
    name: schoolInfo.name,
    alternateName: schoolInfo.alternateName,
    url: schoolInfo.url,
    logo: schoolInfo.logo,
    image: schoolInfo.image,
    telephone: schoolInfo.telephone,
    email: schoolInfo.email,
    address: {
      "@type": "PostalAddress",
      ...schoolInfo.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...schoolInfo.geo,
    },
    areaServed: ["Gurugram", "New Gurgaon", "Sector 86 Gurugram"],
    sameAs: schoolInfo.sameAs,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#school`,
    },
  };

  const finalSchema = schemaMarkup
    ? [schoolSchema, websiteSchema, ...(Array.isArray(schemaMarkup) ? schemaMarkup : [schemaMarkup])]
    : [schoolSchema, websiteSchema];

  // Normalize the canonical URL to prevent trailing slash duplicate content
  const canonicalUrl = (() => {
    try {
      // Replace localhost during prerendering with production domain
      const processedUrl = currentUrl
        .replace(/https?:\/\/localhost:\d+/i, SITE_URL)
        .replace(/https?:\/\/127\.0\.0\.1:\d+/i, SITE_URL);

      const parsedUrl = new URL(processedUrl);
      // We strip the trailing slash to maintain clean URLs as our canonical source
      if (parsedUrl.pathname !== "/" && parsedUrl.pathname.endsWith("/")) {
        parsedUrl.pathname = parsedUrl.pathname.slice(0, -1);
      }
      
      return parsedUrl.toString();
    } catch {
      return url;
    }
  })();

  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />

      {/* Open Graph (for social sharing) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* JSON-LD Structured Data Schema */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
