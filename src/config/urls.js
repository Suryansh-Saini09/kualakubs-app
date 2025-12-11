// src/routes.js
import {lazy, createElement } from  "react";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Contect = lazy(() => import("../pages/contact"));
const SchoolLife = lazy(() => import("../pages/schoollife"));
const CoCurricular = lazy(() => import("../pages/CoCurricular"));
const Admissions = lazy(() => import("../pages/admissionPage"));
const WhyChoose = lazy(() => import("../pages/whyChoose"));
const OurPartnerships = lazy(() => import("../pages/partnerships"));
const OurFuture = lazy(() => import("../pages/ourfuture"));
const CoEducation = lazy(() => import("../pages/coeducation"));
//const FacultyPage = lazy(() => import("../pages/facultyPage"));
//const Principal = lazy(() => import("../pages/principal"));
//const LifeSkills = lazy(() => import("../pages/lifeskillspage"));
const Campus_Facilities = lazy(() => import("../pages/Campus_Facilities"));
const Career = lazy(() => import("../pages/career"));
// ... repeat for other pages

const routes = [
  { path: "/", element: createElement(Home) },
  { path: "/about", element: createElement(About)},
  { path: "/contact", element: createElement(Contect)},
  { path: "/school-life", element: createElement(SchoolLife)},
  { path: "/admissions", element: createElement(Admissions)},
   { path: "/Co-Curricular", element: createElement(CoCurricular)},
  { path: "/why-kualakubs", element: createElement(WhyChoose) },
  { path: "/our-partnerships", element: createElement(OurPartnerships) },
  { path: "/our-future", element: createElement(OurFuture) },
  { path: "/co-education", element: createElement(CoEducation) },
 // { path: "/faculty", element: createElement(FacultyPage) },
  //{ path: "/principal", element: createElement(Principal) },
  //{path: "/life-skills", element: createElement(LifeSkills)},
  {path: "/campus-facilities", element: createElement(Campus_Facilities)},
  {path: "/career", element: createElement(Career)},
  // ... add more routes here
];

export default routes;