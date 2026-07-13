export const SITE_URL = "https://kualakubsworldschool.com";
export const SITE_NAME = "Kualakubs World School";

export const schoolInfo = {
  name: SITE_NAME,
  alternateName: "KWS Gurugram",
  url: SITE_URL,
  logo: `${SITE_URL}/webicon.png`,
  image: `${SITE_URL}/webicon.png`,
  telephone: "+91-9996648317",
  email: "info@kualakubsworldschool.in",
  address: {
    streetAddress: "DLF New Town Heights, Sector 86",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122505",
    addressCountry: "IN",
  },
  geo: {
    latitude: 28.40178137579147,
    longitude: 76.93600097528022,
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61588552164324",
    "https://www.instagram.com/kualakubsworldschool/",
  ],
};

export const staticRoutes = [
  "/",
  "/about",
  "/contact",
  "/school-life",
  "/admissions",
  "/co-curricular",
  "/why-kualakubs",
  "/our-partnerships",
  "/our-future",
  "/co-education",
  "/gallery",
  "/our-campuses",
  "/campus-facilities",
  "/career",
  "/privacy-policy",
  "/blogs",
];

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}
