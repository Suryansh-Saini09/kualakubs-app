import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../dist');

// Define all routes to pre-render
const routesToPrerender = [
    '/',
    '/about',
    '/contact',
    '/school-life',
    '/admissions',
    '/Co-Curricular',
    '/why-kualakubs',
    '/our-partnerships',
    '/our-future',
    '/co-education',
    '/gallery',
    '/our-campuses',
    '/campus-facilities',
    '/career',
    '/privacy-policy',
    '/blogs',
    // Pre-rendering blog slugs
    '/blog-details/how-to-choose-the-best-school-near-you-in-gurugram',
    '/blog-details/how-safe-schools-improve-your-childs-learning',
    '/blog-details/affordable-schools-in-gurgaon-with-quality-cbse-education'
];

async function prerender() {
    console.log('Starting pre-rendering process...');

    // Read the original template into memory so we can serve it without it getting overwritten by the `/` route
    const originalIndexHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

    // 1. Start a local server to serve the built static files
    const app = express();
    // Serve static files from the dist directory, fallback to the original index.html for client-side routing
    app.use(express.static(distPath, { index: false })); // don't serve index.html automatically
    app.use((req, res) => {
        res.send(originalIndexHtml);
    });

    const server = app.listen(3000, async () => {
        console.log('Local server running on http://localhost:3000');

        // 2. Launch Puppeteer
        const browser = await puppeteer.launch({
            headless: 'new', // Use the new headless mode
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const template = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

        // 3. Loop through all routes and pre-render
        for (const route of routesToPrerender) {
            console.log(`Pre-rendering ${route}...`);
            const page = await browser.newPage();

            // Intercept and disable external resources that don't affect layout
            await page.setRequestInterception(true);
            page.on('request', (req) => {
                const resourceType = req.resourceType();
                if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
                    req.continue(); // Let styles and images load if they matter for rendering, but actually for SEO HTML we just need the DOM
                } else {
                    req.continue();
                }
            });

            // Go to the local URL
            await page.goto(`http://localhost:3000${route}`, {
                waitUntil: 'networkidle0', // Wait until network activity settles
                timeout: 30000
            });

            // Wait for React to render the app (specifically the root element's children)
            await page.waitForSelector('#root > *', { timeout: 10000 }).catch(() => {
                console.log(`Timeout waiting for #root content on ${route}, continuing anyway...`);
            });

            // Extract the fully rendered HTML
            let html = await page.content();

            // Note: We might want to remove the injected puppeteer scripts if any, but page.content() is usually clean enough

            // 4. Save the HTML to the correct location in dist/
            const routePath = route === '/' ? '/index.html' : `${route}.html`;
            const filePath = path.join(distPath, routePath);

            // Ensure directory exists
            const dir = path.dirname(filePath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            fs.writeFileSync(filePath, html);
            console.log(`Saved ${filePath}`);

            await page.close();
        }

        console.log('Pre-rendering complete.');

        await browser.close();
        server.close();
    });
}

prerender().catch(err => {
    console.error('Error during pre-rendering:', err);
    process.exit(1);
});
