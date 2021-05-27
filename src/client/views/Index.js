import About from "./About";
import BusinessCards from "./BusinessCards";
import Calender from "./Calender";
import Contact from "./Contact";
import FullColor from "./FullColor";
import Holiday from "./Holiday";
import Home from "./Home";
import Mailing from "./Mailing";
import Newsletter from "./Newsletter";
import RealEstate from "./RealEstate";
import Sports from "./Sports";
import Websites from "./Websites";
import SiteNewsletter from "./SiteNewsletter";

export const routes = [
  {
    path: "/",
    Component: Home,
    title: "Home",
  },
  {
    path: "/Contact",
    Component: Contact,
    title: "Contact",
  },
  {
    path: "/BusinessCards",
    Component: BusinessCards,
    title: "BusinessCards",
  },
  {
    path: "/Calender",
    Component: Calender,
    title: "Calender",
  },
  {
    path: "/FullColor",
    Component: FullColor,
    title: "FullColor",
  },
  {
    path: "/Holiday",
    Component: Holiday,
    title: "Holiday",
  },
  {
    path: "/Mailing",
    Component: Mailing, //only to pass the name to the component in app.js
    title: "Holiday",
  },
  {
    path: "/Newsletter",
    Component: Newsletter,
    title: "Newsletter",
  },
  {
    path: "/RealEstate",
    Component: RealEstate,
    title: "RealEstate",
  },
  {
    path: "/SiteNewsletter",
    Component: SiteNewsletter,
    title: "SiteNewsletter",
  },
  {
    path: "/Sports",
    Component: Sports,
    title: "Sports",
  },
  {
    path: "/Websites",
    Component: Websites,
    title: "Websites",
  },
  {
    path: "/About",
    Component: About,
    title: "About",
  },
];
