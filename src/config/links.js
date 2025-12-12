export const overlayheaderlink = [
    { pathname: "Why Kualakubs?", path: "/why-kualakubs" },
    { pathname: "Admissions", path: "/admissions" },
    { pathname: "Our Campus", path: "/campus-facilities" },
    { pathname: "Contact Us", path: "/contact" },
    //{ pathname: "About Us", path: "/about" },

    // { pathname: "School Life", path: "/school-life" },
    // { pathname: "Life Skills", path: "/life-skills" },

    // { pathname: "Our Faculty", path: "/faculty" },
    // { pathname: "Principal’s Message", path: "/principal" },
];

export const footerLinks = [
    {
        category: "ABOUT US",
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
            // { path: "/about", pathname: "About us" },
            // { path: "/about", pathname: "About us" },
        ],
    },
    {
        category: "CONTACT US",
        links: [
              { path: "/contact", pathname: "contact" },
            // { path: "/about", pathname: "About us" },
            // { path: "/about", pathname: "About us" },
            // { path: "/about", pathname: "About us" },
        ],
    },
    // ... more categories with links
];

export default {
    overlayheaderlink,
    footerLinks,
};
