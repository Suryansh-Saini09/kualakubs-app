export const overlayheaderlink = [
    { pathname: "Why Kualakubs?", path: "/why-kualakubs" },
    { pathname: "Admissions", path: "/admissions" },
    { pathname: "Our Campuses", path: "/our-campuses" },
    { pathname: "Contact Us", path: "/contact" },
    //{ pathname: "About Us", path: "/about" },

    // { pathname: "School Life", path: "/school-life" },
    // { pathname: "Life Skills", path: "/life-skills" },

    // { pathname: "Our Faculty", path: "/faculty" },
    // { pathname: "Principal’s Message", path: "/principal" },
];

export const footerLinks = [
    {
        category: "ABOUT",
        links: [
             { path: "/about", pathname: "About us" },
             { path: "/admissions", pathname: "Admissions" },
            // { path: "/about", pathname: "About us" },
            // { path: "/about", pathname: "About us" },
        ],
    },
  
 
    {
        category: "QUICK LINKS",
        links: [
             { path: "/campus-facilities", pathname: "Campus facilities" },
             { path: "/why-kualakubs", pathname: "Why kualakubs" },
            { path: "/career", pathname: "Careers" },
            { path: "https://kualakubsgurugram.in/", pathname: "Kualakubs Pre School" },
            { path: "/privacy-policy", pathname: "Privacy Policy" }
        ],
    },
    {
        category: "CONTACT",
        links: [
              { path: "/contact", pathname: "Contact Us" },
             { path: null, pathname: "+91 - 9996648317" },
             { path: null, pathname: "info@kualakubsworldschool.in" },
            // { path: "/about", pathname: "About us" },
        ],
    },
    // ... more categories with links
];

export default {
    overlayheaderlink,
    footerLinks,
};
