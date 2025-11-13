// src/routes.js
import {lazy, createElement } from  "react";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Contect = lazy(() => import("../pages/contact"));
const SchoolLife = lazy(() => import("../pages/schoollife"));
// ... repeat for other pages

const routes = [
  { path: "/", element: createElement(Home) },
  { path: "/about", element: createElement(About)},
  { path: "/contact", element: createElement(Contect)},
  { path: "/school-life", element: createElement(SchoolLife)},
  // ... add more routes here
];

export default routes;