"use client";
//import Carousel from "./components/Carousel";
import "./globals.css";
// import "./js/custom.js";
// import "./js/jquery.min.js";
// import "./js/wow.min.js";
// import "./js/owl.carousel.min.js";
// import "./js/jquery.cookie.min.js";
// import "./js/bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'jquery';
//import 'popper.js';
import MyCarousel from './components/MySlickCarousel';
import Services from "./components/Services";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import FurryFriend from "./components/FurryFriend";
import FeaturedProducts from "./components/FeaturedProducts";
import Blog from "./components/Blog";
import './styles/responsive.css';
//import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JS


export default function HomePage() {
  return (
    <div>
      <MyCarousel/>
      <Services/>
      <FurryFriend/>
      <FeaturedProducts/>
      <Blog/>
    </div>
  );
}
