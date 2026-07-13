import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { blogsData } from "../src/data/blogsData.js";
import { SITE_URL, staticRoutes } from "../src/config/site.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sitemapPath = path.join(__dirname, "../public/sitemap.xml");

const staticLastmod = "2026-07-13";

function toIsoDate(dateValue) {
  const date = new Date(dateValue);
  return Number.isNaN(date.getTime()) ? staticLastmod : date.toISOString().slice(0, 10);
}

function urlEntry({ loc, lastmod = staticLastmod, changefreq = "weekly", priority = "0.8" }) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const staticEntries = staticRoutes.map((route) =>
  urlEntry({
    loc: `${SITE_URL}${route === "/" ? "/" : route}`,
    priority: route === "/" ? "1.0" : route === "/privacy-policy" ? "0.5" : "0.8",
    changefreq: route === "/privacy-policy" ? "monthly" : "weekly",
  }),
);

const blogEntries = blogsData.map((blog) =>
  urlEntry({
    loc: `${SITE_URL}/blog-details/${blog.slug}`,
    lastmod: toIsoDate(blog.date),
    changefreq: "monthly",
    priority: "0.7",
  }),
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...blogEntries].join("\n\n")}
</urlset>
`;

fs.writeFileSync(sitemapPath, sitemap);
console.log(`Generated sitemap with ${staticEntries.length + blogEntries.length} URLs at ${sitemapPath}`);
